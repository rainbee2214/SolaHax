import Ember from 'ember';
import House from '../objects/house'

export default Ember.Service.extend({
  houses: Ember.A(),

  init: function(){
    this.mockHouses();
  },

  mockHouses: function(){
    var houses = this.get('houses');

    var hData = [
      {
        "PostalCode": "B0J",
        "Lat": 45.141039,
        "Lng": -61.972492
      },
      {
        "PostalCode": "B2R",
        "Lat": 44.762399,
        "Lng": -63.573957
      },
      {
        "PostalCode": "B2S",
        "Lat": 45.100472,
        "Lng": -61.735143
      },
      {
        "PostalCode": "B2S",
        "Lat": 45.100472,
        "Lng": -61.735143
      },
      {
        "PostalCode": "B2T",
        "Lat": 44.717264,
        "Lng": -63.516796
      },
      {
        "PostalCode": "B2T",
        "Lat": 44.776759,
        "Lng": -63.585661
      },
      {
        "PostalCode": "B2W",
        "Lat": 44.938921,
        "Lng": -63.53778
      },
      {
        "PostalCode": "B2W",
        "Lat": 44.672229,
        "Lng": -63.531016
      },
      {
        "PostalCode": "B2W",
        "Lat": 44.680673,
        "Lng": -63.52935
      },
      {
        "PostalCode": "B2X",
        "Lat": 44.769848,
        "Lng": -63.576129
      },
      {
        "PostalCode": "B2Y",
        "Lat": 44.762408,
        "Lng": -63.574514
      },
      {
        "PostalCode": "B2Y",
        "Lat": 44.672829,
        "Lng": -63.529157
      },
      {
        "PostalCode": "B2Y",
        "Lat": 44.645715,
        "Lng": -63.543164
      },
      {
        "PostalCode": "B2Z",
        "Lat": 44.742554,
        "Lng": -63.541734
      },
      {
        "PostalCode": "B2Z",
        "Lat": 44.92061,
        "Lng": -62.526951
      },
      {
        "PostalCode": "B2Z",
        "Lat": 44.773286,
        "Lng": -63.576705
      },
      {
        "PostalCode": "B3A",
        "Lat": 44.808488,
        "Lng": -63.616974
      },
      {
        "PostalCode": "B3A",
        "Lat": 44.674966,
        "Lng": -63.507498
      },
      {
        "PostalCode": "B3A",
        "Lat": 44.739682,
        "Lng": -63.547178
      },
      {
        "PostalCode": "B3A",
        "Lat": 44.960337,
        "Lng": -63.556231
      },
      {
        "PostalCode": "B3E",
        "Lat": 44.776076,
        "Lng": -63.605719
      },
      {
        "PostalCode": "B3H",
        "Lat": 44.646577,
        "Lng": -63.538418
      },
      {
        "PostalCode": "B3H",
        "Lat": 44.718345,
        "Lng": -63.508001
      },
      {
        "PostalCode": "B3H",
        "Lat": 44.799762,
        "Lng": -63.662194
      },
      {
        "PostalCode": "B3H",
        "Lat": 44.823858,
        "Lng": -63.626445
      },
      {
        "PostalCode": "B3K",
        "Lat": 44.376808,
        "Lng": -64.3181
      },
      {
        "PostalCode": "B3K",
        "Lat": 44.675183,
        "Lng": -63.520405
      },
      {
        "PostalCode": "B3K",
        "Lat": 44.679763,
        "Lng": -63.514477
      },
      {
        "PostalCode": "B3K",
        "Lat": 44.647419,
        "Lng": -63.537402
      },
      {
        "PostalCode": "B3L",
        "Lat": 44.770204,
        "Lng": -63.57461
      },
      {
        "PostalCode": "B3L",
        "Lat": 44.832309,
        "Lng": -63.641471
      },
      {
        "PostalCode": "B3M",
        "Lat": 44.67805,
        "Lng": -63.530088
      },
      {
        "PostalCode": "B3M",
        "Lat": 44.666948,
        "Lng": -63.530644
      },
      {
        "PostalCode": "B3N",
        "Lat": 44.783378,
        "Lng": -63.603925
      },
      {
        "PostalCode": "B3N",
        "Lat": 44.741919,
        "Lng": -63.543347
      },
      {
        "PostalCode": "B3N",
        "Lat": 44.783047,
        "Lng": -63.597822
      },
      {
        "PostalCode": "B3S",
        "Lat": 44.772544,
        "Lng": -62.995982
      },
      {
        "PostalCode": "B3T",
        "Lat": 45.100472,
        "Lng": -61.735143
      },
      {
        "PostalCode": "B3V",
        "Lat": 44.718411,
        "Lng": -63.513954
      },
      {
        "PostalCode": "B4A",
        "Lat": 44.658474,
        "Lng": -63.525883
      },
      {
        "PostalCode": "B4A",
        "Lat": 44.883656,
        "Lng": -63.56398
      },
      {
        "PostalCode": "B4B",
        "Lat": 45.100472,
        "Lng": -61.735143
      },
      {
        "PostalCode": "B4B",
        "Lat": 45.100472,
        "Lng": -61.735143
      },
      {
        "PostalCode": "B4B",
        "Lat": 45.100472,
        "Lng": -61.735143
      },
      {
        "PostalCode": "B4B",
        "Lat": 45.100472,
        "Lng": -61.735143
      },
      {
        "PostalCode": "B4C",
        "Lat": 44.824062,
        "Lng": -63.612449
      },
      {
        "PostalCode": "B4E",
        "Lat": 44.864564,
        "Lng": -63.614088
      },
      {
        "PostalCode": "B4G",
        "Lat": 44.744868,
        "Lng": -63.281808
      }
    ];

    hData.forEach(function(h){
      var house = new House(
        123,
        h.Lat,
        h.Lng,
        Math.floor(Math.random() * 200),
        h.PostalCode,
        Math.floor(Math.random() * 3000),
        Math.floor(Math.random() * 80),
        Math.floor(Math.random() * 90),
        Math.floor(Math.random() * 25),
        Math.floor(Math.random() * 10000),
        Math.floor(Math.random() * 25000),
        "ABC",
        "DAA",
        "Wall",
        Math.floor(Math.random() * 5000),
        Math.floor(Math.random() * 25000),
        Math.floor(Math.random() * 25000)
      );
      houses.pushObject(house);
    });
  },

});
