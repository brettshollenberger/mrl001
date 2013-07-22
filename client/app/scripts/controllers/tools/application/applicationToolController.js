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
        
        // prevents end user from hitting application tool directly
        // comment out to easily test
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
            Application.getById(applicationId).then(function(response){
                $scope.application = response;
                if(!$scope.application) $location.path('/tools/quoter');
            });
            
            console.log($scope.application);
        }

        Vendor.getById($scope.application.vendorId).then(function(response){
            $scope.vendor = response;
        });
        
        $scope.saveApplication = function() {
            Application.update($scope.application);
            $scope.finished = true;
        };
        
         $scope.save = function() {
            
            
            if(!$scope.application.leasee) $scope.application.leasee = {};
            if(!$scope.application.leasee.contactPerson) $scope.application.leasee.contactPerson = {};
            
            $scope.application.leasee.contactPerson.contactMethod = $scope.contactMethod;
            Application.update($scope.application);
            
            $rootScope.fromQuote = false;
            
            $location.url('/');
        };
        
        
        $scope.message = false;
        
        $scope.needsMoreInfo = function() {
        
            console.log($scope.application);
        
            if(!$scope.application.leasee) return false;
        
            if($scope.application.leasee.soleProp === true || ($scope.application.leasee.yearsInBusiness !== '' && $scope.application.leasee.yearsInBusiness < 2)) {
                
                $scope.message = 'Please provide more information to help ensure timely processing of your applicaiton.';
                return true;
            }
            
            $scope.message = false;
            return false;
        };
        
        
    }
  ])
;
