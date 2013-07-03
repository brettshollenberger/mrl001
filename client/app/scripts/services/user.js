angular.module('app').factory('userService', ['$http', function($http) {
    
    // dummy data
    var itemList = [{
        id: 1,
        name: {
            first: 'Brian',
            last: 'Walsh'
        },
        fullname: 'Brian Walsh',
        email: 'bwalsh@marlinfinance.com',
        username: 'bwalsh',
        password: 'bwalsh',
        phoneNumber: '111-111-1111',
        avatar: {
            original: 'https://www.filepicker.io/api/file/Lzt97D7RaaMqubCiiRUw'
        },
        status: 'Active',
        groups: [1],
        vendorIds: []
    },
    {
        id: 2,
        name: {
            first: 'Stu',
            last: 'Sable'
        },
        fullname: 'Stu Sable',
        email: 'ssable@marlinfinance.com',
        username: 'ssable',
        password: 'ssable',
        phoneNumber: '856-505-4280',
        avatar: {
            original: 'https://www.filepicker.io/api/file/5Ur9llgFTkSpz1PlV4g9'
        },
        status: 'Active',
        groups: [2],
        vendorIds: [1]
    },
    {
        id: 3,
        name: {
            first: 'Joseph',
            last: 'Campbell'
        },
        phoneNumber: '856-505-4117',
        avatar: {
            original: 'https://www.filepicker.io/api/file/sFBGJPRRRYmAhCpIi2Ea'
        }, 
        fullname: 'Joseph Campbell',
        email: 'jcampbell@marlinfinance.com',
        username: 'jcampbell',
        password: 'jcampbell',
        status: 'Active',
        groups: [2],
        vendorIds: [3]
    },
    {
        id: 4,
        name: {
            first: 'Chris',
            last: 'Barraro'
        },
        avatar: {
            original: 'https://www.filepicker.io/api/file/d3HTcvmERA2zcoXw5YGM'
        }, 
        phoneNumber: ' 856-505-4366',
        fullname: 'Chris Barraro',
        email: 'cbarraro@marlinfinance.com',
        username: 'cbarraro',
        password: 'cbarraro',
        status: 'Active',
        groups: [2],
        vendorIds: []
    },
    {
        id: 5,
        name: {
            first: 'Brian',
            last: 'McMahon'
        },
        avatar: {
            original: 'https://www.filepicker.io/api/file/xWYKDkrTT4eylsVMmYHj'
        }, 
        phoneNumber: '856-505-4414',
        fullname: 'Brian McMahon',
        email: 'bmcmahon@marlinfinance.com',
        username: 'bmcmahon',
        password: 'bmcmahon',
        status: 'Active',
        groups: [2],
        vendorIds: []
    },
    {
        id: 6,
        name: {
            first: 'Nicole',
            last: 'Ara'
        },
        phoneNumber: '856-505-4143',
        avatar: {
            original: 'https://www.filepicker.io/api/file/DPcI8ofcTai1AHEbMf2Y'
        }, 
        fullname: 'Nicole Ara',
        email: 'nara@marlinfinance.com',
        username: 'nara',
        password: 'nara',
        status: 'Active',
        groups: [2],
        vendorIds: []
    },
    {
        id: 7,
        name: {
            first: 'Cherie',
            last: 'Cole'
        },
        phoneNumber: '856-505-4224',
        avatar: {
            original: 'https://www.filepicker.io/api/file/uxRaqvM5SFeD9s6eovYC '
        }, 
        fullname: 'Cherie Cole',
        email: 'ccole@marlinfinance.com',
        username: 'ccole',
        password: 'ccole',
        status: 'Active',
        groups: [2],
        vendorIds: []
    },
    {
        id: 8,
        name: {
            first: 'Joseph',
            last: 'Fortune'
        },
        phoneNumber: '856-505-4430',
        avatar: {
            original: 'https://www.filepicker.io/api/file/uxRaqvM5SFeD9s6eovYC '
        }, 
        fullname: ' Joseph Fortune',
        email: 'jfortune@marlinfinance.com',
        username: 'jfortune',
        password: 'jfortune',
        status: 'Active',
        groups: [2],
        vendorIds: []
    },
    {
        id: 9,
        name: {
            first: 'Jennifer',
            last: 'DeLong'
        },
        phoneNumber: '303-963-5832',
        avatar: {
            original: 'https://www.filepicker.io/api/file/kg0Bw0Rvi2J96PZNWpgR'
        }, 
        fullname: 'Jennifer DeLong',
        email: 'jdelong@marlinfinance.com',
        username: 'jdelong',
        password: 'jdelong',
        status: 'Active',
        groups: [2],
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