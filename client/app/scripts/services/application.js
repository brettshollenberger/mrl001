angular.module('app').factory('applicationService', ['$http', function($http) {
    
    // dummy data
    var itemList = [{
        id: 1,
        name: 'Application 1',
        status: 'Open',
        quoteId: 2,
        vendorId: 1,
        vendor: {},
        quote: {
           totalCost: 9900,
           description: 'Manaquins for my art project in the SkyBox',
           termInMonths: 12
        },
        leasee: {
            fullLegalBusineessName: 'Smith Medical',
            contactPerson: {
                name: 'John Smith',
                email: 'john@smith.com',
                phone: '556-669-4444'
            },
            businessAddress: {
                address1: '2424 York Street',
                address2: '',
                city: 'Philadelphia',
                state: 'PA',
                zip: '19125'
            },
            yearsInBusiness: 1,
            soleProp: 0
        },
        guarantorInfo: {
            name: 'Jane Smith',
            email: 'jane@smith.com',
            phone: '556-669-4444',
            socialSecurityNumber: '111-111-1122',
            homeAddress: {
                address1: '123 Home Lane',
                address2: '',
                city: 'Philadelphia',
                state: 'PA',
                zip: '19125'
            }
        },
        notes: {}
    },
    
    {
        id: 1,
        name: 'Application 2',
        status: 'Open',
        quoteId: 2,
        vendorId: 2,
        vendor: {},
        quote: {
           totalCost: 9900,
           description: 'Manaquins for my art project in the SkyBox',
           termInMonths: 12
        },
        leasee: {
            fullLegalBusineessName: 'Max Fridge',
            contactPerson: {
                name: 'John Doe',
                email: 'john@doe.com',
                phone: '556-669-4444'
            },
            businessAddress: {
                address1: '2424 York Street',
                address2: '',
                city: 'Philadelphia',
                state: 'PA',
                zip: '19125'
            },
            yearsInBusiness: 1,
            soleProp: 0
        },
        guarantorInfo: {
            name: 'John Doe',
            email: 'jane@doe.com',
            phone: '556-669-4444',
            socialSecurityNumber: '111-111-1122',
            homeAddress: {
                address1: '123 Home Lane',
                address2: '',
                city: 'Philadelphia',
                state: 'PA',
                zip: '19125'
            }
        },
        notes: {}
    }
    
    
    ];

    
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
    
    return exports;
    
}]);