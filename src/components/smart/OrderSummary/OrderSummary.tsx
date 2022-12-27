import React, { FC } from "react";
import OrderItemsStore from "../../../core/store/OrderItemsStore";
import OrderList from "../../simple/OrderList/OrderList";
import { observer } from 'mobx-react-lite';
import appStore from "../../../core/store/appStore";
import { OrderBox, OrderHeader, OrderTitle, EditLink, Conditions } from "./styles";
import OrderPrice from "../../simple/OrderPrice/OrderPrice";

const OrderSummary: FC = observer(() => {
  let editMode = OrderItemsStore.editMode;

  return (
    <OrderBox active={appStore.state.success.active}>
      <div>
        <OrderHeader>
          <OrderTitle>Order Summary</OrderTitle>
          <EditLink
            disabled={appStore.state.success.active}
            href="#"
            onClick={() => { !appStore.state.success.active && OrderItemsStore.toggleEditMode() }}
          >
            {
              editMode
                ?
                <span>accept order</span>
                :
                "edit order"
            }
          </EditLink>
        </OrderHeader>
        <OrderList orderItems={OrderItemsStore.orderItems} />
        <OrderPrice orderItems={OrderItemsStore.orderItems} taxes={OrderItemsStore.taxes} />
      </div>
      <Conditions>
        All purchases are subject to our <a>Terms and Conditions</a>.
      </Conditions>
    </OrderBox>
  )
})

export default OrderSummary;













