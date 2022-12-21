import React from "react";
import Form from "../Form/Form";
import styled from 'styled-components';
import appStore from "../../store/appStore";
import { observer } from 'mobx-react-lite';

const Container = styled.div`
  width: 400px;
  padding: 23px 40px 44px;
`

const ActiveStep = styled.span`
  color: #5A1094;
`

const InactiveStep = styled.span<{ active?: boolean }>`
  color: ${props => props.active ? "#5A1094" : "#979797"};
  opacity: 0.8;
`
const FormSteps = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 14px;
`
const Title = styled.h2`
  margin-bottom: 19px;
  font-size: 26px;
  line-height: 31px;
  color: #5A1094;
`

const FormBox = observer(() => {
  let appState = appStore.state;

  return (
    <Container>
      <FormSteps>
        <InactiveStep active={appState.shipping.active}>Shipping</InactiveStep>
        <InactiveStep>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 21" width="12" height="21">
            <g opacity="0.3">
              <path stroke="#979797" strokeLinecap="round" strokeLinejoin="round" d="M 1.41065 19.6553 L 10.4463 10.0001" />
              <path stroke="#979797" strokeLinecap="round" strokeLinejoin="round" d="M 10.7561 9.69036 L 1.10093 0.65469" />
            </g>
          </svg>
        </InactiveStep>
        <InactiveStep active={appState.billing.active}>Billing</InactiveStep>
        <InactiveStep>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 21" width="12" height="21">
            <g opacity="0.3">
              <path stroke="#979797" strokeLinecap="round" strokeLinejoin="round" d="M 1.41065 19.6553 L 10.4463 10.0001" />
              <path stroke="#979797" strokeLinecap="round" strokeLinejoin="round" d="M 10.7561 9.69036 L 1.10093 0.65469" />
            </g>
          </svg>
        </InactiveStep>
        <InactiveStep active={appState.payment.active}>Payment</InactiveStep>
      </FormSteps>

      {
        appState.shipping.active && <ShippingForm />
      }
      {
        appState.billing.active && <BillingForm />
      }

    </Container>
  )
})

export default FormBox;

function ShippingForm() {
  return (
    <>
      <Title>Shipping Info</Title>
      <Form formName="shipping" />
    </>
  )
}

function BillingForm() {
  return (
    <>
      <>
        <Title>Billing Information</Title>
        <button>Same as shipping</button>
      </>
      <Form formName="billing" />
    </>
  )
}

