'use strict';

  function Thermostat() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.MINIMUM_TEMPERATURE = 10;
    this.isPowerSavingMode = true;
    this.PSM_MAX_TEMPERATURE = 25;
    this.MAX_TEMPERATURE = 32;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  }

  Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
  };

  Thermostat.prototype.up = function() {
    if(this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1;
  };

  Thermostat.prototype.down = function() {
    if(this.isMinimumTemperature()) {
      return;
    }
    return this.temperature -= 1;
  }
  Thermostat.prototype.isMinimumTemperature = function() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  Thermostat.prototype.isPowerSavingModeOn = function() {
    return this.isPowerSavingMode === true;
  }
  Thermostat.prototype.switchPowerSavingModeOff = function() {
    this.isPowerSavingMode = false;
  }
  Thermostat.prototype.switchPowerSavingModeOn = function() {
    this.isPowerSavingMode = true;
  }
  Thermostat.prototype.isMaximumTemperature = function() {
    if(this.isPowerSavingModeOn()) {
    return this.PSM_MAX_TEMPERATURE  === this.temperature;
    }
    return this.MAX_TEMPERATURE === this.temperature;
  }
  Thermostat.prototype.resetTemperature = function() {
    return this.temperature = this.DEFAULT_TEMPERATURE;
  }
  Thermostat.prototype.energyUsage = function() {
    if(this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
      return 'low-usage'
    }
    if(this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT &&
    this.temperature < this.PSM_MAX_TEMPERATURE){
      return 'medium-usage'
    }
    return 'high-usage'
  }
