angular
  .module('app')
  .controller('userEditController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'authService',
    'userService',
    function($rootScope, $scope, $location, $routeParams, Auth, User) {
       
        Auth.minPermissionLevel(1);
       
        // empty user object
        $scope.user = {};
        var user = {};
        // empty logo object, or filepicker gets mad :)
        $scope.user.logo = {};
      
        // filepicker settings
        // @todo move to global config
        filepicker.setKey('AJNc7mfA3SCxs3gRjg7EBz');
      
        // pick logo function
        // simple callback assigans to user logo when complete
        $scope.pickImage = function() {
            filepicker.pick(function(FPFile){
              console.log(FPFile.url);
              $scope.user.logo.original = FPFile.url;
              $scope.$apply();
            });  
        };
      
        // utility function to go back to the user list
        // @todo this function is used in many places, find a way to streamline it
        $scope.cancel = function() {
            $location.url('/dashboard/users');
        };
        
        // get user ID for edit pages
        var userId = $routeParams.id;
        $scope.formAction = 'Add';
        
        
        // get and store the user 
        if(userId) {
            // get the user
            $scope.user = User.getById(userId);
            console.log($scope.user);
            $scope.formAction = 'Update';
            
        }
    
        // activated when user clicks the save button
        $scope.save = function() {
           
            if(!userId) {
                
                // create new item
                User.add($scope.user);
                
            } else {
            
                // update existing item 
                //User.updateById($scope.user.id, $scope.user);
                User.update($scope.user);
                
            }
            
            $location.url('/dashboard/users');
            
        };
       
    }
  ])
;
