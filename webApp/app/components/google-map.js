import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ["map-container"],
    container: null,
    map: null,
    heatmap: null,

    insertMap: function() {
        var self = this;
        self.set('container', Ember.$('.map-canvas')[0]);
        var container = self.get('container');

        var options = {
            center: new google.maps.LatLng(44.7050000,-63.6789583),
            zoom: 13,
            disableDefaultUI: true
        };

        var map = new window.google.maps.Map(container, options);

        var heatmap = new window.google.maps.visualization.HeatmapLayer({
            data: self.getPoints()
        });

        heatmap.setMap(map);
        self.set('heatmap', heatmap);
        self.set('map', map);

    }.on('didInsertElement'),

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
    },

    actions: {
        toggleHeatmap: function(){
            var heatmap = this.get('heatmap');
            var map = this.get('map');
            heatmap.setMap(heatmap.getMap() ? null : map);
        },

        resetMap: function(){
          console.log('TODO: Reset Map');
        }
    }
});
