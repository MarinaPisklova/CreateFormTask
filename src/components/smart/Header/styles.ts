import styled, { css } from "styled-components"

export const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledHeader = styled.header`
  background-color: #FFFFFF;
  color: #C90EA5;
  margin-bottom: 45px;
`
export const CartName = styled.span`
  font-size: 15px;
  line-height: 13px;
  margin-right: 5px;
`

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, #7E00E8 0%, #FF1876 54.17%, #BB0CB2 100%);
  opacity: 0.3;
`

export const CartSvg = styled.div<{ success: boolean }>`
  display: flex;
  align-items: center;
  position: relative;

  ${props => !props.success && css`
    &::after{
      content: attr(data-n);
      position: absolute;
      top: -7px;
      left: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 14px;
      height: 14px;
      background-color: #FF1876;
      border: 1px solid #FFFFFF;
      border-radius: 37px;
      text-align: center;
      color: #FFFFFF;
      font-size: 9px;
      line-height: 11px;
    }
  `}
`