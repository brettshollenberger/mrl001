angular
  .module('app')
  .controller('applicationToolController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'quoteService',
    'programService',
    'vendorService',
    'applicationService',
    function($rootScope, $scope, $location, $routeParams, Quote, Program, Vendor, Application) {
       
        // empty application object
        $scope.application = {};
        
        if($rootScope.fromQuote !== true) $location.url('/tools/quoter');
        
        // utility function to go back to the quote list
        // @todo this function is used in many places, find a way to streamline it
        $scope.cancel = function() {
            $location.url('/tools/quoter');
        };
        
        // get quote ID for edit pages
        var applicationId = $routeParams.id;
        
        // get and store the quote 
        if(applicationId) {
            
            // get the quote
            $scope.application = Application.getById(applicationId);
            if(!$scope.application) $location.path('/tools/quoter');

        }
        
        
        $scope.saveApplication = function() {
            Application.update($scope.application);
            $scope.selectContact = true;
        };
        
         $scope.save = function() {
            
            $scope.application.leasee.contactPerson.contactMethod = $scope.contactMethod;
            Application.update($scope.application);
            
            $rootScope.fromQuote = false;
            
            $location.url('/');
        };
        
        
    }
  ])
;
