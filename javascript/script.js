$(document).ready(function() {


    var APIKey = "da92d95564cf58a63cab7bac1045cfe9";


    var citySearched = document.querySelector('#citySearched');
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
    }






//current weather fetch



//5 day forcast fetch



//recent-searches id to display form local storage and be saved to this div when searched



















})
