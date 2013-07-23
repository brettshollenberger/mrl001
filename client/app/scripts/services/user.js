angular.module('app').factory('userService', ['$http', 'MARLINAPI_CONFIG', function($http, MARLINAPI_CONFIG) {
    
    var url = MARLINAPI_CONFIG.base_url;
    
    // get itemList for old functions
    // TODO: Remove this when we rewrite the old functions
    var itemList = '';
    $http.get(url + 'user').then(function (response) {
        itemList = response.data;
    });
    
    // create and expose service methods
    var exports = {};
    
    // get all items
    exports.getAll = function() {
        return $http.get(url + 'user').then(function (response) {
            return response.data;
        });
    };
    
    // get one item by id
    exports.getById = function(id) {        
        return $http.get(url + 'user/' + id).then(function (response) {
            return response.data;
        }); 
    };
    
    // update one item by item 
    // @note we figure out id from item
    exports.update = function(newItem) {        
        var id = newItem._id;
        newItem = _.omit(newItem, '_id');
        return $http.put(url + 'user/' + id, newItem).then(function (response) {
            return response.data;
        });
    };
    
    // add a new item
    exports.add = function(item) {
        return $http.post(url + 'user', item).then(function (response) {
            return response.data;
        }); 
    };
    
    // remove item by item
    exports.remove = function(item) {
        return $http.delete(url + 'user/' + item._id).then(function (response) {
            return response.data;
        });
    };
    
    // --------
      
    exports.getOneBy = function(key, value) {
        console.log(itemList);
        var theItem = _.find(itemList, function(item) {
            return item[key] == value;
        });
        return theItem ? theItem : false;   
    };
    
    exports.getOneWhereIn = function(key, value) {
        
        var theItem = _.find(itemList, function(item) {
            return _.contains(item[key], value);
        });
        return theItem ? theItem : false; 
    };
    
    /**
    * Add a vendorId to a users VendorIds array
    * 
    */
    exports.addVendorToSalesRep = function(vendorId, salesRepId) {
        
        // get the sales rep object
        var theUser = _.find(itemList, function(item) {
            return item._id == salesRepId;
        }); 
        
        // push to vendorIds
        theUser.vendorIds.push(vendorId);
        
        return theUser;
        
    };
    
    /**
    * Add a vendorId to a users VendorIds array
    * 
    */
    exports.removeVendorFromSalesRep = function(vendorId, salesRepId) {
        
        // get the sales rep object
        var theUser = _.find(itemList, function(item) {
            return item._id == salesRepId;
        }); 
        
        // remove from vendorIds
        theUser.vendorIds.splice(theUser.vendorIds.indexOf(vendorId), 1);
        
        return theUser;
        
    };
        
    
    return exports;
    
}]);