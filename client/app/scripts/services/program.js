angular.module('app').factory('programService', ['$http', 'MARLINAPI_CONFIG', function($http, MARLINAPI_CONFIG) {
       
    var url = MARLINAPI_CONFIG.base_url;
        
    // create and expose service methods
    var exports = {};
    
    // get all items
    exports.getAll = function() {
        return $http.get(url + 'program').then(function (response) {
            return response.data;
        });
    };
    
    // get one item by id
    exports.getById = function(id) {
        return $http.get(url + 'program/' + id).then(function (response) {
            return response.data;
        });
    };
    
    // update one item by item 
    // @note we figure out id from item
    exports.update = function(newItem) {
        var id = newItem._id;
        newItem = _.omit(newItem, '_id');
        return $http.put(url + 'program/' + id, newItem).then(function (response) {
            return response.data;
        });
    };
    
    // add a new item
    exports.add = function(item) {
        return $http.post(url + 'program', item).then(function (response) {
            return response.data;
        }); 
    };
    
    // remove item by item
    exports.remove = function(id) {
        return $http.delete(url + 'program/' + id).then(function (response) {
            return response.data;
        }); 
    };
    
    // --------
    
    /**
    * Gets all programs for a given vendorId
    */
    exports.getAllForVendorId = function(id) {
        
        return $http.get(url + 'vendor/' + id + '/program').then(function (response) {
            return response.data;
        }); 
         
    };
    
    /**
    * Gets all programs not currenly used by vendorId
    */
    exports.getAllNotIn = function(values) {
        
        // get all programs, where program _id is not in the values array
        
        var str = {};
        str._id = { "$nin": values };
        
        var params = {
            query : JSON.stringify(str)
        };
        
        console.log(params);
        
        return $http.get(url + 'program', {params : params}).then(function (response) {
            return response.data;
        }); 
    };
    
    /**
    * Add a vendor to a program using the id of each
    * @param int vendorId ID of the vendor
    * @param int programId ID of the program
    * @return array Updated array of programs for the vendor
    */
    exports.addVendorToProgram = function(vendorId, programId) {
        var theId = _.findIndex(itemList, function(item) {
            return item._id == programId;
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
            return item._id == programId;
        });
        
        itemList[theId].vendorIds = _.reject(itemList[theId].vendorIds, function(item) {
            return vendorId !== item._id;
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
                return subItem._id == id;
            });
            if(match) programs.push(match);
        });
        return _.clone(programs, true);
    };
    
    
    exports.getManyByNotIds = function(idArray) {
        var returnItems = [];
        _.each(itemList, function(item) {
            var match = _.find(idArray, function(vendorId) {
                return vendorId == item._id;
            });    
            if(!match) {
                 returnItems.push(item);
            }
        });
        return _.clone(returnItems, true);
    };
    
    
    return exports;
    
}]);
