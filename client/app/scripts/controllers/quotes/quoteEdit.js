angular
  .module('app')
  .controller('quoteEditController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'authService',
    'quoteService',
    'stateService',
    function($rootScope, $scope, $location, $routeParams, Auth, Quote, States) {
       
        Auth.canUserDoAction('edit-quote');
       
        // empty quote object
        $scope.quote = {};
        var quote = {};
      
        // utility function to go back to the quote list
        // @todo this function is used in many places, find a way to streamline it
        $scope.cancel = function() {
            $location.url('/dashboard/quotes');
        };
        
        // get quote ID for edit pages
        var quoteId = $routeParams.id;
        $scope.formAction = 'Add';
        
        //States picker
        $scope.states = States.states();
        $scope.quote.state = $scope.states[0].abbreviation;
        
        // get and store the quote 
        if(quoteId) {
            // get the quote
            $scope.quote = Quote.getById(quoteId);
            if(!$scope.quote) $location.path('/dashboard/quotes');
            $scope.formAction = 'Update';
        } else {
            $scope.quote.status = 'Open';
        }
    
        // activated when user clicks the save button
        $scope.save = function() {
           
            if(!quoteId) {
                
                // create new item
                Quote.add($scope.quote);
                
            } else {
            
                // update existing item 
                //Quote.updateById($scope.quote.id, $scope.quote);
                Quote.update($scope.quote);
                
            }
            
            $location.url('/dashboard/quotes');
            
        };
        
        $scope.tabs = ['Basic information'];
        
        /**
        * Tab functions. 
        * @todo make into a direct
        *
        */
        $scope.activeTab = 0;
        
        // used for active class
        $scope.isActiveTab = function(id) {
            return $scope.activeTab == id ? true : false;  
        };
        
        // used to set active tab
        $scope.changeTab = function(tab) {
            
            console.log(tab);
            
            if(!$scope.quote.id) return false;
            
            $scope.activeTab = tab;
        };
        
        
        
    }
  ])
;
