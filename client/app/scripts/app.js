angular
  .module('app', [])
  .config(['$routeProvider', function($router) {
    $router
      .when('/', {
        controller:   'homeController',
        templateUrl:  'app/templates/home.html'
      })
      .when('/vendors', {
        controller:   'vendorController',
        templateUrl:  'app/templates/vendors/vendors.html'
      })
      .when('/vendors/new', {
        controller:   'vendorAddController',
        templateUrl:  'app/templates/vendors/addVendor.html'
      })
      .when('/programs', {
        controller:   'programController',
        templateUrl:  'app/templates/programs/programs.html'
      })
    ;
  }])
;
