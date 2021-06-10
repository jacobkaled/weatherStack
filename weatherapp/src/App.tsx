import React, { useEffect } from "react";
import styled from "styled-components";
import { weatherType } from "./WeatherRestAPI/types";
import { RequestWeather } from "./WeatherRestAPI/RequestWeather";
import TextInput from "./components/TextInput";

const App = () => {
  const fetchWeather = async (): Promise<weatherType> => {
    const res = await RequestWeather("prague");
    const weatherData: weatherType = await res.json();
    return weatherData;
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  return (
    <WeatherWrapper>
      <TextInput />
    </WeatherWrapper>
  );
};

const WeatherWrapper = styled.div``;

export default App;
