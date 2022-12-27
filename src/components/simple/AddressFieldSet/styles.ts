import styled from "styled-components"
import FormSelect from "../../UI/Select/Select"

export const StyledSelect = styled(FormSelect)`
  & .Select__control {
    width: 180px;
    padding: 2px 0;
    background: #FFFFFF;
    border: 1px solid #DEDCDC;
    border-radius: 5px;
  }

  & .Select__indicator-separator{
    display: none;
  }

  & .Select__value-container, .Select__indicator{
    padding-left: 14px;
  }

  & .Select__control--menu-is-open .Select__indicator{
    display: none;
  }

  & .Select__menu{
    border: 1px solid #DEDCDC;
    box-shadow: 0px -3px 7px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }
`

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Legend = styled.legend`
  margin-bottom: 6px;
  font-size: 16px;
  line-height: 18px;
  color: #5A1094;
`

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  border: none;
`