angular
  .module('app')
  .controller('locatorToolController', [
    '$rootScope',
    '$scope',
    '$location',
    '$routeParams',
    'vendorService',
    function($rootScope, $scope, $location, $routeParams, Vendor) {
       
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
                console.log("user defined event on map directive with scope", this);
                console.log("user defined event: " + eventName, mapModel, originalEventArgs);
              }
            }
        });
       
        // Gets all the vendors
        $scope.vendors = Vendor.getAll();
        console.log($scope.vendors);
    }
  ]);
