import { observer } from "mobx-react-lite";
import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { IInput } from "../../store/formStore";

interface IInputProps {
  formName: string;
  field: IInput,
  onChange: (formName: string, name: string, value: string) => void,
}

interface Props {
  errorColor: string;
}

const Input = observer((props: IInputProps) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    props.onChange(props.formName, e.target.name, e.target.value)
  }

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


const StyledInput = styled.input<Props>`
  width: 100%;
  padding: 11px 15px;
  background: #FFFFFF;
  border: 1px solid #DEDCDC;
  border-radius: 5px;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
  background-color: ${props => props.errorColor};
`

const InputBox = styled.div`
  position: relative;
`
const StyledErrorBox = styled.div`
  position: absolute;
  top: -22px;
  left: -13px;
`
const StyledError = styled.span`
  position: relative;
  width: fit-content;
  min-width: 30px;
  padding: 7px 12px;
  background: #FFFFFF;
  border: 1px solid rgba(222, 220, 220, 0.695907);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 13px;
  line-height: 16px;
  color: #D0021B;

  &:before{
    content: ' '; 
    position: absolute; 
    width: 0; 
    height: 0; 
    left: 20px; 
    top: 100%; 
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid rgba(222, 220, 220, 0.695907);
    border-bottom: 8px solid transparent;
  }

  &:after{
    content: ' '; 
    position: absolute; 
    width: 0; 
    height: 0; 
    left: 21px; 
    top: 100%; 
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #fff;
    border-bottom: 7px solid transparent;
  }
`