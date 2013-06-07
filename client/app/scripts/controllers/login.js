angular
  .module('app')
  .controller('loginController', [
    '$rootScope',
    '$scope',
    '$location',
    'authService',
    function($rootScope, $scope, $location, Auth) {
        
        $scope.username = 'admin';
        $scope.password = 'admin';
        
        $scope.login = function() {
            
            var loginSuccess = Auth.login($scope.username, $scope.password);
            
            if(!loginSuccess) {
                $scope.message = 'Login failed, please try again';
            } else {
                $location.url('/dashboard');
            }
            
        };

    }
  ])
;
