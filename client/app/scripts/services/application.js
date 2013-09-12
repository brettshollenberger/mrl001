angular.module('app').factory('applicationService', ['$http', 'MARLINAPI_CONFIG',
    function($http, MARLINAPI_CONFIG) {

        var url = MARLINAPI_CONFIG.base_url;

        // create and expose service methods
        var exports = {};

        // Generic find functionality
        exports.find = function(query) {

            query = JSON.stringify(query);

            return $http.post(url + 'applications/find', query).then(function(response) {
                return response.data;
            });
        };

        // get all items
        exports.getAll = function() {
            return $http.get(url + 'applications').then(function(response) {
                return response.data;
            });
        };

        // get one item by id
        exports.getById = function(id) {
            return $http.get(url + 'applications/' + id).then(function(response) {
                return response.data;
            });
        };

        // update one item by item 
        // @note we figure out id from item
        exports.update = function(newItem) {
            var id = newItem._id;
            newItem = _.omit(newItem, '_id');
            return $http.put(url + 'applications/' + id, newItem).then(function(response) {
                return response.data;
            });
        };

        // add a new item
        exports.add = function(item) {
            return $http.post(url + 'applications', item).then(function(response) {
                return response.data;
            });
        };

        // remove item by item
        exports.remove = function(id) {
            return $http({
                method: 'DELETE',
                url: url + 'applications/' + id
            }).then(function(response) {
                return response.data;
            });
        };

        // --------

        return exports;

    }
]);
