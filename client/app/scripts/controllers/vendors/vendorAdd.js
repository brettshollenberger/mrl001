angular
  .module('app')
  .controller('vendorAddController', [
    '$rootScope',
    '$scope',
    '$location',
    'Vendor',
    function($rootScope, $scope, $location, Vendor) {
       
        // empty vendor object
        $scope.vendor = {};
        $scope.vendor.logo = {};
      
        // filepicker settings
        // @todo move to global config
        filepicker.setKey('AJNc7mfA3SCxs3gRjg7EBz');
      
        // pick logo function
        // simple callback assigns to vendor logo when complete
        $scope.pickImage = function() {
                        
            filepicker.pick(function(FPFile){
              console.log(FPFile.url);
              $scope.vendor.logo.original = FPFile.url;
              $scope.$apply();
            });  
                        
        };
      
        // utility function to go back to the vendor list
        // @todo this function is used in many places, find a way to streamline it
        $scope.cancel = function() {
            $location.url('/vendors');
        };
        
        // activated when user clicks the save button
        $scope.save = function() {
            
            // create a new vendor
            var vendor = new Vendor();
            
            // This will transfer all properties user has entered into form
            // to our new vendor. 
            // @note we could do specific assignments here, and process, trim, validate etc. as well
            angular.extend(vendor, $scope.vendor);
            
            // call the $resource $save method, which makes a POST request to our API
            vendor.$save(function(){
                
                // clear the vendor, and redirect the user
                $scope.vendor = null;
                $location.url('/vendors');
                
            });
        };
        
    }
  ])
;