$(document).ready(function(){

  $("#loading").ajaxStart(function () {
    $(this).show();
  });

  $("#loading").ajaxStop(function () {
   $(this).hide();
  });

  function getLocalWeather(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        
      $.getJSON("https://api.wunderground.com/api/c451ff398a91d3b1/geolookup/q/" + position.coords.latitude + "," + position.coords.longitude + ".json", function(data) {
           
        $.getJSON("https://api.wunderground.com/api/c451ff398a91d3b1/conditions/q/" + data.location.nearby_weather_stations.airport.station[0].state + "/" + data.location.city + ".json", function(data1) {

          let html = "";
          let html1 = "";

          html += "<div class='weather'>" + data1.current_observation.display_location.full + "<br><div class='far'>" + data1.current_observation.temp_f + " <span class='cf clickable'>&#8457;</span></div>" +
  data1.current_observation.weather + "<br><img src='" + data1.current_observation.icon_url.slice(0,4) + "s" + data1.current_observation.icon_url.slice(4) + "'height='150' width='150'><p class='time'>" + data1.current_observation.observation_time + "</p></div>";
          
          html1 += "<div class='weather'>" + data1.current_observation.display_location.full + "<br>" + "<div class='cel'>" + data1.current_observation.temp_c + " <span class='fc clickable'>&#8451;</span></div>" +
  data1.current_observation.weather + "<br><img src='" + data1.current_observation.icon_url.slice(0,4) + "s" + data1.current_observation.icon_url.slice(4) + "'height='150' width='150'><p class='time'>" + data1.current_observation.observation_time + "</p></div>";
            
          $("#data").html(html);
          
          $(".cf").click(function(){
            $("#data").html(html1);
            $(".fc").click(function(){
              $("#data").html(html);
              getLocalWeather();
            })
          })
        });
      });
     });
   }
  } 
  getLocalWeather();

  $("#refresh").click(function(){

    
  $("#loading").ajaxStart(function () {
    $(this).show();
  });

  $("#loading").ajaxStop(function () {
   $(this).hide();
  });
    
    getLocalWeather();
  })      
})  