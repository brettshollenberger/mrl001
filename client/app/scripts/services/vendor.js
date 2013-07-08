angular.module('app').factory('vendorService', ['$http', 'userService', function($http, User) {
    
    // dummy data
    var itemList = [{
        id: 1,
        name: 'A Vendor',
        contactPerson: {
            name: 'John Smith',
            email: 'john@smith.com',
            phone: '556-669-4444',
        },
        logo: {
            original: 'https://www.filepicker.io/api/file/OkeUz9rSNhIY9Z5WVOQ3'  
        },
        legalTerms: 'These are legal terms for vendor 1',
        businessPhone: '333-333-2222',
        businessAddress: {
            address1: '2424 E York St',
            address2: '',
            city: 'Philadelphia',
            state: 'PA',
            zip: '19125'
        },
        programIds: [1,3,4],
        //salesRep: User.getOneWhereIn('vendorIds', 1),
        programs: [{
            id: 1,
            displayName: 'A Custom Display Name for Program 1'
        }]
    }, {
        id: 2,
        name: 'Another Vendor',
        contactPerson: {
            name: 'John Smith',
            email: 'john@smith.com',
            phone: '556-669-4444',
        },
        businessPhone: '333-333-2222',
        legalTerms: 'These are legal terms for vendor 2',
        businessAddress: {
            address1: '123 Vendor Lane',
            address2: '',
            city: 'Philadelphia',
            state: 'PA',
            zip: '12222'
        },
        logo: {
            original: 'https://www.filepicker.io/api/file/OUTMcftISgOxFN6SsUTW'  
        },
        programIds: [2],
        programs: [],
        //salesRep: User.getOneWhereIn('vendorIds', 2)
    }, {
        id: 3,
        name: 'A Third Vendor',
        contactPerson: {
            name: 'John Smith',
            email: 'john@smith.com',
            phone: '556-669-4444',
        },
        businessPhone: '333-333-2222',
        legalTerms: 'These are legal terms for vendor 3',
        businessAddress: {
            address1: '123 Vendor Lane',
            address2: '',
            city: 'Philadelphia',
            state: 'PA',
            zip: '12222'
        },
        programIds: [1],
        programs: [],
        //salesRep: User.getOneWhereIn('vendorIds', 3)
    }];
    
    //initLocalStore();
    
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
    
    /**
    * Add a vendor to a program using the id of each
    * @param int vendorId ID of the vendor
    * @param int programId ID of the program
    * @return array Updated array of programIds associated with vendor
    */
    exports.addProgramToVendor = function(programId, vendorId) {
        
        // gets array key for this vendor
        var theId = _.findIndex(itemList, function(item) {
            return item.id == vendorId;
        });
        
        console.log(itemList[theId].programIds);
        
        // just in case this vendor has no ids array yet! 
        if(!itemList[theId].programIds) itemList[theId].programIds = [];
        
        itemList[theId].programIds.push(programId);
                
        return itemList[theId].programIds;
    };
    
    
    /**
    * Removes vendor from program the id of each
    *
    * @param int vendorId ID of the vendor
    * @param int programId ID of the program
    * @return array Updated array of programs for the vendor
    */
    exports.removeProgramFromVendor = function(programId, vendorId) {
        // gets array key for this vendor
        var theId = _.findIndex(itemList, function(item) {
            return item.id == vendorId;
        });
        
        itemList[theId].programIds = _.reject(itemList[theId].programIds, function(item) {
            return programId == item;
        });
        
        console.log(itemList[theId].programIds);

        //console.log(itemList[theId]);
        
        return itemList[theId].programIds;
    };
    
    
    /**
    * Reduces the itemList to those where ID is in values array
    * 
    * If ID exists multiple times, will only return item one time 
    *
    */
    exports.getManyWhereIn = function(values) {
        var reducedList = _.filter(itemList, function(item) {
            return _.contains(values, item.id);
        });
        return reducedList;
    };
    
    
    exports.getAllWithoutSalesReps = function() {
        var reducedList = _.filter(itemList, function(item) {
            return !User.getOneWhereIn('vendorIds', item.id);
        });
        return reducedList;
    };
    
    
    return exports;
    
}]);