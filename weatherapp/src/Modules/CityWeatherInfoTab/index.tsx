import React, { Fragment } from "react";
import { cityWeatherData } from "../../Atoms";
import { useRecoilValue } from "recoil";

type weatherDataKeys = "location" | "current";

const CityWeatherInfoTab = () => {
  const currentWeatherData = useRecoilValue(cityWeatherData);

  const renderStoredWeatherData = (key: weatherDataKeys): JSX.Element[] => {
    const locationObject = Object.entries(currentWeatherData[key]).map(
      (item) => (
        <div>
          {item[0]} : {item[1]}
        </div>
      )
    );
    return locationObject;
  };
  return (
    <Fragment>
      <h3>{renderStoredWeatherData("current")}</h3>
      <h3>{renderStoredWeatherData("location")}</h3>;
    </Fragment>
  );
};

export default CityWeatherInfoTab;
