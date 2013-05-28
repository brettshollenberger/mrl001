angular
  .module('app', ['restangular'], function(RestangularProvider) {

        
      
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
      
      
      // user routes
      .when('/users', {
        controller:   'userListController',
        templateUrl:  'app/templates/users/userList.html'
      })
      .when('/users/new', {
        controller:   'userEditController',
        templateUrl:  'app/templates/users/userEdit.html'
      })
      .when('/users/:id', {
        controller:   'userEditController',
        templateUrl:  'app/templates/users/userEdit.html'
      })
      
    ;
  }])
  
  .config(['RestangularProvider', function(RestangularProvider) {
        RestangularProvider.setBaseUrl('https://api.parse.com/1');
        
        // First let's set listTypeIsArray to false, as we have the array wrapped in some other object.
        RestangularProvider.setListTypeIsArray(false);
    
        // Now let's configure the response extractor for each request
        RestangularProvider.setResponseExtractor(function(response, operation, what, url) {
          // This is a get for a list
          console.log(response);
          
          var newResponse;
          if (operation === "getList") {
            // Here we're returning an Array which has one special property metadata with our extra information
            newResponse = response.results;
            //newResponse.metadata = response.data.meta;
          } else {
            // This is an element
            newResponse = response;
          }
          return newResponse;
        });
        
        
        RestangularProvider.setRestangularFields({
          id: "objectId",
          route: "restangularRoute"
        });
        
        
        /*
RestangularProvider.setExtraFields(['name']);
        RestangularProvider.setResponseExtractor(function(response, operation) {
            return response.data;
        });
        
        RestangularProvider.setDefaultHttpFields({cache: true});
        RestangularProvider.setMethodOverriders(["put", "patch"]);
        
        RestangularProvider.setListTypeIsArray(true);
        
        // In this case we configure that the id of each element will be the _id field and we change the Restangular route. We leave the default value for parentResource
        RestangularProvider.setRestangularFields({
          id: "_id",
          route: "restangularRoute"
        });
        
        RestangularProvider.setRequestSuffix('');
        
        RestangularProvider.setRequestInterceptor(function(element, operation, route, url) {
          delete elem.name;
          return elem;
        });
*/
    }])
    .config(["$httpProvider", function($httpProvider) {
      console.log($httpProvider.defaults);
      
      $httpProvider.defaults.useXDomain = true;
      //delete $httpProvider.defaults.headers.common['X-Requested-With'];
      
      
      $httpProvider.defaults.headers.common['X-Requested-With'] = '';
      delete $httpProvider.defaults.headers.common['Origin'];
      $httpProvider.defaults.headers.common['Referer'] = '';
      $httpProvider.defaults.headers.common['X-Parse-Application-Id'] = 'Ydd2M5L3CDdYBKS1SK36Sz4cgVQqSjQGmqCmOiR9';
      $httpProvider.defaults.headers.common['X-Parse-REST-API-Key'] = 'FigQ4gBXn7QtU7FDXi4mXu0wiFs65iGU3D6ZkgFc';
      $httpProvider.defaults.headers.common['Accept'] = '*/*';
    }])
    
;
