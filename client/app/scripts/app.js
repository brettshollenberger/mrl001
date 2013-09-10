angular
    .module('app', ['unsavedNew', 'ui.validate', 'ui.if', 'ui.bootstrap', 'ngCookies', 'angular-markdown', 'mb.spinner', 'ajoslin.promise-tracker', 'angulartics', 'angulartics.google.analytics', 'google-maps', 'truncate',
        function() {

        }
    ])
    .config(['$httpProvider',
        function($httpProvider, promiseTracker) {
        
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];

            var toJsonReplacer = function(key, value) {
                var val = value;

                if (/^\$+/.test(key) && key !== '$oid') {
                    val = undefined;
                } else if (value && value.document && value.location && value.alert && value.setInterval) {
                    val = '$WINDOW';
                } else if (value && $document === value) {
                    val = '$DOCUMENT';
                } else if (value && value.$evalAsync && value.$watch) {
                    val = '$SCOPE';
                }
                return val;
            };

            var customRequest = function(d) {
                //console.log(d);
                return d;
            };


            /*
        $httpProvider.defaults.transformRequest.push(customRequest);
        
        console.log($httpProvider.defaults.transformRequest);
*/




            /*
return angular.isObject(d) && !(angular.toString.apply(d) === '[object File]') ? angular.toJson(d) : d;
            
            return isObject(d) && !isFile(d) ? toJson(d) : d;
*/




            /*         console.log($http.defaults.transformRequest); */
            /*


        angular.toJson = function(obj, pretty) {
            return JSON.stringify(obj, toJsonReplacer, pretty ? '  ' : null);
        };

        $http.defaults.transformRequest[0] = function(d) {
            console.log(d);
            return angular.isObject(d) && !(angular.toString.apply(d) === '[object File]') ? angular.toJson(d) : d;
            
            return isObject(d) && !isFile(d) ? toJson(d) : d;
        
        };
*/

        }
    ])

.constant('MARLINAPI_CONFIG', {
    //base_url: 'http://marlinquoter.herokuapp.com/api/v1/'
    //base_url: 'http://localhost:3000/api/v1/'
    //base_url: 'http://0.0.0.0:3000/api/v1/'
    base_url: 'http://10.1.10.100:3000/api/v1/'
})
    .config(['$routeProvider',
        function($router) {

            $router

            // general routes
            .when('/', {
                controller: 'homeController',
                templateUrl: 'app/templates/home.html'
            })


            .when('/changelog', {
                controller: 'changelogController',
                templateUrl: 'app/templates/changelog.html'
            })

            // general routes
            .when('/login', {
                controller: 'loginController',
                templateUrl: 'app/templates/login.html'
            })

            // general routes
            .when('/logout', {
                controller: 'logoutController',
                templateUrl: 'app/templates/logout.html'
            })


            // Quoter tool!  
            .when('/tools/quoter', {
                controller: 'quoterToolController',
                templateUrl: 'app/templates/tools/quoter/quoterTool.html'
            })
                .when('/tools/quoter/:id', {
                    controller: 'quoterToolController',
                    templateUrl: 'app/templates/tools/quoter/quoterTool.html'
                })
                .when('/tools/quoter/:id/print', {
                    controller: 'quoterToolController',
                    templateUrl: 'app/templates/tools/quoter/quoterTool.html'
                })


            // Quoter tool! 
            .when('/tools/application', {
                controller: 'applicationToolController',
                templateUrl: 'app/templates/tools/application/applicationTool.html'
            })
                .when('/tools/application/:id', {
                    controller: 'applicationToolController',
                    templateUrl: 'app/templates/tools/application/applicationTool.html'
                })

            // Locator tool! 
            .when('/tools/locator', {
                controller: 'locatorToolController',
                templateUrl: 'app/templates/tools/locator/locatorTool.html'
            })

            // Auth user dashboards
            .when('/dashboard', {
                redirectTo: '/dashboard/quotes'
            })


            // vendor routes
            .when('/dashboard/vendors', {
                controller: 'vendorController',
                templateUrl: 'app/templates/vendors/vendorList.html'
            })
                .when('/dashboard/vendors/new', {
                    controller: 'vendorEditController',
                    templateUrl: 'app/templates/vendors/vendorEdit.html'
                })
                .when('/dashboard/vendors/:id', {
                    controller: 'vendorEditController',
                    templateUrl: 'app/templates/vendors/vendorEdit.html'
                })


            // program routes
            .when('/dashboard/programs', {
                controller: 'programListController',
                templateUrl: 'app/templates/programs/programList.html'
            })
                .when('/dashboard/programs/new', {
                    controller: 'programEditController',
                    templateUrl: 'app/templates/programs/programEdit.html'
                })
                .when('/dashboard/programs/:id', {
                    controller: 'programEditController',
                    templateUrl: 'app/templates/programs/programEdit.html'
                })


            // quote routes
            .when('/dashboard/quotes', {
                controller: 'quoteListController',
                templateUrl: 'app/templates/quotes/quoteList.html'
            })
                .when('/dashboard/quotes/new', {
                    controller: 'quoteEditController',
                    templateUrl: 'app/templates/quotes/quoteEdit.html'
                })
                .when('/dashboard/quotes/:id', {
                    controller: 'quoteEditController',
                    templateUrl: 'app/templates/quotes/quoteEdit.html'
                })


            // application routes
            .when('/dashboard/applications', {
                controller: 'applicationListController',
                templateUrl: 'app/templates/applications/applicationList.html'
            })
                .when('/dashboard/applications/new', {
                    controller: 'applicationEditController',
                    templateUrl: 'app/templates/applications/applicationEdit.html'
                })
                .when('/dashboard/applications/:id', {
                    controller: 'applicationEditController',
                    templateUrl: 'app/templates/applications/applicationEdit.html'
                })


            // user routes
            .when('/dashboard/users', {
                controller: 'userListController',
                templateUrl: 'app/templates/users/userList.html'
            })
                .when('/dashboard/users/new', {
                    controller: 'userEditController',
                    templateUrl: 'app/templates/users/userEdit.html'
                })
                .when('/dashboard/users/:id', {
                    controller: 'userEditController',
                    templateUrl: 'app/templates/users/userEdit.html'
                })

            ;
        }
    ])

