angular
  .module('app')
  .controller('vendorEditController', [
    '$rootScope',
    '$scope',
    '$location',
    'Vendor',
    '$routeParams',
    function($rootScope, $scope, $location, Vendor, $routeParams) {
       
        // empty vendor object
        $scope.vendor = {};
        // empty logo object, or filepicker gets mad :)
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
        
        // get vendor ID for edit pages
        var vendorId = $routeParams.id;
        
        // get and store the vendor 
        if(vendorId) {
            Vendor.get({vendorId: vendorId}, function(result) {
               $scope.vendor = result; 
            },
            function() {
                $location.url('/vendors');
            });
        }
        
        
        // activated when user clicks the save button
        $scope.save = function() {
            
            // create a new vendor
            var vendor = new Vendor();
            
            // This will transfer all properties user has entered into form
            // to our new vendor. 
            // @note we could do specific assignments here, and process, trim, validate etc. as well
            angular.extend(vendor, $scope.vendor);
           
            if(!vendorId) {
                // call the $resource $save method, which makes a POST request to our API
                vendor.$save(function(){
                    // clear the vendor, and redirect the user
                    $scope.vendor = null;
                    $location.url('/vendors');
                }); 
            } else {
                $scope.vendor.$update({vendorId: vendorId}, function(){
                    // clear the vendor, and redirect the user
                    $scope.vendor = null;
                    $location.url('/vendors');
                }); 
            }
            
        };
        
    }
  ])
;
