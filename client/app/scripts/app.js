angular
    .module('app', [
        'apiResponse',
        'unsavedNew',
        'uiHelpers',
        'ui.validate',
        'ui.if',
        'ui.bootstrap',
        'ngCookies',
        'angular-markdown',
        'mb.spinner',
        'ajoslin.promise-tracker',
        'angulartics',
        'angulartics.google.analytics',
        'google-maps',
        'truncate',
        'ui.select2'
    ])

/**
 * Configure angular app
 *
 * @note we dont yet have access to $rootScope, and a few other things
 *
 */
.config([
    '$httpProvider',
    '$compileProvider',
    function(
        $httpProvider,
        $compileProvider,
        promiseTracker
    ) {

        /**
         * Standard CORS Configuration
         *
         */
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        /**
         * Configure ngSanitize directive
         * Here we add 'mailto' 'callto' etc. which prevents links with href='mailto:' from
         * being flagged as 'unsafe' by angular sanitizer
         *
         */
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel|callto):/);

    }
])

/**
 * Define constants using Angulars .constant() method
 *
 * @note you need to adjust base_url when developing locally. Don't commit any changes to this since
 *       master is setup alreay to work with heroku
 *
 */
.constant('MARLINAPI_CONFIG', {
    //base_url: 'http://marlinquoter.herokuapp.com/api/v1/'
    //base_url: 'http://localhost:3000/api/v1/'
    //base_url: 'http://0.0.0.0:3000/api/v1/'
    base_url: 'http://127.0.0.1:3000/api/v1/'
})

/**
 * Define routes
 *
 * @note for this app we set all routes here in the app file. An alternate (any maybe more modular)
 *       is to set routes in the controllers as needed.
 *
 */
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
            .when('/tools/quoter/:id/print', {
                controller: 'quoterToolController',
                templateUrl: 'app/templates/tools/quoter/quoterToolPrint.html'
            })
            .when('/tools/quoter/:id', {
                controller: 'quoterToolController',
                templateUrl: 'app/templates/tools/quoter/quoterTool.html'
            })
            


        // Application tool! 
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
            controller: 'applicationController',
            templateUrl: 'app/templates/dashboard/index.html'
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
            controller: 'applicationController',
            templateUrl: 'app/templates/applications/applicationList.html'
        })
            .when('/dashboard/applications/new', {
                controller: 'applicationController',
                templateUrl: 'app/templates/applications/applicationEdit.html'
            })
            .when('/dashboard/applications/:id', {
                controller: 'applicationController',
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

/**
 * Runs one time when our app is finally bootstrapped
 *
 * @note Now we have access to $rootScope.
 *
 * @note Functions defined here run only one time, unless they observe or bind to a variable
 *       in which case the funtions will run as expected when said variables updates.
 *
 * @todo Most of these should be added to our facultyUI repo, however is there an easier way
 *       to add them? IE instead of needing to put in .run() can we leave them in a seperate module
 *       but include them in our app?
 *
 */
.run(['$rootScope', '$location', 'authService', '$document', '$http', 'promiseTracker',
    function($rootScope, $location, Auth, $document, $http, promiseTracker) {


        // define our version
        // @todo this should be set in package.json, and an api call should be made
        //       to get the version number, rather then setting it here. 
        $rootScope.version = '0.3.5';


        // @note this is related to experimental promisetracker module
        $rootScope.apiTracker = promiseTracker('api');


        /**
         * Helper functions, which are accessiable anywhere in our app using $rootScope.functionName()
         *
         */

        /**
         * goto a url. This allows us to easily change hash / no-hash method
         * without having to change many links site-wide
         *
         */
        $rootScope.goTo = function(urlToGoTo) {
            $location.url(urlToGoTo);
        };

        /**
         * Sets active class on a link based on current url / location
         *
         * @example <a ng-class="getClass('/path')" href="/path">Path</a> // adds active class
         *
         */
        $rootScope.getClass = function(path) {
            var cur_path = $location.path();

            // do some counting
            var splitCurPath = cur_path.split('/').length;
            var splitPath = path.split('/').length;

            //console.log('$location.path() is: ' + cur_path + ', path is: ' + path);
            if (cur_path == path) {
                return "active";
            } else if ($location.path().indexOf(path) > -1 && path.split('/').length === 3) {
                // this check prevents 'dashboard' from being active when user is viewing quotes
                return "active active-trail";
            } else {
                return "";
            }
        };

        /**
         * Helper function that masks auth.showIfUserCanDoAction() method
         *
         * @todo refactor this, to remove from rootScope
         *
         */
        $rootScope.showIfUserCanDoAction = function(action) {
            return Auth.showIfUserCanDoAction(action);
        };


        /**
         * Generate a string of classes which are generally added to document.body
         * This allows us to target specific pages within css
         *
         * @note this will bound to all successful route changes
         *
         * @note it might be useful to expand this function to add prefixes to the class, ie: page-pageName
         *       Wordpress does this and its one of the more useful features
         *
         */
        $rootScope.$on('$routeChangeSuccess', function($event, $route, $previousRoute) {

            // variable we use on body, @example ng-class="{{pageSlug}}"
            $rootScope.pageSlug = "";

            // get the location and split into an array
            var pageSlug = $location.path().split('/');

            // remove the first element, which is always ""
            pageSlug.shift();

            // special case for home page
            if (pageSlug.length === 1 && pageSlug[0] === "") {

                $rootScope.pageSlug = 'home';

                // create string from each slug item   
            } else {

                _.each(pageSlug, function(item) {
                    $rootScope.pageSlug += item + " ";
                });

            }

        });

    }
]);
