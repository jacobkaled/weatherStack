import React from "react";
import styled from "styled-components";

type TextInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  const { value, onChange } = props;
  return (
    <TextInputWrapper>
      <label htmlFor="input"> Search Text </label>
      <InputText
        type="text"
        id="input"
        name="input"
        value={value}
        onChange={onChange}
      />
    </TextInputWrapper>
  );
};

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputText = styled.input`
  border: 2px solid gray;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 10px;
  font-size: 20px;
  width: 350px;
  padding: 10px;
`;

export default TextInput;
