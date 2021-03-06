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

            Auth.canUserDoAction('list-users');

            $scope.roleFilter = '';
            $scope.searchTerm = '';

            // Options you can set user roles
            $scope.roles = [{
                value: 'salesRep',
                label: 'Sales Rep'
            }, {
                value: 'vendorRep',
                label: 'Vendor Rep'
            }, {
                value: 'admin',
                label: 'Admin'
            }];

            $scope.getRoleFormatted = function(role) {
                role = _.where($scope.roles, function(item) {
                    return item.value === role;
                });

                return role ? role[0].label : '';
            };

            // gets all the users, with their vendors

            function getAllUsersWithVendors() {
                // Gets all the vendors
                User.getAll().then(function(response) {

                    $scope.users = response;

                    _.each($scope.users, function(item) {
                        item.vendors = Vendor.getManyWhereIn(item.vendorIds);
                    });
                });
            }

            getAllUsersWithVendors();

            // sends user to url based on item id
            $scope.editItem = function(itemId) {
                $location.url('dashboard/users/' + itemId);
            };

            // deletes an item and then gets the list again to reflect the deleted item.
            $scope.deleteItem = function(id) {
                User.remove(id);
                getAllUsersWithVendors();
            };

        }
    ]);
