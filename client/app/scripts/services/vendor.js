angular.module('app').factory('vendorService', ['$http', 'userService', function($http, User) {
    
    // dummy data
    var itemList = [{
        id: 1,
        name: 'BearCom Operating LLC',
        contactPerson: {
            name: 'Jenn Delong',
            email: 'jdelong@marlinfinance.com',
            phone: '888-479-9111 Ext. 5015'
        },
        logo: {
            original: 'https://www.filepicker.io/api/file/2v44yfa8TqKt2RAAkpZB'  
        },
        website: 'http://www.bearcom.com/',
        legalTerms: 'These are legal terms for vendor 1',
        businessPhone: '',
        businessAddress: {
            address1: '4009 Distribution Dr.',
            address2: 'Bldg 200',
            city: 'Garland',
            state: 'TX',
            zip: '75041'
        },
        programIds: [1,3,4],
        //salesRep: User.getOneWhereIn('vendorIds', 1),
        programs: [{
            id: 1,
            displayName: 'A Custom Display Name for Program 1'
        }]
    },
    {
        id: 2,
        name: 'Protection One - West',
        contactPerson: {
            name: 'Jennifer DeLong-Giefer',
            email: 'jdelong@marlinfinance.com',
            phone: '866-687-3778'
        },
        logo: {
            original: 'https://www.filepicker.io/api/file/ZxTd0qV0QA2ek9HHSmu3'  
        },
        website: 'http://www.protection1.com/',
        legalTerms: 'These are legal terms for vendor 2',
        businessPhone: '',
        businessAddress: {
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: ''
        },
        programIds: [1,3,4],
        //salesRep: User.getOneWhereIn('vendorIds', 1),
        programs: [{
            id: 1,
            displayName: 'A Custom Display Name for Program 1'
        }]
    },
    {
        id: 3,
        name: 'Gametime',
        contactPerson: {
            name: 'Warren Myers',
            email: 'wmyers@playcore.com',
            phone: ''
        },
        logo: {
            original: 'https://www.filepicker.io/api/file/EcryKofERBynAuL2txez'  
        },
        website: 'http://www.gametime.com',
        legalTerms: 'These are legal terms for vendor 3',
        businessPhone: '',
        businessAddress: {
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: ''
        },
        programIds: [1,3,4],
        //salesRep: User.getOneWhereIn('vendorIds', 1),
        programs: [{
            id: 1,
            displayName: 'A Custom Display Name for Program 1'
        }]
    },
    {
        id: 4,
        name: 'Union Bank',
        contactPerson: {
            name: 'Union Bank Financing Consultant',
            email: 'ubapps@marlinfinance.com',
            phone: '877-307-6756'
        },
        logo: {
            original: 'https://www.filepicker.io/api/file/yjlOg28UROmPXyK8uadA'  
        },
        website: 'https://www.unionbank.com/',
        legalTerms: 'These are legal terms for vendor 3',
        businessPhone: '',
        businessAddress: {
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: ''
        },
        programIds: [1,3,4],
        //salesRep: User.getOneWhereIn('vendorIds', 1),
        programs: [{
            id: 1,
            displayName: 'A Custom Display Name for Program 1'
        }]
    },
    {
        id: 5,
        name: 'Southeastern Equipment & Supply, Inc.',
        contactPerson: {
            name: 'Grady Martin',
            email: 'leasing@southeasternequipment.net',
            phone: '803-454-3656'
        },
        logo: {
            original: 'https://www.filepicker.io/api/file/nvC3zhiTQoSl01P7K3Br'  
        },
        website: 'https://www.unionbank.com/',
        legalTerms: 'These are legal terms for vendor 3',
        businessPhone: '',
        businessAddress: {
            address1: '1919 Old Dunbar Road',
            address2: '',
            city: 'West Columbia',
            state: 'SC',
            zip: '29045'
        },
        programIds: [1,3,4],
        //salesRep: User.getOneWhereIn('vendorIds', 1),
        programs: [{
            id: 1,
            displayName: 'A Custom Display Name for Program 1'
        }]
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