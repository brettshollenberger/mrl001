angular
  .module('app')
  .controller('quoteListController', [
    '$rootScope',
    '$scope',
    '$location',
    'authService',
    'quoteService',
    'vendorService',
    function($rootScope, $scope, $location, Auth, Quote, Vendor) {
        
        Auth.canUserDoAction('list-quote');
        
        // Gets all the vendors
        Quote.getAll().then(function(response) {
            $scope.quotes = response;
            _.each($scope.quotes, function(item) {
                Vendor.getById(item.vendorId).then(function(response){
                    item.vendor = response;
                });
            });
        });
                
/*
        
        $scope.vendor = Vendor.getById(1);
        
        $scope.getVendor = function(id) {
             return Vendor.getById(id);
        };
*/
        
        $scope.searchDesc = '';
        $scope.filterStatus = ''; // filter status
        $scope.searchCost = '';
        $scope.searchVend = '';
        
        // sends user to url based on item id
        $scope.editItem = function(itemId) {
            $location.url('dashboard/quotes/' + itemId);
        };
        
        // deletes an item and then gets the list again to reflect the deleted item.
        $scope.deleteItem = function(item) {
            Quote.remove(item);
            Quote.getAll().then(function(response) {
                $scope.quotes = response;
            });
        };

    }
  ])
;
