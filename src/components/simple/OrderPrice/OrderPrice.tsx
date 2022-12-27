import React, { FC } from "react";
import { IOrderItem } from "../../../core/store/OrderItemsStore";
import { Line, Row, SubTotalInfo, TotalInfo } from "./styles";

interface IOrderPrice{
  orderItems: IOrderItem[];
  taxes: number;
}

const OrderPrice:FC<IOrderPrice> = (props:IOrderPrice) => {
  const orderItems = props.orderItems;
  const taxes = props.taxes;

  let subtotal = 0;
  for (const item of orderItems) {
    subtotal += item.cost;
  }

  return (
    <>
      <SubTotalInfo>
        <Row>
          <span>Subtotal</span>
          <span>{subtotal}</span>
        </Row>
        <Row>
          <span>Shipping</span>
          <span>Free</span>
        </Row>
        <Row>
          <span>Taxes</span>
          <span>${taxes}</span>
        </Row>
        <Line />
      </SubTotalInfo>
      <TotalInfo>
        <Row>
          <span>Total</span>
          <span>${subtotal + taxes}</span>
        </Row>
      </TotalInfo>
    </>
  )
}

export default OrderPrice;