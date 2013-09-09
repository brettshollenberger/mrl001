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

            $scope.modelObject = Vendor;
            
            Auth.canUserDoAction('edit-vendors');

            $scope.tabs = [
                {name: 'Basic information', active: true, permission: 'none'}, 
                {name: 'Marlin Sales Rep', active: true, permission: 'changeSalesRep-vendors'},  
                {name: 'Rate Sheets', active: true, permission: 'changeRateSheets-vendors'},  
                {name: 'Tools', active: true, permission: 'changeToolOptions-vendors'}
            ];


            // empty vendor object
            $scope.vendor = {};
            $scope.vendor.salesRepId = '';
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
                filepicker.pick(function(FPFile) {
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
                    filepicker.convert(FPFile, {
                        format: 'png'
                    }, {
                        location: 'S3'
                    }, function(new_InkBlob) {

                        console.log('Filepicker: convert and store done');
                        console.log(new_InkBlob);

                        // remove the orginal picked file, since we are storing the converted file
                        filepicker.remove(FPFile, function() {
                            console.log('Removed the orginal file');
                        });

                        // check the vendor object to make sure the logo exists.
                        // if we didn't do this, an error would be thrown when creating a new vendor
                        if (!$scope.vendor.logo) {
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
            if (vendorId) {

                // get the vendor
                Vendor.getById(vendorId).then(function(response) {
                    $scope.vendor = response;

                    if ($scope.vendor.salesRepId) {
                        $scope.vendor.salesRep = User.getById($scope.vendor.salesRepId);
                    }

                    _.each($scope.vendor.tools, function(tool) {
                        $scope.tabs.push(tool);
                        
                        $scope.tabs[3].permission = 'changeLocationOptions-vendor';
                        $scope.tabs[4].permission = 'changeQuoterOptions-vendor';
                        
                        console.log($scope.tabs);
                        
                    });

                    updatePrograms();
                });

                $scope.formAction = 'Update';
            }

            // activated when user clicks the save button
            $scope.save = function(doRedirect) {
                
                // clear our variables
                $scope.vendor.programs = []; // clear the program array
                $scope.vendor.programCustomNames = []; // where we store custom displayName data
                
                // process each program, checking if its active for the vendor
                _.each($scope.programs, function(item, key) {
                   
                   // API saves an array of _ids
                   if(item.active) $scope.vendor.programs.push(item._id);
                   
                   // if user has set a custom display name
                   // we push the whole object, but API will only save the id and displayName
                   if(item.active && item.displayName) $scope.vendor.programCustomNames.push(item); 
                    
                });
                
                if (!vendorId) {

                    // create new item
                    Vendor.add($scope.vendor).then(function(response) {
                        //console.log('VendorEdit Add Vendor');
                        //console.log(response);
                        $scope.vendor = response;
                        vendorId = $scope.vendor._id;
                        //saveChangesPrompt.removeListener();

                        if (doRedirect) {
                            $location.url('/dashboard/vendors');
                        }

                    });

                } else {

                    // this ensures that on the next save, vendorId is set and the previous if() doesnt run

                    //saveChangesPrompt.removeListener();

                    // update existing item
                    Vendor.update($scope.vendor);

                    if (doRedirect) {
                        $location.url('/dashboard/vendors');
                    }

                }

            };

            $scope.toggleActive = function(item) {
                item.active = item.active ? false : true;
            };

            $scope.addProgram = function(program) {

                var programs = $scope.vendor.programs || [];
                programs.push(program._id);
                $scope.vendor.programs = programs;
/*

                var obj = {
                    _id : $scope.vendor._id,
                    programs : programs
                };

                Vendor.update(obj).then(function() {
                    // update programs
                    updatePrograms();
                });
*/

            };


            $scope.removeProgram = function(program) {

                var programs = $scope.vendor.programs || [];
                programs.splice(programs.indexOf(program._id), 1);
                $scope.vendor.programs = programs;
                
/*

                var obj = {
                    _id : $scope.vendor._id,
                    programs : programs
                };

                Vendor.update(obj).then(function() {
                    // update programs
                    updatePrograms();
                });
*/

            };
            
            
            /**
            * Gets all the programs, making two calls and merging the results
            * In our view we sort and filter so the active programs appear first
            *
            */
            $scope.programs = [];

            function updatePrograms() {
            
                // get the vendors programs
                Program.getAllForVendorId($scope.vendor._id).then(function(response) {
                    _.each(response, function(item) {
                        item.active = true; // set to active for this vendor
                    });
                    $scope.programs = $scope.programs.concat(response);
                });
                
                Program.getAllNotIn($scope.vendor._id).then(function(response) {
                    _.each(response, function(item) {
                        item.active = false; // set to active for this vendor
                    });
                    $scope.programs = $scope.programs.concat(response);
                });

            }

            /**
             * Add sales rep to a vendor
             *
             */
            $scope.addSalesRep = function(id) {

                var obj = {
                    _id : $scope.vendor._id,
                    salesRep : id
                };

                Vendor.update(obj).then(function(response) {
                    console.log('Vendor is now updated.');
                    $scope.vendor.salesRep = response.salesRep;
                });
            };

            /**
             * Removes sales rep from a vendor
             *
             */
            $scope.removeSalesRep = function(id) {

                var obj = {
                    _id : $scope.vendor._id,
                    salesRep : null
                };

                Vendor.update(obj).then(function(response) {
                    console.log('Vendor is now updated.');
                    $scope.vendor.salesRep = null;
                });
            };


            /**
             * Tab functions.
             * @todo make into a directive
             * @todo make observe / boardcast so we can watch for changes in this scope
             *
             */

            $scope.activeTab = 0;
            $scope.tabs[$scope.activeTab].selected = true;

            // used for active class
            $scope.isActiveTab = function(id) {
                return $scope.tabs[id] && $scope.tabs[id].selected ? true : false;
            };

            // used to set active tab
            $scope.changeTab = function(tab) {

                // @todo, this will need to be more generic if we make into a directive. 
                if (!$scope.vendor._id) return false;
                $scope.tabs[$scope.activeTab].selected = false;

                $scope.activeTab = tab;
                
                $scope.tabs[$scope.activeTab].selected = true;
                
            };

            $scope.$watch('activeTab', function(newValue, oldValue) {

                // only make map if user is switching to tab 4, and there is no map made
                if (newValue === 4) {
                    if (!$scope.isMapMade) makeMap();
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
            // centers on Marlin Finance HQ!
            $scope.map.center = {
                latitude: 39.947017,
                longitude: -74.950102
            };


            /**
             * Generate map, optionally create a marker for the vendor if they have geo data.
             *
             */

            function makeMap() {

                console.log('Making map now! Geo data for vendor is:');

                $scope.isMapMade = true;

                // if vendor has geo set, lets make map center from this
                if ($scope.vendor.geo) {

                    console.log('VENDOR HAS EXISTING GEO DATA, centering the map now on their lcoation');

                    $scope.map.center = {
                        latitude: $scope.vendor.geo.latitude,
                        longitude: $scope.vendor.geo.longitude
                    };
                    
                    console.log($scope.map.center);

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
                var addr = v.businessAddress.address1 + ' ' + v.businessAddress.address2 + ' ' + v.businessAddress.city + ' ' + v.businessAddress.state + ' ' + v.businessAddress.zip;
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
                if (type && type === 'locationSearch') {

                    console.log('RETURN GEO DATA IS: ');
                    console.log(data);

                    $scope.map.center = {
                        latitude: data.lat,
                        longitude: data.lng
                    };

                    $scope.vendor.geo = {
                        latitude: data.lat,
                        longitude: data.lng
                    };

                    // make a marker from our vendor
                    makeMarkerFromVendor();
                    
                    // force our form to be dirty, showing the save button
                    $scope.locationForm.$setDirty();

                    $scope.$apply();

                }
            });
            
            $scope.message = {};
            
            var listener2 = $rootScope.$on('event:geo-location-failure', function(event, data) {
                $scope.message.map = 'Failed to lookup address. Try again later';
                $timeout(function() {
                   $scope.message.map = null; 
                }, 2200);
            });

            /**
            * Called to remove the google callback that is called 
            * when the address lookup finishes
            *
            */
            $rootScope.$on('$routeChangeSuccess', function() {
                listener();
                listener2();
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
                    showWindow: true,
                    closeClick: function() {},
                    infoWindow: '<img class="img-medium" src="' + $scope.vendor.logo.original + '" />',
                    name: $scope.vendor.name,
                    destAddress: 'http://maps.google.com/maps?daddr=' + genereateSingleLineAddress($scope.vendor.businessAddress)
                };
                
                $scope.map.zoom = 16;

                $scope.vendorMarker = [newMarker];
                
                console.log('VENDOR MARKER is...');
                console.log($scope.vendorMarker);

                // doesnt seem to be needed
                // was an attempt to get the map to re render
                //
                //var win = angular.element(window);
                //$timeout(function() {
                //    win.triggerHandler('Resize');
                //});
                                
            }


            /**
             * Used to check the current object, against the original returned object
             * This is useful when you are editing an object outside of a form, where form.$dirty wont work.
             *
             *
             */
/*
            var existingObject = null;

            $scope.$watch('vendor', function(newValue, oldValue) {

                // if we have an _id, we can assume the object came from the DB.
                // so store a copy of it for comparisions later
                if (newValue._id) {
                    console.log('COMAPRE : Asigning existingObject');
                    existingObject = angular.copy(newValue, existingObject);
                }

            });

            $scope.userHasEditied = function() {

                // in this case, its likely the user is creating the object from scratch
                // in this case, we'll have another check on the form for valid form, which should make
                // the button still be disabled, even though we are returning true here
                if (existingObject === null) return true;

                //console.log('COMAPRE : CHECKING OBJECTS MATCH');
                var doesMatch = angular.equals(existingObject, $scope.vendor);
                console.log(doesMatch);

                return !doesMatch;

            };
*/




        }
    ]);
