import React from "react";
import styled from "styled-components";
import { RequestWeather } from "./WeatherRestAPI/RequestWeather";

const App = () => {
  const x = RequestWeather("www.test.com", "GET", { city: "brazil" });
  return (
    <WeatherWrapper>
      App test {process.env.REACT_APP_WEATHER_PUBLIC_KEY} <h2>{x}</h2>
    </WeatherWrapper>
  );
};

const WeatherWrapper = styled.div``;

export default App;
