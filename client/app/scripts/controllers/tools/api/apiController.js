angular
    .module('app')
    .controller('apiController', [
        '$rootScope',
        '$scope',
        '$location',
        '$routeParams',
        'authService',
        'MARLINAPI_CONFIG',
        function($rootScope, $scope, $location, $routeParams, Auth, MARLINAPI_CONFIG) {
        
            
            $scope.documentationPage = function() {
                
                $scope.api_base = MARLINAPI_CONFIG.base_url;
                
            };
        
        
        }
    ]);