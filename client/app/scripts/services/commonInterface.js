angular
    .module('app')
    .factory('CommonInterface', function($location, FormHelper) {
        return {
            save: function(options) {
                // Strategy pattern; hand in an object to perform local
                // pre-save setup, if necessary
                var strategy    = options.strategy || function() {};

                // Service object supporting thenable interface with add & save methods
                var Model       = options.Model;

                // The local instance of this model 
                var instance    = options.instance;

                // The routeParams id
                var id          = options.id;

                // The form to reset to pristine after save
                var form        = options.form;

                // The redirect URL, if doRedirect is set to true
                var redirectUrl = options.redirectUrl;

                // Whether or not to redirect. If false, the save method will set the form
                // to pristine and stay on the same page. 
                var doRedirect  = options.doRedirect || false;

                // ********** Private Methods ************ //

                function postSaveLogic() {
                    if (doRedirect) {
                        $location.url(redirectUrl);
                    } else {
                        FormHelper.setPristine(form);
                    }
                }

                // ******** Execute the Strategy ******** //

                strategy();

                // ********* Validate the form ********* //
                // ********* Save the model if ********* //
                // ********* Valid, or display ********* //
                // *************** errors ************** //
                if (form.$valid) {
                    successCallback();
                } else {
                    $rootScope.Validator.validateForm(form);
                }

                function successCallback() {
                    // ********* Perform Model.add ********* //
                    // ******** if not on show page ******** //
                    if (!id) {
                        Model.add(instance).then(function(response) {
                            instance = response;
                            id       = instance._id;
                            postSaveLogic();
                        });

                    // ******* Perform Model.update ******** //
                    // ********* if on show page ********** //

                    } else {

                        Model.update(instance).then(function(response) {
                            instance = response;
                            postSaveLogic();
                        });

                    }
                }
                
            }
        };
    });