.run(['$rootScope', '$location', 'authService', '$document', '$http', 'promiseTracker',
    function($rootScope, $location, Auth, $document, $http, promiseTracker) {

        // global functions and variables available app wide in $rootScope go here!
        $rootScope.version = '0.2.1';

        $rootScope.apiTracker = promiseTracker('api');

        $rootScope.goTo = function(urlToGoTo) {
            $location.url(urlToGoTo);
        };

        // gets active class
        // use as ng-class="getClass('/path')"
        $rootScope.getClass = function(path) {
            var cur_path = $location.path().substr(0, path.length);
            cur_path = $location.path();
            //console.log('Current path is: ' + cur_path + ', checked path is: ' + path);
            if (cur_path == path) {
                if ($location.path().substr(0).length > 1 && path.length == 1)
                    return "";
                else
                    return "active";
            } else if ($location.path().indexOf(path) > -1) {
                return "active";
            } else {
                return "";
            }
        };


        $rootScope.showIfUserCanDoAction = function(action) {
            return Auth.showIfUserCanDoAction(action);
        };


        // Handle updating page title
        $rootScope.$on('$routeChangeSuccess', function($event, $route, $previousRoute) {

            $rootScope.pageSlug = "";

            var pageSlug = $location.path().split('/');

            // remove the first element, which is always ""
            pageSlug.shift();

            //console.log(pageSlug);

            if (pageSlug.length === 1 && pageSlug[0] === "") {
                $rootScope.pageSlug = 'home';
            } else {

                _.each(pageSlug, function(item) {
                    $rootScope.pageSlug += item + " ";
                });

            }

        });

    }
])
    .directive('decimalPlaces', function() {
        return {
            link: function(scope, ele, attrs) {
                ele.bind('keypress', function(e) {
                    var newVal = ele.val() + (e.charCode !== 0 ? String.fromCharCode(e.charCode) : '');

                    // get the actual letter user has entered
                    var theCharacter = String.fromCharCode(e.charCode);

                    console.log(ele.val().split(".").length);

                    if (theCharacter.search(/\d/) === -1) {
                        console.log('not a number, checking for period (.)');
                        if (theCharacter.search(/\./) === -1 || ele.val().split(".").length > 1) {
                            console.log('Too many periods (.)');
                            e.preventDefault();
                        }
                    }

                    if (theCharacter.indexOf('0') === 1 && theCharacter.search(/\./) === -1 && ele.val().split(".").length === 1) {
                        console.log('User is trying to enter a non-decimal number');
                        e.preventDefault();
                    }

                    if (ele.val().search(/\d+\.\d{3}/) === 0 && newVal.length > ele.val().length) {
                        //e.preventDefault();
                    }

                    if (ele.val().search(/\.\d{3}/) === 0 && newVal.length > ele.val().length) {
                        //e.preventDefault();
                    }


                });
            }
        };

    })
    .directive('numberOnly', function() {
        return {
            link: function(scope, ele, attrs) {
                ele.bind('keypress', function(e) {
                    var newVal = ele.val() + (e.charCode !== 0 ? String.fromCharCode(e.charCode) : '');
                    var theCharacter = String.fromCharCode(e.charCode);

                    if (theCharacter.search(/\d/) === -1) {
                        e.preventDefault();
                    }
                });
            }
        };

    })
    .directive('userTray', ['authService', '$location',
        function(Auth, $location) {

            return {
                template: '<img class="img-circle" ng-show="currentUser().avatar.original" ng-src="{{currentUser().avatar.original}}"/><br/><br/><span ng-show="isLoggedIn()">{{currentUser().name.first}} {{currentUser().name.last}}</span><br/><a id="logout" ng-show="isLoggedIn()" ng-click="goToProfile()">My Profile</a><br /><a id="logout" ng-show="isLoggedIn()" ng-click="logout()">Log Out</a>',
                link: function(scope, element, attrs) {
                    scope.isLoggedIn = Auth.isAuthenticated;

                    scope.currentUser = Auth.getCurrentUser;

                    scope.goToProfile = function() {
                        $location.url('/dashboard/users/' + Auth.getCurrentUser()._id);
                    };

                    scope.logout = function() {
                        Auth.logout();
                        $location.url('/login');
                    };

                }
            };

        }
    ])

