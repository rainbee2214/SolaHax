import Ember from 'ember';

export default Ember.Component.extend({
  initChart: function(){
    //d3 setup goes here
    console.log('making line chart');
  }.on('didInsertElement'),
});