angular
  .module('app')
  .controller('applicationListController', [
    '$rootScope',
    '$scope',
    '$location',
    'authService',
    'applicationService',
    function($rootScope, $scope, $location, Auth, Application) {
        
        Auth.minPermissionLevel(1);
        
        // Gets all the vendors
        $scope.applications = Application.getAll();
        console.log($scope.applications);
        
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
