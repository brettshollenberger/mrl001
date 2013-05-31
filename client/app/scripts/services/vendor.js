angular.module('app').factory('vendorService', ['$http', function($http) {
    
    // dummy data
    var itemList = [{
        id: 1,
        name: 'A Vendor',
        contact: 'John Smith',
        location: 'Philadelphia, PA',
        programIds: [1,3,4],
        programs: []
    }, {
        id: 2,
        name: 'Another Vendor',
        contact: 'John Smith',
        location: 'Philadelphia, PA',
        programIds: [2],
        programs: []
    }, {
        id: 3,
        name: 'A Third Vendor',
        contact: 'John Smith',
        location: 'Philadelphia, PA',
        programIds: [],
        programs: []
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
    
    return exports;
    
}]);