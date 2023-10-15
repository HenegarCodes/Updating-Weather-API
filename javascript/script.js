$(document).ready(function(){

  var forecastWeather = $('#forecast');
  var search = $('#input-search');


    var APIkey = "da92d95564cf58a63cab7bac1045cfe9";


function fetchWeatherData(cityName, callback){
  var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}`;
  $.getJSON(weatherUrl, callback);
}


function fetch5Day(cityName, callback) {
  var futureUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}`;
  $.getJSON(futureUrl, callback);
}

//function to display current weather
function currentWeatherPull(data) {
  var currentDate = dayjs.unix(data.dt).format('MMMM D, YYYY');
  var cityName = data.name;
  var icon = data.weather[0].icon;
  var temp = (data.main.temp - 273.15).toFixed(2);
  var humid = data.main.humidity;
  var wind = data.wind.speed;


  var currentWeather = `
  <h2>${cityName}</h2>
            <p>Date: ${currentDate}</p>
            <p>Temperature: ${temp} °C</p>
            <p>Humidity: ${humid}%</p>
            <p>Wind Speed: ${wind} m/s</p>
            <img src="https://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
  `

  currentWeather.html(currentWeather);
}



function displayCurrentWeather (data) {
  forecastWeather.empty();


  var comingDayForecast = {};
//loop forecast data
for (let i = 0; i < data.list.length; i++) {
  var forecast = data.list[i];
  var date = dayjs.unix(forecast.dt).format('YYYY-MM-DD');
//check if forecast for this date already exists
  if (!comingDayForecast[date]) {
    comingDayForecast[date] = forecast;
}
}

for (var date in comingDayForecast) {
  var forecast = comingDayForecast[date];
  var formatDate = dayjs(forecast.dt_txt).format('MMMM D, YYYY');
  var iconDisplay = forecast.weather[0].icon
  var temp = (forecast.main.temp - 273.15).toFixed(2); // Convert from Kelvin to farenheit
  var humid = forecast.main.humidity;
  var windSpeed = forecast.wind.speed;

  var futureForecast = `  <div class="forecast-item">
  <p>Date: ${formatDate}</p>
  <p>Temperature: ${temp} °C</p>
  <p>Humidity: ${humid}%</p>
  <p>Wind Speed: ${windSpeed} m/s</p>
  <img src="https://openweathermap.org/img/w/${iconDisplay}.png" alt="Weather Icon">
</div>`;
forecastWeather.append(futureForecast);
}

}


//form/click search submission

search.on('submit', function(event){

  event.preventDefault();
  var cityName = search.val().trim();

  if(!cityName){
    return;
  }
//cureent forecast display
  fetchWeatherData(cityName, function(currentWeatherData){
    currentWeatherPull(currentWeatherData);
  })
//5 day forecast display
  fetch5Day(cityName, function(forecastData){
    displayCurrentWeather(forecastData)
  })

//searched city save to loca storage and parse
var searchHistory = JSON.parse(localStorage)

})



}












//get user input then use it in make weather request function and pull the lat and long from it
  /*  var searchBtn = document.getElementById('searchBtn')
    searchBtn.addEventListener('click', handleSearch);
    function handleSearch(event) {
      event.preventDefault();

      var searchInput = document.getElementById('input-search');
      var searchQuery = searchInput.value;

      console.log('Search query:', searchQuery);

      makeWeatherRequest(searchQuery);
    }
    
    function makeWeatherRequest(searchQuery,callback){
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' +searchQuery + '&limit=5&appid='+ APIkey){
      $.getJSON(searchQuery, callback);
}



 /*    var latitude = data[0].lat;
      var longitude = data[0].lon;
     
      getWeatherData(latitude, longitude);
      
    });
  }
//current weather fetch

function getWeatherData(latitude, longitude) {
  fetch('http://api.openweathermap.org/geo/1.0/reverse?lat=' + latitude + '&lon=' + longitude + '&limit=5&appid=' + APIkey, {
    method: 'GET', //GET is the default.

  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);


  })
}

/*
//5 day forcast fetch
function get5DayData(latitude,longitude) {
  fetch('api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIkey, {
    method: 'GET', //GET is the default.
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
}




//Todays Date
var today = dayjs().format('MMM D, YYYY');
document.getElementById('1a').textContent = today;







*/








)
