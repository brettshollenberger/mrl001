angular
    .module('app')
    .controller('passwordResetController', [
        '$scope',
        'userService',
        '$http',
        function($scope, User, $http) {
            $scope.isProcessing = false;
            $scope.email = "";

            $scope.passwordReset = function() {
                $scope.isProcessing = true;

                User.find({email: $scope.email}).then(function(response) {
                    user = response;
                    if (user && user !== null && user.email) {
                        $http({
                            method: 'PUT',
                            url: '/api/v1/users/' + user._id + '/reset_password'
                        }).success(function(data) {
                            $scope.message = "An email has been sent to " + $scope.email + " containing login instructions.";
                        }).error(function(data) {
                            $scope.message = "There was an error resetting your password. Please try again.";
                        });
                    } else {
                        $scope.message = "We didn't find that email address in our system. Double check the spelling and try again";
                    }
                    $scope.isProcessing = false;
                });
            };
        }
    ]);
