angular.module('app').factory('userService', ['$http', 'MARLINAPI_CONFIG',
    function($http, MARLINAPI_CONFIG) {

        var url = MARLINAPI_CONFIG.base_url;

        // create and expose service methods
        var exports = {};

        // get all items
        exports.getAll = function() {

            var params = {};

            //opts.params =JSON.stringify(params);
            //console.log(opts);

            return $http.get(url + 'users', {
                params: params
            }).then(function(response) {
                return response.data;
            });
        };

        // get one item by id
        exports.getById = function(id) {
            return $http.get(url + 'users/' + id).then(function(response) {
                return response.data;
            });
        };

        // update one item by item 
        // @note we figure out id from item
        exports.update = function(newItem) {
            var id = newItem._id;
            newItem = _.omit(newItem, '_id');
            return $http.put(url + 'users/' + id, newItem).then(function(response) {
                return response.data;
            });
        };

        // add a new item
        exports.add = function(item) {
            return $http.post(url + 'users', item).then(function(response) {
                return response.data;
            });
        };

        // remove item by item
        exports.remove = function(id) {
            return $http({
                method: 'DELETE',
                url: url + 'users/' + id
            }).then(function(response) {
                return response.data;
            });
        };

        // add a new item
        exports.login = function(item) {
            return $http.post(url + 'auth/login', item).then(function(response) {
                return response.data;
            });
        };

        // get one item by id
        exports.logout = function(id) {
            return $http.get(url + 'auth/logout' + id).then(function(response) {
                return response.data;
            });
        };

        // update one item by item 
        // @note we figure out id from item
        exports.updatePassword = function(newItem) {
            var id = newItem._id;
            return $http.put(url + 'users/' + id + '/password', newItem).then(function(response) {
                return response.data;
            });
        };

        // --------

        exports.getOneBy = function(key, value) {
            var str = {};
            str[key] = value;

            var params = {
                query: JSON.stringify(str),
                limit: 1
            };

            return $http.get(url + 'users', {
                params: params
            }).then(function(response) {
                return response.data[0];
            });
        };

        /**
         * This works for now but is slow if your getting for a lot of items,
         * IE: we are using it to get the sales rep for the vendor list. So it makes 25 extra calls
         * if there are 25 vendors
         *
         */
        exports.getOneWhereIn = function(key, value) {
            var str = {};
            str[key] = {
                "$in": [value]
            };

            var params = {
                query: JSON.stringify(str),
                limit: 1
            };

            return $http.get(url + 'users', {
                params: params
            }).then(function(response) {
                return response.data[0];
            });
        };

        /**
         * Add a vendorId to a users VendorIds array
         *
         */
        exports.addVendorToSalesRep = function(vendorId, salesRepId) {

            console.log('USER : add vendor to sales rep');

            return exports.getById(salesRepId).then(function(response) {
                console.log('ADDING REFERENCE TO VENDOR');
                response.vendorIds.push(vendorId);
                return exports.update(response).then(function(response) {
                    console.log('COMPLETE');
                    return response;
                });
            });

        };

        /**
         * Add a vendorId to a users VendorIds array
         *
         */
        exports.removeVendorFromSalesRep = function(vendorId, salesRepId) {

            console.log('USER : removing vendor to sales rep');

            return exports.getById(salesRepId).then(function(response) {
                console.log('REMOVING REFERENCE TO VENDOR');
                response.vendorIds.splice(response.vendorIds.indexOf(vendorId), 1);
                return exports.update(response).then(function(response) {
                    console.log('COMPLETE');
                    return response;
                });
            });

        };


        return exports;

    }
]);
