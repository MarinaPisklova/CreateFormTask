import React from "react";
import Select from 'react-select';
import { StyledErrorBox, StyledError, InputBox } from "../../smart/Input/styles";

export type IOption = { label: string, value: string };


const FormSelect = (props: any) => {
  if (props.field == undefined)
    return null

  return (
    <InputBox>
      <Select<IOption>
        {...props}
      />
      {props.field.error &&
        <StyledErrorBox>
          <StyledError>{props.field.error}</StyledError>
        </StyledErrorBox>
      }
    </InputBox>
    
  )
}

export default FormSelect;

