angular
  .module('app')
  .controller('userEditController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'Restangular',
    function($rootScope, $scope, $location, $routeParams, Restangular) {
        
        // empty vendor object
        $scope.user = {};
        var user = {};
        // empty logo object, or filepicker gets mad :)
        $scope.user.icon = {};
      
        // filepicker settings
        // @todo move to global config
        filepicker.setKey('AJNc7mfA3SCxs3gRjg7EBz');
      
        // pick logo function
        // simple callback assigns to vendor logo when complete
        $scope.pickImage = function() {
            filepicker.pick(function(FPFile){
              console.log(FPFile.url);
              $scope.user.icon.original = FPFile.url;
              $scope.$apply();
            });  
        };
      
        // utility function to go back to the vendor list
        // @todo this function is used in many places, find a way to streamline it
        $scope.cancel = function() {
            $location.url('/dashboard/users');
        };
        
        // get vendor ID for edit pages
        var userId = $routeParams.id;
        
        // get and store the vendor 
        if(userId) {
            Restangular.one('users', userId).get().then(
            function(user) {
                // success, store the vendor in scope
                $scope.user = user;
            }, 
            function() {
                // 404
            });
        }
    
        // activated when user clicks the save button
        $scope.save = function() {
           
            if(!userId) {
                // POST a new item
                Restangular.all('users').post($scope.user).then(function(success){
                    $location.url('/dashboard/users');
                }, function(error) {
                    alert('Something went wrong');
                }); 
            } else {
                // PUT and update to existing item. 
                $scope.user.put().then(function(){
                    $location.url('/dashboard/users');
                }); 
            }
            
        };
        
        
        
        
        
        // First way of creating a Restangular object. Just saying the base URL
        var baseAccounts = Restangular.all('classes/vendors');
        
        // This will query classes/vendors and return a promise. As Angular supports setting promises to scope variables
        // as soon as we get the information from the server, it will be shown in our template :)
        baseAccounts.getList().then(function(vendors){
           $scope.allVendors = vendors;
        });
        
        
        $scope.addVendorToUser = function(vendor) {
            
            //$scope.user.vendors.push(vendor);
            console.log('Adding vendor, vendor object is:');
            console.log(vendor);
            
            // update the user with this vendor added to vendors array
            // there is not an endpoint to POST ie: users/id/vendors that will add to the user
            $scope.user.put({'vendors': [{"__type":"Pointer","className":"Vendors","objectId":vendor.objectId}]}).then(function(success){
            
                console.log('Adding vendor, success. Result is:');
                console.log(success);
                
            }, function(error) {
            
                console.log('Adding vendor, failed:');
                
            });
            /*

            
            Restangular.one('users', userId).post('vendors', vendor).then(
            function(result) {
                // success, store the vendor in scope
                //$scope.user = user;
                console.log('Adding vendor, success. Result is:');
                console.log(result);
            }, 
            function() {
                console.log('Adding vendor, failed:');
                // 404
            });
*/
            
            
        };
        
    }
  ])
;
