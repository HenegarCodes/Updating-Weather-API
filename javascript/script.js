$(document).readyu(function() {


    var APIKey = "aecc33e1f3ac606321129d5660f649cb";
//var queryURL = "api.openweathermap.org/data/2.5/weather?q=city&appid=APIKey;
var input = document.getElementById('city');

//current weather fetch
function fetchWeather(cityName, callback) {
    var CurrentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`;
    $.getJSON(CurrentWeatherURL, callback);
}


//5 day forcast fetch
function ForecastData(cityName, callback) {
    var futureForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}`;
    $.getJSON(futureForecast, callback);
}


function currentWeather(data) {
    var city = data.name;
    var date = dayjs().format('MMMM D, YYYY') 
    var weatherIcon = a.weather[0].weatherIcon
    var weatherURL = "http://openweathermap.org/img/w/" + iconcode + ".png";
}

















})
