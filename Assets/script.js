



$("#searchedCityBtn").on("click", function(event) {

    event.preventDefault();

    var city = $("#searchedCityInput").val();
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=78e6c921cefb9a49851564e781798bb6"
    let queryURL2 = "  " + city + "&appid=78e6c921cefb9a49851564e781798bb6" //add api site to beginning of this line
    

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {

       
      $("#cityDisplay").text(response.name);
      let tempF = Math.round((response.main.temp - 273.15) * 1.80 + 32);
      $("#tempDisplay").text("Temperature: " + tempF);
      $("#humidityDisplay").text("Humidity: " + response.main.humidity);
      $("#windDisplay").text("Wind: " + response.main.humidity);

   
})
})


$("button"),this.on("click", function(event) {

    event.preventDefault();

    var city2 = $("button").this.val();
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city2 + "&appid=78e6c921cefb9a49851564e781798bb6"
    // let queryURL2 = "  " + city + "&appid=78e6c921cefb9a49851564e781798bb6" //add api site to beginning of this line
    

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {

       
      $("#cityDisplay").text(response.name);
      let tempF = Math.round((response.main.temp - 273.15) * 1.80 + 32);
      $("#tempDisplay").text("Temperature: " + tempF);
      $("#humidityDisplay").text("Humidity: " + response.main.humidity);
      $("#windDisplay").text("Wind: " + response.main.humidity);

   
})
})

// $("#austin").on("click", function(event) {
//     event.preventDefault();
//     var city = $("#austin").val();
// let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=78e6c921cefb9a49851564e781798bb6"

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//   .then(function(response) {
     
//     $("#cityDisplay").text(response.name);
//     let tempF = Math.round((response.main.temp - 273.15) * 1.80 + 32);
//     $("#tempDisplay").text("Temperature: " + tempF);
//     $("#humidityDisplay").text("Humidity: " + response.main.humidity);
//     $("#windDisplay").text("Wind: " + response.main.humidity);

 
// })

// })


// $.ajax({
//     url: queryURL2,
//     method: "GET"
//   })
//   .then(function(response) {
//  //   $("uvDisplay").text("UV: " + response.main.uv)
// });

//   })