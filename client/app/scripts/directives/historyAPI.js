/**
* Service and directive to provide back / forward functioanlity in your app
* ----------------------------------------
* In addition we account for the user's initial app visit, when there is no "back"
* or back is another site (not this app). In these cases we send to the dashboard
*
* @note make more robust with default option setter for home 
* @todo impliment similar for forward?  
*
*/
angular
  .module('app')
  .factory('history', function($location, $window, $rootScope) {
    return {
      pageCount: 0,
      back: function() {
        if(this.pageCount > 1) {
            $window.history.back();  
        } else {
            $location.url('/dashboard');
            $rootScope.$apply();
        }
      },
      forward: function() {
        $window.history.forward();
      }
    };
  })
  .run(function(history, $rootScope) {
      
      // keep track of our page count
      $rootScope.$on('$routseChangeSuccess', function() {
          history.pageCount++;
      });
      
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
