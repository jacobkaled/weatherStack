import React from "react";
import styled from "styled-components";
import TabChoice from "../../WeatherRestAPI/types";
import { icons } from "../../components/Icons";

type MenuBarProps = {
  currentTab: TabChoice;
  changeCurrentTab: (tabValue: TabChoice) => void;
};
const MenuBar: React.FC<MenuBarProps> = (props: MenuBarProps) => {
  return (
    <MenuBarWrapper>
      {icons().searchIcon}
      <div>CitySearch</div>
      <div>info display</div>
    </MenuBarWrapper>
  );
};

const MenuBarWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  background-color: lightsteelblue;
`;

export default MenuBar;
