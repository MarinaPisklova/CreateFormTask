import styled from "styled-components"

export const StyledDustbinBox = styled.div`
  cursor: pointer;

  &:hover path{
    fill: #bb0cb2;
  }
`

export const ItemCostBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: auto;
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  margin-bottom: 11px;
  background-color: rgba(151, 151, 151, 0.2);
`

export const Img = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  background-color: #F3F3F3;
  border: 1px solid #E3E3E3;
  border-radius: 1px;
`

export const ItemCard = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding-left: 7px;
  padding-right: 5px;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ItemName = styled.p`
  margin-bottom: 7px;
  font-size: 12px;
  line-height: 11px;
  color: #777879;
`

export const ItemText = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: #2B2525;
`

export const ItemCost = styled.p`
  font-size: 12px;
  line-height: 11px;
  text-align: right;
  color: #777879;
`