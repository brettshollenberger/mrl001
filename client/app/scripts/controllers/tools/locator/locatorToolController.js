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
        
        // this will be set to true any time there is a specific location
        // we can show distance from, ie: use has geolocated, or searched by text.
        $scope.hasLocation = false;
        
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
        
        // current setting: USA center
        $scope.map.center = {
            latitude: 40.4230,
            longitude: -98.7372
        };
        
        // default map zoom level
        $scope.map.zoom = 4;
        
        // get all vendors from API
        Vendor.getAll().then(function(response) {
            $scope.vendors = response;
        });
        
        // check for geo location support
        $scope.geolocationAvailable = navigator.geolocation ? true : false;
        
        // button to set map center based on geolocation
        // @todo we should add a marker here
        $scope.findMe = function () {
            
            if (!$scope.geolocationAvailable) return false;
                
            navigator.geolocation.getCurrentPosition(function (position) {
                $scope.map.center = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                
                //setCenter(position.coords.latitude, position.coords.longitude);
                
                // create latLng object, which we need for distanc comparisons
                
                $scope.hasLocation = true;
                
                $scope.$apply();
                
                filterMarkers(); // refilter the markers based on new location
            });  
            
        };
       
        // search by text
        $scope.searchText = '';
        
        $scope.searchByText = function() {
            filterMarkers();      
        };
        $scope.clearText = function() {
            $scope.searchText = '';
            filterMarkers();      
        };
        
        
        // distances in miles
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
                //console.log(data);
                $scope.map.center = {
                    latitude: data.lat,
                    longitude: data.lng
                };
                
                console.log(data);
                
                //setCenter(position.coords.latitude, position.coords.longitude);
                
                $scope.hasLocation = true;
                
                //console.log($scope.map.center);
                filterMarkers();
                
                $scope.$apply();
            }
        });
        
        $rootScope.$on('$routeChangeSuccess', function() {
            //console.log('removing google callback ');
            listener1();
        });
        
        // watch for center change
        // watch for tags to change
        // loop and filter based on above, save filteredSet of markers
        function filterMarkers() {
        
            closeAllWindows();
        
            $timeout(function() {
                $scope.markers = [];
            
                console.log('Filtering markers...');
                
                _.each($scope.vendors, function(item) {
                    
                    // check if vendor has geo data!
                    if(!item.geo) return;
                    
                    
                    // first check for text based search
                    // if this doesn't match, we dont care how close the vendor is! 
                    if($scope.searchText.toLowerCase() && item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) === -1) return;
                    
                    
                    // check if distance is withing range
                    // @note that users can set "unlimited" distance
                    item.geo.distance = isMarkerWithinDistanceFromCenter($scope.map.center, item.geo, $scope.distanceFrom);
                    
                    //console.log(distance);
                    if ($scope.distanceFrom !== 'Any' && item.geo.distance === false) return;
                                    
                    // we need to create the marker from the vendor
                    var newMarker = {
                        latitude: item.geo.latitude,
                        longitude: item.geo.longitude,
                        label: item.name,
                        website: item.website,
                        distance: item.geo.distance, // gets miles
                        logo: item.logo.original,
                        businessAddress: item.businessAddress,
                        infoWindow: '<img class="img-medium" src="'+item.logo.original+'" />',
                        name: item.name,
                        destAddress: 'http://maps.google.com/maps?q=' + genereateSingleLineAddress(item.businessAddress)
                    };
                    
                    $scope.markers.push(newMarker);
                                
                });
                
                _.each($scope.markers,function(marker){
                        
                    closeAllWindows();
                    
                    marker.closeClick = function(){  
                        closeAllWindows();
                        console.log('CLOSING WINDOW....');                      
                        this.showWindow = false;
                        $scope.$apply();
                    };
                    
                    marker.openClick = function(){  
                        closeAllWindows();
                        console.log('CLOSING WINDOWS by openClick....');                      
                    };
                    
                });
                    
            }, 50);

        }
        
        /**
        * Opens a marker when a user click on it
        *
        */
        $scope.remoteOpenWindow = function(item) {
            closeAllWindows();
            item.showWindow = true;
        };
        
        // perform the initial filter when vendors are loaded
        $scope.$watch('$scope.vendors', filterMarkers, true);
                       
        
        $scope.map.centerHasChanged = false;
        
        // map events
        // @note enents on markers dont register here! 
        $scope.map.events = {
            click: function (mapModel, eventName, originalEventArgs) {
                // 'this' is the directive's scope
                //console.log("user defined event: " + eventName, mapModel, originalEventArgs);

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
                
                //console.log($scope.map.clickedMarker);

                $scope.$apply();
*/
            },
            zoom_changed: function() {
                ////console.log('User is zooming map');
                
            },
            drag: function() {
                ////console.log('User is dragging map');
                $scope.map.centerHasChanged = true;
            }
        };
        
        $scope.searchHere = function() {
            $scope.map.centerHasChanged = false;  
            filterMarkers();
        };
        
        
        function redrawCircle() {
            
            
            
        }
        
        function closeAllWindows() {
            _.each($scope.markers,function(marker){
                marker.showWindow = false;
                //$scope.$apply();
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
        
        
       
       function genereateSingleLineAddress(businessAddress) {
           
           var address = _.filter(businessAddress, function(item) {
               return item !== undefined && item !== "";
           });
           
           var addr = '';
           
           _.each(address, function(item) {
               addr += item + ' ';
           });
           
           return addr;
       } 

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
        
        //console.log('distance is: ' + d + 'km');
        
        return d  * 0.62137; // convert to miles!
        }
        
        function deg2rad(deg) {
        return deg * (Math.PI/180);
        }
        
    }
  ]);
