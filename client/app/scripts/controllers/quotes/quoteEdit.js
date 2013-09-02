angular
    .module('app')
    .controller('quoteEditController', [
        '$rootScope',
        '$scope',
        '$location',
        '$routeParams',
        'authService',
        'quoteService',
        'stateService',
        'saveChangesPrompt',
        function($rootScope, $scope, $location, $routeParams, Auth, Quote, States, saveChangesPrompt) {

            $scope.modelObject = Quote;

            Auth.canUserDoAction('edit-quote');

            /**
             * Initiates function which checks for un saved changes when navigating away from the page
             * @todo move all this login into a directive, module?
             *
             */
            var removeViewLoad = $rootScope.$on('$viewContentLoaded', function() {
                // this will prompt users to save when the leave the page. 
                var forms = [$scope.quoteForm];
                saveChangesPrompt.init(forms);
                removeViewLoad();
            });
            
            // deletes an item and then gets the list again to reflect the deleted item.
            $scope.deleteItem = function(id) {
                
            };

            // empty quote object
            $scope.quote = {};
            var quote = {};

            // utility function to go back to the quote list
            // @todo this function is used in many places, find a way to streamline it
            $scope.cancel = function() {
                $location.url('/dashboard/quotes');
            };

            // get quote ID for edit pages
            var quoteId = $routeParams.id;
            $scope.formAction = 'Add';

            //States picker
            $scope.states = States.states();
            $scope.quote.state = $scope.states[0].abbreviation;

            // get and store the quote 
            if (quoteId) {
                // get the quote
                Quote.getById(quoteId).then(function(response) {
                    $scope.quote = response;
                    if (!$scope.quote) $location.path('/dashboard/quotes');
                });

                $scope.formAction = 'Update';
            } else {
                $scope.quote.status = 'Open';
            }

            // activated when user clicks the save button
            $scope.save = function() {

                if (!quoteId) {

                    // create new item
                    Quote.add($scope.quote).then(function(response) {
                        saveChangesPrompt.removeListener();
                        $location.url('/dashboard/quotes');
                    });

                } else {
                    // update existing item
                    Quote.update($scope.quote);
                    saveChangesPrompt.removeListener();
                    $location.url('/dashboard/quotes');
                }



            };

            $scope.tabs = ['Basic information'];

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

                if (!$scope.quote._id) return false;

                $scope.activeTab = tab;
            };



        }
    ]);
