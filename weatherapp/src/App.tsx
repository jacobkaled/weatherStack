import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { weatherType } from "./WeatherRestAPI/types";
import { RequestWeather } from "./WeatherRestAPI/RequestWeather";
import debounce from "lodash.debounce";
import GlobalStyle, { theme } from "./Theme";
import { ThemeProvider } from "styled-components";
import RootRoute from "./modules";
import { cityWeatherData } from "./Atoms";
import { useRecoilState } from "recoil";

const App = () => {
  const [cityInputName, setCityInputName] = useState<string>("");
  const [fetchedWeatherData, setFetchedWeatherData] =
    useState<weatherType | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] =
    useRecoilState<weatherType | undefined>(cityWeatherData);

  const delayedinput = useCallback(
    debounce((cityName: string) => fetchWeather(cityName), 500),
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

  const fetchWeather = async (cityName: string) => {
    if (!cityName) {
      setFetchedWeatherData(undefined);
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
          cityInputName={cityInputName}
          SearchResultCityName={fetchedWeatherData?.location.name}
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
