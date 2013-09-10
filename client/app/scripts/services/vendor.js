angular.module('app').factory('vendorService', ['$http', 'MARLINAPI_CONFIG', 'userService',
    function($http, MARLINAPI_CONFIG, User) {

        var url = MARLINAPI_CONFIG.base_url;

        /**
         * Set default terms for vendor if no custom terms are set
         * @todo move to API where it's more robust?
         *
         */
        var defaultTerms = 'Financing is for equipment that is to be used solely for business purposes, and is calculated using two (2) payments in advance (10% for the 10% Security Deposit purchase option) held as a Security Deposit. Quoted payments do not include Taxes or Insurance. Quotes are subject to credit approval by Marlin Leasing Corporation and may change without notice. Rates are for companies in business 2+ years. Programs available for newer businesses. Please call for rates over $50,000.';

        var setLegalTerms = function(item) {

            if (!item.legalTerms || item.legalTerms === '') {
                item.legalTerms = defaultTerms;
            }

            return item;
        };



        // create and expose service methods
        var exports = {};

        // get all items
        exports.getAll = function() {
            return $http.get(url + 'vendors').then(function(response) {

                _.each(response.data, function(item) {
                    item = setLegalTerms(item);
                });

                return response.data;
            });
        };

        // get one item by id
        exports.getById = function(id) {
            return $http.get(url + 'vendors/' + id).then(function(response) {

                response.data = setLegalTerms(response.data);

                return response.data;
            });
        };

        // update one item by item 
        // @note we figure out id from item
        exports.update = function(newItem) {
            var id = newItem._id;
            newItem = _.omit(newItem, '_id');
            return $http.put(url + 'vendors/' + id, newItem).then(function(response) {
                return response.data;
            });
        };

        // add a new item
        exports.add = function(item) {
            return $http.post(url + 'vendors', item).then(function(response) {
                return response.data;
            });
        };

        // remove item by item
        exports.remove = function(id) {
            return $http({
                method: 'DELETE',
                url: url + 'vendors/' + id
            }).then(function(response) {
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
            if (!itemList[theId].programIds) itemList[theId].programIds = [];

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


        /**
         * Reduces the itemList to those where ID is in values array
         *
         * If ID exists multiple times, will only return item one time
         *
         */
        exports.getManyWhereIn = function(values) {
            var str = {};
            str._id = {
                "$in": values
            };

            var params = {
                query: JSON.stringify(str)
            };

            //console.log(params);

            return $http.get(url + 'vendors', {
                params: params
            }).then(function(response) {
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
            str._id = {
                "$nin": values
            };

            var params = {
                query: JSON.stringify(str)
            };

            //console.log(params);

            return $http.get(url + 'vendors', {
                params: params
            }).then(function(response) {
                return response.data;
            });
        };


        exports.getAllWithoutSalesReps = function() {

            return $http.get(url + 'vendors').then(function(response) {

                var vendorIds = [];

                // get all the vendor ids
                _.each(response.data, function(item) {
                    if (item.vendorIds) vendorIds = vendorIds.concat(item.vendorIds);
                });

                // ensure they are unique
                vendorIds = _.uniq(vendorIds);

                //console.log(vendorIds);

                //console.log('There are ' + vendorIds.length + ' without sales reps');

                return exports.getManyWhereNotIn(vendorIds);

            });

        };


        return exports;

    }
]);
