// 'ready' event says wait until the DOM is loaded
// before running
$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();

  $('#current-city').change(function(){
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=9c441af03920ded5cc14f002cde07455&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  })
   

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
      updateTemperature();
    });

    $('#powersaving-off').click(function() {
      thermostat.switchPowerSavingModeOff();
      $('#power-saving-status').text('OFF')
      updateTemperature();
    })

    function updateTemperature() {
      $('#temperature').text(thermostat.temperature);
      $('#temperature').attr('class', thermostat.energyUsage());
    };
});