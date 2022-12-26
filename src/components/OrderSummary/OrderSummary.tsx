import React from "react";
import styled from 'styled-components';
import OrderItemsStore from "../../core/store/OrderItemsStore";
import OrderList from "./OrderList/OrderList";
import OrderPrice from "./OrderPrice/OrderPrice";
import { observer } from 'mobx-react-lite';
import appStore from "../../core/store/appStore";




const OrderBox = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: 24px 10px 15px 6px;
  background-color:rgba(230, 233, 240, 0.5);
  opacity: ${props => props.active && "0.5"};
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


const EditLink = styled.a<{ disabled: boolean }>`
  font-size: 12px;
  line-height: 14px;
  color: #979797;
  text-decoration: underline;
  cursor: ${props => props.disabled && "default !important"};

  &:hover,
  &:active{
    color: ${props => !props.disabled && "#5f5f5f"};
  }

  & span{
    font-size: 12px;
    line-height: 14px;
    color: #bb0cb2;
  }
`
const Conditions = styled.p`
  margin: 0 auto ;
  font-size: 10px;
  line-height: 12px;
  color: #9C9C9C;

  & a{
    font-size: inherit;
    text-decoration: underline;
    cursor: pointer;
  }

  & a:hover{
    color: #606060;
  }
`

const OrderSummary = observer(() => {
  let editMode = OrderItemsStore.editMode;

  return (
    <OrderBox active={appStore.state.success.active}>
      <div>
        <OrderHeader>
          <OrderTitle>Order Summary</OrderTitle>
          <EditLink disabled={appStore.state.success.active} href="#" onClick={() => { !appStore.state.success.active && OrderItemsStore.toggleEditMode() }}>
            {
              editMode
                ?
                <span>accept order</span>
                :
                "edit order"
            }
          </EditLink>
        </OrderHeader>
        <OrderList />
        <OrderPrice />
      </div>
      <Conditions>
        All purchases are subject to our <a>Terms and Conditions</a>.
      </Conditions>
    </OrderBox>
  )
})

export default OrderSummary;













