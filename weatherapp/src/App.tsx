import React from "react";
import styled from "styled-components";
import { weatherType } from "./WeatherRestAPI/types";
import GlobalStyle, { theme } from "./Theme";
import { ThemeProvider } from "styled-components";
import RootRoute from "./Modules";
import { cityWeatherData } from "./Atoms";
import { useRecoilValue } from "recoil";

const App = () => {
  // consume the global current weather data
  const weatherData = useRecoilValue<weatherType>(cityWeatherData);

  const renderSavedCity = () => {
    return (
      <CityNameTab>
        {weatherData.location.name !== "_"
          ? `your current city : ${weatherData.location.name}`
          : "no saved city"}
      </CityNameTab>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <WeatherWrapper>
        <GlobalStyle />
        <RootRoute />
        {renderSavedCity()}
      </WeatherWrapper>
    </ThemeProvider>
  );
};

const WeatherWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.backgroundcolor};
`;

const CityNameTab = styled.div`
  position: absolute;
  background-color: darkslateblue;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  bottom: 0px;
  font-size: 20px;
  color: white;
`;

export default App;
