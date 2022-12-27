import styled from "styled-components"
import { IInputProps } from "../Input"
import Input from "../Input/Input"

export const StyledInput = styled(Input) <IInputProps>`
  margin-bottom: 20px;
`

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  border: none;
`
