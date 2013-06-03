angular
  .module('app')
  .controller('userListController', [
    '$rootScope',
    '$scope',
    '$location',
    'authService',
    'userService',
    function($rootScope, $scope, $location, Auth, User) {
        
        Auth.minPermissionLevel(1);
        
        // Gets all the vendors
        $scope.users = User.getAll();
        
        // sends user to url based on item id
        $scope.editItem = function(itemId) {
            $location.url('dashboard/users/' + itemId);
        };
        
        // deletes an item and then gets the list again to reflect the deleted item.
        $scope.deleteItem = function(item) {
            User.remove(item);
            $scope.users = User.getAll();
        };

    }
  ])
;
