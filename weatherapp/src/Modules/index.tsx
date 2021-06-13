import React, { Fragment, useState } from "react";
import styled from "styled-components";
import CitySearchTabs from "./CitySearchTabs";
import CityWeatherInfoTab from "./CityWeatherInfoTab";
import MenuBar from "./MenuBar";
import TabChoice from "../WeatherRestAPI/types";
import SearchResult from "./SearchResult";

type RootRouteProps = {};

const RootRoute: React.FC<RootRouteProps> = (props: RootRouteProps) => {
  const [currentTab, setCurrentTab] = useState<TabChoice>("search");

  const changeCurrentTab = (tabType: TabChoice): void => {
    setCurrentTab(tabType);
  };

  return (
    <RootRouteWrapper>
      <MenuBar currentTab={currentTab} changeCurrentTab={changeCurrentTab} />
      {currentTab === "search" ? (
        <Fragment>
          {<SearchResult />}
          <CitySearchTabs />
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
