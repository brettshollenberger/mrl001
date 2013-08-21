angular
  .module('app')
  .controller('quoterToolController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'quoteService',
    'programService',
    'vendorService',
    'stateService',
    'applicationService',
    function($rootScope, $scope, $location, $routeParams, Quote, Program, Vendor, States, Application) {
       
        // empty quote object
        $scope.quote = {};
        var quote = {};
        $scope.didQuote = false;
        $scope.buttonText = 'Get Quote';
        $scope.canEdit = true; 
        
        $scope.version = $rootScope.version;
        
        
        // support getting a vendor ID from the URL, so user doesn't 
        $scope.vendor_id = $routeParams.vendor_id;

        if($scope.vendor_id) {
            Vendor.getById($scope.vendor_id).then(function(response){
                $scope.vendor = response;
                // not a valid vendor id
                if(!$scope.vendor) {
                    $location.url('tools/quoter');
                    $location.search('vendor_id', null);
                }
            });
        }
        
        // assign to the quote
        $scope.quote.vendorId = $scope.vendor_id; 
        
        //List states in dropdown menu
        // get states list and set default
        $scope.quote.company = {};
        $scope.quote.company.businessAddress = {};
        $scope.states = States.states();
        $scope.quote.company.businessAddress.state = $scope.states[0].abbreviation;
        
      
        // utility function to go back to the quote list
        // @todo this function is used in many places, find a way to streamline it
        $scope.cancel = function() {
            $location.url('/tools/quoter');
        };
        
        // get quote ID for edit pages
        var quoteId = $routeParams.id;
        
        // get and store the quote 
        if(quoteId) {
            // get the quote
            Quote.getById(quoteId).then(function(response) {
                
                console.log('wehave a quote id... its: ' + quoteId);
                
                $scope.quote = response;
                
                console.log($scope.quote);
                
                $scope.quoteCost = $scope.quote.totalCost;
                
                // get the vendor
                Vendor.getById($scope.quote.vendorId).then(function(response) {
                    $scope.vendor = response;
                    console.log($scope.vendor);
                    
                    filterQuotesByTotalCost();
                    
                    
                });
            }, function(error) {
                $location.path('/tools/quoter');
            });
            
            $scope.didQuote = true; 
            $scope.buttonText = 'Re-calculate Quote';
            
            // we create a preview link, removing the print param if present
            $scope.permalink = $location.absUrl().replace('/print', '');
            
            if($rootScope.previewQuote !== true) $scope.canEdit = false;
            
            // get programs from VendorID    
            
            
            
            //console.log($scope.vendor);
            
        } else {
            $scope.quote.status = 'Open';
            // get the vendors
            Vendor.getAll().then(function(response) {
                $scope.vendors = response;
                $scope.quote.vendorId = $scope.vendors[0]._id;
            });
            
            if($rootScope.previewQuote === true) $rootScope.previewQuote = false;
        }
        
        function filterQuotesByTotalCost() {
            
            console.log($scope.vendor.programIds);
            
            Program.getAllForVendorId($scope.vendor._id).then(function(response) {
                $scope.quote.programs = response;
                
                // ensures that custom displayNames appear if set
                _.merge($scope.quote.programs, $scope.vendor.programs);
                
                $scope.filteredPrograms = $scope.quote.programs;
                
                _.each($scope.filteredPrograms, function(program, $programIdx){
                    
                    console.log('Program...');
                    
                    _.each(program.rateSheet.buyoutOptions, function(buyOutOption, $buyOutIdx){
                        
                        _.each(buyOutOption.costs, function(cost, $costIdx){
                            
                            if(cost && $scope.quoteCost <= cost.min || cost && $scope.quoteCost >= cost.max){
                                //console.log($costIdx);
                                $scope.filteredPrograms[$programIdx].rateSheet.buyoutOptions[$buyOutIdx].costs.splice($costIdx, 1);
                            
                                
                            }
                            
                        });
                        
                        if($scope.filteredPrograms[$programIdx].rateSheet.buyoutOptions[$buyOutIdx].costs.length === 0){
                            $scope.filteredPrograms[$programIdx].rateSheet.buyoutOptions.splice($buyOutIdx, 1);  
                        }   
                        
                    });    
                });
            
            }); 
            
        }
        
                        
        $scope.generateQuote = function() {
            
            $scope.quote.totalCost = $scope.quoteCost;
            
            if(!quoteId) {
                
                $rootScope.previewQuote = true;
                
                // create new item
                Quote.add($scope.quote).then(function(response) {
                    var newQuote = response;
                    console.log(newQuote);
                    $location.url('/tools/quoter/' + newQuote._id);
                });

            } else {
                
                filterQuotesByTotalCost();
                
                Quote.update($scope.quote).then(function(response) {
                    console.log('Updated quote successfully...'); 
                });

            }
        };
        
        $scope.getTermLength = function(item) {
            
            //$scope.maxTerms = Program[]  
        };
        
        
        $scope.chooseRate = function(termOption, termLength, termPeriod, periodPayment) {
            console.log('termOption: ' + termOption);
            console.log('termLength: ' + termLength);
            console.log('termPeriod: ' + termPeriod);
            console.log('periodPayment: ' + periodPayment);
            
            // build the application for us to save
            var application = {
                status: 'Open',
                quoteId: $scope.quote._id,
                vendorId: $scope.quote.vendorId,
                quote: {
                    totalCost: $scope.quote.totalCost,
                    description: $scope.quote.description,
                    length: termLength,
                    payment: periodPayment,
                    period: termPeriod,
                    option: termOption
                },
                leasee: $scope.quote.company
            };
            
            
            $rootScope.fromQuote = true;
            
            // create new item
            Application.add(application).then(function(response) {
            
                var newApplication = response;
                
                $location.url('/tools/application/' + newApplication._id ); 

            });
                        
        };
        
        
        /**
        * Download as pdf
        *
        */
        
        // default message
        $scope.downloadMessage = "Download as a PDF";
        
        // function called on ng-click
        $scope.download = function() {
                
            $scope.downloading = true;
            $scope.downloadMessage = "Please wait while we generate your PDF";
            
            // once the generation is complete, we'll put the download url 
            // here. Users can click to download the file
            $scope.downloadURL = null;
            
            //window.open('api/v1/quote/'+quoteId+'/download');
            
            Quote.generatePDF(quoteId).then(function(response){
               $scope.downloading = false;
               $scope.downloadMessage = "Download Complete";
               
               console.log(response);
               
               if(response.status === 'OK') {
                   SaveToDisk(response.file, 'Quote');
               } else {
                   $scope.downloadMessage = "Something Went Wrong! Please Try Again Later"; 
               }
               
            });
            
        };
        
        // @see http://muaz-khan.blogspot.com/2012/10/save-files-on-disk-using-javascript-or.html
        function SaveToDisk(fileURL, fileName) {
            // for non-IE
            if (!window.ActiveXObject) {
                var save = document.createElement('a');
                save.href = fileURL;
                save.target = '_blank';
                save.download = fileName || 'unknown';
        
                var event = document.createEvent('Event');
                event.initEvent('click', true, true);
                save.dispatchEvent(event);
                (window.URL || window.webkitURL).revokeObjectURL(save.href);
            }
        
            // for IE
            else if ( !! window.ActiveXObject && document.execCommand)     {
                var _window = window.open(fileURL, '_blank');
                _window.document.close();
                _window.document.execCommand('SaveAs', true, fileName || fileURL)
                _window.close();
            }
        }
    }
  ])
;
