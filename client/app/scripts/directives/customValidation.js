angular
    .module('app')
    .directive('decimalPlaces', function() {
        return {
            link: function(scope, ele, attrs) {
                ele.bind('keypress', function(e) {
                    var newVal = ele.val() + (e.charCode !== 0 ? String.fromCharCode(e.charCode) : '');

                    // get the actual letter user has entered
                    var theCharacter = String.fromCharCode(e.charCode);

                    console.log(ele.val().split(".").length);

                    if (theCharacter.search(/\d/) === -1) {
                        console.log('not a number, checking for period (.)');

                        // temp fix to allow '-' to indicate null value on rate sheets
                        if (theCharacter.search(/\-/) !== -1 && ele.val().split("-").length <= 1) {
                            return true;
                        }

                        if (theCharacter.search(/\./) === -1 || ele.val().split(".").length > 1) {
                            console.log('Too many periods (.)');
                            e.preventDefault();
                        }
                    }

                    if (theCharacter.indexOf('0') === 1 && theCharacter.search(/\./) === -1 && ele.val().split(".").length === 1) {
                        console.log('User is trying to enter a non-decimal number');
                        e.preventDefault();
                    }

                    if (ele.val().search(/\d+\.\d{3}/) === 0 && newVal.length > ele.val().length) {
                        //e.preventDefault();
                    }

                    if (ele.val().search(/\.\d{3}/) === 0 && newVal.length > ele.val().length) {
                        //e.preventDefault();
                    }


                });
            }
        };

    })
    .directive('numberOnly', function() {
        return {
            require: '?ngModel',
            link: function(scope, ele, attrs, ctrl) {
                var matcher, matchedString, input;

                if (!ctrl) return;

                // force truthy in case we are on non-input el
                attrs.numberOnly = true;

                var validator = function(value) {
                    if (notNum(value)) {
                        // not valid if not number
                        ctrl.$setValidity('numericality', false);
                    } else {
                        ctrl.$setValidity('numericality', true);
                    }
                    return value;
                };

                ctrl.$formatters.push(validator);
                ctrl.$parsers.unshift(validator);

                attrs.$observe('numberOnly', function() {
                    validator(ctrl.$viewValue);
                });

                function notNum(value) {
                    if (value || value === 0 || value === '0') {
                        // /regex/#match returns an array, the first item of which is
                        // the matched string (e.g. "0.123" in "0.123abc" if the user)
                        // input a string with letters in it, for whatever reason.
                        // The input attribute is the original input, so we check that
                        // the matched string ("0.123") matches the original input;
                        // if it doesn't, it's false. The !! operator converts to
                        // boolean, so the return statement will always return 
                        // true or false.
                        try {
                            value         = value.toString().replace(/\,/g, "");
                            matcher       = value.match(/\d{1,}\.{0,1}\d{0,}/);
                            matchedString = matcher[0];
                            input         = matcher.input;
                            console.log(matchedString == input);
                            return matchedString != input;
                        } catch(e) {
                            return false;
                        }
                    } else {
                        return false;
                    }
                    
                }
            }
        };

    })
    .directive('isUser', function(userService, Validator) {
            return {
                require: '?ngModel',
                link: function(scope, ele, attrs, ctrl) {
                    var matcher, matchedString, input, form;

                    if (!ctrl) return;

                    form = scope.$eval(ele[0].form.name);

                    // force truthy in case we are on non-input el
                    attrs.isUser = true;

                    var validator = function(value) {
                        
                        if(!value) return;
                    
                        userService.find({email: value || undefined}).then(function(response, err) {
                            if (response.data && response.data[0] && response.data[0].email) {
                                ctrl.$setValidity('isUser', true);
                            } else {
                                ctrl.$setValidity('isUser', false);
                            }
                            Validator.validateField(form.email, form);
                        });
                    };

                    $(ele).on('blur', function() {
                        validator(ctrl.$viewValue);
                    });

                }
            };

        })
        .directive('integerOnly', function() {
            return {
                require: '?ngModel',
                link: function(scope, ele, attrs, ctrl) {
                    var matcher, matchedString, input;

                    if (!ctrl) return;

                    // force truthy in case we are on non-input el
                    attrs.numberOnly = true;

                    var validator = function(value) {
                        if (notInt(value)) {
                            // not valid if not Integer
                            ctrl.$setValidity('integer', false);
                        } else {
                            ctrl.$setValidity('integer', true);
                        }
                        return value;
                    };

                    ctrl.$formatters.push(validator);
                    ctrl.$parsers.unshift(validator);

                    attrs.$observe('integerOnly', function() {
                        validator(ctrl.$viewValue);
                    });

                    function notInt(value) {
                        if (value || value === 0 || value === '0') {
                            try {
                                value         = value.replace(/\,/g, "");
                                matcher       = value.toString().match(/\d{1,}\,{0,}/);
                                matchedString = matcher[0];
                                input         = matcher.input;

                                return matchedString != input;
                            } catch(e) {
                                return false;
                            }
                        } else {
                            return false;
                        }
                        
                    }
                }
            };

        });
