angular
  .module('app')
  .controller('userListController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'Restangular',
    function($rootScope, $scope, $location, $routeParams, Restangular) {
        
        // First way of creating a Restangular object. Just saying the base URL
        var baseUsers = Restangular.all('users');
        
        // This will query classes/vendors and return a promise. As Angular supports setting promises to scope variables
        // as soon as we get the information from the server, it will be shown in our template :)
        baseUsers.getList().then(function(users){
           $scope.users = users;
        });
        
        // sends user to url based on item id
        $scope.editItem = function(itemId) {
            $location.url('users/' + itemId);
        };
        
        // deletes an item. On success we need to remove the item from the list
        // @todo this seems like it should be automatic, since angular knows that $scope.vendors is a collection
        // and we are removing that item from the collection, shouldnt that work automagically? 
        $scope.deleteItem = function(item) {
            
            item.remove().then(function(success) {
                $scope.users = _.reject($scope.users, function(user) {
                    return user.objectId == item.objectId;
                });
            }, function(error) {
                alert('Something went wrong!');
            });

        };
    }
  ])
;