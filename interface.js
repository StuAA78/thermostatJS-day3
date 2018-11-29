$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  city = "London";
  $('#city').val(city);
  getWeatherTemperature(city);

  $(document).keydown(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    var tag = event.target.tagName.toLowerCase();
    if(tag == 'input') { return; }
    if(keycode === 38 || keycode === 39){ // up or right arrow
      thermostat.up();
    };
    if(keycode === 40 || keycode === 37){ // down or left arrow
      thermostat.down();
    };
    updateTemperature();
  })

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

  $('#city').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode === 13){
      city = $('#city').val();
      getWeatherTemperature(city);
    }
  });

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  function getWeatherTemperature(city) {
    $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather",
    dataType: "json",
    data: {q: city, appid: "d938dd7cf9c8b849bf49ae58d8109fd1", units: "metric"},
    success: function(data) {
      $('#weather-temperature').text(data.main.temp);
      city = data.name;
      country = data.sys.country;
      $('#city').val(city + ", " + country);
      console.log(data);
    }
  })
 }
})
