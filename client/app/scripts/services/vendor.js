angular.module('app').factory('vendorService', ['$http', 'MARLINAPI_CONFIG', 'userService', function($http, MARLINAPI_CONFIG, User) {
      
    var url = MARLINAPI_CONFIG.base_url;
    
    // create and expose service methods
    var exports = {};
    
    // get all items
    exports.getAll = function() {
        return $http.get(url + 'vendor').then(function (response) {
            return response.data;
        });
    };
    
    // get one item by id
    exports.getById = function(id) {
        return $http.get(url + 'vendor/' + id).then(function (response) {
            return response.data;
        }); 
    };
    
    // update one item by item 
    // @note we figure out id from item
    exports.update = function(newItem) {
        var id = newItem._id;
        newItem = _.omit(newItem, '_id');
        return $http.put(url + 'vendor/' + id, newItem).then(function (response) {
            return response.data;
        });
    };
    
    // add a new item
    exports.add = function(item) {
        return $http.post(url + 'vendor', item).then(function (response) {
            return response.data;
        });        
    };
    
    // remove item by item
    exports.remove = function(id) {
        return $http.delete(url + 'vendor/' + id).then(function (response) {
            return response.data;
        }); 
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
            return item._id == vendorId;
        });
        
        //console.log(itemList[theId].programIds);
        
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
            return item._id == vendorId;
        });
        
        itemList[theId].programIds = _.reject(itemList[theId].programIds, function(item) {
            return programId == item;
        });
        
        //console.log(itemList[theId].programIds);
        //console.log(itemList[theId]);
        
        return itemList[theId].programIds;
    };
    
    exports.getManyWhere = function(key, value) {
        var str = {};
        str[key] = value;
        
        var params = {
            query : JSON.stringify(str)
        };
        
        console.log('getManyWhere');
        console.log(params);
        
        return $http.get(url + 'vendor', { params : params }).then(function (response) {
            return response.data;
        });
    };
    
    
    /**
    * Reduces the itemList to those where ID is in values array
    * 
    * If ID exists multiple times, will only return item one time 
    *
    */
    exports.getManyWhereIn = function(values) {
        var str = {};
        str._id = { "$in": values };
        
        var params = {
            query : JSON.stringify(str)
        };
        
        console.log(params);
        
        return $http.get(url + 'user', { params : params }).then(function (response) {
            return response.data;
        });
    };
    
    /**
    * Reduces the itemList to those where ID is in values array
    * 
    * If ID exists multiple times, will only return item one time 
    *
    */
    exports.getManyWhereNotIn = function(values) {
        var str = {};
        str._id = { "$nin": values };
        
        var params = {
            query : JSON.stringify(str)
        };
        
        console.log(params);
        
        return $http.get(url + 'vendor', { params : params }).then(function (response) {
            return response.data;
        });
    };
    
    
    exports.getAllWithoutSalesReps = function() {
        
        return $http.get(url + 'user').then(function (response) {
            
            var vendorIds = [];
            
            // get all the vendor ids
            _.each(response.data, function(item) {
                if(item.vendorIds) vendorIds = vendorIds.concat(item.vendorIds);
            });
            
            // ensure they are unique
            vendorIds = _.uniq(vendorIds);
            
            console.log(vendorIds);
            
            console.log('There are ' + vendorIds.length + ' without sales reps');
            
            return exports.getManyWhereNotIn(vendorIds);
            
        });
        
    };
    
    
    return exports;
    
}]);