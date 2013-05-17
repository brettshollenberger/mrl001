angular
  .module('app')
  .controller('programListController', [
    '$rootScope',
    '$scope',
    'vendorService',
    '$location',
    'Program',
    'Vendor',
    function($rootScope, $scope, vendorService, $location, Program, Vendor) {
      
      $scope.editItem = function(id) {
        $location.url('/programs/' + id);  
      };
      
      Program.query(function(result) {
          console.log('Querying the program resource');
          console.log(result);
          $scope.programs = result;
      });
      
      $scope.deleteItem = function(id) {
        Program.delete({programId: id}, function(resp) {
            $scope.programs = _.reject($scope.programs, function(item) {
                return item.id === resp.id;
            });
        });  
      };

    }
  ])
;
