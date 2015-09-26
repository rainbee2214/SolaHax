import Ember from 'ember';

export default Ember.Controller.extend({
  activePostalCode: null,
  activeHouse: null,
  init: function(){
    this.set('activePostalCode', this.PostalCode.get('postalCodeArea')[0]);
    this.set('activeHouse', this.Houses.get('houses')[0]);
  },
  somethingSelected: function(){
    return this.get('activePostalCode') || this.get('activeHouse');
  }.property('activeHouse', 'activePostalCode'),
});
