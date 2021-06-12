import React from "react";
import styled from "styled-components";

type TextInputProps = {
  value: string;
  labelText?: string;
  ref: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInputProps> = React.forwardRef(
  (props: TextInputProps, ref: any) => {
    const { value, onChange, labelText } = props;
    return (
      <TextInputWrapper>
        <Label htmlFor="input" ref={ref}>
          {labelText ? labelText : "default lable"}
        </Label>
        <InputText
          ref={ref}
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
  border: 2px solid gray;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 10px;
  font-size: 20px;
  width: 350px;
  padding: 10px;
`;

export default TextInput;
