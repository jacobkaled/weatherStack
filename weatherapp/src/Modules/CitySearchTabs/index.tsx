import React, { useEffect, useRef } from "react";
import TextInput from "../../components/TextInput";
import styled from "styled-components";

type CitySearchTabProps = {
  cityInputName: string;
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CitySearchTabs: React.FC<CitySearchTabProps> = (
  props: CitySearchTabProps
) => {
  const { cityInputName, handleTextChange } = props;
  const _ref = useRef<HTMLInputElement>();
  useEffect(() => {
    if (_ref && _ref.current) {
      _ref.current.focus();
    }
  }, []);

  console.log("render input");
  return (
    <CitySearchTabWrapper>
      <TextInput
        value={cityInputName}
        onChange={handleTextChange}
        ref={_ref}
        labelText={"Type down your city ... "}
      />
    </CitySearchTabWrapper>
  );
};

const CitySearchTabWrapper = styled.section`
  position: relative;
`;

export default CitySearchTabs;
