angular
  .module('app', ['ngResource'], function($provide) {
      
        /*
$provide.factory('User', ['$resource', function($resource){
            return $resource('http://localhost\\:1337/user');
        }]);
*/
      
      console.log('test');
        $provide.factory('Vendor', ['$resource', function($resource){
            return $resource('http://localhost\\:1337/api/vendor/:vendorId', {}, {
                update: {
                    method: 'PUT'
                }
              });
            
            /*
var api = {};
            api.get = $resource('/:vendorId');
            api.create = $resource('http://localhost\\:1337/vendor/create');
            api.save = $resource('http://localhost\\:1337/vendor/update/:vendorId');
            
            return api;
*/
            
            // https://github.com/ericclemmons/angular-github-demo/blob/3/src/app/services/repoService.js
            // http://jsfiddle.net/E_lexy/FdDBn/4/
            /*

              return $resource('http://localhost\\:1337/vendor', {}, {
                query: {
                    url: ''
                }
              });
*/
            
            
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
