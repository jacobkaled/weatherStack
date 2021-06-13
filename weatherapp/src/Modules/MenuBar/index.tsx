import React from "react";
import TabChoice from "../../WeatherRestAPI/types";
import styled from "styled-components";
import { cityWeatherData } from "../../Atoms";
import { useRecoilValue } from "recoil";

type MenuBarProps = {
  currentTab: TabChoice;
  changeCurrentTab: (tabType: TabChoice) => void;
};
const MenuBar: React.FC<MenuBarProps> = (props: MenuBarProps) => {
  const { changeCurrentTab } = props;
  const savedWeatherData = useRecoilValue(cityWeatherData);

  const isDataAvailable = savedWeatherData.location.name !== "_";
  console.log("siAAAcitve ", isDataAvailable);
  return (
    <MenuBarWrapper>
      <Button isActive={true} onClick={() => changeCurrentTab("search")}>
        Search City
      </Button>
      <Button
        isActive={isDataAvailable}
        onClick={() => isDataAvailable && changeCurrentTab("display")}
      >
        {isDataAvailable
          ? `show ${savedWeatherData.location.name} weather data`
          : "No City saved as home"}
      </Button>
    </MenuBarWrapper>
  );
};

const MenuBarWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: lightsteelblue;
`;

const Button = styled.div<{ isActive: boolean }>`
  cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};
  color: ${({ isActive }) => (isActive ? "black" : "white")};
  height: 100%;
  border: 2px solid white;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MenuBar;
