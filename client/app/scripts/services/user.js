angular.module('app').factory('userService', ['$http', function($http) {
    
    // dummy data
    var itemList = [{
        id: 1,
        name: {
            first: 'Super',
            last: 'Admin'
        },
        fullname: 'Super Admin',
        email: 'admin@facultycreative.com',
        username: 'admin',
        password: 'admin',
        status: 'Active',
        groups: ['SuperAdmin'],
        vendorIds: []
    },
    {
        id: 2,
        name: {
            first: 'Gavin',
            last: 'Potts'
        },
        fullname: 'Gavin Potts',
        email: 'gpotts@marlinleasing.com',
        password: 'demo',
        avatar: {
            original: 'https://www.filepicker.io/api/file/s6XT8eSVSz21ZdFdlgge'
        },
        status: 'Active',
        groups: ['MarlinSalesRep'],
        vendorIds: [1]
    },
    {
        id: 3,
        name: {
            first: 'Matt',
            last: 'Miller'
        },
        avatar: {
            original: 'https://www.filepicker.io/api/file/NDFnKwv5T3K9uxHEAfQD'
        }, 
        fullname: 'Matt Miller',
        email: 'mmiller@marlinleasing.com',
        password: 'demo',
        status: 'Active',
        groups: ['MarlinSalesRep'],
        vendorIds: [3]
    },
    {
        id: 4,
        name: {
            first: 'Aaron',
            last: 'Frey'
        },
        avatar: {
            original: 'https://www.filepicker.io/api/file/uxRaqvM5SFeD9s6eovYC '
        }, 
        fullname: 'Aaron Frey',
        email: 'afrey@marlinleasing.com',
        password: 'demo',
        status: 'Active',
        groups: ['MarlinSalesRep'],
        vendorIds: []
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
            return item.id == salesRepId;
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
            return item.id == salesRepId;
        }); 
        
        // remove from vendorIds
        theUser.vendorIds.splice(theUser.vendorIds.indexOf(vendorId), 1);
        
        return theUser;
        
    };
        
    
    return exports;
    
}]);