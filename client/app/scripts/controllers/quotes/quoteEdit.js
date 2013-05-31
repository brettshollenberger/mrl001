angular
  .module('app')
  .controller('quoteEditController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'quoteService',
    function($rootScope, $scope, $location, $routeParams, Quote) {
       
        // empty quote object
        $scope.quote = {};
        var quote = {};
      
        // utility function to go back to the quote list
        // @todo this function is used in many places, find a way to streamline it
        $scope.cancel = function() {
            $location.url('/quotes');
        };
        
        // get quote ID for edit pages
        var quoteId = $routeParams.id;
        $scope.formAction = 'Add';
        
        
        // get and store the quote 
        if(quoteId) {
            // get the quote
            $scope.quote = Quote.getById(quoteId);
            console.log($scope.quote);
            $scope.formAction = 'Update';
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
            
            $location.url('/quotes');
            
        };
        
        
        
    }
  ])
;
