import React from "react";
import OrderItemsStore from "../../../core/store/OrderItemsStore";
import Dustbin from "../../UI/Icons/Dustbin/Dustbin";
import { ItemCard, Img, ItemInfo, ItemName, ItemText, ItemCostBox, ItemCost, StyledDustbinBox, Line } from "./styles";

interface IOrderItem {
  id: number;
  name: string;
  material: string,
  quantity: number,
  cost: number,
  img: string,
}

const OrderItem = (props: IOrderItem) => {
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
              <Dustbin />
            </StyledDustbinBox>
          }
        </ItemCostBox>
      </ItemCard>
      <Line></Line>
    </li>
  )
}

export default OrderItem;

