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
        
        if($rootScope.credentials) {
           
            $scope.username = $rootScope.credentials.userName; 
            $scope.password = $rootScope.credentials.password; 
            
        }
        
        $scope.login = function() {
            
            var loginSuccess = Auth.login($scope.username, $scope.password);
            
            $scope.isProcessing = true;
            
            $timeout(function() {
                if(!loginSuccess) {
                    $scope.message = 'Login failed, please try again';
                    $scope.isProcessing = true;
                } else {
                    $location.url('/dashboard');
                    $scope.isProcessing = false;
                } 
                
            }, 2000);
            
            
            
        };

    }
  ])
;
