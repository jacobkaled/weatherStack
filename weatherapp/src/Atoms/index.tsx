import { atom, selector, useRecoilCallback } from "recoil";
import { weatherType } from "../WeatherRestAPI/types";
import { requestWeather } from "../WeatherRestAPI/RequestWeather";

export const defaultValue: weatherType = {
  current: {
    cloudcover: 0,
    feelslike: 0,
    humidity: 0,
    is_day: "_",
    observation_time: "_",
    precip: 0,
    pressure: 0,
    temperature: 0,
    uv_index: 0,
    visibility: 0,
    weather_code: 0,
    wind_degree: 0,
    wind_dir: "_",
    wind_speed: 0,
  },
  location: {
    country: "_",
    lat: "_",
    localtime: "_",
    localtime_epoch: 0,
    lon: "_",
    name: "_",
    region: "_",
    timezone_id: "_",
    utc_offset: "_",
  },
  request: {
    language: "_",
    query: "_",
    type: "_",
    unit: "_",
  },
};

export const cityWeatherData = atom<weatherType>({
  key: "city.Weather.Data",
  default: defaultValue,
});

export const FetchWeatherData = () => {
  return useRecoilCallback(({ set }) => async (cityName: string) => {
    const res = await requestWeather(cityName);
    const weatherData: weatherType = await res.json();
    set(cityWeatherData, weatherData);
  });
};

// export const fetchWeatherData = selector<weatherType>({
//   key: "fetch.Weather.Data",
//   get: ({ get }) => get(cityWeatherData),
//   set:
//     ({ set }) =>
//     async (data:string) => {
//       const response = await RequestWeather(data);
//       const weatherData =await response.json();
//       set(cityWeatherData, weatherData)
//     },
//   //set(cityWeatherData, newWeatherValue),
// });
// export const storeWeatherDataIntoAtom = selector<weatherType | undefined>({
//   key: "store.Weather.Data.Into.Atom",
//   get: ({ get }) => get(cityWeatherData),
//   set: ({ set }, newWeatherValue) => set(cityWeatherData, newWeatherValue),
// });
