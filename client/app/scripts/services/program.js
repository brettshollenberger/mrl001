angular.module('app').factory('programService', ['$http', function($http) {
    
    // dummy data
    var itemList = [{
        id: 1,
        name: 'The Only Program'
    },
    {
        id: 2,
        name: 'A Brand New Program'
    },
    {
        id: 3,
        name: 'No One has this program'
    },
    {
        id: 4,
        name: 'Or This Program'
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
    
    /**
    * Gets all programs for a given vendorId
    */
    exports.getAllForVendorId = function(id) {
        
        var programs = [];
        
        _.each(itemList, function(item) {
            var match = _.find(item.vendorIds, function(vendorId) {
                return vendorId == id;
            });    
            if(match) {
                 programs.push(item);
            }
        });
        
        return programs;
         
    };
    
    /**
    * Gets all programs not currenly used by vendorId
    */
    exports.getAllNotForVendorId = function(id) {
        
       var programs = [];
        
        _.each(itemList, function(item) {
            var match = _.find(item.vendorIds, function(vendorId) {
                return vendorId == id;
            });    
            if(!match) {
                 programs.push(item);
            }
        });
        
        return programs;
    };
    
    /**
    * Add a vendor to a program using the id of each
    * @param int vendorId ID of the vendor
    * @param int programId ID of the program
    * @return array Updated array of programs for the vendor
    */
    exports.addVendorToProgram = function(vendorId, programId) {
        var theId = _.findIndex(itemList, function(item) {
            return item.id == programId;
        });
        
        // just in case this vendor has no ids array yet! 
        if(!itemList[theId].vendorIds) itemList[theId].vendorIds = [];
        
        itemList[theId].vendorIds.push(vendorId);
        
        return exports.getAllForVendorId(vendorId);
    };
    
    /**
    * Removes vendor from program the id of each
    *
    * @param int vendorId ID of the vendor
    * @param int programId ID of the program
    * @return array Updated array of programs for the vendor
    */
    exports.removeVendorFromProgram = function(vendorId, programId) {
        var theId = _.findIndex(itemList, function(item) {
            return item.id == programId;
        });
        
        itemList[theId].vendorIds = _.reject(itemList[theId].vendorIds, function(item) {
            return vendorId !== item.id;
        });
        
        return exports.getAllForVendorId(vendorId);
    };
    
    /**
    * Gets all programs that match an array of IDs
    *
    * @param array idArray Array of program ids
    * @return array programs that match the idArray
    */
    exports.getManyByIds = function(idArray) {
        var programs = [];
        _.each(idArray, function(id) {
            var match = _.find(itemList, function(subItem) {
                return subItem.id == id;
            });
            programs.push(match);
        });
        return programs;
    };
    
    
    exports.getManyByNotIds = function(idArray) {
        var returnItems = [];
        _.each(itemList, function(item) {
            var match = _.find(idArray, function(vendorId) {
                return vendorId == item.id;
            });    
            if(!match) {
                 returnItems.push(item);
            }
        });
        return returnItems;
    };
    
    
    return exports;
    
}]);