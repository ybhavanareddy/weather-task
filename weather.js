const apiKey = "83cc79865be7f437ceb7d4863fae5a09";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){

const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
var data = await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

                
if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "https://cdn2.iconfinder.com/data/icons/hobbies-misc-1/512/weather___cloudy_partly_forecast_sunny_season_sun_day.png";

}else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "https://w7.pngwing.com/pngs/560/125/png-transparent-weather-map-weather-forecasting-symbol-weather-cloud-computer-wallpaper-meteorology.png";

}else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "https://www.transparentpng.com/download/weather/png-photo-weather-hd-9.png";

}else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "https://cdn3d.iconscout.com/3d/premium/thumb/drizzle-weather-7096832-5753008.png";

}else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "https://img.freepik.com/premium-vector/weather-meteorology-icon-cloud-fog-vector-illustration-weather-forecast-symbol-mobile-web_646072-163.jpg";

}

                
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

            
})