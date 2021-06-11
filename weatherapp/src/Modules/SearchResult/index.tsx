import React from "react";
import { icons } from "../../components/Icons";
import { weatherType } from "../../WeatherRestAPI/types";

type SearchResultProps = {
  result?: string | undefined;
  makeCurrentFetchedDataHome: (weatherData: weatherType) => void;
  loading: boolean;
};

const SearchResult: React.FC<SearchResultProps> = (
  props: SearchResultProps
) => {
  const { result, loading, makeCurrentFetchedDataHome } = props;
  console.log("result", result);
  return (
    <div>
      {loading ? icons().spinner : result ? result : " no results"}
      <div>click to make home </div>
    </div>
  );
};

export default SearchResult;
