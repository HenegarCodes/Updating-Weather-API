


    var APIkey = "da92d95564cf58a63cab7bac1045cfe9";


//trying to save to loca storage upon button click not working yet.
   /* function userInput() {
      
      var cityName = document.getElementById('input-search');
      localStorage.setItem('input-search',cityName.trim().val());
    }*/

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
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' +searchQuery + '&limit=1&appid='+ APIkey, {
      method: 'GET', //GET is the default.
  credentials: 'same-origin', // include, *same-origin, omit
  redirect: 'follow', // manual, *follow, error
})
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  }
//current weather fetch



//5 day forcast fetch





//Todays Date
var today = dayjs().format('MMM D, YYYY');
document.getElementById('1a').textContent = today;

















