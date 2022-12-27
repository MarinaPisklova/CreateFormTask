import { observer } from "mobx-react-lite";
import React, { ChangeEvent } from "react";
import { IInput } from "../../../core/store/formStore";
import { InputBox, StyledInput, StyledErrorBox, StyledError, Label } from "./styles";

export interface IInputProps {
  formName: string;
  field: IInput | undefined,
  onChange: (formName: string, name: string, value: string) => void,
  className?: string,
}

const Input = observer((props: IInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(props.formName, e.target.name, e.target.value)
  }

  if (props.field == undefined)
    return null

  return (
    <InputBox>
      {props.field.label &&
        <Label>{props.field.label}</Label>
      }
      <StyledInput
        type="text"
        name={props.field.name}
        value={props.field.value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        placeholder={props.field.placeholder}
        errorColor={props.field.error ? "#f8e71c11" : "transperent"}
        className={props.className}
      />
      {props.field.error &&
        <StyledErrorBox>
          <StyledError>{props.field.error}</StyledError>
        </StyledErrorBox>
      }
    </InputBox>
  )
});

export default Input;

