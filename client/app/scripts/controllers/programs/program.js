angular
  .module('app')
  .controller('programListController', [
    '$rootScope',
    '$scope',
    '$location',
    'programService',
    function($rootScope, $scope, $location, Program) {
        
        // Gets all the vendors
        $scope.programs = Program.getAll();
        
        // sends user to url based on item id
        $scope.editItem = function(itemId) {
            $location.url('dashboard/programs/' + itemId);
        };
        
        // deletes an item and then gets the list again to reflect the deleted item.
        $scope.deleteItem = function(item) {
            Program.remove(item);
            $scope.programs = Program.getAll();
        };

    }
  ])
;
