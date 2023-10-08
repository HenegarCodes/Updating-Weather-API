var APIKey = "aecc33e1f3ac606321129d5660f649cb";
var city = document.getElementById('cityName');



//var queryURL = "api.openweathermap.org/data/2.5/weather?q=city&appid=APIKey;
var input = document.getElementById('city');

function getWeather() {
    createCanvas(400, 200);
    loadJSON('api.openweathermap.org/data/2.5/weather?q=London&appid=APIKey',data)
    var button= select('#search');
    button.mousePressed(weatherRequest);
    input = select('#city');
}

function weatherRequest() {
var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + input.value() + "&appid=" + APIKey;

loadJSON(queryURL, requestMade);


 
}

function requestMade(data) {
    console.log(data);
    console.log(weather);
    weather = data;



}


