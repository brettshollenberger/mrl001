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
       
       angular.extend($scope, {
    
            position: {
              coords: {
                latitude: 45,
                longitude: -73
              }
            },
            
            /** the initial center of the map */
            centerProperty: {
                latitude: 45,
                longitude: -73
            },
            
            /** the initial zoom level of the map */
            zoomProperty: 4,
            
            /** list of markers to put in the map */
            markersProperty: [ {
                    latitude: 45,
                    longitude: -74
                }],
            
            // These 2 properties will be set when clicking on the map
            clickedLatitudeProperty: null,  
            clickedLongitudeProperty: null,
            
            eventsProperty: {
              click: function (mapModel, eventName, originalEventArgs) {    
                // 'this' is the directive's scope
                //console.log("user defined event on map directive with scope", this);
                //console.log("user defined event: " + eventName, mapModel, originalEventArgs);
              }
            }
        });
       
        // Gets all the vendors
        $scope.vendors = Vendor.getAll();
        
        $scope.$watch('filteredVendors', function(){
             console.log($scope.filteredVendors);
             $scope.markersProperty = [];
             for(var vendor in $scope.filteredVendors){
                 console.log(vendor);
                var v = $scope.filteredVendors[vendor];
                var addr = v.businessAddress.address1+' '+v.businessAddress.address2+' '+v.businessAddress.city+' '+v.businessAddress.state+' '+v.businessAddress.zip;
                var geo = googleMaps.geo(addr, 'marker');
             }
        }, true);
        
        $rootScope.$on('event:geo-location-success', function(event, data) {
            $scope.markersProperty.push(data);
            $scope.$apply();
        });
    }
  ]);
