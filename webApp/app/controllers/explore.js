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

  filterObject: function(){
    return {
      b0j: this.get('b0jChecked'),
      b2r: this.get('b2rChecked'),
      b2s: this.get('b2sChecked'),
      b2t: this.get('b2tChecked'),
      b2w: this.get('b2wChecked'),
      b2x: this.get('b2xChecked'),
      b2y: this.get('b2yChecked'),
      b2z: this.get('b2zChecked'),
      b3a: this.get('b3aChecked'),
      b3e: this.get('b3eChecked'),
      b3h: this.get('b3hChecked'),
      b3k: this.get('b3kChecked'),
      b3l: this.get('b3lChecked'),
      b3m: this.get('b3mChecked'),
      b3n: this.get('b3nChecked'),
      b3s: this.get('b3sChecked'),
      b3t: this.get('b3tChecked'),
      b3v: this.get('b3vChecked'),
      b4a: this.get('b4aChecked'),
      b4b: this.get('b4bChecked'),
      b4c: this.get('b4cChecked'),
      b4e: this.get('b4eChecked'),
      b4g: this.get('b4gChecked')
    }
  }.property("b0jChecked", "b2rChecked", "b2sChecked", "b2tChecked", "b2wChecked", "b2xChecked", "b2yChecked", "b2zChecked", "b3aChecked", "b3eChecked", "b3hChecked", "b3kChecked", "b3lChecked", "b3mChecked", "b3nChecked", "b3sChecked", "b3tChecked", "b3vChecked", "b4aChecked", "b4bChecked", "b4cChecked", "b4eChecked", "b4gChecked"),

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
    },

    filterAll: function(){
      this.send('filterGeneric', true);
    },

    filterNone: function(){
      this.send('filterGeneric', false);
    },

    filterGeneric: function(val){
      this.set('b0jChecked', val);
      this.set('b2rChecked', val);
      this.set('b2sChecked', val);
      this.set('b2tChecked', val);
      this.set('b2wChecked', val);
      this.set('b2xChecked', val);
      this.set('b2yChecked', val);
      this.set('b2zChecked', val);
      this.set('b3aChecked', val);
      this.set('b3eChecked', val);
      this.set('b3hChecked', val);
      this.set('b3kChecked', val);
      this.set('b3lChecked', val);
      this.set('b3mChecked', val);
      this.set('b3nChecked', val);
      this.set('b3sChecked', val);
      this.set('b3tChecked', val);
      this.set('b3vChecked', val);
      this.set('b4aChecked', val);
      this.set('b4bChecked', val);
      this.set('b4cChecked', val);
      this.set('b4eChecked', val);
      this.set('b4gChecked', val);
    }
  }
});
