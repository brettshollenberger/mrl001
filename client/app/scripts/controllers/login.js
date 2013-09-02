angular
    .module('app')
    .controller('loginController', [
        '$rootScope',
        '$scope',
        '$location',
        'authService',
        '$timeout',
        function($rootScope, $scope, $location, Auth, $timeout) {

            /**
            * Runs on success, useful for redirecting etc.
            *
            */
            function loginSuccessCallback() {
                $location.url('/dashboard');
            }

            /**
            * This allows us to pass credentials into the controller to prefill the login form fields
            * This is useful for demos and dev. 
            *
            */
            if ($rootScope.credentials) {

                $scope.email = $rootScope.credentials.email;
                $scope.password = $rootScope.credentials.password;

            }
            
            // used to provide a button specific activity spinner 
            // @todo eliminate this in favor of the namespaced "activity" spinners
            // @see https://github.com/ajoslin/angular-promise-tracker
            $scope.isProcessing = false;

            $scope.login = function() {

                $scope.isProcessing = true;

                Auth.login($scope.email, $scope.password).then(function(response) {
                    
                    // @todo make this more robust! 
                    var loginSuccess = response;

                    $scope.isProcessing = false;

                    if (!loginSuccess) {
                        $scope.message = 'Login failed, please try again';
                    } else {
                        loginSuccessCallback();
                    }

                }, function(err) {
                    $scope.isProcessing = false;
                });

            };

        }
    ]);
