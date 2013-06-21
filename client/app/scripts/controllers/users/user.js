angular
  .module('app')
  .controller('userListController', [
    '$rootScope',
    '$scope',
    '$location',
    'authService',
    'userService',
    'vendorService',
    function($rootScope, $scope, $location, Auth, User, Vendor) {
        
        Auth.minPermissionLevel(1);
        
        
        // gets all the users, with their vendors
        function getAllUsersWithVendors() {
            // Gets all the vendors
            $scope.users = User.getAll();
            _.each($scope.users, function(item) {
                 item.vendors = Vendor.getManyWhereIn(item.vendorIds);
            }); 
        }
        
        getAllUsersWithVendors();
        
        // sends user to url based on item id
        $scope.editItem = function(itemId) {
            $location.url('dashboard/users/' + itemId);
        };
        
        // deletes an item and then gets the list again to reflect the deleted item.
        $scope.deleteItem = function(item) {
            User.remove(item);
            getAllUsersWithVendors();
        };

    }
  ])
;
