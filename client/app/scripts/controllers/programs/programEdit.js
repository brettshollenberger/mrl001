angular
  .module('app')
  .controller('programEditController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'programService',
    function($rootScope, $scope, $location, $routeParams, Program) {
       
        // empty program object
        $scope.program = {};
        var program = {};
        // empty logo object, or filepicker gets mad :)
        $scope.program.logo = {};
      
        // filepicker settings
        // @todo move to global config
        filepicker.setKey('AJNc7mfA3SCxs3gRjg7EBz');
      
        // pick logo function
        // simple callback assigans to program logo when complete
        $scope.pickImage = function() {
            filepicker.pick(function(FPFile){
              console.log(FPFile.url);
              $scope.program.logo.original = FPFile.url;
              $scope.$apply();
            });  
        };
      
        // utility function to go back to the program list
        // @todo this function is used in many places, find a way to streamline it
        $scope.cancel = function() {
            $location.url('/programs');
        };
        
        // get program ID for edit pages
        var programId = $routeParams.id;
        $scope.formAction = 'Add';
        
        
        // get and store the program 
        if(programId) {
            // get the program
            $scope.program = Program.getById(programId);
            console.log($scope.program);
            $scope.formAction = 'Update';
        }
    
        // activated when user clicks the save button
        $scope.save = function() {
           
            if(!programId) {
                
                // create new item
                Program.add($scope.program);
                
            } else {
            
                // update existing item 
                //Program.updateById($scope.program.id, $scope.program);
                Program.update($scope.program);
                
            }
            
            $location.url('/programs');
            
        };
        
        
        
    }
  ])
;
