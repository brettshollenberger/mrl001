angular
    .module('app')
    .controller('loginController', [
        '$rootScope',
        '$scope',
        '$location',
        'authService',
        '$timeout',
        function($rootScope, $scope, $location, Auth, $timeout) {

            $scope.isProcessing = false;

            if ($rootScope.credentials) {

                $scope.email = $rootScope.credentials.email;
                $scope.password = $rootScope.credentials.password;

            }

            $scope.login = function() {

                $scope.isProcessing = true;

                Auth.login($scope.email, $scope.password).then(function(response) {
                    var loginSuccess = response;

                    if (!loginSuccess) {
                        $scope.message = 'Login failed, please try again';
                        $scope.isProcessing = true;
                    } else {
                        $location.url('/dashboard');
                        $scope.isProcessing = false;
                    }

                }, function(err) {
                    $scope.isProcessing = false;
                });

            };

        }
    ]);
