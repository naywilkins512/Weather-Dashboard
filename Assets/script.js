
// day array to change dt code to day

let dayArray = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]


//main search button function



$("#searchedCityBtn").on("click", function (event) {

    event.preventDefault();
    var city = $("#searchedCityInput").val();
    let currentWeatherQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=78e6c921cefb9a49851564e781798bb6"

// current weather API for name and Coords

    $.ajax({
        url: currentWeatherQueryURL,
        method: "GET"
    })
        .then(function (currentWeatherResponse) {

            console.log(currentWeatherResponse)

//one call API

            let oneCallQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + currentWeatherResponse.coord.lat + "&lon=" + currentWeatherResponse.coord.lon +
                "&exclude=minutely,hourly&units=imperial&appid=78e6c921cefb9a49851564e781798bb6"


            $.ajax({
                url: oneCallQueryURL,
                method: "GET"
            })
                .then(function (response) {

//main display

                    $("#cityDisplay").text(currentWeatherResponse.name);
                    $("#tempDisplay").text("Temperature: " + Math.round(response.current.temp));
                    $("#iconDisplay").attr("src", "http://openweathermap.org/img/wn/" + response.current.weather[0].icon + "@2x.png")
                    $("#humidityDisplay").text("Humidity: " + response.current.humidity);
                    $("#windDisplay").text("Wind: " + Math.round(response.current.wind_speed));
                    $("#uvDisplay").text("UV Index: " + Math.round(response.current.uvi));

// uv index color indicator

                    if (response.current.uvi <= 6) {
                        $("#uvDisplay").css("background-color", "green")
                    } else if (response.current.uvi <= 10 ) {
                        $("#uvDisplay").css("background-color", "orange")
                    } else if (response.current.uvi >= 11) {
                        ($("#uvDisplay").css("background-color", "red"))
                    };

// 5 day forecast loop

                    for (let i = 1; i < 6; i++) {
                        let forecastDiv = $("<div>");
                        forecastDiv.addClass("col-sm-2 border mx-3 Forecastdiv");
                        forecastDiv.text(dayArray[new Date(response.daily[i].dt * 1000).getDay()]);
                        let br = $("<br>");
                        let br2 = $("<br>");
                        let list = $("<ul></ul>")
                        let templi = $("<p></p>").text(response.daily[i].temp.max)
                        let li2 = $("<p></p>").text(response.daily[i].weather[0].description)
                        let li3 = $("<img></img>")

                        li3.attr("src", "http://openweathermap.org/img/wn/" + response.daily[i].weather[0].icon + "@2x.png")


                        list.append(templi, li3, li2)
                        forecastDiv.append(br, br2, list)
                        $("#5dayForecast").append(forecastDiv)

                    }

                })
        })
});

//figure out why it keeps appending.look into html method. why is html only adding one?
// make weather icon appear in main window. look above for jquery appending.
// save search bar values to local storage
// make sidebar value text pull from local storage and appear in sidebar
//make sidebar values clickable in a way that would run the function