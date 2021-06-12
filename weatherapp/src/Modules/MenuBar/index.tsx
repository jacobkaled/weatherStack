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
  const currentWeatherData = useRecoilValue(cityWeatherData);

  return (
    <MenuBarWrapper>
      <Button onClick={() => changeCurrentTab("search")}> Search City</Button>
      <Button
        onClick={() =>
          currentWeatherData.location.name !== "_" &&
          changeCurrentTab("display")
        }
      >
        show weather data
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
  background-color: lightgray;
`;

const Button = styled.div`
  cursor: pointer;
  height: 100%;
  border: 1px solid gray;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MenuBar;
