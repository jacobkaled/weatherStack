import { atom } from "recoil";
import { weatherType } from "../WeatherRestAPI/types";

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

// export const storeWeatherDataIntoAtom = selector<weatherType | undefined>({
//   key: "store.Weather.Data.Into.Atom",
//   get: ({ get }) => get(cityWeatherData),
//   set: ({ set }, newWeatherValue) => set(cityWeatherData, newWeatherValue),
// });
