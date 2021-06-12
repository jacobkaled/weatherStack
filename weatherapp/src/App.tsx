import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { weatherType } from "./WeatherRestAPI/types";
import { requestWeather } from "./WeatherRestAPI/RequestWeather";
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

  // useEffect(() => console.log(weatherData));

  const makeCurrentFetchedDataHome = (): void => {
    setWeatherData(fetchedWeatherData);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCityInputName(e.target.value);
    delayedinput(e.target.value);
  };

  const fetchWeatherData = async (cityName: string): Promise<void> => {
    //setIsLoading(true);
    const res = await requestWeather(cityName);
    const weatherData: weatherType = await res.json();
    // setIsLoading(false);
    console.log("cityName", cityName);
    console.log("weatherData", weatherData);
    if (weatherData.request) {
      setFetchedWeatherData(weatherData);
    } else {
      setFetchedWeatherData(defaultValue);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <WeatherWrapper>
        <GlobalStyle />
        <RootRoute
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
