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
    'googleMapsService',
    '$timeout',
    '$window',
    function($rootScope, $scope, $location, $routeParams, Auth, Vendor, Program, States, User, googleMaps, $timeout, $window) {
       
        Auth.canUserDoAction('edit-vendor');
        
        $scope.tabs = ['Basic information', 'Marlin Sales Rep', 'Rate Sheets', 'Legal Terms'];
       
        // empty vendor object
        $scope.vendor = {};
        var vendor = {};
        // empty logo object, or filepicker gets mad :)
        $scope.vendor.logo = {};
        
        //States picker
        $scope.states = States.states();
        $scope.vendor.state = $scope.states[0].abbreviation;
        
        // get all the reps
        User.getAll().then(function(response) {
            $scope.allReps = response;
        });
      
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
                
            // get the vendor
            Vendor.getById(vendorId).then(function(response){
                $scope.vendor = response;
                
                $scope.vendor.salesRep = User.getOneWhereIn('vendorIds',  vendorId);
                
                if($scope.vendor.locatorEnabled) {
                    $scope.tabs.push('Locator Tool');
                }
                
                updatePrograms();
            });
            
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
                Vendor.add($scope.vendor).then(function(response) {
                    //console.log('VendorEdit Add Vendor');
                    //console.log(response);
                    $scope.vendor = response;
                    vendorId = $scope.vendor._id;
                });
                
            } else {
                
                // this ensures that on the next save, vendorId is set and the previous if() doesnt run
                
                console.log('Updating vendor # ' + vendorId);
            
                // update existing item
                Vendor.update($scope.vendor);
            }

            if(doRedirect) {
                $location.url('/dashboard/vendors'); 
            }
        };

        $scope.addProgram = function(program) {
            
            // add program thorugh api service 
            $scope.vendor.programIds = Vendor.addProgramToVendor(program._id, $scope.vendor._id);
            
            // update programs
            updatePrograms();
        };
        
        
        $scope.removeProgram = function(program) {
            
            // clear out any diplayName that wasnt saved
            delete program.displayName;
            
            // save to the vendorService
            $scope.vendor.programIds = Vendor.removeProgramFromVendor(program._id, $scope.vendor._id);
            
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
        
        
        
        
        $scope.addSalesRep = function(id) {
            
            $scope.salesRepId = '';
            
            User.getById(id).then(function(response){
                $scope.vendor.salesRep = response;
            });
            
            User.addVendorToSalesRep($scope.vendor._id, id);
            /*
            $scope.vendor.salesRep = User.getById($scope.salesRepId);
            User.addVendorToSalesRep($scope.vendor._id, $scope.salesRepId);
            */
            
            //$scope.vendor.salesRep = 
             
        };
        
        
        $scope.removeSalesRep = function(id) {
            User.removeVendorFromSalesRep($scope.vendor._id, $scope.vendor.salesRep._id);  
            $scope.vendor.salesRep = '';
        };
        
        
        /**
        * Tab functions. 
        * @todo make into a directive
        * @todo make observe / boardcast so we can watch for changes in this scope
        *
        */
        $scope.activeTab = 0;
        
        // used for active class
        $scope.isActiveTab = function(id) {
            return $scope.activeTab == id ? true : false;  
        };
        
        // used to set active tab
        $scope.changeTab = function(tab) {
            
            // @todo, this will need to be more generic if we make into a directive. 
            if(!$scope.vendor._id) return false;

            $scope.activeTab = tab;
        };
        
        $scope.$watch('activeTab', function(newValue, oldValue) {
            
            // only make map if user is switching to tab 4, and there is no map made
            if(newValue === 4) {
                if(!$scope.isMapMade) makeMap();
            }
        });
        
        
        /**
        * Variables for map
        *
        */
        $scope.vendorMarker = [];
        
        $scope.map = {};
        
        $scope.map.zoom = 4;
        
        // default center point
        // @todo find better center point! 
        $scope.map.center = {
            latitude: 45,
            longitude: -73
        };
        
        
        /**
        * Generate map, optionally create a marker for the vendor if they have geo data.
        *
        */
        function makeMap() {
            
            console.log('Making map now! Geo data for vendor is:');
        
            $scope.isMapMade = true;

            // if vendor has geo set, lets make map center from this
            if($scope.vendor.geo) {
                
                $scope.map.center = {
                    latitude: $scope.vendor.geo.latitude,
                    longitude: $scope.vendor.geo.longitude
                };
                
                console.log('Updated the center');
                
                makeMarkerFromVendor();
            }
        }
        
        /**
        * Find geo location for vendor from address
        * On success, a event will be broadcast with geo data
        *
        */
        $scope.findMyLocation = function() {
            var v = $scope.vendor;
            var addr = v.businessAddress.address1+' '+v.businessAddress.address2+' '+v.businessAddress.city+' '+v.businessAddress.state+' '+v.businessAddress.zip;
            console.log('User is searching by location:' + addr);  
            googleMaps.geo(addr, 'locationSearch');
        };
        
        
        /**
        * Callback to get deo data and set marker, set vendor geo data
        * @note this should hit the API for an auto save? 
        *
        */
        var listener = $rootScope.$on('event:geo-location-success', function(event, data, type) {
            // update center based on search 
            if(type && type === 'locationSearch') {
            
                console.log('Saving geo return data: ');
                console.log(data);
                
                $scope.map.center = {
                    latitude: data.lat,
                    longitude: data.lng
                };
                
                console.log('vendor id is: ' + $scope.vendor._id);
                
                $scope.vendor.geo = {
                    latitude: data.lat,
                    longitude: data.lng
                };
                
                console.log($scope.map.center);
                
                // make a marker from our vendor
                makeMarkerFromVendor();
                
                $scope.$apply();
                
            }
        });
        
        $rootScope.$on('$routeChangeSuccess', function() {
            console.log('removing google callback ');
            listener();
        });
        
        function genereateSingleLineAddress(businessAddress) {
           
           var address = _.filter(businessAddress, function(item) {
               return item !== undefined && item !== "";
           });
           
           var addr = '';
           
           _.each(address, function(item) {
               addr += item + ' ';
           });
           
           return addr;
       } 
        
        
        /**
        * Will generate a marker for a vendor
        * @note assumes geo data is in place to create the marker
        *
        */
        function makeMarkerFromVendor() {
            
            console.log('VENDOR GEO data is...');
            console.log($scope.vendor.geo);
            
            // build marker object from vendor info
            // @note this is duplicate code from locator tool, move to service? 
            // we need to create the marker from the vendor
                var newMarker = {
                    latitude: $scope.vendor.geo.latitude,
                    longitude: $scope.vendor.geo.longitude,
                    label: $scope.vendor.name,
                    distance: $scope.vendor.geo.distance, // gets miles
                    logo: $scope.vendor.logo.original,
                    businessAddress: $scope.vendor.businessAddress,
                    infoWindow: '<img class="img-medium" src="'+$scope.vendor.logo.original+'" />',
                    name: $scope.vendor.name,
                    destAddress: 'http://maps.google.com/maps?daddr=' + genereateSingleLineAddress($scope.vendor.businessAddress)
                };
                
                console.log('VENDOR NEW MARKER is...');
                console.log(newMarker);
                
            
            $scope.vendorMarker = [newMarker];
            
            // @note we need to find an auto way to fit here!
            $scope.map.zoom = 16;
            
            var win = angular.element(window);
            console.log('window');
            win.triggerHandler('resize');
            
        }
        
        
    }
  ])
;
