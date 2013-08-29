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
        'saveChangesPrompt',
        function($rootScope, $scope, $location, $routeParams, Auth, User, Vendor, saveChangesPrompt) {

            Auth.canUserDoAction('edit-user');

            /**
             * Initiates function which checks for un saved changes when navigating away from the page
             * @todo move all this login into a directive, module?
             *
             */
            var removeViewLoad = $rootScope.$on('$viewContentLoaded', function() {
                // this will prompt users to save when the leave the page. 
                var forms = [$scope.basicForm, $scope.passwordForm];
                saveChangesPrompt.init(forms);
                removeViewLoad();
            });

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

                    // get vendors for this user
                    // @todo this will now save when we udate the vendors, so we need to fix this! 
                    refreshVendors();
                });
                //console.log($scope.user);
                $scope.formAction = 'Update';
            }

            // activated when user clicks the save button
            $scope.save = function(doRedirect) {

                if (!userId) {

                    // create new item
                    User.add($scope.user).then(function(response) {
                        $scope.user = response;
                        // this ensures that on the next save, vendorId is set and the previous if() doesnt run
                        userId = $scope.user._id;
                        saveChangesPrompt.removeListener();

                        if (doRedirect) {
                            $location.url('/dashboard/users');
                        }

                    });

                } else {
                    // update existing item
                    User.update($scope.user);

                    saveChangesPrompt.removeListener();

                    if (doRedirect) {
                        $location.url('/dashboard/users');
                    }
                }


            };


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


            function refreshVendors() {

                $scope.user.vendors = Vendor.getManyWhere('salesRepId', $scope.user._id);
                $scope.allVendors = Vendor.getManyWhereEmpty('salesRepId');

            }


            $scope.tabs = ['Basic information', 'Vendors', 'Password'];

            /**
             * Tab functions.
             * @todo make into a direct
             *
             */
            $scope.activeTab = 0;

            // used for active class
            $scope.isActiveTab = function(id) {
                return $scope.activeTab == id ? true : false;
            };

            // used to set active tab
            $scope.changeTab = function(tab) {

                console.log(tab);

                if (!$scope.user._id) return false;

                $scope.activeTab = tab;
            };
            
            
            
            /**
            * Update password
            * @todo move to seperate password Controller, following the MEAN.io controller approach
            * 
            * @note when converting to Anglar 1.2, we can user the form.$setPristine() method
            *
            */
            
            $scope.changeMessage = null;
            $scope.changestatus = null;
            
            $scope.originalForm = $scope.passwordForm;
            
            $scope.resetVars = function() {
                $scope.new_password = null;
                $scope.current_password = null;
                $scope.confirm_password = null;
            }
            
            $scope.resetVars();

            $scope.changePassword = function() {
                
                var data = {
                    _id: $scope.user._id,
                    new_password: $scope.new_password,
                    current_password: $scope.current_password
                }
                
                User.updatePassword(data).then(function(response) {
                    
                    console.log(response);
                    $scope.resetVars();
                    $scope.changestatus = true;
                    $scope.changeMessage = response;
                    $scope.passwordForm = angular.copy( $scope.originalForm);
                    
                }, function(err) {
                    
                    console.log(err);
                    $scope.changestatus = false;
                    $scope.changeMessage = err.data.message;
                    
                })
                
            }


        }
    ]);
