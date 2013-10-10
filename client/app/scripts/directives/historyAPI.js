angular
  .module('app')
  .factory('history', function($window) {
    return {
      back: function() {
        $window.history.back();
      },
      forward: function() {
        $window.history.forward();
      }
    };
  })
  .directive('historyBack', function(history) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on('click', function() {
          history.back();
        });
      }
    };
  })
  .directive('historyForward', function(history) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on('click', function() {
          history.forward();
        });
      }
    };
  });
