import styled from "styled-components"

export const OrderBox = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: 24px 10px 15px 6px;
  background-color:rgba(230, 233, 240, 0.5);
  opacity: ${props => props.active && "0.5"};
`
export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`
export const OrderTitle = styled.p`
  font-size: 16px;
  line-height: 18px;
  color: #5A1094;
`

export const EditLink = styled.a<{ disabled: boolean }>`
  font-size: 12px;
  line-height: 14px;
  color: #979797;
  text-decoration: underline;
  cursor: ${props => props.disabled && "default !important"};

  &:hover,
  &:active{
    color: ${props => !props.disabled && "#5f5f5f"};
  }

  & span{
    font-size: 12px;
    line-height: 14px;
    color: #bb0cb2;
  }
`
export const Conditions = styled.p`
  margin: 0 auto ;
  font-size: 10px;
  line-height: 12px;
  color: #9C9C9C;

  & a{
    font-size: inherit;
    text-decoration: underline;
    cursor: pointer;
  }

  & a:hover{
    color: #606060;
  }
`