import Ember from 'ember';

export default Ember.Controller.extend({
  activePostalCode: null,
  activeHouse: null,

  b0jChecked: true,
  b2rChecked: true,
  b2sChecked: true,
  b2tChecked: true,
  b2wChecked: true,
  b2xChecked: true,
  b2yChecked: true,
  b2zChecked: true,
  b3aChecked: true,
  b3eChecked: true,
  b3hChecked: true,
  b3kChecked: true,
  b3lChecked: true,
  b3mChecked: true,
  b3nChecked: true,
  b3sChecked: true,
  b3tChecked: true,
  b3vChecked: true,
  b4aChecked: true,
  b4bChecked: true,
  b4cChecked: true,
  b4eChecked: true,
  b4gChecked: true,

  somethingSelected: function(){
    return this.get('activePostalCode') || this.get('activeHouse');
  }.property('activeHouse', 'activePostalCode'),

  actions: {
    selectHouse: function(house){
      console.log('house selected', house);
      this.set('activeHouse', house);
      this.set('activePostalCode', this.PostalCode.get('postalCodeArea').findBy('code', house.get('postalCode')));
    },
    selectPostalCode: function(postCode){
      this.set('activePostalCode', postCode);
      var currentHouse = this.get('activeHouse')
      if (currentHouse && currentHouse.get('postalCode') != postCode.get('code')){
        this.set('activeHouse', null);
      }
    },
    clearSelected: function(){
      this.set('activeHouse', null);
      this.set('activePostalCode', null);
    }
  }
});
