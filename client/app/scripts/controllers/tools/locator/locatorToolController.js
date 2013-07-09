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
                $scope.zoom = 16;
                $scope.$apply();
            });
        };
        
        
        $scope.findMyLocation = function() {
            console.log($scope.locationSearch);  
            googleMaps.geo($scope.locationSearch, 'locationSearch');
        };
        
    }
  ]);
