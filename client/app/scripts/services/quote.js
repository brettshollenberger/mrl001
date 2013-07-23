angular.module('app').factory('quoteService', ['$http', 'MARLINAPI_CONFIG', function($http, MARLINAPI_CONFIG) {
        
    var url = MARLINAPI_CONFIG.base_url;
        
    // create and expose service methods
    var exports = {};
    
    // get all items
    exports.getAll = function() {
        return $http.get(url + 'quote').then(function (response) {
            return response.data;
        });
    };
    
    // get one item by id
    exports.getById = function(id) {
        return $http.get(url + 'quote/' + id).then(function (response) {
            return response.data;
        }); 
    };
    
    // update one item by item 
    // @note we figure out id from item
    exports.update = function(newItem) {
        var id = newItem._id;
        newItem = _.omit(newItem, '_id');
        return $http.put(url + 'quote/' + id, newItem).then(function (response) {
            return response.data;
        });
    };
    
    // add a new item
    exports.add = function(item) {
        return $http.post(url + 'quote', item).then(function (response) {
            return response.data;
        });
    };
    
    // remove item by item
    exports.remove = function(item) {
        return $http.delete(url + 'quote/' + item._id).then(function (response) {
            return response.data;
        });
    };
    
    // --------
        
    return exports;
    
}]);