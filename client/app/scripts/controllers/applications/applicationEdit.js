angular
  .module('app')
  .controller('applicationEditController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'authService',
    'applicationService',
    function($rootScope, $scope, $location, $routeParams, Auth, Application) {
       
        Auth.canUserDoAction('edit-application');
       
        // empty application object
        $scope.application = {};
        var application = {};
        // empty logo object, or filepicker gets mad :)
        $scope.application.logo = {};
      
        // filepicker settings
        // @todo move to global config
        filepicker.setKey('AJNc7mfA3SCxs3gRjg7EBz');
      
        // pick logo function
        // simple callback assigans to application logo when complete
        $scope.pickImage = function() {
            filepicker.pick(function(FPFile){
              console.log(FPFile.url);
              $scope.application.logo.original = FPFile.url;
              $scope.$apply();
            });  
        };
      
        // utility function to go back to the application list
        // @todo this function is used in many places, find a way to streamline it
        $scope.cancel = function() {
            $location.url('/dashboard/applications');
        };
        
        // get application ID for edit pages
        var applicationId = $routeParams.id;
        $scope.formAction = 'Add';
        
        
        // get and store the application 
        if(applicationId) {
            // get the application
            $scope.application = Application.getById(applicationId);
            console.log($scope.application);
            $scope.formAction = 'Update';
            
        }
    
        // activated when user clicks the save button
        $scope.save = function() {
           
            if(!applicationId) {
                
                // create new item
                Application.add($scope.application);
                
            } else {
            
                // update existing item 
                //Application.updateById($scope.application.id, $scope.application);
                Application.update($scope.application);
                
            }
            
            $location.url('/dashboard/applications');
            
        };
        
        
        
    }
  ])
;
