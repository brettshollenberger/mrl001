angular
  .module('app')
  .controller('vendorEditController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'vendorService',
    function($rootScope, $scope, $location, $routeParams, Vendor) {
       
        // empty vendor object
        $scope.vendor = {};
        var vendor = {};
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
        $scope.formAction = 'Add';
        
        
        // get and store the vendor 
        if(vendorId) {
            // get the vendor
            $scope.vendor = Vendor.getById(vendorId);
            console.log($scope.vendor);
            $scope.formAction = 'Update';
        }
    
        // activated when user clicks the save button
        $scope.save = function() {
           
            if(!vendorId) {
                
                // create new item
                Vendor.add($scope.vendor);
                
            } else {
            
                // update existing item 
                //Vendor.updateById($scope.vendor.id, $scope.vendor);
                Vendor.update($scope.vendor);
                
            }
            
            $location.url('/vendors');
            
        };
        
        
        
    }
  ])
;
