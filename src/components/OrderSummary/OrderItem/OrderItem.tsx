import React from "react";
import styled from "styled-components";
import { observer } from 'mobx-react-lite';
import OrderItemsStore from "../../../core/store/OrderItemsStore";
import Dustbin from "../../UI/Icons/Dustbin/Dustbin";

interface IOrderItem {
  id: number;
  name: string;
  material: string,
  quantity: number,
  cost: number,
  img: string
}

const OrderItem = observer((props: IOrderItem) => {
  let editMode = OrderItemsStore.editMode;

  return (
    <li>
      <ItemCard>
        <Img src={props.img} />
        <ItemInfo>
          <ItemName>{props.name}</ItemName>
          <ItemText>{props.material}</ItemText>
          <ItemText>Quantity: {props.quantity}</ItemText>
        </ItemInfo>
        <ItemCostBox>
          <ItemCost>${props.cost}</ItemCost>
          {
            editMode &&
            <StyledDustbinBox onClick={() => OrderItemsStore.deleteItem(props.id)} >
              <Dustbin/>
            </StyledDustbinBox>
          }
        </ItemCostBox>
      </ItemCard>
      <Line></Line>
    </li>
  )
})

export default OrderItem;

const StyledDustbinBox = styled.div`
  cursor: pointer;
  &:hover path{
    fill: #bb0cb2;
  }

`


const ItemCostBox = styled.div`
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
const Img = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  background-color: #F3F3F3;
  border: 1px solid #E3E3E3;
  border-radius: 1px;
`

const ItemCard = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding-left: 7px;
  padding-right: 5px;
`
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ItemName = styled.p`
  margin-bottom: 7px;
  font-size: 12px;
  line-height: 11px;
  color: #777879;
`

const ItemText = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: #2B2525;
`

const ItemCost = styled.p`

  font-size: 12px;
  line-height: 11px;
  text-align: right;
  color: #777879;
`