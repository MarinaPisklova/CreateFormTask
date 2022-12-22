import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";
import OrderItemsStore from "../../../store/OrderItemsStore";
import { Line } from "../OrderItem";

const OrderPrice = observer(() => {
  const orderItems = OrderItemsStore.orderItems;
  const taxes = OrderItemsStore.taxes;
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
})

export default OrderPrice;

const SubTotalInfo = styled.div`
  padding: 0 9px 0 5px;
  margin-bottom: 14px;
  color: #777879;

  & span{
    font-size: 12px;
    line-height: 11px;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
`

const TotalInfo = styled.div`
  padding: 0 9px 0 5px;
  margin-bottom: 14px;
  color: #431C5D;

  & span{
    font-size: 12px;
    line-height: 13px;
  }
`