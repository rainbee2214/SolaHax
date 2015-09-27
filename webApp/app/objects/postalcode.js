import Ember from 'ember'
export default Ember.Object.extend({
  init: function(code, lat, lng, avgElevation, avgSavings, avgSolarPower, avgHouseSize, avgAge, avgRoofPitch, avgAzimuth, avgElectricityConsumption, avgWaterConsumption, mostCommonConventionalSystem, mostCommonSolarSystem, mostCommonInstallationType, elevations){
    this.set('code', code);
    this.set('lat', lat);
    this.set('lng', lng);
    this.set('avgElevation', avgElevation);
    this.set('avgSavings', avgSavings);
    this.set('avgSolarPower', avgSolarPower);
    this.set('avgHouseSize', avgHouseSize);
    this.set('avgAge', avgAge);
    this.set('avgRoofPitch', avgRoofPitch);
    this.set('avgAzimuth', avgAzimuth);
    this.set('avgElectricityConsumption', avgElectricityConsumption);
    this.set('avgWaterConsumption', avgWaterConsumption);
    this.set('mostCommonConventionalSystem', mostCommonConventionalSystem);
    this.set('mostCommonSolarSystem', mostCommonSolarSystem);
    this.set('mostCommonInstallationType', mostCommonInstallationType);
    this.set('elevations', elevations);
  },

  code: "B3A",
  lng: 0,
  lat: 0,

  avgElevation: 0,
  avgSavings: 0,
  avgSolarPower: 0,
  avgHouseSize: 0,
  avgAge: 0,
  avgRoofPitch: 0,
  avgAzimuth: 0,
  avgElectricityConsumption: 0,
  avgWaterConsumption: 0,

  mostCommonConventionalSystem: "",
  mostCommonSolarSystem: "",
  mostCommonInstallationType: "",

  elevations: [],
});
