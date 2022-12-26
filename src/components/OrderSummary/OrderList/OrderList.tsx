import React from "react";
import styled from "styled-components";
import OrderItem from './../OrderItem/OrderItem';
import { observer } from 'mobx-react-lite';
import OrderItemsStore from "../../../core/store/OrderItemsStore";

const List = styled.ul`
  list-style: none;
`

const OrderList = observer(() => {
  return (
    <List>
      {
        OrderItemsStore.orderItems.map(item => 
          <OrderItem key={item.id} {...item}/>
        )
      }
    </List>
  )
})

export default OrderList;