;


angular.module('SharedServices', [])
    .run(function($rootScope) {

        console.log('Factor it!');
        //console.log($rootScope);

        // this will be incrimented up/ down in our requests and responses
        // when its greater than 0, we know to show a loading indicator
        $rootScope.requestQueue = 0;

    })

.config(function($httpProvider) {

    $httpProvider.responseInterceptors.push('myHttpInterceptor');

    var spinnerFunction = function(data, headersGetter) {
        // todo start the spinner here

        // store local instance of queue
        //var queue = $rootScope.requestQueue;
        var queue = 0;

        queue++;
        //console.log('Queue is... ' + queue);

        //console.log(data);
        //console.log('start spinner, headers are...');
        //console.log(headersGetter());

        return data;
    };
    $httpProvider.defaults.transformRequest.push(spinnerFunction);
})

// register the interceptor as a service, intercepts ALL angular ajax http calls
.factory('myHttpInterceptor', function($q, $window, $rootScope) {

    // store local instance of queue
    var queue = $rootScope.requestQueue;

    return function(promise) {
        return promise.then(function(response) {
            // do something on success
            // todo hide the spinner

            // templates will trigger this call too... although they will come back as a data string
            // we can check for an object 
            //console.log('stop spinner, response.data is');
            //console.log(response.data);

            queue--;
            //console.log('Queue is... ' + queue);

            return response;

        }, function(response) {
            // do something on error
            // todo hide the spinner
            //console.log('stop spinner, failed response is...');
            //console.log(response);

            queue--;
            //console.log('Queue is... ' + queue);

            return $q.reject(response);
        });
    };
});



/*
angular.module('app').config( function( $httpProvider ) {
  $httpProvider.responseInterceptors.push( interceptor );
});
*/

