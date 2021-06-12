import React from "react";
import { icons } from "../../components/Icons";
import { weatherType } from "../../WeatherRestAPI/types";
import styled from "styled-components";
import { cityWeatherData } from "../../Atoms";
import { useRecoilValue } from "recoil";

type SearchResultProps = {
  SearchResultCityName: string;
  makeCurrentFetchedDataHome: () => void;
  loading: boolean;
};

const SearchResult: React.FC<SearchResultProps> = (
  props: SearchResultProps
) => {
  const { SearchResultCityName, loading, makeCurrentFetchedDataHome } = props;
  const currentWeatherData = useRecoilValue(cityWeatherData);

  return (
    <SearchResultWrapper>
      <ResultsModule>
        {loading ? (
          <Spinner>{icons().spinner}</Spinner>
        ) : (
          SearchResultCityName !== "_" && (
            <ResultBar>
              {SearchResultCityName}
              {currentWeatherData.location.name === SearchResultCityName ? (
                <Pill>already home </Pill>
              ) : (
                <Pill onClick={() => makeCurrentFetchedDataHome()}>
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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;
const Spinner = styled.svg`
  width: 30px;
  height: 30px;
`;

const Pill = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid gray;
  padding: 5px;
`;

const ResultsModule = styled.div`
  width: 380px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed gray;
`;

export default SearchResult;
