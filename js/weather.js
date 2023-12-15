// GET Items (API, elements DOM)
const cityNameDiv = document.getElementById("city-name-div");
const infoWeatherDiv = document.getElementById("info-weather-div");
const infoWeatherHoursDiv = document.getElementById("info-weather-hours-div");
const infoWeatherDetail = document.getElementById("info-weather-detail");

console.log(infoWeatherDetail);

const APIUrl = "https://api.weatherapi.com/v1";
const APIKey = "c27b357da65c440694094147231512";

const APIIcons = "https://www.weatherapi.com/docs/weather_conditions.json";

let city = "Madrid"; //cambiarlo mas adelante por un input en DOM que recoja el value insertado por usuario
//city.toLocaleLowerCase()

let country = "Spain"; // se puede recoger del resp propiedad location.country

const endpointGetForecast = `${APIUrl}/forecast.json?key=${APIKey}&q=${city}&aqi=no`;

//FUNCTIONS

const printInfoWeather = (forecast_data) => {
  const forecastCurrent = forecast_data.current;
  const forecastLocation = forecast_data.location;
  const forecastCondition = forecastCurrent.condition;
  const forecastTemp = forecastCurrent.temp_c;
  const forecastHours = forecast_data.forecast.forecastday[0].hour;

  console.log(forecastHours);

  cityNameDiv.innerHTML = `
    <p>${forecastLocation.name} / ${forecastLocation.country}</p>
    <p>${forecastCondition.text}</p>
    `;

  infoWeatherDiv.innerHTML += `
  <img src="${forecastCondition.icon}" alt="${forecastCondition.text} icon">
  <span>${forecastTemp} <img class="icon-celsius" src="../assets/img/celsius-icon.png" alt"celsius icon"></span>

    <div class="info-detail">
        <p>Precipitaciones: ${forecastCurrent.precip_in}%</p>
        <p>Humedad: ${forecastCurrent.humidity}%</p>
        <p>Viento: ${forecastCurrent.wind_kph} km/h</p>
    </div>
  `;

  //FIXME: porque no lo pinta
  //   infoWeatherDetail.innerHTML += `
  //   <p>Precipitaciones</p>
  //   <p>Humedad</p>
  //   <p>Viento</p>
  //   `;

  forecastHours.forEach((hour) => {
    const time = hour.time.slice(10, 13)

    infoWeatherHoursDiv.innerHTML += `
 <div>
    <span>${time}</span>
    <img src="${hour.condition.icon}" alt="${forecastCondition.text} icon">
    <span> ${hour.temp_c} Cº</span>

 </div> 
  <p>tiempo por horas</p>
  `;
  });

  
};

const getForecastCity = async () => {
  try {
    const res = await fetch(endpointGetForecast);
    if (res.ok) {
      const forecast_data = await res.json();
      console.log(forecast_data);
      printInfoWeather(forecast_data);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

getForecastCity();

//EVENT LISTNENER
