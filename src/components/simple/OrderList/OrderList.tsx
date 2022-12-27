import React, { FC } from "react";
import OrderItem from '../../smart/OrderItem/OrderItem';
import { IOrderItem } from "../../../core/store/OrderItemsStore";
import { List } from "./styles";

interface IOrderList {
  orderItems: IOrderItem[];
}

const OrderList: FC<IOrderList> = (props: IOrderList) => {
  return (
    <List>
      {
        props.orderItems.map(item =>
          <OrderItem key={item.id} {...item} />
        )
      }
    </List>
  )
}

export default OrderList;