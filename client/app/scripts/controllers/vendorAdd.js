angular
  .module('app')
  .controller('vendorAddController', [
    '$rootScope',
    '$scope',
    'vendorService',
    '$location',
    function($rootScope, $scope, vendorService, $location) {
      
        $scope.vendors = vendorService.getAll();
      
        $scope.cancel = function() {
            $location.url('/vendors');
        };
        
        $scope.save = function() {
            vendorService.save($scope.vendor);
            $location.url('/vendors');
        };

    }
  ])
;
