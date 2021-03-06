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
        'stateService',
        'CommonInterface',
        function($rootScope, $scope, $location, $routeParams, Auth, Application, Vendor, States, CommonInterface) {

            var applicationId;
            $scope.application = {};
            $scope.applications = [];
            
            // get states arrays for forms
            $scope.states1 = States.states();
            $scope.states2 = States.states();

            // Define possible statuses for our application.
            // Note this is not the most robust, and can 
            // easily get out of sync with the database,
            // but for now it works. 
            var statuses = [{
                value: 'new',
                label: 'New'
            }, {
                value: 'inProgress',
                label: 'In Progress'
            }, {
                value: 'complete',
                label: 'Completed'
            }];

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

                $scope.formatStatus = function(status) {
                    var display = _.where(statuses, {
                        value: status
                    });
                    return display.length ? display[0].label : '';
                };

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

                $scope.statuses = statuses;

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
                applicationId = $routeParams.id;
                $scope.formAction = 'Add';

                // get and store the application 
                if (applicationId) {
                    // get the application
                    Application.getById(applicationId).then(function(response) {
                        $scope.application = response;
                        
                        // if the Application is new, set it to pending after it is initially looked at
                        if($scope.application.status === 'new') {
                            $scope.application.status = 'inProgress';
                            Application.update($scope.application);
                        }
                        
                        // if no state is set, set default 
                        if(!$scope.application.company.businessAddress.state) {
                            $scope.application.company.businessAddress.state = $scope.states1[0].abbreviation; 
                        }
                        
                        if(!$scope.application.guarantor.homeAddress.state) {
                            $scope.application.guarantor.homeAddress.state = $scope.states2[0].abbreviation;
                        }
                        
                    });

                    //console.log($scope.application);
                    $scope.formAction = 'Update';
                }

                // activated when user clicks the save button
                $scope.save = privates.save;
                
                // activated when the user clickes the complete button
                $scope.complete = privates.complete;
                
                /**
                 * Tab functions.
                 * @todo make into a direct
                 *
                 */
                $scope.activeTab          = 0;
                $scope.isActiveTab        = privates.isActiveTab;
                $scope.changeTab          = privates.changeTab;
                $scope.showGlobalErrorMsg = privates.showGlobalErrorMsg;

                $scope.setStatus = function(newStatus) {
                    // this is a hack??? or not, for some reason the unsavedChanges directive moves the form
                    // into a child scope, so we need to access it here, or create a function to call
                    // which will set the directive dirty and workaround the scope issues
                    if ($scope.$$childTail && $scope.$$childTail.applicationForm) {
                        $scope.$$childTail.applicationForm.$setDirty();
                    }
                    // set our application status
                    $scope.application.status = newStatus;
                };

            };

            //////////////////////////////////////////////////////////////////////////////
            ////////////////////////////// Dashboard Action /////////////////////////////
            ////////////////////////////////////////////////////////////////////////////

            $scope.getNewApps = function() {
                privates.find({
                    'status': 'new'
                });
            };

            $scope.getActiveApps = function() {
                privates.find({
                    'status': {
                        '$nin': ['new', 'approved', 'denied']
                    }
                });
            };

            //////////////////////////////////////////////////////////////////////////////
            ////////////////////////////// Private Methods //////////////////////////////
            ////////////////////////////////////////////////////////////////////////////

            var privates = {};

            // Flexible find method
            privates.find = function(query) {
                Application.find(query).then(function(response) {
                    $scope.applications = response;
                });
            };

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
            privates.save = function(doRedirect) {
                CommonInterface.save({
                    Model: Application,
                    instance: $scope.application,
                    id: applicationId,
                    form: $scope.$$childTail.applicationForm,
                    redirectUrl: '/dashboard/applications',
                    doRedirect: doRedirect
                });
            };
            
            // activated when user clicks the complete button
            privates.complete = function() {
                $scope.application.status = 'complete';
                privates.save();
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

            privates.showGlobalErrorMsg = function(form) {
                var showError = false;
                _.each(form, function(val, key) {
                    if (val !== null) {
                        showError = true;
                    }
                });
                return showError;
            };

        }
    ]);
