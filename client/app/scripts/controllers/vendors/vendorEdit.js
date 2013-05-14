angular
  .module('app')
  .controller('vendorEditController', [
    '$rootScope',
    '$scope',
    '$location',
    'Vendor',
    '$routeParams',
    function($rootScope, $scope, $location, Vendor, $routeParams) {
      
        $scope.cancel = function() {
            $location.url('/vendors');
        };
        
        // get vendor ID, and abort if not present
        var vendorId = $routeParams.id;
        if(!vendorId) $location.url('/vendors');
        
        // get and store the vendor 
        Vendor.get({vendorId: vendorId}, function(result) {
           $scope.vendor = result; 
        });
        
        // save and update
        $scope.save = function() {
            
            console.log($scope.vendor);
            
            $scope.vendor.$update({vendorId: vendorId}, function(){
                $scope.vendor = null;
                $location.url('/vendors');
            });
            
        };

    }
  ])
;
