angular
  .module('app')
  .controller('programEditController', [
    '$rootScope',
    '$scope',
    '$location',
    'Vendor',
    'Program',
    '$routeParams',
    function($rootScope, $scope, $location, Vendor, Program, $routeParams) {
       
        // empty program object
        $scope.program = {};
        
      
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
            
        };
        
    }
  ])
;
