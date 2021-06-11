import React, { useState } from "react";
import styled from "styled-components";
import CitySearchTab from "./CitySearchTab";
import CityWeatherTabInfo from "./CityWeatherInfoTab";
import MenuBar from "./MenuBar";
import TabChoice from "../WeatherRestAPI/types";
import SearchResult from "./SearchResult";
import { weatherType } from "../WeatherRestAPI/types";

type RootRouteProps = {
  cityInputName: string;
  fetchWeatherData: (cityName: string) => Promise<void>;
  SearchResultCityName?: string | undefined;
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  makeCurrentFetchedDataHome: (weatherData: weatherType) => void;
  loading: boolean;
};

const RootRoute: React.FC<RootRouteProps> = (props: RootRouteProps) => {
  const {
    cityInputName,
    handleTextChange,
    fetchWeatherData,
    SearchResultCityName,
    loading,
    makeCurrentFetchedDataHome,
  } = props;
  const [currentTab, setCurrentTab] = useState<TabChoice>("search");

  const changeCurrentTab = (tabType: TabChoice): void => {
    setCurrentTab(tabType);
  };

  return (
    <RootRouteWrapper>
      <SearchResult
        result={SearchResultCityName}
        loading={loading}
        makeCurrentFetchedDataHome={makeCurrentFetchedDataHome}
      />
      <MenuBar currentTab={currentTab} changeCurrentTab={changeCurrentTab} />
      {currentTab === "search" ? (
        <CitySearchTab
          cityInputName={cityInputName}
          handleTextChange={handleTextChange}
        />
      ) : (
        <CityWeatherTabInfo />
      )}
    </RootRouteWrapper>
  );
};

const RootRouteWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export default RootRoute;
