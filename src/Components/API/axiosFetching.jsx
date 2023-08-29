import axios from "axios";

const API_KEY = "d0f82347ba59541e7e687bd14b836beb";
const FORECAST_BASE_URL = "https://api.openweathermap.org/data/2.5/forecast?";

export const getForecastData = async (city) => {
  const response = await axios.get(
    FORECAST_BASE_URL + `q=${city}&appid=` + API_KEY
  );
  return response.data;
};

export const getWeatherData = async (city) => {
  const response = await axios.get(
    WEATHER_BASE_URL + `q=${city}&appid=` + API_KEY
  );
  console.log(response);
  return response.data;
};
