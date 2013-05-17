angular
  .module('app')
  .controller('vendorController', [
    '$rootScope',
    '$scope',
    'vendorService',
    '$location',
    'Vendor',
    function($rootScope, $scope, vendorService, $location, Vendor) {
      
      $scope.editVendor = function(id) {
        $location.url('/vendors/' + id);  
      };
      
      Vendor.query(function(result) {
          console.log('Querying the vendor resource');
          console.log(result);
          $scope.vendors = result;
      });
      
      $scope.deleteVendor = function(id) {
        Vendor.delete({vendorId: id}, function(resp) {
            $scope.vendors = _.reject($scope.vendors, function(item) {
                return item.id === resp.id;
            });
        });  
      };

    }
  ])
;
