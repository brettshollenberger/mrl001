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
    .directive("defaultImage", function() {

        return {
            link: function(scope, element, attrs) {
                                
                attrs.$observe('ngSrc', function(item) {
                    if(!item) {
                        element.attr("src", attrs.defaultImage).addClass('default-image');
                    } else {
                        element.removeClass('default-image');
                    }
                });
            }
        };
    });
