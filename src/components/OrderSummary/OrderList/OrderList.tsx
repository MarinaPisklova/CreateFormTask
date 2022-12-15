import React from "react";
import styled from "styled-components";
import OrderItem from './../OrderItem/OrderItem';
import store from "../../../store/store";
import { observer } from 'mobx-react-lite';

const List = styled.ul`
  list-style: none;
`

const OrderList = observer(() => {
  return (
    <List>
      {
        store.orderItems.map(item => 
          <OrderItem key={item.id} {...item}/>
        )
      }
    </List>
  )
})

export default OrderList;