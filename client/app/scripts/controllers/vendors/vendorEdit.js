angular
  .module('app')
  .controller('vendorEditController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'authService',
    'vendorService',
    'programService',
    'stateService',
    'userService',
    function($rootScope, $scope, $location, $routeParams, Auth, Vendor, Program, States, User) {
       
        Auth.canUserDoAction('edit-vendor');
       
        // empty vendor object
        $scope.vendor = {};
        var vendor = {};
        // empty logo object, or filepicker gets mad :)
        $scope.vendor.logo = {};
        
        //States picker
        $scope.states = States.states();
        $scope.vendor.state = $scope.states[0].abbreviation;
        
        // get all the reps
        $scope.allReps = User.getAll();
        console.log($scope.allReps);
      
        // filepicker settings
        // @todo move to global config
        filepicker.setKey('AJNc7mfA3SCxs3gRjg7EBz');
      
        // pick logo function
        // simple callback assigns to vendor logo when complete
        $scope.pickImage = function() {
            filepicker.pick(function(FPFile){
              console.log(FPFile.url);
              
              if(!$scope.vendor.logo) {
                  $scope.vendor.logo = {};
              }
              $scope.vendor.logo.original = FPFile.url;
              $scope.$apply();
            });  
        };
      
        // utility function to go back to the vendor list
        // @todo this function is used in many places, find a way to streamline it
        $scope.cancel = function() {
            $location.url('dashboard/vendors');
        };
        
        // get vendor ID for edit pages
        var vendorId = $routeParams.id;
        $scope.formAction = 'Add';
        
        
        // get and store the vendor 
        if(vendorId) {
            
            // make sure we have an integer, as User.getOneWhereIn gets picky with this :)
            vendorId = parseInt(vendorId, 10);
        
            // get the vendor
            $scope.vendor = Vendor.getById(vendorId);
            $scope.vendor.salesRep = User.getOneWhereIn('vendorIds',  vendorId);
            
            console.log($scope.vendor.salesRep);
            $scope.formAction = 'Update';
        }
    
        // activated when user clicks the save button
        $scope.save = function() {
           
            var needsUpdate = [];
            
            _.each($scope.vendorPrograms, function(item) {
   
                if(item.displayName !== undefined && item.displayName !== '') {
                    delete item.name;
                    needsUpdate.push(item);
                } 
                
            });
            
            _.merge($scope.vendor.programs, needsUpdate);
           
            if(!vendorId) {
                
                // create new item
                Vendor.add($scope.vendor);
                
            } else {
            
                // update existing item 
                //Vendor.updateById($scope.vendor.id, $scope.vendor);
                Vendor.update($scope.vendor);
                
            }

            $location.url('/dashboard/vendors');
            
        };

        $scope.addProgram = function(program) {
            
            // add program thorugh api service 
            $scope.vendor.programIds = Vendor.addProgramToVendor(program.id, $scope.vendor.id);
            
            // update programs
            updatePrograms();
        };
        
        
        $scope.removeProgram = function(program) {
            
            // clear out any diplayName that wasnt saved
            delete program.displayName;
            
            // save to the vendorService
            $scope.vendor.programIds = Vendor.removeProgramFromVendor(program.id, $scope.vendor.id);
            
            // update programs
            updatePrograms();
            
        };
        
        function updatePrograms() {
            
            // get the vendors programs
            $scope.vendorPrograms = Program.getManyByIds($scope.vendor.programIds);
            
            // merge into the vendors.programs data, which may contain custom displayNames
            _.merge($scope.vendorPrograms, $scope.vendor.programs);
            
            // get the programs this vendor is not using
            $scope.programs = Program.getManyByNotIds($scope.vendor.programIds);
        }
        
        // loads programs the first time
        updatePrograms();
        
        
        $scope.addSalesRep = function() {
            
            console.log('User id: ' + $scope.vendorId);
            
            $scope.vendor.salesRep = User.getById($scope.salesRepId);
            User.addVendorToSalesRep($scope.vendor.id, $scope.salesRepId);
            
            //$scope.vendor.salesRep = 
             
        };
        
        
        $scope.removeSalesRep = function() {
            User.removeVendorFromSalesRep($scope.vendor.id, $scope.vendor.salesRep.id);  
            $scope.vendor.salesRep = '';
        };
        
        
        
        /**
        * Tab functions. 
        * @todo make into a direct
        *
        */
        $scope.activeTab = 1;
        
        // used for active class
        $scope.isActiveTab = function(id) {
            return $scope.activeTab == id ? true : false;  
        };
        
        // used to set active tab
        $scope.changeTab = function(tab) {
            
            if(!$scope.vendor.id) return false;
            
            $scope.activeTab = tab;
        };
        
        
    }
  ])
;
