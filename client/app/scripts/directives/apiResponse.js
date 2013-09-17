angular
    .module('apiResponse', [])
    .config([
    '$routeProvider',
    '$locationProvider',
    '$httpProvider',
    function($routeProvider, $locationProvider, $httpProvider) {

        var interceptor = ['$location', '$q',
            function($location, $q) {

                function success(response) {

                    if (typeof response.data !== 'object') {
                        return response;
                    }

                    if (response.data.result) {
                        // store the old header for reference
                        // response.meta = response.data.meta; 
                        // replace data with result so it can be digetsted by services
                        response.data = response.data.result;
                    }

                    return response;


                }

                function error(response) {

                    if (response.data.meta) {
                        // store the old header for reference
                        // response.meta = response.data.meta; 
                        // replace data with result so it can be digetsted by services
                        response.data = response.data.meta;
                    }


                    if (response.status === 401) {
                        //$location.path('/login');
                        return $q.reject(response);
                    } else {
                        return $q.reject(response);
                    }
                }

                return function(promise) {
                    return promise.then(success, error);
                };
            }
        ];

        $httpProvider.responseInterceptors.push(interceptor);
    }
]);