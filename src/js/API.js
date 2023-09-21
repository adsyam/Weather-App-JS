const apiKey = "a7b4880c2b247f61a55beb7ff2da04c7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchCity = document.querySelector(".search input")
const searchCityBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json()
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&#8451;";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "&#37; ";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    

    if (data.weather[0].main === "Clouds") {
      return weatherIcon.src = "images/clouds.png";
    }
    if (data.weather[0].main === "Clear") {
      return weatherIcon.src = "images/clear.png"
    }
    if (data.weather[0].main === "Rain") {
      return weatherIcon.src = "images/rain.png"
    }
    if (data.weather[0].main === "Drizzle") {
      return weatherIcon.src = "images/drizzle.png"
    }
    if (data.weather[0].main === "Mist") {
      return weatherIcon.src = "images/mist.png"
    }
  }
}

searchCityBtn.addEventListener("click", () => {
  checkWeather(searchCity.value);
})

searchCity.addEventListener("keydown", (event) => {
  const enter = event.key;
  if (enter === "Enter") {
    checkWeather(searchCity.value);
  }
})

checkWeather();