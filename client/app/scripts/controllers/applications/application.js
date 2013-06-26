angular
  .module('app')
  .controller('applicationListController', [
    '$rootScope',
    '$scope',
    '$location',
    'authService',
    'applicationService',
    'vendorService',
    function($rootScope, $scope, $location, Auth, Application, Vendor) {
        
        Auth.minPermissionLevel(1);
        
        $scope.searchBusiness = '';
        $scope.searchVendor = '';
        
        // Gets all the Applications
        $scope.applications = Application.getAll();
        
        // For Each Application Attach a Vendor
        _.each($scope.applications, function(item) {
	        item.vendor = Vendor.getById(item.vendorId);
        });
        
        // sends user to url based on item id
        $scope.editItem = function(itemId) {
            $location.url('dashboard/applications/' + itemId);
        };
        
        // deletes an item and then gets the list again to reflect the deleted item.
        $scope.deleteItem = function(item) {
            Application.remove(item);
            $scope.applications = Application.getAll();
        };

    }
  ])
;
