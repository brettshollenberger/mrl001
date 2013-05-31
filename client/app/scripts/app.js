angular
  .module('app', function() {

        
      
  })
    
  .config(['$routeProvider', function($router) {
    $router
      
      // general routes
      .when('/', {
        redirectTo: '/dashboard'
      })
      
      .when('/dashboard', {
        redirectTo: '/dashboard/vendors'
      })
      
      // vendor routes
      .when('/dashboard/vendors', {
        controller:   'vendorController',
        templateUrl:  'app/templates/vendors/vendors.html'
      })
      .when('/dashboard/vendors/new', {
        controller:   'vendorEditController',
        templateUrl:  'app/templates/vendors/addVendor.html'
      })
      .when('/dashboard/vendors/:id', {
        controller:   'vendorEditController',
        templateUrl:  'app/templates/vendors/addVendor.html'
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

    
;
