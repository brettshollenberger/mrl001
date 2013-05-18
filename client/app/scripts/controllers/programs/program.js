angular
  .module('app')
  .controller('programListController', [
    '$rootScope',
    '$scope',
    'vendorService',
    '$location',
    'Program',
    'Vendor',
    'angularFireCollection',
    function($rootScope, $scope, vendorService, $location, Program, Vendor, angularFireCollection) {
      
      $scope.editItem = function(id) {
        $location.url('/programs/' + id);  
      };
      
       var url = 'https://mrl001.firebaseio.com/programs';
       $scope.programs = angularFireCollection(url);
      
      
      $scope.$watch('$scope.programs', function() {
            console.log($scope.programs);
           
        });
      
      
      /*
Program.query(function(result) {
          console.log('Querying the program resource');
          console.log(result);
          $scope.programs = result;
      });
*/
      
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
