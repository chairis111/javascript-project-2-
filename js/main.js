// User id key for OpenWeatherMap website (API key)
const apiKey = "9d836467c183cb090f96a14f142ce203";

// The OpenWeatherMap link address to the API
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// used QuerySelector to find the class name in the HTML
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Used Async and Await function to load the weather data from the API
async function loadWeather(city) {
  // Used await and fetch to get the weather data for the specified city using the OpenWeatherMap API
  // Also the try and catch if there is a misspelled city name
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();
  
    // with data collected from the openweathermap website, they are display on the document with the Id's create in HTML and also styled in css
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "&deg;c";
    document.getElementById("high-temp").innerHTML = Math.round(data.main.temp_max) + "&deg;c";
    document.getElementById("low-temp").innerHTML = Math.round(data.main.temp_min) + "&deg;c";
    document.getElementById("humidity").innerHTML = Math.round(data.main.humidity) + "%";
    document.getElementById("wind").innerHTML = Math.round(data.wind.speed) + " <small>km/h</small>";
  
    // used if and else to add images to the main temp, used the api readings in console.log to match images with weather forecast
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Windy") {
      weatherIcon.src = "images/wind.png";
    } else if (data.weather[0].main == "Humid") {
      weatherIcon.src = "images/humidity.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    // catch any incorrect city name
    } catch (error) {
    // Display error message if city name is incorrect
    alert("Error: Invalid City Name. Please try again.");
    // Show a pop up with an error 
    console.error(error); 
    }
    
}

// Added an event listener to the search button, triggering the searchCity function when clicked
searchBtn.addEventListener("click", searchCity);

// Define a function to initiate a weather search using the entered city
function searchCity() {
  // Call the loadWeather function with the value entered in the search box
  loadWeather(searchBox.value);
}






















