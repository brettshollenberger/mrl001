angular
    .module('app')
    .controller('userEditController', [
        '$rootScope',
        '$scope',
        '$location',
        '$routeParams',
        'authService',
        'userService',
        'vendorService',
        function($rootScope, $scope, $location, $routeParams, Auth, User, Vendor) {

            $scope.modelObject = User;

            Auth.canUserDoAction('edit-users');

            // Options you can set user roles
            $scope.roles = [{
                value: 'salesRep',
                label: 'Sales Rep'
            }, {
                value: 'vendorRep',
                label: 'Vendor Rep'
            }, {
                value: 'admin',
                label: 'Admin'
            }];

            $scope.canChangeRole = function() {
                if ($scope.user._id === Auth.getCurrentUser()._id && $scope.user.role === 'admin') {
                    return false;
                } else {
                    return true;
                }
            };
            
            $scope.canDeleteUser = function() {
                if ($scope.user._id !== Auth.getCurrentUser()._id) {
                    return true;
                } else {
                    return false;
                }
            };

            // empty user object
            $scope.user = {};
            var user = {};

            // filepicker settings
            // @todo move to global config
            filepicker.setKey('AJNc7mfA3SCxs3gRjg7EBz');


            // pick logo function
            // simple callback assigans to user logo when complete
            $scope.pickImage = function() {
                filepicker.pick(function(FPFile) {
                    console.log(FPFile.url);
                    if (!$scope.user.avatar) {
                        $scope.user.avatar = {};
                    }
                    $scope.user.avatar.original = FPFile.url;
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
            if (userId) {
                // get the user
                User.getById(userId).then(function(response) {
                    $scope.user = response;

                    $scope.initialRole = $scope.user.role;

                    // get vendors for this user
                    // @todo this will now save when we udate the vendors, so we need to fix this! 
                    refreshVendors();
                });
                //console.log($scope.user);
                $scope.formAction = 'Update';
            }


            function udpateVendorRelationships() {
                // process each program, checking if its active for the vendor
                _.each($scope.vendors, function(item, key) {

                    // API saves an array of _ids
                    if (item.active) {

                        // check if the user is currently the sales or vendor rep for this vendor
                        if (item.salesRep && item.salesRep._id == $scope.user._id) item.salesRep = null;
                        if (item.vendorRep && item.vendorRep._id == $scope.user._id) item.vendorRep = null;

                        // now set their proper role
                        item[$scope.user.role] = $scope.user._id;
                        console.log(item);

                        Vendor.update(item);

                        //Vendor.update();
                    }

                });
            }

            // activated when user clicks the save button
            $scope.save = function(doRedirect) {

                if (!userId) {

                    // create new item
                    User.add($scope.user).then(function(response) {
                        $scope.user = response;
                        // this ensures that on the next save, vendorId is set and the previous if() doesnt run
                        userId = $scope.user._id;
                        //saveChangesPrompt.removeListener();

                        if (doRedirect) {
                            $location.url('/dashboard/users');
                        }

                    });

                } else {


                    if ($scope.initialRole !== $scope.user.role) {

                        console.log('NEED TO update users vendors');

                        if (confirm('Changing a users role will remove all their vendor associations. Are you sure you wish to continue?')) {

                            _.each($scope.vendors, function(item, key) {
                                // check if the user is currently the sales or vendor rep for this vendor

                                if (item.active) {
                                    if (item.salesRep && item.salesRep._id == $scope.user._id) item.salesRep = null;
                                    if (item.vendorRep && item.vendorRep._id == $scope.user._id) item.vendorRep = null;
                                    item.active = false;
                                }

                                console.log(item);
                                Vendor.update(item);
                            });

                            udpateVendorRelationships();

                            // update existing item
                            User.update($scope.user);

                            //saveChangesPrompt.removeListener();

                            if (doRedirect) {
                                $location.url('/dashboard/users');
                            }

                        }


                    } else {
                        udpateVendorRelationships();

                        // update existing item
                        User.update($scope.user);

                        //saveChangesPrompt.removeListener();

                        if (doRedirect) {
                            $location.url('/dashboard/users');
                        }
                    }


                }


            };


            // --------

            /**
             * Gets all the programs, making two calls and merging the results
             * In our view we sort and filter so the active programs appear first
             *
             */
            $scope.vendors = [];

            function refreshVendors() {

                User.getUsersNonVendors($scope.user._id).then(function(response) {
                    $scope.vendors = $scope.vendors.concat(response);
                });

                User.getUsersVendors($scope.user._id).then(function(response) {
                    _.each(response, function(item) {
                        item.active = true; // set to active for this vendor
                    });
                    $scope.vendors = $scope.vendors.concat(response);
                });

            }

            $scope.toggleActive = function(item) {
                item.active = item.active ? false : true;
            };


            // -------



            /**
             * Adds a sales reps id to the passed vendor
             * @param vendor {object} vendor object
             *
             */
            $scope.addVendor = function(vendor) {
                console.log('Vendor id: ' + vendor._id);

                vendor.salesRepId = $scope.user._id;

                Vendor.update(vendor).then(function(response) {
                    console.log(response);
                    refreshVendors();
                });
            };


            $scope.removeVendor = function(vendor) {

                console.log('Vendor id: ' + vendor._id);

                vendor.salesRepId = '';

                Vendor.update(vendor).then(function(response) {
                    console.log(response);
                    refreshVendors();
                });
            };

            $scope.tabs = ['Basic information', 'Vendors', 'Password'];

            $scope.tabs = [{
                name: 'Basic information',
                active: true,
                permission: 'none'
            }, {
                name: 'Vendors',
                active: true,
                permission: 'changeVendors-users'
            }, {
                name: 'Password',
                active: true,
                permission: 'changePassword-users'
            }];

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
                $scope.tabs[$scope.activeTab].selected = false;

                $scope.activeTab = tab;

                $scope.tabs[$scope.activeTab].selected = true;

            };


        }
    ]);
