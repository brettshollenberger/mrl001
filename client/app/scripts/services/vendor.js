angular
  .module('app')
  .factory('vendorService', [
    '$http',
    function($http) {
      
      var vendors = [
            {name: 'A Vendor', contact: 'John Doe'},
            {name: 'Another Vendor', contact: 'Jane Doe'},
            {name: 'ABC Vending', contact: 'John Doe'},
            {name: 'Vending Inc.', contact: 'John Doe'},
            {name: 'Vendors Inc.', contact: 'John Doe'},
            {name: 'Great Vednors', contact: 'John Doe'},
            {name: 'Many Vendors', contact: 'John Doe'}
        ];
      
      return {
        getAll: function() {
            return vendors;
        },
        save: function(item) {
            vendors.push(item);
        }
      };
    }
  ])
;
