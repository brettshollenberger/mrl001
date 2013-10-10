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
