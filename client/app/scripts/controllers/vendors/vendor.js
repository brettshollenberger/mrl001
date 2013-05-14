angular
  .module('app')
  .controller('vendorController', [
    '$rootScope',
    '$scope',
    'vendorService',
    '$location',
    'Vendor',
    function($rootScope, $scope, vendorService, $location, Vendor) {
      /*
      api.server.then(function(response) {
        $rootScope.version = response.data.version;
      });

      $scope.client = api.client;
      $scope.server = api.server;
      */
      
      $scope.editVendor = function(id) {
        $location.url('/vendors/' + id);  
      };
      
      console.log('Vendor controller running! ');
      Vendor.query(function(result) {
          console.log('Querying the vendor resource');
          console.log(result);
          $scope.vendors = result;
      });
      
      //$scope.vendors = vendorService.getAll();

    }
  ])
;
