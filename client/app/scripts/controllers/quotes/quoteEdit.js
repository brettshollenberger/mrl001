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
        'CommonInterface',
        function($rootScope, $scope, $location, $routeParams, Auth, Quote, States, CommonInterface) {

            $scope.modelObject = Quote;

            Auth.canUserDoAction('edit-quotes');

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
            $scope.save = function(doRedirect) {
                CommonInterface.save({
                    Model: Quote,
                    instance: $scope.quote,
                    id: quoteId,
                    form: $scope.$$childTail.quoteForm,
                    redirectUrl: '/dashboard/quotes',
                    doRedirect: doRedirect,
                    postSaveHook: function(response) {
                        if (response && response.meta) { $scope.serverError = "There was an error saving the form."; }
                        if (response && response.meta && response.meta.message) { $scope.serverError = "Form not saved. The server returned the following error: " + response.meta.message; }
                        if (!response.meta) { $scope.serverError = ""; }
                    }
                });
            };

            $scope.showGlobalErrorMsg = function(form) {
                var showError = false;
                _.each(form, function(val, key) {
                    if (val !== null) {
                        showError = true;
                    }
                });
                return showError;
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
