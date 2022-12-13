import React from "react";
import styled from "styled-components";
import OrderItem from './../OrderItem/OrderItem';

const orderItems = [
  {
    id: 0,
    name: "The Chelsea Boot",
    material: "Black",
    quantity: 1,
    cost: 235,
  },
  {
    id: 1,
    name: "The Twill Snap Backpack",
    material: "Reverse Denim + Brown leather",
    quantity: 1,
    cost: 65,
  },
  {
    id: 2,
    name: "The Twill Zip Tote",
    material: "Reverse Denim + Brown leather",
    quantity: 1,
    cost: 48,
  }
];

const List = styled.ul`
  list-style: none;
`

function OrderList(){
  return (
    <List>
      {
        orderItems.map(item => 
          <OrderItem key={item.id} {...item}/>
        )
      }
    </List>
  )
}

export default OrderList;