angular
    .module('app')
        .controller('homeController', [
        '$rootScope',
        '$scope',
        function($rootScope, $scope) {
            
            // this allows us to auto set login credentials based on demo path
            $scope.loginAs = function(userType) {
                
                if(userType === 'salesRep') {
                    $rootScope.credentials = {userName: 'afrey', password: 'demo'};
                }
                
                $rootScope.goTo('login');
                
            };
            
        
        }
    ])
;
