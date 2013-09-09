angular
    .module('app')
    .controller('programListController', [
        '$rootScope',
        '$scope',
        '$location',
        'authService',
        'programService',
        function($rootScope, $scope, $location, Auth, Program) {

            Auth.canUserDoAction('list-programs');

            // Gets all the vendors
            Program.getAll().then(function(response) {
                $scope.programs = response;
            });

            // sends user to url based on item id
            $scope.editItem = function(itemId) {
                $location.url('dashboard/programs/' + itemId);
            };

            // deletes an item and then gets the list again to reflect the deleted item.
            $scope.deleteItem = function(id) {
                Program.remove(id);
                Program.getAll().then(function(response) {
                    $scope.programs = response;
                });

            };

        }
    ]);
