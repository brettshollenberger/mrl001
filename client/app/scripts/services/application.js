angular.module('app').factory('applicationService', ['$http', 'MARLINAPI_CONFIG',
    function($http, MARLINAPI_CONFIG) {

        var url = MARLINAPI_CONFIG.base_url;

        // get itemList for old functions
        // TODO: Remove this when we rewrite the old functions
        var itemList = '';
        $http.get(url + 'applications').then(function(response) {
            itemList = response.data;
        });

        // create and expose service methods
        var exports = {};

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
