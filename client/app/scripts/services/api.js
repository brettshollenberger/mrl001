angular
    .module('app')
    .factory('apiService', [
        '$http',
        function($http) {
            return {
                changelog: $http.get('/api/changelog')
            };
        }
    ]);
