/**
 * Service that makes working with standardized API responses easy.
 * For example, we often return responses like so: {meta: {code: '', message: ''}, result: []}
 * Other times, an API may return 200 for calls that actually failed, hiding the real code within metadata
 *
 * This service intercepts all API responses, and if successful,
 * returns the 'result' part (this ignoring the meta). If the call failed, the 'meta' part
 * is returned instead.
 *
 * @note if the API uses a format different than 'meta' and 'result', you'll need to adjust below
 *
 * @note This service is compatiable with angular 1.0.8 and below. In 1.2 responseInterceptors() has changed.
 *
 */
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

                        // check for angular templates, which are loaded through ajax
                        if (typeof response.data !== 'object') {
                            return response;
                        }

                        if (response.data.result) {
                            // replace data with result so it can be digetsted by services
                            response.data = response.data.result;
                        }

                        return response;


                    }

                    function error(response) {

                        if (response.data.meta) {
                            // replace data with meta
                            response.data = response.data.meta;
                        }

                        // @note we can check for statuses, for example unauthorized
                        // here we could broadcast 'login-required' which could trigger our auth service
                        if (response.status === 401) {
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
