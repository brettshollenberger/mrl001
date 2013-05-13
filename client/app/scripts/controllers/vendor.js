angular
  .module('app')
  .controller('vendorController', [
    '$rootScope',
    '$scope',
    'vendorService',
    '$location',
    function($rootScope, $scope, vendorService, $location) {
      /*
      api.server.then(function(response) {
        $rootScope.version = response.data.version;
      });

      $scope.client = api.client;
      $scope.server = api.server;
      */
      
      $scope.vendors = vendorService.getAll();

    }
  ])
;
