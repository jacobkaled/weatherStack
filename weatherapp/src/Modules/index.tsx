import React, { Fragment, useState } from "react";
import styled from "styled-components";
import CitySearchTabs from "./CitySearchTabs";
import CityWeatherInfoTab from "./CityWeatherInfoTab";
import MenuBar from "./MenuBar";
import TabChoice from "../WeatherRestAPI/types";
import SearchResult from "./SearchResult";
import { weatherType } from "../WeatherRestAPI/types";

type RootRouteProps = {
  cityInputName: string;
  SearchResultCityName: string;
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  makeCurrentFetchedDataHome: () => void;
  loading: boolean;
};

const RootRoute: React.FC<RootRouteProps> = (props: RootRouteProps) => {
  const {
    cityInputName,
    handleTextChange,
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
      <MenuBar currentTab={currentTab} changeCurrentTab={changeCurrentTab} />
      {currentTab === "search" ? (
        <Fragment>
          {
            <SearchResult
              SearchResultCityName={SearchResultCityName}
              loading={loading}
              makeCurrentFetchedDataHome={makeCurrentFetchedDataHome}
            />
          }
          <CitySearchTabs
            cityInputName={cityInputName}
            handleTextChange={handleTextChange}
          />
        </Fragment>
      ) : (
        <CityWeatherInfoTab />
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
