import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 12px 56px 14px 57px;
  background-color: rgba(90, 16, 148, 0.8);
  border: 1px solid rgba(67, 28, 93, 0.8);
  border-radius: 5px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #FFFFFF;

  &:hover{
    background: rgba(161, 92, 214, 0.8);
  }
  &:disabled{
    opacity: 0.2;
  }
  &:hover:disabled{
    background-color: rgba(90, 16, 148, 0.8);
    cursor: default
  }
`