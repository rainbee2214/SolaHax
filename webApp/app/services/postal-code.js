import Ember from 'ember';
import PostCode from '../objects/postalcode';

export default Ember.Service.extend({
  all: [
    "B0J",
    "B2R",
    "B2S",
    "B2T",
    "B2W",
    "B2X",
    "B2Y",
    "B2Z",
    "B3A",
    "B3E",
    "B3H",
    "B3K",
    "B3L",
    "B3M",
    "B3N",
    "B3S",
    "B3T",
    "B3V",
    "B4A",
    "B4B",
    "B4C",
    "B4E",
    "B4G"
  ],

  toggle: false,
  postalCodeArea: Ember.A(),

  init: function(){
    this.mockPostalCodes();
  },

  loadPostalCode: function(){
    if (!this.get('postalCodeArea').length){
      this.mockPostalCodes();
    }
  },

  mockPostalCodes: function(){
    var self = this;
    var all = []
    var postalCodeArea = this.get('postalCodeArea');

    var pCode = [
      {
        "PostalCode": "B0J",
        "Lat": 43.899913389830516,
        "Lng": -62.41614706779662
      },
      {
        "PostalCode": "B2R",
        "Lat": 44.51864888950274,
        "Lng": -63.227943022099474
      },
      // {
      //   "PostalCode": "B2S",
      //   "Lat": 0,
      //   "Lng": 0
      // },
      {
        "PostalCode": "B2T",
        "Lat": 44.67222058506222,
        "Lng": -63.328673933609984
      },
      {
        "PostalCode": "B2W",
        "Lat": 44.63530464717351,
        "Lng": -63.4500742105263
      },
      {
        "PostalCode": "B2X",
        "Lat": 44.610987888888914,
        "Lng": -63.41841948732943
      },
      {
        "PostalCode": "B2Y",
        "Lat": 44.6053866890157,
        "Lng": -63.46319415406551
      },
      {
        "PostalCode": "B2Z",
        "Lat": 44.37508496402879,
        "Lng": -63.02117618705036
      },
      {
        "PostalCode": "B3A",
        "Lat": 44.61796132380945,
        "Lng": -63.49194921632647
      },
      {
        "PostalCode": "B3E",
        "Lat": 44.35382249152542,
        "Lng": -62.811942872881346
      },
      {
        "PostalCode": "B3H",
        "Lat": 44.572937774336275,
        "Lng": -63.49517831563421
      },
      {
        "PostalCode": "B3K",
        "Lat": 44.611270501583995,
        "Lng": -63.53864240971474
      },
      {
        "PostalCode": "B3L",
        "Lat": 44.58586989518411,
        "Lng": -63.523462573654335
      },
      {
        "PostalCode": "B3M",
        "Lat": 44.611968419485805,
        "Lng": -63.57027860216497
      },
      {
        "PostalCode": "B3N",
        "Lat": 44.54940121720429,
        "Lng": -63.49181130322582
      },
      {
        "PostalCode": "B3S",
        "Lat": 44.38395354268294,
        "Lng": -63.27825807926831
      },
      {
        "PostalCode": "B3T",
        "Lat": 44.4297361801471,
        "Lng": -63.49584841544118
      },
      {
        "PostalCode": "B3V",
        "Lat": 44.206952635036494,
        "Lng": -63.130004065693406
      },
      {
        "PostalCode": "B4A",
        "Lat": 44.65772843313071,
        "Lng": -63.5720398495441
      },
      // {
      //   "PostalCode": "B4B",
      //   "Lat": 0,
      //   "Lng": 0
      // },
      {
        "PostalCode": "B4C",
        "Lat": 44.694898086811364,
        "Lng": -63.568759929883136
      },
      {
        "PostalCode": "B4E",
        "Lat": 44.69491224324321,
        "Lng": -63.57360552182953
      },
      {
        "PostalCode": "B4G",
        "Lat": 44.19465660000001,
        "Lng": -62.771191814285665
      }
    ];

    pCode.forEach(function(code){
      // console.log(code);
      var c = new PostCode(
        code.PostalCode,
        code.Lat,
        code.Lng,
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 200),
        Math.floor(Math.random() * 200),
        "ABC",
        "DEE",
        "AEF",
        []
      );
      postalCodeArea.pushObject(c);
    });
    self.set('postalCodeArea', postalCodeArea);
  }

});
