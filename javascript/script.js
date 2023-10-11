


    //var APIKey = "da92d95564cf58a63cab7bac1045cfe9";

//trying to save to loca storage upon button click not working yet.
    function userInput() {
      
      var cityName = document.getElementById('input-search');
      localStorage.setItem('inputSearch',cityName.trim().val());
    }

    
    
    
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=da92d95564cf58a63cab7bac1045cfe9')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  
/*
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



*/

//Todays Date
var today = dayjs().format('MMM D, YYYY');
document.getElementById('1a').textContent = today;

















