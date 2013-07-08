angular
  .module('app')
  .factory('googleMapsService', ['$rootScope', '$q', function($rootScope, $q) {

    /*
// Load the Google Maps scripts Asynchronously
   (function(d){
        var js, id = 'google-maps', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id;
        js.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false";
        ref.parentNode.insertBefore(js, ref);
    }(document));
*/

    var methods = {};

    methods.geo = function(address){
    
        //var deferred = $q.defer();
        var geocoder = new google.maps.Geocoder();
        
        var geoData = {};
    
        var handleResult = function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
             //console.log(results[0]);
             
             geoData.latitude = results[0].geometry.location.jb;
             geoData.longitude = results[0].geometry.location.kb;
             //console.log(geoData);
             
             $rootScope.$broadcast('event:geo-location-success', geoData);
             
          } else {
             $rootScope.$broadcast('event:geo-location-failure', geoData);
            //alert('Geocode was not successful for the following reason: ' + status);
          }
        };
    
        geocoder.geocode( { 'address': address}, handleResult);
        
        //return deferred.promise;
      };
     
     return methods;

  }]);