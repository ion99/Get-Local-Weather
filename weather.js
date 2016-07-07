$(document).ready(function(){
  function getLocalWeather(){
   
    let html = ""; // use var instead let if you do not use Chrome, or babel
    let html1 = "";
    $.getJSON("https://api.wunderground.com/api/c451ff398a91d3b1/forecast/conditions/q/autoip.json", function(data){
      //console.log("Yahooo",data);
      html += "<div class='weather'>" + data.current_observation.display_location.full + 
      "<br><div class='far'>" + data.current_observation.temp_f + 
      " <span class='cf clickable'>&#8457;</span></div>" + data.current_observation.weather + 
      "<br><img src='" + data.current_observation.icon_url.slice(0,4) + 
      "s" + data.current_observation.icon_url.slice(4) + "'height='150' width='150'></div>";  
      
      html1 += "<div class='weather'>" + data.current_observation.display_location.full + 
      "<br><div class='cel'>" + data.current_observation.temp_c + 
      " <span class='fc clickable'>&#8451;</span></div>" + data.current_observation.weather + 
      "<br><img src='" + data.current_observation.icon_url.slice(0,4) + 
      "s" + data.current_observation.icon_url.slice(4) + "'height='150' width='150'></div>";
      
      $("#data").html(html);
          
      $(".cf").click(function(){
        $("#data").html(html1);
        $(".fc").click(function(){
          $("#data").html(html);
          getLocalWeather();
        })
      })
    })
  } 
  getLocalWeather();      
})  