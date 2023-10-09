$(document).ready(function() {


    var APIKey = "da92d95564cf58a63cab7bac1045cfe9";
var cityName = '';

//current weather fetch
function fetchWeather(cityName, callback) {
    var CurrentWeatherURL = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=da92d95564cf58a63cab7bac1045cfe9"
    $.getJSON(CurrentWeatherURL, callback);
}


//5 day forcast fetch



function currentWeather(data) {
    var city = data.name;
    var date = dayjs().format('MMMM D, YYYY') 
    var weatherIcon = a.weather[0].weatherIcon
    var weatherURL = "http://openweathermap.org/img/w/" + iconcode + ".png";
}




















})
