// 'ready' event says wait until the DOM is loaded
// before running
$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();

    // event listener:
    $('#temperature-up').on('click', function() { 
      // update model:
      thermostat.up();
      // update view:
      updateTemperature();
    })

    $('#temperature-down').click(function() {
      thermostat.down();
      updateTemperature();
    })

    $('#temperature-reset').click(function(){
      thermostat.resetTemperature();
      updateTemperature();
    });

    $('#powersaving-on').click(function(){
      thermostat.switchPowerSavingModeOn();
      $('#power-saving-status').text('on')
      updateTemperature
    })

    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
    };
});