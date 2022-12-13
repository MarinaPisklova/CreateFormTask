import React from "react";
import styled from "styled-components";

interface IOrderItem {
  id: number;
  name: string;
  material: string,
  quantity: number,
  cost: number,
}

function OrderItem(props: IOrderItem) {
  return (
    <li>
      <ItemCard>
        <Img />
        <ItemInfo>
          <ItemName>{props.name}</ItemName>
          <ItemText>{props.material}</ItemText>
          <ItemText>Quantity: {props.quantity}</ItemText>
        </ItemInfo>
        <ItemCost>${props.cost}</ItemCost>
      </ItemCard>
      <Line></Line>
    </li>
  )
}

export default OrderItem;

const Line = styled.div`
  height: 1px;
  width: 100%;
  margin-bottom: 11px;
  background-color: rgba(151, 151, 151, 0.2);
`
const Img = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  background-color: teal;
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
  margin-left: auto;
  font-size: 12px;
  line-height: 11px;
  text-align: right;
  color: #777879;
`