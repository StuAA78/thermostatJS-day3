$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  getWeatherTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  })

  $('#temperature-down').on('click', function(){
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  })

  $('#powersaving-on').on('click', function() {
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
  })

  $('#powersaving-off').on('click', function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
  })

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }
  function getWeatherTemperature() {
    $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather",
    dataType: "json",
    data: {q: "London", appid: "d938dd7cf9c8b849bf49ae58d8109fd1", units: "metric"},
    success: function(data) {
    $('#weather-temperature').text(data.main.temp);
    }
  })
 }
})
