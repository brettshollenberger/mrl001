angular
  .module('app', [ 'ui.if', 'ui.bootstrap','ngCookies', function() {

        
      
  }])
    
  .config(['$routeProvider', function($router) {
        
    $router
      
      // general routes
      .when('/', {
        controller:   'homeController',
        templateUrl:  'app/templates/home.html'
      })
      
      
      // general routes
      .when('/login', {
        controller:   'loginController',
        templateUrl:  'app/templates/login.html'
      })
      
       // general routes
      .when('/logout', {
        controller:   'logoutController',
        templateUrl:  'app/templates/logout.html'
      })
      
      
      // Quoter tool! 
      .when('/tools/quoter', {
        controller:   'quoterToolController',
        templateUrl:  'app/templates/tools/quoter/quoterTool.html'
      })
      .when('/tools/quoter/:id', {
        controller:   'quoterToolController',
        templateUrl:  'app/templates/tools/quoter/quoterTool.html'
      })
      
      
      // Quoter tool! 
      .when('/tools/application', {
        controller:   'applicationToolController',
        templateUrl:  'app/templates/tools/application/applicationTool.html'
      })
      .when('/tools/application/:id', {
        controller:   'applicationToolController',
        templateUrl:  'app/templates/tools/application/applicationTool.html'
      })
      
      
      // Auth user dashboards
      .when('/dashboard', {
        redirectTo: '/dashboard/quotes'
      })
      
      
      // vendor routes
      .when('/dashboard/vendors', {
        controller:   'vendorController',
        templateUrl:  'app/templates/vendors/vendorList.html'
      })
      .when('/dashboard/vendors/new', {
        controller:   'vendorEditController',
        templateUrl:  'app/templates/vendors/vendorEdit.html'
      })
      .when('/dashboard/vendors/:id', {
        controller:   'vendorEditController',
        templateUrl:  'app/templates/vendors/vendorEdit.html'
      })
      
      
      // program routes
      .when('/dashboard/programs', {
        controller:   'programListController',
        templateUrl:  'app/templates/programs/programList.html'
      })
      .when('/dashboard/programs/new', {
        controller:   'programEditController',
        templateUrl:  'app/templates/programs/programEdit.html'
      })
      .when('/dashboard/programs/:id', {
        controller:   'programEditController',
        templateUrl:  'app/templates/programs/programEdit.html'
      })
      
      
      // quote routes
      .when('/dashboard/quotes', {
        controller:   'quoteListController',
        templateUrl:  'app/templates/quotes/quoteList.html'
      })
      .when('/dashboard/quotes/new', {
        controller:   'quoteEditController',
        templateUrl:  'app/templates/quotes/quoteEdit.html'
      })
      .when('/dashboard/quotes/:id', {
        controller:   'quoteEditController',
        templateUrl:  'app/templates/quotes/quoteEdit.html'
      })
      
      
      // application routes
      .when('/dashboard/applications', {
        controller:   'applicationListController',
        templateUrl:  'app/templates/applications/applicationList.html'
      })
      .when('/dashboard/applications/new', {
        controller:   'applicationEditController',
        templateUrl:  'app/templates/applications/applicationEdit.html'
      })
      .when('/dashboard/applications/:id', {
        controller:   'applicationEditController',
        templateUrl:  'app/templates/applications/applicationEdit.html'
      })
      
      
      // user routes
      .when('/dashboard/users', {
        controller:   'userListController',
        templateUrl:  'app/templates/users/userList.html'
      })
      .when('/dashboard/users/new', {
        controller:   'userEditController',
        templateUrl:  'app/templates/users/userEdit.html'
      })
      .when('/dashboard/users/:id', {
        controller:   'userEditController',
        templateUrl:  'app/templates/users/userEdit.html'
      })
      
    ;
  }])
  .run(['$rootScope', '$location', function($rootScope, $location) {
  
  
        // global functions and variables available app wide in $rootScope go here!
        $rootScope.version = '0.1.1';
        
        
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
                if($location.path().substr(0).length > 1 && path.length == 1 )
                    return "";
                else
                    return "active";
            } else if($location.path().indexOf(path) > -1) {
                return "active";
            } else {
                return "";
            }
        };

        // Handle updating page title
    $rootScope.$on('$routeChangeSuccess', function($event, $route, $previousRoute) {
        console.log($location.path());
        //$rootScope.page_title = $route.$route && $route.$route.title ? base_title + ' | ' + $route.$route.title : base_title; 
    });
  
  }])
  .directive('userTray', [ 'authService', '$location', function(Auth, $location) {
      
      return {
          template: '<span class="pull-left userTrayName" ng-show="isLoggedIn()">Logged in as {{currentUser().name.first}} {{currentUser().name.last}}</span><button id="logout" ng-show="isLoggedIn()" ng-click="logout()" class="btn">Log Out</button>',
          link: function(scope, element, attrs) {
              scope.isLoggedIn = Auth.isAuthenticated;
              
              scope.currentUser = Auth.getCurrentUser;
              
              scope.logout = function() {
                Auth.logout();
                $location.url('/login');
              };
              
          }
      };
      
  }])
;
