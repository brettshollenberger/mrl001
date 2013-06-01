angular.module('app').factory('userService', ['$http', function($http) {
    
    // dummy data
    var itemList = [{
        id: 1,
        name: {
            first: 'Matt',
            last: 'Miller'
        },
        email: 'matt@facultycreative.com',
        password: 'scrapple',
        status: 'Active',
        groups: ['MarlinSalesRep']
    },
    {
        id: 2,
        name: {
            first: 'Aaron',
            last: 'Frey'
        },
        email: 'aaron@facultycreative.com',
        password: 'scrapple',
        status: 'Blocked',
        groups: ['MarlinSalesRep']
    }];
    
    
    // create and expose service methods
    var exports = {};
    
    // get all items
    exports.getAll = function() {
        return itemList;
    };
    
    // get one item by id
    exports.getById = function(id) {
        var theItem = _.find(itemList, function(item) {
            return item.id == id;
        });
        return theItem ? theItem : false;
    };
    
    // update one item by id
    // @todo check for updating the id!
    exports.updateById = function(id, newData) {
        var theId = _.findIndex(itemList, function(item) {
            return item.id == id;
        });
        theList = _.extend(itemList[theId], newData);
        return theList;
    };
    
    // update one item by item 
    // @note we figure out id from item
    exports.update = function(newItem) {
        var theIndex = _.findIndex(itemList, function(item) {
            return item.id == newItem.id;
        });
        theList = _.extend(itemList[theIndex], newItem);
        return theList;
    };
    
    // add a new item
    exports.add = function(item) {
        item.id = itemList.length + 1;
        itemList.push(item);
        return item;
    };
    
    // remove item by item
    exports.remove = function(item) {
        itemList.splice(itemList.indexOf(item), 1);
        return item;
    };
    
    // --------
      
    exports.getOneBy = function(key, value) {
        var theItem = _.find(itemList, function(item) {
            return item[key] == value;
        });
        return theItem ? theItem : false;   
    };
        
    
    return exports;
    
}]);