angular.module('app').config([
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








/*

angular.module('app').config(function ($provide, $httpProvider) {
  
   var interceptor = function($rootScope, $q, httpBuffer) {
      return {
          'responseError': function(response) {
            if (response.status === 401 && !response.config.ignoreAuthModule) {
              var deferred = $q.defer();
              httpBuffer.append(response.config, deferred);
              $rootScope.$broadcast('event:auth-loginRequired');
              return deferred.promise;
            }
            // otherwise, default behaviour
            return $q.reject(response);
          }
      }
    };
    $httpProvider.interceptors.push(interceptor);
 
});
*/


/*

var SpinnerController, spinner,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

spinner = angular.module("mb.spinner", []);

spinner.value("pendingRequests", {
  counter: 0,
  increment: function() {
    return this.counter += 1;
  },
  decrement: function() {
    if (this.isPending()) {
      return this.counter -= 1;
    }
  },
  isPending: function() {
    return this.counter > 0;
  }
});

spinner.factory("pendingRequestsInterceptor", [
  "$injector", "$q", "pendingRequests", function($injector, $q, pendingRequests) {
    return function(promise) {
      var $http, onError, onSuccess;
      $http = $injector.get("$http");
      onSuccess = function(response) {
        pendingRequests.decrement();
        return response;
      };
      onError = function(response) {
        pendingRequests.decrement();
        return $q.reject(response);
      };
      return promise.then(onSuccess, onError);
    };
  }
]);

spinner.config([
  "$httpProvider", "pendingRequestsProvider", function($httpProvider, pendingRequestsProvider) {
    var pendingRequests;
    pendingRequests = pendingRequestsProvider.$get();
    $httpProvider.defaults.transformRequest.push(function(data) {
      pendingRequests.increment();
      return data;
    });
    return $httpProvider.responseInterceptors.push("pendingRequestsInterceptor");
  }
]);

SpinnerController = (function() {

  SpinnerController.$inject = ["$scope", "pendingRequests"];

  function SpinnerController($scope, pendingRequests) {
    this.$scope = $scope;
    this.pendingRequests = pendingRequests;
    this.showSpinner = __bind(this.showSpinner, this);

    this.$scope.showSpinner = this.showSpinner;
  }

  SpinnerController.prototype.showSpinner = function() {
    return this.pendingRequests.isPending();
  };

  return SpinnerController;

})();

spinner.controller("spinner", SpinnerController);

spinner.directive("spinner", function() {
  return {
    replace: true,
    restrict: "E",
    template: "<li class=\"spinner\">\n  <a href=\"#\">\n    <img ng-show=\"showSpinner()\" src=\"/assets/ajax-loader.gif\" />\n  </a>\n</li>",
    controller: "spinner"
  };
});

*/


/**
 * Thanks to
 * @see https://github.com/lucassus/mongo_browser/blob/1ba5dc609fdf73ce2acceed7e8bcd25349daf1fe/app/assets/javascripts/app/modules/spinner.js.coffee
 *
 */


var SpinnerController, spinner,
    __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments);
        };
    };

spinner = angular.module("mb.spinner", []);

spinner.factory("httpRequestTracker", [
    "$http",
    function($http) {
        return {
            hasPendingRequests: function() {
                return $http.pendingRequests.length > 0;
            }
        };
    }
]);

SpinnerController = (function() {

    SpinnerController2.$inject = ["$scope", "httpRequestTracker"];

    function SpinnerController2($scope, httpRequestTracker) {
        this.$scope = $scope;
        this.httpRequestTracker = httpRequestTracker;
        this.showSpinner = __bind(this.showSpinner, this);

        this.$scope.showSpinner = this.showSpinner;
        //this.$scope.showSpinner = true;
    }

    SpinnerController2.prototype.showSpinner = function() {
        return this.httpRequestTracker.hasPendingRequests();
    };

    return SpinnerController2;

})();

spinner.controller("spinner", SpinnerController);

spinner.directive("spinner", function() {
    return {
        replace: true,
        template: "<div ng-show='showSpinner()'><i class='icon icon-spinner icon-spin'></i></div>",
        controller: "spinner"
    };
});



angular.module('app').config(function($compileProvider){
  $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|callto):/);
});



angular.module('app') // attach to your app or create a new with ('filters', [])
.filter('isodate', function(){
   return function(datetime){
       var n = datetime.split(' ');
       if(n.length == 1) return datetime;
       else return n.join('T')+'Z';
   };
});


angular.module('app')
.directive('stopEvent', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.bind(attr.stopEvent, function (e) {
                e.stopPropagation();
            });
        }
    };
});





angular
.module('app')
.directive("mailTo", function() {
    return {
        replace: true,
        template: '<a ng-show="email" stop-event="click" ng-href="mailto:{{email}}" target="_blank"><i class="icon icon-envelope"></i> {{email}}</a>',
        link: function(scope, element, attrs) {
            
            attrs.$observe('mailTo', function(item) {
                scope.email = item;
            });
                        
        }
    };
})
.directive("callTo", function() {
    return {
        replace: true,
        template: '<a ng-show="phone" stop-event="click" ng-href="callto:{{phone}}"><i class="icon icon-phone"></i> {{phone}}</a>',
        link: function(scope, element, attrs) {
            
            attrs.$observe('callTo', function(item) {
                scope.phone = item;
            });
                        
        }
    };
})
.directive("userProfile", function() {
    
    return {
        replace: true,
        template: '<a stop-event="click" ng-href="#/dashboard/users/{{userProfile()._id}}"><i class="icon icon-user"></i> {{userProfile().fullname}}</a>',
        scope: {
            userProfile: '&'
        }
    };
})

;




