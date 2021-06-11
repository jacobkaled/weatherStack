import React from "react";
import TextInput from "../../components/TextInput";
import styled from "styled-components";

type CitySearchTabProps = {
  cityInputName: string;
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CitySearchTab: React.FC<CitySearchTabProps> = (
  props: CitySearchTabProps
) => {
  const { cityInputName, handleTextChange } = props;

  return (
    <CitySearchTabWrapper>
      <TextInput value={cityInputName} onChange={handleTextChange} />
    </CitySearchTabWrapper>
  );
};

const CitySearchTabWrapper = styled.section`
  position: relative;
`;

export default CitySearchTab;
