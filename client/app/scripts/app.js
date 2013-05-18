angular
  .module('app', ['ngResource', 'firebase'], function($provide) {

        $provide.factory('Vendor', ['$resource', function($resource){
            return $resource('http://localhost\\:1337/api/vendor/:vendorId', {}, {
                update: {
                    method: 'PUT'
                }
              });
        }]);
        
        $provide.factory('Program', ['$resource', function($resource){
            return $resource('http://localhost\\:1337/api/program/:programId', {}, {
                update: {
                    method: 'PUT'
                }
              });
        }]);
        
      
  })
  .config(['$routeProvider', function($router) {
    $router
      
      // general routes
      .when('/', {
        redirectTo: '/vendors'
      })
      
      // vendor routes
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
      
      // program routes
      .when('/programs', {
        controller:   'programListController',
        templateUrl:  'app/templates/programs/programList.html'
      })
      .when('/programs/new', {
        controller:   'programEditController',
        templateUrl:  'app/templates/programs/programEdit.html'
      })
      .when('/programs/:id', {
        controller:   'programEditController',
        templateUrl:  'app/templates/programs/programEdit.html'
      })
      
    ;
  }])
;
