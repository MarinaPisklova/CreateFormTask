import styled from "styled-components"

interface IStyledInput {
  errorColor: string;
}

export const StyledInput = styled.input<IStyledInput>`
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

export const InputBox = styled.div`
  width: 100%;
  position: relative;
`
export const StyledErrorBox = styled.div`
  position: absolute;
  top: -22px;
  left: -13px;
`
export const StyledError = styled.span`
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