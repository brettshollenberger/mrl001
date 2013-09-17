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
            link: function(scope, ele, attrs) {
                ele.bind('keypress', function(e) {
                    var newVal = ele.val() + (e.charCode !== 0 ? String.fromCharCode(e.charCode) : '');
                    var theCharacter = String.fromCharCode(e.charCode);

                    if (theCharacter.search(/\d/) === -1) {
                        e.preventDefault();
                    }
                });
            }
        };

    });