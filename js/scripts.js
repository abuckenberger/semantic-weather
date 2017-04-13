// SCRIPTS


$.simpleWeather({
    location: 99004,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.city').text(weather.city);
      $('.image img').attr('src', weather.image);
      $('.description p').text(weather.text);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// accordian

$('.ui.accordion')
  .accordion()
;