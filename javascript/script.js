$(document).ready(function() {


    var APIKey = "da92d95564cf58a63cab7bac1045cfe9";


var citySearched = document.querySelector('#citySearched')

//grabbing the recent search
var searchBn = document.getElementById('searchBtn');
searchBn.addEventListener("click", recentSearch)


function recentSearch() {
    var inputSrch = document.getElementById('input-search');
    var searchInput = inputSrch.value;
    var cityName = searchInput;
    localStorage.setItem("City Searched", JSON.stringify(cityName));

console.log("recent search:", searchInput);

}






//current weather fetch



//5 day forcast fetch



//recent-searches id to display form local storage and be saved to this div when searched



















})
