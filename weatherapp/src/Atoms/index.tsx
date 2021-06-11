import { atom, selector } from "recoil";
import { weatherType } from "../WeatherRestAPI/types";

export const cityWeatherData = atom<weatherType | undefined>({
  key: "city.Weather.Data",
  default: undefined,
});

export const storeWeatherDataIntoAtom = selector<weatherType | undefined>({
  key: "store.Weather.Data.Into.Atom",
  get: ({ get }) => get(cityWeatherData),
  set: ({ set }, newWeatherValue) => set(cityWeatherData, newWeatherValue),
});
