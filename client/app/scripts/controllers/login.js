angular
  .module('app')
  .controller('loginController', [
    '$rootScope',
    '$scope',
    '$location',
    'authService',
    function($rootScope, $scope, $location, Auth) {
        
        $scope.email = 'matt@facultycreative.com';
        $scope.password = 'scrapple';
        
        $scope.login = function() {
            
            var loginSuccess = Auth.login($scope.email, $scope.password);
            
            if(!loginSuccess) {
                $scope.message = 'Login failed, please try again';
            } else {
                $location.url('/dashboard');
            }
            
        };

    }
  ])
;
