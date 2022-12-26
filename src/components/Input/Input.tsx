import { observer } from "mobx-react-lite";
import React, { ChangeEvent } from "react";
import { IInput } from "../../core/store/formStore";
import { InputBox, StyledInput, StyledErrorBox, StyledError } from "./styles";

interface IInputProps {
  formName: string;
  field: IInput | undefined,
  onChange: (formName: string, name: string, value: string) => void,
}

const Input = observer((props: IInputProps) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    props.onChange(props.formName, e.target.name, e.target.value)
  }

  if (props.field == undefined)
    return null

  return (
    <InputBox>
      <StyledInput
        type={props.field.type}
        name={props.field.name}
        value={props.field.value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        placeholder={props.field.placeholder}
        errorColor={props.field.error ? "#f8e71c11" : "transperent"}
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

