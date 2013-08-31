/**
* Controller to manage updating password!
*
* 
*
*/
angular
    .module('app')
    .controller('passwordChangeController', [
        '$rootScope',
        '$scope',
        '$location',
        '$routeParams',
        'authService',
        'userService',
        function($rootScope, $scope, $location, $routeParams, Auth, User) {

            // message for the user, will show validation errors
            $scope.changeMessage = null;
            
            // was the password changed successfully? 
            $scope.changestatus = null;
            
            // save original form, used to "reset" the form on success
            // @note when converting to Anglar 1.2, we can user the form.$setPristine() method 
            $scope.originalForm = $scope.passwordForm;

            // private helper to set / reset our variables
            var resetVars = function() {
                $scope.new_password = null;
                $scope.current_password = null;
                $scope.confirm_password = null;
            };
            
            var resetForm = function() {
                $scope.passwordForm = angular.copy($scope.originalForm);
            }

            // call once to set initially
            resetVars();

            // function called on form submit
            $scope.changePassword = function() {

                // gather data for API. @note we only send new password, not confirm
                var data = {
                    _id: $scope.user._id,
                    new_password: $scope.new_password,
                    current_password: $scope.current_password
                };

                User.updatePassword(data).then(function(response) {

                    resetVars();
                    resetForm();
                    
                    $scope.changestatus = true;
                    $scope.changeMessage = response;
                    
                    
                    

                }, function(err) {

                    resetForm();
                    resetVars();
                    
                    $scope.changestatus = false;
                    $scope.changeMessage = err.data.message;

                });

            };

        }
    ]);
