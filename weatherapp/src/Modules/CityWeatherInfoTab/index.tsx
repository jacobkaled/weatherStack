import React from "react";
import { cityWeatherData } from "../../Atoms";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

type weatherDataKeys = "location" | "current";

const CityWeatherInfoTab = () => {
  const savedWeatherData = useRecoilValue(cityWeatherData);

  const renderStoredWeatherData = (key: weatherDataKeys): JSX.Element[] => {
    const locationObject = Object.entries(savedWeatherData[key]).map((item) => (
      <Tab>
        {item[0]} : {item[1]}
      </Tab>
    ));
    return locationObject;
  };
  return (
    <Wrapper>
      <h3>{renderStoredWeatherData("current")}</h3>
      <h3>{renderStoredWeatherData("location")}</h3>;
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Tab = styled.div`
  overflow: hidden;
  background-color: lightskyblue;
  margin-bottom: 5px;
  width: 300px;
`;

export default CityWeatherInfoTab;
