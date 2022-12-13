import React from "react";
import styled from 'styled-components';
import OrderList from "./OrderList/OrderList";

const OrderBox = styled.div`
  width: 300px;
  padding: 24px 10px 15px 6px;
  background-color:rgba(230, 233, 240, 0.5);
`
const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`
const OrderTitle = styled.p`
  font-size: 16px;
  line-height: 18px;
  color: #5A1094;
`

const EditLink = styled.a`
  font-size: 12px;
  line-height: 14px;
  color: #979797;
  text-decoration: underline;

  &:hover,
  &:active{
    color: #5f5f5f;
  }
`

function OrderSummary() {
  return (
    <OrderBox>
      <OrderHeader>
        <OrderTitle>Order Summary</OrderTitle>
        <EditLink href="#">edit order</EditLink>
      </OrderHeader>
      <OrderList/>



    </OrderBox>
  )
}

export default OrderSummary;