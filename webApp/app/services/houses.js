import Ember from 'ember';
import House from '../objects/house'

export default Ember.Service.extend({
  houses: Ember.A(),

  init: function(){
    this.mockHouses();
  },

  mockHouses: function(){
    var houses = this.get('houses');
    for (var i=0; i<48; i++){
      var house = new House(
        123,
        45,
        65,
        Math.floor(Math.random() * 200),
        "B3A",
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
    }
  },

});
