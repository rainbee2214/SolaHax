import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ["map-container"],
    container: null,

    map: null,
    heatmap: null,

    houseMarkers: [],
    postalCodeCircles: [],

    defaultMapOptions: {
        center: new google.maps.LatLng(44.650356,-63.613676),
        zoom: 13,
        disableDefaultUI: true
    },

    defaultCircleOptions: {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.2,
        radius: 1000,
    },

    activeCircleOptions: {
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0000FF",
        fillOpacity: 0.3,
        radius: 1000,
    },

    updateFilter: function(){
      var filter = this.get('filter');
      var houseMarkers = this.get('houseMarkers');
      var circles = this.get('postalCodeCircles');
      // Premptively enable
      for (var key in filter){
        if (filter[key] == false){
          // For each marker that matches disable
          for (var i=0; i< houseMarkers.length; i++){
            if (houseMarkers[i].postalCode.toLowerCase() == key.toLowerCase()){
              houseMarkers[i].setVisible(false);
            }
          }
          // For each circle that matches disable
          for (var i=0; i<circles.length; i++){
            if (circles[i].postalCode.toLowerCase() == key.toLowerCase()){
              circles[i].setVisible(false);
            }
          }
        }
        else {
          // For each marker that matches enable
          for (var i=0; i< houseMarkers.length; i++){
            if (houseMarkers[i].postalCode.toLowerCase() == key.toLowerCase()){
              houseMarkers[i].setVisible(true);
            }
          }
          // For each circle that matches enable
          for (var i=0; i<circles.length; i++){
            if (circles[i].postalCode.toLowerCase() == key.toLowerCase()){
              circles[i].setVisible(true);
            }
          }
        }
      }
    }.observes('filter'),

    houseIcon: "assets/house.svg",
    activeHouseIcon: "assets/active-house.svg",

    insertMap: function() {
        var self = this;

        // Get references to the map, and related properties
        self.set('container', Ember.$('.map-canvas')[0]);
        var container = self.get('container');
        var options = self.get('defaultMapOptions');
        var houseMarkers = [];
        var postalCodeCircles = [];
        var houseIcon = self.get('houseIcon');
        var activeHouseIcon = self.get('activeHouseIcon');
        var defaultCircleOptions = self.get('defaultCircleOptions');
        var activeCircleOptions = self.get('activeCircleOptions');

        // Init the map and heatmap, then save the properties
        var map = new window.google.maps.Map(container, options);
        // var heatmap = new window.google.maps.visualization.HeatmapLayer({
        //     data: self.getPoints()
        // });
        // heatmap.setMap(map);
        // self.set('heatmap', heatmap);
        self.set('map', map);

        // Place the house icons, then save the property
        self.Houses.get('houses').forEach(function(house){
            var marker = new google.maps.Marker({
                position: {lat: house.get('lat'), lng: house.get('lng')},
                map: map,
                icon: houseIcon,
                title: "Wel" + house.get('id'),
                postalCode: house.get('postalCode')
            });

            marker.addListener('click', function(){
                // Set active/default house icons
                for (var i=0; i< houseMarkers.length; i++){
                    houseMarkers[i].setIcon(houseIcon);
                }
                this.setIcon(activeHouseIcon);
                // Select the proper postal code area
                for (var i=0; i<postalCodeCircles.length; i++) {
                    if (postalCodeCircles[i].postalCode == house.get('postalCode')){ postalCodeCircles[i].setOptions(activeCircleOptions); }
                    else { postalCodeCircles[i].setOptions(defaultCircleOptions); }
                }
                self.get('target').send('selectHouse', house);
            });

            houseMarkers.push(marker);
        });
        self.set('houseMarkers', houseMarkers);

        // Place the postal code circles, then save the property
        this.PostalCode.get('postalCodeArea').forEach(function(postCode){
            var options = _.clone(defaultCircleOptions);
            options.center = new google.maps.LatLng(postCode.get('lat'), postCode.get('lng'));
            options.map = map;
            options.postalCode = postCode.get('code');
            var postalCircle = new google.maps.Circle(options);

            postalCircle.addListener('click', function(){
                // If we have a house selected that isn't in this postal code, reset it
                if (self.get('activeHouse') && self.get('activeHouse').get('postalCode') != postCode.get('code')){
                    self.get('target').send('clearSelected');
                    for (var i=0; i< houseMarkers.length; i++){
                        houseMarkers[i].setIcon(houseIcon);
                    }
                }
                // Set active/default circles
                for (var i=0; i<postalCodeCircles.length; i++) {
                    postalCodeCircles[i].setOptions(defaultCircleOptions);
                }
                this.setOptions(activeCircleOptions);
                self.get('target').send('selectPostalCode', postCode);
            });

            postalCodeCircles.push(postalCircle);
        });
        self.set('postalCodeCircles', postalCodeCircles)

    }.on('didInsertElement'), //insertMap

    // Returns some heatmap points, temporary
    getPoints: function(){
        return [{location: new google.maps.LatLng(44.8429167,-63.4395833), weight: 91.00},
                {location: new google.maps.LatLng(44.7662500,-62.8912500), weight: 54.00},
                {location: new google.maps.LatLng(44.6591667,-62.9462500), weight: 0.00},
                {location: new google.maps.LatLng(44.7862500,-63.0656250), weight: 0.00},
                {location: new google.maps.LatLng(44.8095833,-63.4589583), weight: 75.00},
                {location: new google.maps.LatLng(44.9275000,-63.7431250), weight: 147.00},
                {location: new google.maps.LatLng(44.8633333,-63.2629167), weight: 58.00},
                {location: new google.maps.LatLng(45.0633333,-63.0489583), weight: 45.00},
                {location: new google.maps.LatLng(44.5687500,-62.9845833), weight: 0.00},
                {location: new google.maps.LatLng(45.1114583,-63.5331250), weight: 94.00},
                {location: new google.maps.LatLng(45.0831250,-62.8989583), weight: 176.00},
                {location: new google.maps.LatLng(44.6056250,-63.4945833), weight: 0.00},
                {location: new google.maps.LatLng(44.9610417,-64.0481250), weight: 39.00},
                {location: new google.maps.LatLng(44.9827083,-63.3639583), weight: 68.00},
                {location: new google.maps.LatLng(44.7272917,-63.1645833), weight: 0.00},
        ];
    }, //getPoints

    actions: {
        toggleHeatmap: function(){
            var heatmap = this.get('heatmap');
            var map = this.get('map');
            heatmap.setMap(heatmap.getMap() ? null : map);
        }, //toggleHeatmap

        resetMap: function(){
            // Reset the map icons
            var houseIcon = this.get('houseIcon');
            var houseMarkers = this.get('houseMarkers');
            for (var i=0; i< houseMarkers.length; i++){
                houseMarkers[i].setIcon(houseIcon);
            }

            // Recenter and zoom the map
            var map = this.get('map');
            var defaultMapOptions = this.get('defaultMapOptions');
            map.setZoom(defaultMapOptions.zoom);
            map.setCenter(defaultMapOptions.center);

            // Clear any selected postal code and houses in the parent controller
            this.get('target').send('clearSelected');
        }, //resetMap
    } //actions
});
