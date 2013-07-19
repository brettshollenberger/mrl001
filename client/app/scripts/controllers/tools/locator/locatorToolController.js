angular
  .module('app')
  .controller('locatorToolController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'vendorService',
    'googleMapsService',
    '$timeout',
    function($rootScope, $scope, $location, $routeParams, Vendor, googleMaps, $timeout) {
       
        //google.maps.visualRefresh = true;
       
        // markers will be vendors that match out serarch! 
        $scope.markers = [];
        
        $scope.map = {};
        
        $scope.map.clickedMarker = {
            latitude: null,
            longitude: null
        };
            
        $scope.map.infoWindow = {
            coords: {
                latitude: 30,
                longitude: -89
            },
            show: false
        };
        
        $scope.map.templatedInfoWindow = {
            coords: {
                latitude: 60,
                longitude: -95
            },
            show: true,
            templateUrl: 'templates/info.html',
            templateParameter: {
                message: 'passed in from the opener'
            }
        };
        
        // my location and map center
        $scope.map.center = {
            latitude: 45,
            longitude: -73
        };
        
        
        
        // default map zoom level
        $scope.map.zoom = 4;
        
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
                $scope.map.center = {
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
        
        
        $scope.distanceOptions = [100,500,1000,2000,'Any'];
        
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
        var listener1 = $rootScope.$on('event:geo-location-success', function(event, data, type) {
            // update center based on search 
            if(type && type === 'locationSearch') {
                console.log(data);
                $scope.map.center = {
                    latitude: data.lat,
                    longitude: data.lng
                };
                
                console.log($scope.map.center);
                
                $scope.$apply();
            }
        });
        
        $rootScope.$on('$routeChangeSuccess', function() {
            console.log('removing google callback ');
            listener1();
        });
        
        // watch for center change
        // watch for tags to change
        // loop and filter based on above, save filteredSet of markers
        function filterMarkers() {
        
            $scope.markers = [];
            
            console.log('Filtering markers...');
            
            _.each($scope.vendors, function(item) {
                
                // check if vendor has geo data!
                if(!item.geo) return;
                
                // first check for text based search
                // if this doesn't match, we dont care how close the vendor is! 
                if($scope.searchText.toLowerCase() && item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) === -1) return;
                
                console.log(item);
                
                // check if distance is withing range
                // @note that users can set "unlimited" distance
                var distance = isMarkerWithinDistanceFromCenter($scope.map.center, item.geo, $scope.distanceFrom);
                console.log(distance);
                if ($scope.distanceFrom !== 'Any' && distance === false) return;
                
                
                // we need to create the marker from the vendor
                var newMarker = {
                    latitude: item.geo.latitude,
                    longitude: item.geo.longitude,
                    label: item.name,
                    logo: item.logo.original,
                    businessAddress: item.businessAddress,
                    infoWindow: '<img class="img-medium" src="'+item.logo.original+'" />',
                    name: item.name
                };
                
                //console.log(newMarker);
                
                $scope.markers.push(newMarker);
            
            });
            
            console.log($scope.markers);
        
        }
        
        /**
        * Opens a marker when a user click on it
        *
        */
        $scope.openMarker = function(lat, lng, item) {
            var data = {};
            data.latitude = lat;
            data.longitude = lng;
            
            item.isOpen = true;
            
            //$rootScope.$broadcast('request:maps:open-marker', data);
            
        };
        
        // perform the initial filter when vendors are loaded
        $scope.$watch('$scope.vendors', filterMarkers, true);
                       
        
        $scope.map.centerHasChanged = false;
        
        // map events
        // @note enents on markers dont register here! 
        $scope.map.events = {
            click: function (mapModel, eventName, originalEventArgs) {
                // 'this' is the directive's scope
                console.log("user defined event: " + eventName, mapModel, originalEventArgs);

                closeAllWindows();

                /*
var e = originalEventArgs[0];

                if (!$scope.map.clickedMarker) {
                    $scope.map.clickedMarker = {
                        latitude: e.latLng.lat(),
                        longitude: e.latLng.lng()
                    };
                }
                else {
                    $scope.map.clickedMarker.latitude = e.latLng.lat();
                    $scope.map.clickedMarker.longitude = e.latLng.lng();
                }
                
                console.log($scope.map.clickedMarker);

                $scope.$apply();
*/
            },
            zoom_changed: function() {
                //console.log('User is zooming map');
                
            },
            drag: function() {
                //console.log('User is dragging map');
                $scope.map.centerHasChanged = true;
            }
        };
        
        $scope.searchHere = function() {
            $scope.map.centerHasChanged = false;  
            filterMarkers();
        };
        
        
        function redrawCircle() {
            
            
            
        }
        
        _.each($scope.markers,function(marker){
            marker.closeClick = function(){                        
                this.showWindow = false;
                $scope.$apply();
            };
        });
    
        function closeAllWindows() {
            _.each($scope.markers,function(marker){
                marker.showWindow = false;
                $scope.$apply();
            }); 
        }
    
        $scope.removeMarkers = function () {
            $log.info("Clearing markers. They should disappear from the map now");
            $scope.map.markers.length = 0;
            $scope.map.clickedMarker = null;
        };
    
        $timeout(function () {
            $scope.map.infoWindow.show = true;
        }, 2000);
        
        
        
        
        
        
        
        
        
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
