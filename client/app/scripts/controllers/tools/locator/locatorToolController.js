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
       
        // markers will be vendors that match out serarch! 
        $scope.markers = [];
        
        // my location and map center
        $scope.center = {
            latitude: 45,
            longitude: -73
        };
        
        // default map zoom level
        $scope.zoom = 4;
        
        // get all vendors from API
        $scope.vendors = Vendor.getAll();
        
        // check for geo location support
        $scope.geolocationAvailable = navigator.geolocation ? true : false;
        
        // button to set map center based on geolocation
        // @todo we should add a marker here
        $scope.findMe = function () {
            
            console.log('User is attempting to geo locate!');
            
            if (!$scope.geolocationAvailable) return false;
                
            navigator.geolocation.getCurrentPosition(function (position) {
                $scope.center = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                // create latLng object, which we need for distanc comparisons
                
                $scope.$apply();
                
                filterMarkers(); // refilter the markers based on new location
            });  
            
        };
       
        // input to enter text based location, search buttons sets center from gelocation
        $scope.searchText = '';
        
        $scope.searchByText = function() {
            filterMarkers();      
        };
        
        
        $scope.distanceOptions = [1,5,25,100,2000,'Any'];
        
        // input to set distance from user for results
        $scope.distanceFrom = 2000;
        
        // trigger the search
        $scope.setDistanceFrom = function(newDistance) {
            $scope.distanceFrom = newDistance;
            $scope.distanceFromInMeters = newDistance * 1000;
            filterMarkers(); // refilter the markers based on new location
        };
        
        // input to serach by Industry
        $scope.locationSearch = null;
        
        // function that will geo locate, and then
        $scope.findMyLocation = function() {
            console.log('User is searching by location:' + $scope.locationSearch);  
            googleMaps.geo($scope.locationSearch, 'locationSearch');
        };
        
        // callback from the geo lookup
        $rootScope.$on('event:geo-location-success', function(event, data, type) {
            // update center based on search 
            if(type && type === 'locationSearch') {
                $scope.center = {
                    latitude: data.lat,
                    longitude: data.lng
                };
                
                console.log($scope.center);
                
                $scope.$apply();
            }
        });
        
        // watch for center change
        // watch for tags to change
        // loop and filter based on above, save filteredSet of markers
        function filterMarkers() {
        
            $scope.markers = [];
            
            console.log('Filtering markers...');
            
            _.each($scope.vendors, function(item) {
            
                console.log(item);
                
                // check if vendor has geo data!
                if(!item.geo) return;
                
                // first check for text based search
                // if this doesn't match, we dont care how close the vendor is! 
                if($scope.searchText.toLowerCase() && item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) === -1) return;
                
                // check if distance is withing range
                // @note that users can set "unlimited" distance
                var distance = isMarkerWithinDistanceFromCenter($scope.center, item.geo, $scope.distanceFrom);
                if ($scope.distanceFrom !== 'Any' && distance === false) return;
                
                
                // we need to create the marker from the vendor
                var newMarker = {
                    latitude: item.geo.lat,
                    longitude: item.geo.lng,
                    label: item.name,
                    infoWindow: '<img class="img-medium" src="'+item.logo.original+'" />',
                    name: item.name
                };
                
                //console.log(newMarker);
                
                $scope.markers.push(newMarker);
            
            });
        
        }
        
        /**
        * Opens a marker when a user click on it
        *
        */
        $scope.openMarker = function(lat, lng, item) {
            var data = {};
            data.lat = lat;
            data.lng = lng;
            
            item.isOpen = true;
            
            //$rootScope.$broadcast('request:maps:open-marker', data);
            
        };
        
        // perform the initial filter when vendors are loaded
        $scope.$watch('$scope.vendors', filterMarkers, true);
                       
        
        $scope.centerHasChanged = false;
        
        // map events
        // @note enents on markers dont register here! 
        $scope.mapEvents = {
            click: function (mapModel, eventName, originalEventArgs) {    
                // 'this' is the directive's scope
                console.log("user defined event on map directive with scope", this);
                console.log("user defined event: " + eventName, mapModel, originalEventArgs);
            },
            zoom_changed: function() {
                //console.log('User is zooming map');
                
            },
            drag: function() {
                //console.log('User is dragging map');
                $scope.centerHasChanged = true;
            }
        };
        
        $scope.searchHere = function() {
            $scope.centerHasChanged = false;  
            filterMarkers();
        };
        
        
        function redrawCircle() {
            
            
            
        }
        
        
        
        
       
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // checks if marker is a distance from the center
        // return distance or false if not within range
        // 
        function isMarkerWithinDistanceFromCenter(center, marker, distance) {
        var checkDsitance = getDistanceFromLatLonInKm(center.latitude, center.longitude, marker.lat, marker.lng); 
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
