import Ember from 'ember'
export default Ember.Object.extend({
  init: function(id, lat, lng, elevation, postalCode, size, age, azimuth, roofPitch, savings, powerGeneratedOverTime, conventionalSystem, systemType, installationType, averageSolarPower, waterConsumption, electricityConsumption){
    this.set('id', id);
    this.set('lat', lat);
    this.set('lng', lng);
    this.set('elevation', elevation);
    this.set('postalCode', postalCode);
    this.set('size', size);
    this.set('age', age);
    this.set('azimuth', azimuth);
    this.set('roofPitch', roofPitch);
    this.set('savings', savings);
    this.set('powerGeneratedOverTime', powerGeneratedOverTime);
    this.set('conventionalSystem', conventionalSystem);
    this.set('systemType', systemType);
    this.set('installationType', installationType);
    this.set('averageSolarPower', averageSolarPower);
    this.set('waterConsumption', waterConsumption);
    this.set('electricityConsumption', electricityConsumption);
  },

  id: 0, //welid

  lat: 0,
  lng: 0,
  elevation: 0,
  postalCode: "B3A",
  size: 0,
  age: 0,

  azimuth: 0,
  roofPitch: 0,

  savings: 0, //Relevant? over time?
  powerGeneratedOverTime: [],

  conventionalSystem: "",
  systemType: "",
  installationType: "",

  avgSolarPower: 0,
  waterConsumption: 0,
  electricityConsumption: 0
});
