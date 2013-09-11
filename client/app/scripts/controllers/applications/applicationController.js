angular
    .module('app')
    .controller('applicationController', [
        '$rootScope',
        '$scope',
        '$location',
        '$routeParams',
        'authService',
        'applicationService',
        'vendorService',
        function($rootScope, $scope, $location, $routeParams, Auth, Application, Vendor) {

            //////////////////////////////////////////////////////////////////////////////
            /////////////////////////////// Index Action ////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////
            
            $scope.index = function() {
                Auth.canUserDoAction('list-applications');
                $scope.searchBusiness = '';
                $scope.searchVendor = '';

                // Gets all the Applications
                Application.getAll().then(function(response) {
                    $scope.applications = response;

                    // For Each Application Attach a Vendor
                    _.each($scope.applications, function(item) {
                        Vendor.getById(item.vendorId).then(function(response) {
                            item.vendor = response;
                        });
                    });
                });

                // Expose private methods on the scope object in certain controller
                // actions if we want them to be accessible
                $scope.editItem = privates.editItem;
                $scope.deleteItem = privates.deleteItem;

            };

            //////////////////////////////////////////////////////////////////////////////
            //////////////////////////////// Edit Action ////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////
            
            $scope.edit = function() {
                Auth.canUserDoAction('edit-applications');
                $scope.modelObject = Application;

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
                    filepicker.pick(function(FPFile) {
                        console.log(FPFile.url);
                        $scope.application.logo.original = FPFile.url;
                        $scope.$apply();
                    });
                };

                $scope.cancel = privates.viewApplicationList;
                
                // get application ID for edit pages
                var applicationId = $routeParams.id;
                $scope.formAction = 'Add';

                // get and store the application 
                if (applicationId) {
                    // get the application
                    Application.getById(applicationId).then(function(response) {
                        $scope.application = response;
                    });

                    //console.log($scope.application);
                    $scope.formAction = 'Update';
                }

                // activated when user clicks the save button
                $scope.save = privates.save;

                /**
                 * Tab functions.
                 * @todo make into a direct
                 *
                 */
                $scope.activeTab = 0;
                $scope.isActiveTab = privates.isActiveTab;
                $scope.changeTab = privates.changeTab;

            };

            //////////////////////////////////////////////////////////////////////////////
            ////////////////////////////// Private Methods //////////////////////////////
            ////////////////////////////////////////////////////////////////////////////

            var privates = {};

            // sends user to url based on item id
            privates.editItem = function(itemId) {
                $location.url('dashboard/applications/' + itemId);
            };

            // deletes an item and then gets the list again to reflect the deleted item.
            privates.deleteItem = function(id) {
                Application.remove(id);
                Application.getAll().then(function(response) {
                    $scope.applications = response;
                });
            };

            // utility function to go back to the application list
            // @todo this function is used in many places, 
            // find a way to streamline it
            privates.viewApplicationList = function() {
                $location.url('/dashboard/applications');
            };

            // activated when user clicks the save button
            privates.save = function() {
                if (!applicationId) {

                    // create new item
                    Application.add($scope.application).then(function(response) {
                        //saveChangesPrompt.removeListener();
                        $location.url('/dashboard/applications');
                    });

                } else {
                    // update existing item
                    Application.update($scope.application);
                    saveChangesPrompt.removeListener();
                    $location.url('/dashboard/applications');
                }
            };

            // used for active class
            privates.isActiveTab = function(id) {
                return $scope.activeTab == id ? true : false;
            };


            // used to set active tab
            privates.changeTab = function(tab) {
                console.log(tab);
                if (!$scope.application._id) return false;
                $scope.activeTab = tab;
            };

        }
    ]);
