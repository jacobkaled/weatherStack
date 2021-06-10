import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { weatherType } from "./WeatherRestAPI/types";
import { RequestWeather } from "./WeatherRestAPI/RequestWeather";
import TextInput from "./components/TextInput";
import { icons } from "./components/Icons";
import debounce from "lodash.debounce";
import { theme } from "./Theme";
import { ThemeProvider } from "styled-components";

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
    <ThemeProvider theme={theme}>
      <WeatherWrapper>
        {icons().searchIcon}
        <TextInput value={cityName} onChange={handleTextChange} />
      </WeatherWrapper>
    </ThemeProvider>
  );
};

const WeatherWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundcolor};
`;

export default App;
