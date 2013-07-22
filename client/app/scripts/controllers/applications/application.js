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
        
        Auth.canUserDoAction('list-application');
        
        $scope.searchBusiness = '';
        $scope.searchVendor = '';
        
        // Gets all the Applications
        Application.getAll().then(function(response) {
            $scope.applications = response;
        });
        
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
            Application.getAll().then(function(response) {
                $scope.applications = response;
            });
        };

    }
  ])
;
