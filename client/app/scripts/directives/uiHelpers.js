angular
    .module('uiHelpers', [])
    .directive("mailTo", function() {
        return {
            replace: true,
            template: '<a ng-show="email" stop-event="click" ng-href="mailto:{{email}}" target="_blank"><i class="icon icon-envelope"></i> {{email}}</a>',
            link: function(scope, element, attrs) {

                attrs.$observe('mailTo', function(item) {
                    scope.email = item;
                });

            }
        };
    })
    .directive("callTo", function() {
        return {
            replace: true,
            template: '<a ng-show="phone" stop-event="click" ng-href="callto:{{phone}}"><i class="icon icon-phone"></i> {{phone}}</a>',
            link: function(scope, element, attrs) {

                attrs.$observe('callTo', function(item) {
                    scope.phone = item;
                });

            }
        };
    })
    .directive("userProfile", function() {

        return {
            replace: true,
            template: '<a stop-event="click" ng-href="#/dashboard/users/{{userProfile()._id}}"><i class="icon icon-user"></i> {{userProfile().fullname}}</a>',
            scope: {
                userProfile: '&'
            }
        };
    })
    .directive("vendorContact", function() {

        return {
            replace: true,
            template: '<a stop-event="click"><i class="icon icon-user"></i>{{name}}</a>',
            link: function(scope, element, attrs) {
                attrs.$observe('vendorContact', function(item) {
                    scope.name = item;
                });
            }
        };
    })
    .directive('stopEvent', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                element.bind(attr.stopEvent, function(e) {
                    e.stopPropagation();
                });
            }
        };
    })
    
    /**
    * DEFAULT IMAGE Directive
    * ----------------------------------
    * Use this directive to define a default image for an image
    *
    * Observes ngSrc, and if it's null then applys a default in two ways
    * 1. Specify an image src, 
    *    @example: default-image="img/default-user.png"
    *
    * 2. Specify an image type, as defined in defaults object, 
    *    @example default-image="vendor", where defaults.vendor === "img/default-user.png"
    *
    * It also adds and remove a class based on default image being applied or not
    * 
    * @note we observe ngSrc so changes to src should update the image
    * @note you might need a style of diplay: block !important if you are setting the display
    *       of the element based on ng-src, for @example ng-show="image.src" 
    * 
    */
    .directive("defaultImage", function() {

        // default cla
        var defaultClass = 'default-image';

        // define our defaults
        // @todo allow easy way to override independent of directive
        var defaults = {
            user: 'img/default-user.jpg',
            vendor: 'img/default-vendor.png'
        };
        
        // method to check for image path being used in directive by checking for index of '.' period
        var whichImage = function(srcOrKey) {
            if(srcOrKey.indexOf('.') === -1) return defaults[srcOrKey];
            return srcOrKey;
        };

        // directive linker
        return {
            link: function(scope, element, attrs) {
                                
                attrs.$observe('ngSrc', function(item) {
                    if(!item) {
                        element.attr("src", whichImage(attrs.defaultImage)).addClass(defaultClass);
                    } else {
                        element.removeClass(defaultClass);
                    }
                });
                
            }
        };
    });
    
/**
 * Heavily adapted from the `type="number"` directive in Angular's
 * /src/ng/directive/input.js
 */

angular.module('fiestah.money', [])
.directive('money', function () {
  'use strict';

  var NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;
  function isUndefined(value) {
    return typeof value == 'undefined';
  }
  function isEmpty(value) {
    return isUndefined(value) || value === '' || value === null || value !== value;
  }

  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, el, attr, ctrl) {
      function round(num) { 
        return Math.round(num * 100) / 100;
      }

      var min = parseFloat(attr.min) || 0;

      // Returning NaN so that the formatter won't render invalid chars
      ctrl.$parsers.push(function(value) {

        // Allow "-" inputs only when min < 0
        if (value === '-') {
          ctrl.$setValidity('number', false);
          return (min < 0) ? -0 : NaN;
        }

        var empty = isEmpty(value);
        if (empty || NUMBER_REGEXP.test(value)) {
          ctrl.$setValidity('number', true);
          return value === '' ? null : (empty ? value : parseFloat(value));
        } else {
          ctrl.$setValidity('number', false);
          return NaN;
        }
      });
      ctrl.$formatters.push(function(value) {
        return isEmpty(value) ? '' : '' + value;
      });

      var minValidator = function(value) {
        if (!isEmpty(value) && value < min) {
          ctrl.$setValidity('min', false);
          return undefined;
        } else {
          ctrl.$setValidity('min', true);
          return value;
        }
      };
      ctrl.$parsers.push(minValidator);
      ctrl.$formatters.push(minValidator);

      if (attr.max) {
        var max = parseFloat(attr.max);
        var maxValidator = function(value) {
          if (!isEmpty(value) && value > max) {
            ctrl.$setValidity('max', false);
            return undefined;
          } else {
            ctrl.$setValidity('max', true);
            return value;
          }
        };

        ctrl.$parsers.push(maxValidator);
        ctrl.$formatters.push(maxValidator);
      }

      // Round off to 2 decimal places
      ctrl.$parsers.push(function (value) {
        return value ? round(value) : value;
      });
      ctrl.$formatters.push(function (value) {
        return value ? value.toFixed(2) : value;
      });

      el.bind('blur', function () {
        var value = ctrl.$modelValue;
        if (value) {
            
            value = round(value).toFixed(2);
            
            value = value
                .toString()
                .split("")
                .reverse()
                .join("")
                .replace(/\d{3}/, function(digits) {
                  return digits + ",";
                })
                .split("")
                .reverse()
                .join("");
        
          ctrl.$viewValue = value;
          ctrl.$render();
        }
      });
    }
  };
});
