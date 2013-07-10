angular
  .module('app')
  .controller('locatorToolController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'vendorService',
    'googleMapsService',
    function($rootScope, $scope, $location, $routeParams, Vendor, googleMaps) {
       
       google.maps.visualRefresh = true;       
       
       /** the initial center of the map */
       
        
       
       
        // Gets all the vendors
        $scope.vendors = Vendor.getAll();
        
        $scope.markers = [];
        
        
        $scope.distanceFrom = 5;
        
        // filteredVendors array is generated in the html view, and used to filter at the same time.
        // we watch it for change
        // on change, 
        // - clear the markers array, 
        // - loop through the filtered set, 
        // - perform a geo location call on each
        // this is realllyyyy costly on api calls, plus we are getting geo data repeatedly for the same vendors
        // we should instead be saving lat / long with the vendor
        $scope.$watch('filteredVendors', function(){
             console.log($scope.filteredVendors);
             $scope.markers = [];
             for(var vendor in $scope.filteredVendors){
                 console.log(vendor);
                var v = $scope.filteredVendors[vendor];
                var addr = v.businessAddress.address1+' '+v.businessAddress.address2+' '+v.businessAddress.city+' '+v.businessAddress.state+' '+v.businessAddress.zip;
                var geo = googleMaps.geo(addr, 'marker');
             }
        }, true);
        
        
        // callback from the geo lookup
        // the data returned will contain our coords
        // @note this should be moved to the vendors settings tab
        $rootScope.$on('event:geo-location-success', function(event, data, type) {
            
            // hack to support markers and location search with one callback! 
            if(type && type === 'marker') {
                
                if(!isMarkerWithinDistanceFromCenter($scope.center, data, $scope.distanceFrom)) return;
                
                data.infoWindow = 'This is an infowindow';
                data.icon = 'https://maps.google.com/mapfiles/kml/shapes/schools_maps.png';
                $scope.markers.push(data);
                $scope.$apply(); 
            } else if(type && type === 'locationSearch') {
                
                $scope.center = {
                    latitude: data.latitude,
                    longitude: data.longitude
                };
                
                $scope.$apply();
                
            }
            
            
        });
        
        
        // map events
        // @note enents on markers dont register here! 
        $scope.mapEvents = {
          click: function (mapModel, eventName, originalEventArgs) {    
            // 'this' is the directive's scope
            console.log("user defined event on map directive with scope", this);
            console.log("user defined event: " + eventName, mapModel, originalEventArgs);
          }
        };

        
        // default location
        $scope.center = {
            latitude: 45,
            longitude: -73
        };
        
        $scope.latitude = null;
        $scope.longitude = null;
        
        $scope.zoom = 4;
        
        
        
        
        
        // check for geo location support
        $scope.geolocationAvailable = navigator.geolocation ? true : false;
        
        // @todo we should add a marker here
        $scope.findMe = function () {
            
            if (!$scope.geolocationAvailable) return false;
                
            navigator.geolocation.getCurrentPosition(function (position) {
                $scope.center = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                // create latLng object, which we need for distanc comparisons
                $scope.myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                
                console.log($scope.myLatLng);
                
                
                $scope.zoom = 16;
                $scope.$apply();
                                
            });  
            
        };
        
        
        
        
        $scope.findMyLocation = function() {
            console.log($scope.locationSearch);  
            googleMaps.geo($scope.locationSearch, 'locationSearch');
        };
        
        
        
        // checks if marker is a distance from the center
        // return distance or false if not within range
        // 
        function isMarkerWithinDistanceFromCenter(center, marker, distance) {
           var checkDsitance = getDistanceFromLatLonInKm(center.latitude, center.longitude, marker.latitude, marker.longitude); 
           return checkDsitance <= distance ? checkDsitance : false;
        }
        
        
        
        function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
          
          lat1 = parseFloat(lat1);
          lon1 = parseFloat(lon1);
          lat2 = parseFloat(lat2);
          lon2 = parseFloat(lon2);
          
          var R = 6371; // Radius of the earth in km
          var dLat = deg2rad(lat2-lat1);  // deg2rad below
          var dLon = deg2rad(lon2-lon1); 
          var a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2)
            ; 
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
          var d = R * c; // Distance in km
          
          console.log('distance is: ' + d + 'km');
          
          return d;
        }
        
        function deg2rad(deg) {
          return deg * (Math.PI/180);
        }
        
    }
  ]);
