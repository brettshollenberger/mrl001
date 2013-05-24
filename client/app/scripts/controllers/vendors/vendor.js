angular
  .module('app')
  .controller('vendorController', [
    '$rootScope',
    '$scope',
    '$location',
    'Restangular',
    function($rootScope, $scope, $location, Restangular) {
    
        // First way of creating a Restangular object. Just saying the base URL
        var baseAccounts = Restangular.all('classes/vendors');
        
        // This will query classes/vendors and return a promise. As Angular supports setting promises to scope variables
        // as soon as we get the information from the server, it will be shown in our template :)
        baseAccounts.getList().then(function(vendors){
           $scope.vendors = vendors;
        });
        
        // sends user to url based on item id
        $scope.editItem = function(itemId) {
            $location.url('vendors/' + itemId);
        }
        
        // deletes an item. On success we need to remove the item from the list
        // @todo this seems like it should be automatic, since angular knows that $scope.vendors is a collection
        // and we are removing that item from the collection, shouldnt that work automagically? 
        $scope.deleteItem = function(item) {
            
            item.remove().then(function(success) {
                $scope.vendors = _.reject($scope.vendors, function(vendor) {
                    return vendor.objectId == item.objectId;
                });
            }, function(error) {
                alert('Something went wrong!');
            });

        }

    }
  ])
;
