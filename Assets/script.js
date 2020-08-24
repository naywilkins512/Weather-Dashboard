$("#searchedCityBtn").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var city = $("#searchedCityInput").val();

    // Here we construct our URL
    
// let APIKey = "&appid=78e6c921cefb9a49851564e781798bb6"
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=78e6c921cefb9a49851564e781798bb6"



    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
        console.log(queryURL)
        console.log(response)
      $("#citydisplay").text(city);
    });
})
