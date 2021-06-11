import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { weatherType } from "./WeatherRestAPI/types";
import { RequestWeather } from "./WeatherRestAPI/RequestWeather";
import debounce from "lodash.debounce";
import GlobalStyle, { theme } from "./Theme";
import { ThemeProvider } from "styled-components";
import RootRoute from "./Modules";
import { cityWeatherData, defaultValue } from "./Atoms";
import { useRecoilState } from "recoil";

const App = () => {
  // store customer's input value
  const [cityInputName, setCityInputName] = useState<string>("");

  // getter/setter for storing fetched weather data locally
  const [fetchedWeatherData, setFetchedWeatherData] =
    useState<weatherType>(defaultValue);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // getter/setter for storing weather data in global state
  const [weatherData, setWeatherData] =
    useRecoilState<weatherType>(cityWeatherData);

  const delayedinput = useCallback(
    debounce((cityName: string) => fetchWeatherData(cityName), 500),
    []
  );

  useEffect(() => console.log(weatherData));

  const makeCurrentFetchedDataHome = (): void => {
    setWeatherData(fetchedWeatherData);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCityInputName(e.target.value);
    delayedinput(e.target.value);
  };

  const fetchWeatherData = async (cityName: string): Promise<void> => {
    if (!cityName) {
      //setFetchedWeatherData(undefined);
      return;
    }

    setIsLoading(true);
    const res = await RequestWeather(cityName);
    const weatherData: weatherType = await res.json();
    setIsLoading(false);
    //console.log("cityName", cityName);
    if (weatherData.location) {
      setFetchedWeatherData(weatherData);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <WeatherWrapper>
        <GlobalStyle />
        <RootRoute
          fetchWeatherData={fetchWeatherData}
          cityInputName={cityInputName}
          SearchResultCityName={fetchedWeatherData.location.name}
          makeCurrentFetchedDataHome={makeCurrentFetchedDataHome}
          handleTextChange={handleTextChange}
          loading={isLoading}
        />
      </WeatherWrapper>
    </ThemeProvider>
  );
};

const WeatherWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.backgroundcolor};
`;

export default App;
