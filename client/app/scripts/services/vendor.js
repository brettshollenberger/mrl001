angular
  .module('app')
  .factory('vendorService', [
    '$http',
    'Restangular',
    function($http, Restangular) {
      
      // $httpProvider.defaults.headers
      
      ///var baseVendors = Restangular.all('classes/Vendor');
      
      //console.log(baseVendors);
      

      var vendors = [
            {
                id: 1,
                name: 'A Vendor', 
                contact: 'John Smith',
                location: 'Philadelphia, PA'
            },
            {
                id: 2,
                name: 'Another Vendor', 
                contact: 'John Smith',
                location: 'Philadelphia, PA'
            },
            {
                id: 3,
                name: 'A Third Vendor', 
                contact: 'John Smith',
                location: 'Philadelphia, PA'
            }
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
