var myApp = angular.module('unsavedNew',[])

.directive('unsavedWarningGroup', ['$rootScope', function($rootScope) {
    return {
        scope: true,
        controller: function() {
            
            // Controller scopped variables
            var message = "screeny!";
            var allForms = [];
            var areAllFormsClean = true;
            var removeFunction = function() {};
            
            // messages. Change here is you need 
            var messages = {
                navigate: "You will loose unsaved changes if you leave this page",
                reload: "You will loose unsaved changes if you reload this page"
            };
            
            // Checks all forms, if any one is dirty will return true
            function allFormsClean() {
                angular.forEach(allForms, function(item, idx) {
                    console.log(item);
                    if(item.$dirty) {
                        console.log('FOUND AT LEAST 1 DIRTY FORM'); 
                        areAllFormsClean = false;
                    }
                });
                return areAllFormsClean; // no dirty forms were found
            }
            
            
            this.doSomethingScreeny = function() {
                alert(message);
            };
            
            this.changeText = function() {
                message = 'matt';
            };
            
            // pass form controller and adds it to the array
            this.init = function(form) {
                console.log('Adding to all forms');
                allForms.push(form);
            };
            
            this.removePrompt = function() {
                console.log('CHOOSING TO REMOVE THIS FUNCTION');
                allForms = []; // reset forms array
                removeFunction();
                window.onbeforeunload = null;
            };
            
            // Function called when user tries to close the window
            this.confirmExit = function() {

                console.log('REFRESH / CLOSE detected');

                // @todo this could be written a lot cleaner! 
                if (!allFormsClean()) {
                    return messages.reload;
                } else {
                    removeFunction();
                    window.onbeforeunload = null;
                }
            };
            
            // bind to window close
            window.onbeforeunload = this.confirmExit;
            
            // calling this function later will unbind this, acting as $off()
            removeFunction = $rootScope.$on('$locationChangeStart', function(event, next, current) {

                console.log('ROUTE CHANGE detected');

                // @todo this could be written a lot cleaner! 
                if (!allFormsClean()) {
                    if (!confirm(messages.navigate)) {
                        event.preventDefault(); // user clicks cancel, wants to stay on page 
                    } else {
                        removeFunction(); // unbind our `locationChangeStart` listener
                        window.onbeforeunload = null; // clear our the `refresh page` listener
                    }
                } else {
                    removeFunction(); // unbind our `locationChangeStart` listener
                    window.onbeforeunload = null; // clear our the `refresh page` listener
                }

            });
            
        }
    };
}])

.directive('unsavedWarningClear', function() {
    return {
        scope: true,
        require: '^unsavedWarningGroup',
        controller: function($scope) {
            this.componentFunction = function() {
                $scope.screenCtrl.doSomethingScreeny();
            };
            
            this.changeText = function() {
                $scope.screenCtrl.changeText();
            };
        },
        link: function(scope, element, attrs, screenCtrl) {
            scope.screenCtrl = screenCtrl;
            
            element.bind('click', function(event) {
                screenCtrl.removePrompt();
            });
            
        }
    };
})

.directive('unsavedWarningForm', function() {
    return {
        require: ["^unsavedWarningGroup", 'form'],
        link: function(scope, formElement, attrs, controllers) {
            
            // controllers will be array in order they were required
            // save them here for ease of use
            var screenCtrl = controllers[0];
            var formCtrl = controllers[1];
        
            // initialize
            screenCtrl.init(formCtrl);
            
            // bind to form submit, this makes the typical submit button work
            // in addition to the ability to bind to a seperate button which clears warning
            formElement.bind('submit', function(event) {
                screenCtrl.removePrompt();
            });
            
        }
    };
})
;