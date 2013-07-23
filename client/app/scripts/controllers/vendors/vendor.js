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
        
        Auth.canUserDoAction('list-vendor');
        
        // Gets all the vendors
        $scope.vendors = Vendor.getAll().then(function(response) {
            $scope.vendors = response;
            _.each($scope.vendors, function(item) {
                item.salesRep = User.getOneWhereIn('vendorIds', item._id);
            });
        });
        
        // sends user to url based on item id
        $scope.editItem = function(itemId) {
            $location.url('dashboard/vendors/' + itemId);
        };
        
        // deletes an item and then gets the list again to reflect the deleted item.
        $scope.deleteItem = function(id) {
            Vendor.remove(id);
            Vendor.getAll().then(function(response) {
                $scope.vendors = response;
            }); 
        };
        
        $scope.viewCalculator = function(itemId) {
            $location.url('tools/quoter?vendor_id=' + itemId);  
        };

    }
  ])
;
