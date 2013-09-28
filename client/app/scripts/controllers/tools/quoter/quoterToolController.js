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

            // define empty objects
            $scope.quote = {};
            $scope.vendor = {};
            $scope.vendors = [];

            // define variables
            $scope.didQuote = false;
            $scope.buttonText = 'Get Quote';
            $scope.canEdit = true;

            // define local store for quote
            var quote = {};

            // Get quoter version
            // @todo this should be replaced with "version directive"
            $scope.version = $rootScope.version;

            // get route params
            var quoteId = $routeParams.id;
            var vendorId = $routeParams.vendor_id;

            // if we don't already have a quote, we need to figure out the vendor
            // lets do some logic to figure this out 
            if (!quoteId && vendorId) {

                // we have a vendor, so hide the dropdown
                // if its not valid, we'll handle that later
                $scope.haveVendor = true;

                // get the vendor from API
                getInitialVendor(vendorId);

            } else if (!quoteId) {

                // gets all the vendors so our user can select one!
                getAllVendors();

            }

            // get a single vendor at set as global vendor

            function getInitialVendor(getId) {
                Vendor.getById(getId).then(function(response) {

                    $scope.vendor = response;

                    // not a valid vendor, redirect
                    if (!$scope.vendor) redirectAndClear();

                }, function() {

                    // API returned failure, redirect
                    redirectAndClear();
                });
            }


            // redirect and clear the params using .search() method

            function redirectAndClear() {
                $location.url('tools/quoter');
                $location.search('vendor_id', null);
            }


            // get all the vendors from API
            // @todo this sould only get vendors with quoter enabled

            function getAllVendors() {
                // get the vendors
                Vendor.getAll().then(function(response) {
                    $scope.vendors = response;
                });
            }


            // utility function to go back to the quote list
            // @todo this function is used in many places, find a way to streamline it
            $scope.cancel = function() {
                $location.url('/tools/quoter');
            };


            // get and store the quote 
            if (quoteId) {
                // get the quote
                Quote.getById(quoteId).then(function(response) {

                    $scope.quote = response;
                    $scope.quoteCost = $scope.quote.totalCost;

                    // get the vendor
                    Vendor.getById($scope.quote.vendorId).then(function(response) {
                        $scope.vendor = response;
                        filterQuotesByTotalCost();
                    });

                }, function(error) {
                    $location.path('/tools/quoter');
                });

                $scope.didQuote = true;
                $scope.buttonText = 'Re-calculate Quote';

                // we create a preview link, removing the print param if present
                $scope.permalink = $location.absUrl().replace('/print', '');

                if ($rootScope.previewQuote !== true) $scope.canEdit = false;

                // get programs from VendorID    

            } else {

                //List states in dropdown menu
                // get states list and set default
                $scope.quote.company = {};
                $scope.quote.company.businessAddress = {};
                $scope.states = States.states();
                $scope.quote.company.businessAddress.state = $scope.states[0].abbreviation;

                if ($rootScope.previewQuote === true) $rootScope.previewQuote = false;
            }

            function filterQuotesByTotalCost() {

                Program.getAllForVendorId($scope.vendor._id).then(function(response) {
                    $scope.quote.programs = response;

                    // ensures that custom displayNames appear if set
                    _.merge($scope.quote.programs, $scope.vendor.programs);

                    $scope.filteredPrograms = $scope.quote.programs;

                    _.each($scope.filteredPrograms, function(program, $programIdx) {

                        if (!program.rateSheet) program.rateSheet = {};

                        _.each(program.rateSheet.buyoutOptions, function(buyOutOption, $buyOutIdx) {

                            _.each(buyOutOption.costs, function(cost, $costIdx) {

                                if (cost && $scope.quoteCost <= cost.min || cost && $scope.quoteCost >= cost.max) {
                                    $scope.filteredPrograms[$programIdx].rateSheet.buyoutOptions[$buyOutIdx].costs.splice($costIdx, 1);


                                }

                            });

                            if ($scope.filteredPrograms[$programIdx].rateSheet.buyoutOptions[$buyOutIdx].costs.length === 0) {
                                $scope.filteredPrograms[$programIdx].rateSheet.buyoutOptions.splice($buyOutIdx, 1);
                            }

                        });
                    });

                });

            }

            $scope.generateQuote = function() {
                
                $scope.quote.totalCost = $scope.quoteCost;
                $scope.didQuote = false;

                // save the custom Field with the quote 
                if ($scope.vendor && $scope.vendor.customField.enabled) {

                    $scope.quote.customField = {};

                    $scope.quote.customField.displayName = $scope.vendor.customField.displayName;
                }

                if (!quoteId) {

                    $rootScope.previewQuote = true;
                    $scope.quote.vendorId = $scope.vendor._id;

                    // create new item
                    Quote.add($scope.quote).then(function(response) {
                        var newQuote = response;
                        $location.url('/tools/quoter/' + newQuote._id);
                    });

                } else {

                    filterQuotesByTotalCost();

                    Quote.update($scope.quote).then(function(response) {
                        // do nothing, successful update
                    });

                }
            };

            $scope.getTermLength = function(item) {

                //$scope.maxTerms = Program[]  
            };


            $scope.chooseRate = function(termOption, termLength, termPeriod, periodPayment) {

                // build the application for us to save
                var application = {
                    quoteId: $scope.quote._id,
                    vendorId: $scope.vendor._id,
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

                    $location.url('/tools/application/' + newApplication._id);

                });

            };


            /**
             * Download as pdf
             *
             */

            // default message
            $scope.downloadMessage = "Download as a PDF";

            // function called on ng-click
            $scope.download = function(id) {

                id = id || quoteId;

                $scope.downloading = true;
                $scope.downloadMessage = "Please wait while we generate your PDF";

                // once the generation is complete, we'll put the download url 
                // here. Users can click to download the file
                $scope.downloadURL = null;

                //window.open('api/v1/quote/'+quoteId+'/download');

                Quote.generatePDF(quoteId).then(function(response) {
                    $scope.downloading = false;
                    $scope.downloadMessage = "Download Complete";

                    if (response.status === 'OK') {
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
                else if ( !! window.ActiveXObject && document.execCommand) {
                    var _window = window.open(fileURL, '_self');
                    //_window.document.close();
                    //_window.document.execCommand('SaveAs', true, fileName || fileURL);
                    //_window.close();
                }
            }
        }
    ]);
