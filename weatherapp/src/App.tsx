import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { weatherType } from "./WeatherRestAPI/types";
import { RequestWeather } from "./WeatherRestAPI/RequestWeather";
import TextInput from "./components/TextInput";
import { icons } from "./components/Icons";
import debounce from "lodash.debounce";
const App = () => {
  const [cityName, setCityName] = useState<string>("");

  const delayedinput = useCallback(
    debounce(() => fetchWeather(), 500),
    []
  );

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
    delayedinput();
  };

  const fetchWeather = async (): Promise<weatherType> => {
    const res = await RequestWeather("prague");
    const weatherData: weatherType = await res.json();
    console.log(weatherData);
    return weatherData;
  };

  return (
    <WeatherWrapper>
      {icons().searchIcon}
      <TextInput value={cityName} onChange={handleTextChange} />
    </WeatherWrapper>
  );
};

const WeatherWrapper = styled.div``;

export default App;
