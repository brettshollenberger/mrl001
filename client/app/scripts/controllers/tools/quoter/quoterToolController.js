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
    'applicationService',
    function($rootScope, $scope, $location, $routeParams, Quote, Program, Vendor, Application) {
       
        // empty quote object
        $scope.quote = {};
        var quote = {};
        $scope.didQuote = false;
        $scope.buttonText = 'Get Quote';
        $scope.canEdit = true; 
        
      
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
            $scope.quote = Quote.getById(quoteId);
            if(!$scope.quote) $location.path('/tools/quoter');
            $scope.didQuote = true; 
            $scope.buttonText = 'Re-calculate Quote';
            
            $scope.quoteCost = $scope.quote.totalCost;
            
            $scope.permalink = $location.absUrl();
            
            if($rootScope.previewQuote !== true) $scope.canEdit = false;
            
            // get the vendor
            $scope.vendor = Vendor.getById($scope.quote.vendorId);
            
            // get programs from VendorID
            $scope.quote.programs = Program.getManyByIds($scope.vendor.programIds);
            
            console.log($scope.vendor);
            
            // ensures that custom displayNames appear if set
            _.merge($scope.quote.programs, $scope.vendor.programs);
            
            
        } else {
            $scope.quote.status = 'Open';
            // get the vendors
            $scope.vendors = Vendor.getAll();
            $scope.quote.vendorId = $scope.vendors[0].id;
            
            if($rootScope.previewQuote === true) $rootScope.previewQuote = false;
            
        }
        
        
                        
        $scope.generateQuote = function() {
            
            $scope.quote.totalCost = $scope.quoteCost;
            
            if(!quoteId) {
                
                $rootScope.previewQuote = true;
                
                // create new item
                var newQuote = Quote.add($scope.quote);
                $location.url('/tools/quoter/' + newQuote.id );
                
            } else {
            
                Quote.update($scope.quote);
            }
            
        };
        
        
        
        $scope.chooseRate = function(termOption, termLength, termPeriod, periodPayment) {
            console.log('termOption: ' + termOption);
            console.log('termLength: ' + termLength);
            console.log('termPeriod: ' + termPeriod);
            console.log('periodPayment: ' + periodPayment);
            
            // build the application for us to save
            var application = {
                status: 'Open',
                quoteId: $scope.quote.id,
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
            var newApplication = Application.add(application);
            $location.url('/tools/application/' + newApplication.id );
            
            
        };
        
        
        
    }
  ])
;
