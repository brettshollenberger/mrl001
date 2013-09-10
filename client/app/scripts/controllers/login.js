angular
    .module('app')
    .controller('loginController', [
        '$rootScope',
        '$scope',
        '$location',
        'authService',
        '$timeout',
        '$routeParams',
        function($rootScope, $scope, $location, Auth, $timeout, $routeParams) {
            
            // we use this to set credentials for demo on initial page screen
            $rootScope.demoCredentials = {
                admin: {
                    email: 'bwalsh@marlinfinance.com',
                    password: 'bwalsh'
                },
                salesRep: {
                    email: 'jdelong@marlinfinance.com',
                    password: 'jdelong'
                },
                vendorRep: {
                    email: 'vrep@gmail.com',
                    password: 'vrep'
                }
            };
            
            
            /**
            * This allows us to pass credentials into the controller to prefill the login form fields
            * This is useful for demos and dev. 
            *
            */
            if ($routeParams.demo) {
                $scope.email = $rootScope.demoCredentials[$routeParams.demo].email;
                $scope.password = $rootScope.demoCredentials[$routeParams.demo].password;
            }

            /**
            * Runs on success, useful for redirecting etc.
            *
            */
            function loginSuccessCallback() {
                // clear any demo params as needed
                $location.search('demo', null);
                // go to daahboard
                $location.url('/dashboard');
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
