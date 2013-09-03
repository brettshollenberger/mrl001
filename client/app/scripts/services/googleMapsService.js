angular
    .module('app')
    .factory('googleMapsService', ['$rootScope', '$q',
        function($rootScope, $q) {

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

            methods.geo = function(address, type) {

                //var deferred = $q.defer();
                var geocoder = new google.maps.Geocoder();

                var geoData = {};

                var handleResult = function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        console.log(results[0]);

                        geoData.lat = results[0].geometry.location.mb; // mb
                        geoData.lng = results[0].geometry.location.nb; // nb

                        // @todo why is this the new format? 
                        // did things change on the Google API side?
                        if(!geoData.lat || !geoData.lng) {
                            geoData.lat = results[0].geometry.location.ob; // mb
                            geoData.lng = results[0].geometry.location.pb; // nb
                        }
                        
                        if(!geoData.lat || !geoData.lng) {
                            $rootScope.$broadcast('event:geo-location-failure');
                        } else {
                            $rootScope.$broadcast('event:geo-location-success', geoData, type);
                        }

                    } else {
                        $rootScope.$broadcast('event:geo-location-failure', geoData, type);
                        //alert('Geocode was not successful for the following reason: ' + status);
                    }
                };

                geocoder.geocode({
                    'address': address
                }, handleResult);

                //return deferred.promise;
            };

            return methods;

        }
    ]);
