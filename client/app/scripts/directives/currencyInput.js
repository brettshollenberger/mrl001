/**
* Directive to format an input as currecny, thus: 
* - Remove leading zeros
* - Round to 2 decimal places
* - Add commas every 3 spaces
* 
* Modifed from the link below, to not use an isolate scope but still set the model value
* which allows us to eaily set validation on the input field, and eliminates the need for
* a replaced template
* 
* @see http://jsfiddle.net/odiseo/dj6mX/
*
* @note if we want to get the currency value WITHOUT commas, see around line 88
*
*/ 
String.prototype.splice = function(idx, rem, s) {
    return (this.slice(0, idx) + s + this.slice(idx + Math.abs(rem)));
};

angular
    .module('app')
    .directive('currencyInput', function() {
    return {
        restrict: 'A',
        //scope: {
        //    field: '='
        //},
        //replace: true,
        require: 'ngModel',
        //template: '<span><input type="text" ng-model="field"></input>{{field}}</span>',
        link: function(scope, element, attrs) {

            scope.field = 0;

            $(element).bind('keyup', function(e) {
                
                scope.field = scope.$parent.$eval(attrs.ngModel);
                
                //var input = element.find('input');
                //var inputVal = input.val();
                
                if(!scope.field) scope.field = '0';
                
                var inputVal = scope.field;

                //clearing left side zeros
                while (scope.field.charAt(0) == '0') {
                    scope.field = scope.field.substr(1);
                }

                scope.field = scope.field.replace(/[^\d.\',']/g, '');

                var point = scope.field.indexOf(".");
                if (point >= 0) {
                    scope.field = scope.field.slice(0, point + 3);
                }

                var decimalSplit = scope.field.split(".");
                var intPart = decimalSplit[0];
                var decPart = decimalSplit[1];

                intPart = intPart.replace(/[^\d]/g, '');
                if (intPart.length > 3) {
                    var intDiv = Math.floor(intPart.length / 3);
                    while (intDiv > 0) {
                        var lastComma = intPart.indexOf(",");
                        if (lastComma < 0) {
                            lastComma = intPart.length;
                        }

                        if (lastComma - 3 > 0) {
                            intPart = intPart.splice(lastComma - 3, 0, ",");
                        }
                        intDiv--;
                    }
                }

                if (decPart === undefined) {
                    decPart = "";
                }
                else {
                    decPart = "." + decPart;
                }
                var res = intPart + decPart;
                
                // @note remove this to get all our transformations except
                // the commas. 
                scope.field = res;
                
                // @see http://stackoverflow.com/a/16494482/1738217 for why this works
                // its one of 3 ways to set a model value, 
                // and doesn't require an isolate scope
                scope.$eval(attrs.ngModel + " = '" + scope.field + "'");

            });

        }
    };
});