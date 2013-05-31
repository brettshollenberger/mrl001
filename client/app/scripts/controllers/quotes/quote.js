angular
  .module('app')
  .controller('quoteListController', [
    '$rootScope',
    '$scope',
    '$location',
    'quoteService',
    function($rootScope, $scope, $location, Quote) {
        
        // Gets all the vendors
        $scope.quotes = Quote.getAll();
        
        $scope.searchDesc = '';
        $scope.filterStatus = ''; // filter status
        $scope.searchCost = '';
        
        // sends user to url based on item id
        $scope.editItem = function(itemId) {
            $location.url('dashboard/quotes/' + itemId);
        };
        
        // deletes an item and then gets the list again to reflect the deleted item.
        $scope.deleteItem = function(item) {
            Quote.remove(item);
            $scope.quotes = Quote.getAll();
        };

    }
  ])
;
