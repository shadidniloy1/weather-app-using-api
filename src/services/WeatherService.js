import { DateTime } from "luxon";

const API_KEY = "1ec456ac01bf61f6cd3ce525bb1a6519";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const WeatherService = async (infoType, searchParams) => {
  try{
    const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const res = await fetch(url);
  if(!res.ok){
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }
  return await res.json();
  }
  catch(error){
    console.log("Error fetching weather data", error);
    return null;
  }
  
};

const formatToLocalTime = (
  secs,
  offset,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);

const iconFromCode = (icon) =>
  `http://openweathermap.org/img/wn/${icon}@2x.png`;

const formatCurrent = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone,
  } = data;

  const { main: details, icon } = weather[0];
  const formattedLocalTime = formatToLocalTime(dt, timezone);

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise: formatToLocalTime(sunrise, timezone, "hh:mm a"),
    sunset: formatToLocalTime(sunset, timezone, "hh:mm a"),
    speed,
    details,
    icon: iconFromCode(icon),
    formattedLocalTime,
    dt,
    timezone,
    lat,
    lon,
  };
};

const formatForecastWeather = (secs, offset, data) => {
  // console.log(secs);
  const hourly = data
    .filter((f) => f.dt > secs)
    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "hh:mm a"),
      icon: iconFromCode(f.weather[0].icon),
      date: f.dt_txt,
    }))
    .slice(0, 5);

  // hourly
  const dailly = data
    .filter((f) => f.dt_txt.slice(-8) === "00:00:00")
    .map((f) => ({
      temp: f.main.temp,
      title: formatToLocalTime(f.dt, offset, "cccc"),
      icon: iconFromCode(f.weather[0].icon),
      date: f.dt_txt,
    }));

  return { hourly, dailly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedWeatherData = await WeatherService(
    "weather",
    searchParams
  ).then(formatCurrent);

  const { dt, lat, lon, timezone } = formattedWeatherData;
  const formattedForcastWeather = await WeatherService("forecast", {
    lat,
    lon,
    units: searchParams.units,
  }).then((d) => formatForecastWeather(dt, timezone, d.list));

  console.log(formattedWeatherData, formattedForcastWeather);

  return { ...formattedWeatherData, ...formattedForcastWeather };
};

export default getFormattedWeatherData;
