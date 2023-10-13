


    var APIkey = "da92d95564cf58a63cab7bac1045cfe9";

//get user input then use it in make weather request function and pull the lat and long from it
    var searchBtn = document.getElementById('searchBtn')
    searchBtn.addEventListener('click', handleSearch);
    function handleSearch(event) {
      event.preventDefault();

      var searchInput = document.getElementById('input-search');
      var searchQuery = searchInput.value;

      console.log('Search query:', searchQuery);

      makeWeatherRequest(searchQuery);
    }
    
    function makeWeatherRequest(searchQuery){
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' +searchQuery + '&limit=5&appid='+ APIkey, {
      method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);


      var latitude = data[0].lat;
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


*/

//Todays Date
var today = dayjs().format('MMM D, YYYY');
document.getElementById('1a').textContent = today;

















