// @todo test in IE, especially .form and previous element  selctors

angular
    .module('app')
    .directive("required", ['$window',
        function($window) {

            // global config
            var options = {
                theClass: 'required-message-inserted',
                message: '<span class="required-message pull-right"><small>Fields marked <sup class="required">*</sup> are required</small></span>',
                requiredMessage: '<sup class="required">*</sup>'
            };

            return {
                restrict: "A",
                replace: false,
                link: function(scope, element, attrs) {

                    // get the elements name 
                    // if no name is set, we can't find the inputs label. So get outta here! 
                    var elementName = element[0].name;
                    if (!elementName) return;

                    // get label, assuming label is the first previous element
                    var elemLabel = angular.element(element[0].previousElementSibling);

                    // get the form
                    var elemForm = angular.element(element[0].form);

                    // @todo test checks are working... do we need to user .length? 
                    if (elemForm && !elemForm.hasClass(options.theClass)) {
                        elemForm.append(options.message).addClass(options.theClass);
                    }

                    // add required message to elements label
                    if (elemLabel) {
                        elemLabel.append(options.requiredMessage);
                    }


                }
            };
        }
    ]);
