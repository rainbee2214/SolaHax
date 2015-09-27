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

  postalCodeArea: Ember.A(),

  init: function(){
    this.mockPostalCodes();
  },

  mockPostalCodes: function(){
    var all = this.get('all');
    var postalCodeArea = this.get('postalCodeArea');

    all.forEach(function(code){
      var c = new PostCode(
        code,
        44.7050000,
        -63.6789583,
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
  }

});
