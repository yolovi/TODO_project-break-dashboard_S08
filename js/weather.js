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

// const getWeatherIcon = async () => {
//   try {
//     const res = await fetch(APIIcons);
//     if (res.ok) {
//         const icons = await res.json()
//       console.log(icons);

//       icons.forEach(element => {
//         console.log(element)
//       });
//     //   infoWeatherDiv.innerHTML = `<img src="" alt"icon">`
//     }
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// getWeatherIcon()

const printInfoWeather = (forecast_data) => {
  const forecastCurrent = forecast_data.current;
  const forecastLocation = forecast_data.location;
  const forecastCondition = forecastCurrent.condition;
  const forecastTemp = forecastCurrent.temp_c;

  //console.log(forecastCurrent.humidity)

  cityNameDiv.innerHTML = `
    <p>${forecastLocation.name} / ${forecastLocation.country}</p>
    <p>${forecastCondition.text}</p>
    `;

  infoWeatherDiv.innerHTML += `
  <img src="${forecastCondition.icon}" alt="${forecastCondition.text} icon">
  <span>${forecastTemp} <img class="icon-celsius" src="../assets/img/celsius-icon.png" alt"celsius icon"></span>
  `;

  infoWeatherDetail.innerHTML += `
  <p>hola</p>
  `;


//   infoWeatherDetail.innerHTML = `
//   <p>Precipitaciones:  ${forecastCurrent.humidity}</p>
//   <p>Humedad:</p>
//   <p>Viento:</p>
//   `;
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
