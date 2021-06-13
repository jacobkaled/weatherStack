import React from "react";
import styled from "styled-components";

type TextInputProps = {
  value: string;
  labelText?: string;
  placeHolder?: string;
  ref: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInputProps> = React.forwardRef(
  (props: TextInputProps, ref: any) => {
    const { value, onChange, labelText, placeHolder } = props;
    return (
      <TextInputWrapper>
        <Label htmlFor="input">{labelText ? labelText : ""}</Label>
        <InputText
          ref={ref}
          placeholder={placeHolder ? placeHolder : ""}
          type="text"
          id="input"
          name="input"
          value={value}
          onChange={onChange}
        />
      </TextInputWrapper>
    );
  }
);

const TextInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: 20px;
  color: gray;
`;

const InputText = styled.input`
  border: 2px solid lightsteelblue;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 10px;
  font-size: 20px;
  width: ${({ theme }) => theme.sizes.inputWidth};
  padding: 10px;
`;

export default TextInput;
