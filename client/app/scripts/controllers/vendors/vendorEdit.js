angular
  .module('app')
  .controller('vendorEditController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'Restangular',
    function($rootScope, $scope, $location, $routeParams, Restangular) {
       
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
        
        // get and store the vendor 
        if(vendorId) {
            Restangular.one('classes/vendors', vendorId).get().then(
            function(vendor) {
                // success, store the vendor in scope
                $scope.vendor = vendor;
            }, 
            function() {
                // 404
            });
        }
    
        // activated when user clicks the save button
        $scope.save = function() {
           
            if(!vendorId) {
                // POST a new item
                Restangular.all('classes/vendors').post($scope.vendor).then(function(){
                    $location.url('/vendors');
                }); 
            } else {
                // PUT and update to existing item. 
                $scope.vendor.put().then(function(){
                    $location.url('/vendors');
                }); 
            }
            
        };
        
    }
  ])
;
