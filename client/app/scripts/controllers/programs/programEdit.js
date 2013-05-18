angular
  .module('app')
  .controller('programEditController', [
    '$rootScope',
    '$scope',
    '$location',
    'Vendor',
    'Program',
    '$routeParams',
    'angularFireCollection',
    'angularFire',
    function($rootScope, $scope, $location, Vendor, Program, $routeParams, angularFireCollection, angularFire) {
       
        // empty program object
        $scope.programs = angularFireCollection('https://mrl001.firebaseio.com/programs');
        
        $scope.vendors = angularFireCollection('https://mrl001.firebaseio.com/vendors');
        
        $scope.$watch('$scope.vendors', function() {
            console.log($scope.vendors);
        });
        
            
        // utility function to go back to the program list
        // @todo this function is used in many places, find a way to streamline it
        $scope.cancel = function() {
            $location.url('/programs');
        };
        
        // get program ID for edit pages
        var programId = $routeParams.id;
        
        // get and store the program 
        if(programId) {
            Program.get({programId: programId}, function(result) {
               $scope.program = result; 
            },
            function() {
                $location.url('/programs');
            });
        }
        
        
        // activated when user clicks the save button
        $scope.save = function() {
            
            
            
            
            //var ids = _.pluck($scope.program.vendors, '$id');
            
            //console.log(ids);
            
            //$scope.program.vendors = ids;
            $scope.programs.add($scope.program);
            
            $scope.program = null;
            $location.url('/programs');
            
            
            
            
            
            /*
// create a new program
            var program = new Program();
            
            // This will transfer all properties user has entered into form
            // to our new program. 
            // @note we could do specific assignments here, and process, trim, validate etc. as well
            angular.extend(program, $scope.program);
           
            if(!programId) {
                // call the $resource $save method, which makes a POST request to our API
                program.$save(function(){
                    // clear the program, and redirect the user
                    $scope.program = null;
                    $location.url('/programs');
                }); 
            } else {
                $scope.program.$update({programId: programId}, function(){
                    // clear the program, and redirect the user
                    $scope.program = null;
                    $location.url('/programs');
                }); 
            }
            
*/
        };
        
    }
  ])
;
