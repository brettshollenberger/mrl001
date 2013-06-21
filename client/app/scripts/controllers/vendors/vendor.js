angular
  .module('app')
  .controller('vendorController', [
    '$rootScope',
    '$scope',
    '$location',
    'authService',
    'vendorService',
    'userService',
    function($rootScope, $scope, $location, Auth, Vendor, User) {
        
        Auth.minPermissionLevel(1);
        
        // Gets all the vendors
        $scope.vendors = Vendor.getAll();
        
        _.each($scope.vendors, function(item) {
            item.salesRep = User.getOneWhereIn('vendorIds', item.id);
        });
        
        // sends user to url based on item id
        $scope.editItem = function(itemId) {
            $location.url('dashboard/vendors/' + itemId);
        };
        
        // deletes an item and then gets the list again to reflect the deleted item.
        $scope.deleteItem = function(item) {
            Vendor.remove(item);
            $scope.vendors = Vendor.getAll();
        };

    }
  ])
;
