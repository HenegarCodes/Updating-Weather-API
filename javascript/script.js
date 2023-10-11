


    var APIKey = "da92d95564cf58a63cab7bac1045cfe9";


   /* var citySearched = document.querySelector('#citySearched');
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener("click", recentSearch);
    
    function recentSearch() {
      var inputSrch = document.getElementById('input-search');
      var searchInput = inputSrch.value;
      var cityName = searchInput.trim();
      
      var existingSearches = localStorage.getItem('City Searched');
      var cityData = existingSearches ? JSON.parse(existingSearches) : [];
      
      cityData.push(cityName);
      
      localStorage.setItem("City Searched", JSON.stringify(cityData));
    }*/




function getApi() {
  var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=da92d95564cf58a63cab7bac1045cfe9";
  fetch(weatherUrl())
  .then(function(response) {
    return response.JSON();
    })
.then(function (data){
  console.log(data);

}) 
}
//current weather fetch



//5 day forcast fetch



//recent-searches id to display form local storage and be saved to this div when searched


//Todays Date
var today = dayjs().format('MMM D, YYYY');
document.getElementById('1a').textContent = today;

















