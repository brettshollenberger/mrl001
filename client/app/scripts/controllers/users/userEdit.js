angular
  .module('app')
  .controller('userEditController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'authService',
    'userService',
    'vendorService',
    function($rootScope, $scope, $location, $routeParams, Auth, User, Vendor) {
       
        Auth.canUserDoAction('edit-user');
       
        // empty user object
        $scope.user = {};
        var user = {};
    
      
        // filepicker settings
        // @todo move to global config
        filepicker.setKey('AJNc7mfA3SCxs3gRjg7EBz');
        
        
        $scope.allVendors = Vendor.getAllWithoutSalesReps();
        console.log($scope.allVendors);
      
        // pick logo function
        // simple callback assigans to user logo when complete
        $scope.pickImage = function() {
            filepicker.pick(function(FPFile){
              console.log(FPFile.url);
              if(!$scope.user.avatar) {
                  $scope.user.avatar = {};
              }
              $scope.user.avatar.original = FPFile.url;
              $scope.$apply();
            });  
        };
      
        // utility function to go back to the user list
        // @todo this function is used in many places, find a way to streamline it
        $scope.cancel = function() {
            $location.url('/dashboard/users');
        };
        
        // get user ID for edit pages
        var userId = $routeParams.id;
        $scope.formAction = 'Add';
        
        
        // get and store the user 
        if(userId) {
            // get the user
            $scope.user = User.getById(userId);
            console.log($scope.user);
            $scope.formAction = 'Update';
            
            // get vendors for this user
            // @todo this will now save when we udate the vendors, so we need to fix this! 
            $scope.user.vendors = Vendor.getManyWhereIn($scope.user.vendorIds);
            
        }
    
        // activated when user clicks the save button
        $scope.save = function() {
           
            if(!userId) {
                
                // create new item
                User.add($scope.user);
                
            } else {
            
                // update existing item 
                //User.updateById($scope.user.id, $scope.user);
                User.update($scope.user);
                
            }
            
            $location.url('/dashboard/users');
            
        };
        
        
        $scope.addVendor = function(id) {
            console.log('Vendor id: ' + id);
            User.addVendorToSalesRep(id, $scope.user.id);
            $scope.user.vendors = Vendor.getManyWhereIn($scope.user.vendorIds);
            $scope.vendorId = '';
            $scope.allVendors = Vendor.getAllWithoutSalesReps();
        };
        
        
        $scope.removeVendor = function(id) {
            User.removeVendorFromSalesRep(id, $scope.user.id);  
            $scope.user.vendors = Vendor.getManyWhereIn($scope.user.vendorIds);
            $scope.allVendors = Vendor.getAllWithoutSalesReps();
        };
        
        
        
        $scope.tabs = ['Basic information', 'Vendors', 'Password'];
        
        /**
        * Tab functions. 
        * @todo make into a direct
        *
        */
        $scope.activeTab = 0;
        
        // used for active class
        $scope.isActiveTab = function(id) {
            return $scope.activeTab == id ? true : false;  
        };
        
        // used to set active tab
        $scope.changeTab = function(tab) {
            
            console.log(tab);
            
            if(!$scope.user.id) return false;
            
            $scope.activeTab = tab;
        };
        
       
    }
  ])
;
