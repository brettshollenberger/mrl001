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
        // @todo make a global service
        // service should have a global config for setting the key
        // and chainable methods
        filepicker.setKey('AJNc7mfA3SCxs3gRjg7EBz');
      
        // pick logo function
        // simple callback assigns to vendor logo when complete
        $scope.pickImage = function() {
            filepicker.pick(function(FPFile){
                console.log('Filepicker: upload done');
                console.log(FPFile);
                
                // convert image to png
                // this is needed because jpgs that are uploaded in CMYK color space
                // will break in IE. @see http://stackoverflow.com/questions/1204288/jpeg-shows-in-firefox-but-not-ie8
                // for detailed discussion
                // the solve is to convert the image and then save
                // convert and store the image
                // @note we are saving to s3, but we don't have s3 setup on filepicker... where do images go? 
                // @todo make sure file exists after 24 hours. 
                filepicker.convert(FPFile, {format: 'png'}, {location: 'S3'}, function(new_InkBlob){
                    
                    console.log('Filepicker: convert and store done');
                    console.log(new_InkBlob);
                    
                    // remove the orginal picked file, since we are storing the converted file
                    filepicker.remove(FPFile, function() {
                        console.log('Removed the orginal file');
                    });
                    
                    // check the vendor object to make sure the logo exists.
                    // if we didn't do this, an error would be thrown when creating a new vendor
                    if(!$scope.vendor.logo) {
                        $scope.vendor.logo = {};
                    }
                
                    // finally we set the objects property to point to url from filepicker
                    $scope.vendor.logo.original = new_InkBlob.url;
                    $scope.$apply();
          
                });
                
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
        $scope.save = function(doRedirect) {
           
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
                $scope.vendor = Vendor.add($scope.vendor);
                
            } else {
            
                // update existing item 
                //Vendor.updateById($scope.vendor.id, $scope.vendor);
                Vendor.update($scope.vendor);
                
            }

            if(doRedirect) {
                $location.url('/dashboard/vendors'); 
            }

            
            
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
        
        
        $scope.addSalesRep = function(id) {
            
            console.log($scope.salesRepId);
            $scope.salesRepId = '';
            $scope.vendor.salesRep = User.getById(id);
            User.addVendorToSalesRep($scope.vendor.id, id);
            /*
$scope.vendor.salesRep = User.getById($scope.salesRepId);
            User.addVendorToSalesRep($scope.vendor.id, $scope.salesRepId);
*/
            
            //$scope.vendor.salesRep = 
             
        };
        
        
        $scope.removeSalesRep = function(id) {
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
