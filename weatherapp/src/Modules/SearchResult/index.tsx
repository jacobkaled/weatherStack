import React from "react";
import { icons } from "../../components/Icons";
import styled from "styled-components";
import {
  cityWeatherData,
  loadState,
  defaultValue,
  searchedCityWeatherData,
} from "../../Atoms";
import { useRecoilState, useRecoilValue } from "recoil";

type SearchResultProps = {};

const SearchResult: React.FC<SearchResultProps> = (
  props: SearchResultProps
) => {
  const [savedWeatherData, setsavedWeatherData] =
    useRecoilState(cityWeatherData);
  const loading = useRecoilValue(loadState);
  const searchedWeatherData = useRecoilValue(searchedCityWeatherData);

  return (
    <SearchResultWrapper>
      <ResultsModule>
        {loading ? (
          <Spinner>{icons().spinner}</Spinner>
        ) : (
          searchedWeatherData.location.name &&
          searchedWeatherData.location.name !== "_" && (
            <ResultBar>
              <CityNameTab> {searchedWeatherData.location.name}</CityNameTab>
              {searchedWeatherData.location.name ===
              savedWeatherData.location.name ? (
                <Pill
                  isPrimary={true}
                  onClick={() => setsavedWeatherData(defaultValue)}
                >
                  already home
                </Pill>
              ) : (
                <Pill
                  isPrimary={false}
                  onClick={() => setsavedWeatherData(searchedWeatherData)}
                >
                  click to make home
                </Pill>
              )}
            </ResultBar>
          )
        )}
      </ResultsModule>
    </SearchResultWrapper>
  );
};

const SearchResultWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultBar = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Spinner = styled.svg`
  width: 30px;
  height: 30px;
`;

const CityNameTab = styled.div`
  font-size: 40px;
  text-transform: uppercase;
  font-weight: bold;
  color: darkslateblue;
`;

const Pill = styled.div<{ isPrimary: boolean }>`
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid white;
  padding: 5px;
  background-color: ${({ isPrimary }) => (isPrimary ? "red" : "green")};
  color: white;
`;

const ResultsModule = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SearchResult;
