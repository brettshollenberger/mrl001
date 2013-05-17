angular
  .module('app', ['ngResource'], function($provide) {

        $provide.factory('Vendor', ['$resource', function($resource){
            return $resource('http://localhost\\:1337/api/vendor/:vendorId', {}, {
                update: {
                    method: 'PUT'
                }
              });
        }]);
      
  })
  .config(['$routeProvider', function($router) {
    $router
      .when('/', {
        redirectTo: '/vendors'
      })
      .when('/vendors', {
        controller:   'vendorController',
        templateUrl:  'app/templates/vendors/vendors.html'
      })
      .when('/vendors/new', {
        controller:   'vendorEditController',
        templateUrl:  'app/templates/vendors/addVendor.html'
      })
      .when('/vendors/:id', {
        controller:   'vendorEditController',
        templateUrl:  'app/templates/vendors/addVendor.html'
      })
      .when('/programs', {
        controller:   'programController',
        templateUrl:  'app/templates/programs/programs.html'
      })
    ;
  }])
;
