"use strict";

class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
  }
  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return "Low-usage";
    }
    if (
      this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT &&
      this.temperature <= this.MAX_LIMIT_PSM_ON
    ) {
      return "Medium-usage";
    }
    return "High-usage";
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }
  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }
  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1;
  }
  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1;
  }
  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }
  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  switchPowerSavingModeOff() {
    return (this.powerSavingMode = false);
  }
  switchPowerSavingModeOn() {
    return (this.powerSavingMode = true);
  }
}
