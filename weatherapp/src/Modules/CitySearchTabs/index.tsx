import React, { useEffect, useRef, useCallback } from "react";
import TextInput from "../../components/TextInput";
import styled from "styled-components";
import { useFetchData, loadState, inputText } from "../../Atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import debounce from "lodash.debounce";

type CitySearchTabProps = {};

const CitySearchTabs: React.FC<CitySearchTabProps> = (
  props: CitySearchTabProps
) => {
  const _ref = useRef<HTMLInputElement>();

  const fetchedWeatherData = useFetchData();
  const [currentInputText, setInputText] = useRecoilState(inputText);
  const setLoading = useSetRecoilState(loadState);

  // consume the API endpoint after the user stops typing for 500ms
  const delayedinput = useCallback(
    debounce((inputText: string) => fetchingWeatherData(inputText), 500),
    []
  );

  // focus the search bar once the component got loaded
  useEffect(() => {
    if (_ref && _ref.current) {
      _ref.current.focus();
    }
  }, []);

  const fetchingWeatherData = async (inputText: string): Promise<void> => {
    try {
      setLoading((state: boolean) => (state = true));
      await fetchedWeatherData(inputText);
      setLoading((state: boolean) => (state = false));
    } catch (err) {
      console.log("error from the API", err);
    }
  };

  return (
    <CitySearchTabWrapper>
      <TextInput
        value={currentInputText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputText(e.target.value);
          delayedinput(e.target.value);
        }}
        ref={_ref}
        placeHolder={"Type down your city ... "}
      />
    </CitySearchTabWrapper>
  );
};

const CitySearchTabWrapper = styled.section`
  position: relative;
`;

export default CitySearchTabs;
