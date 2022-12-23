import React from "react";
import Form from "../Form/Form";
import styled from 'styled-components';
import appStore from "../../store/appStore";
import { observer } from 'mobx-react-lite';
import formStore from "../../store/formStore";
import PaymentForm from "../PaymentForm/PaymentForm";

const Container = styled.div`
  width: 400px;
  height: 590px;
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
  font-weight: 400;
  font-size: 24px;
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
      {
        appState.payment.active && <PaymentFormBox />
      }

    </Container>
  )
})

export default FormBox;

function ShippingForm() {
  return (
    <>
      <StyledTitle>Shipping Info</StyledTitle>
      <Form formName="shipping" />
    </>
  )
}

function BillingForm() {
  return (
    <>
      <Flex>
        <Title>Billing Information</Title>
        <CopyButton onClick={() => formStore.copyShippingData()}>Same as shipping</CopyButton>
      </Flex>
      <Form formName="billing" />
    </>
  )
}

function PaymentFormBox() {
  return (
    <>
      <StyledTitle>Payment</StyledTitle>
      <StyledSecureMessage />      
      <PaymentForm/>
    </>
  )
}


function SecureMessage() {
  return (
    <Flex>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 26" width="19" height="26">
        <path clipRule="evenodd" fill="#6b6b6b" fillRule="evenodd" d="M 14.4006 14.5071 V 10.1378 C 14.4006 9.85407 14.171 9.62412 13.8877 9.62412 H 12.6984 V 5.50597 C 12.6984 2.47008 10.2318 0 7.20015 0 C 4.16852 0 1.70192 2.47008 1.70192 5.50597 V 9.59601 H 2.72775 V 5.50597 C 2.72775 3.03652 4.73417 1.02727 7.20015 1.02727 C 9.66614 1.02727 11.6726 3.0362 11.6726 5.50597 V 9.62412 H 0.512603 C 0.229314 9.62412 0 9.85407 0 10.1378 V 18.5931 C 0 19.5969 0.811803 20.4099 1.80987 20.4099 H 8.11179 C 8.37137 23.183 10.7069 25.361 13.5429 25.361 C 16.3659 25.361 18.7008 23.2417 18.9741 20.4317 C 18.9913 20.2549 19 20.0746 19 19.8959 C 19.0003 18.5568 18.5114 17.2681 17.6235 16.2673 C 16.7805 15.3176 15.6367 14.7049 14.4006 14.5071 Z M 1.02583 18.5975 V 15.3738 C 1.02583 15.3735 1.02583 15.3735 1.02583 15.3732 V 10.6514 H 13.3751 V 14.4399 C 10.6158 14.5246 8.36638 16.6651 8.1121 19.3826 H 1.80987 C 1.37744 19.3829 1.02583 19.0305 1.02583 18.5975 Z M 17.9536 20.3324 C 17.7318 22.6138 15.8358 24.334 13.5433 24.334 C 11.0997 24.334 9.11173 22.3432 9.11173 19.8962 C 9.11173 17.4493 11.0997 15.4585 13.5433 15.4585 C 14.8081 15.4585 16.0158 16.0021 16.8569 16.9497 C 17.5776 17.762 17.9748 18.8083 17.9748 19.8962 C 17.9745 20.0418 17.9676 20.1887 17.9536 20.3324 Z" />
        <rect fill="#7ed321" x="8" y="14.35" width="11" height="11" rx="5.5" />
        <path clipRule="evenodd" fill="white" fillRule="evenodd" d="M 16.2687 18.1138 C 16.469 18.3144 16.469 18.6396 16.2687 18.8402 L 12.9491 22.1645 C 12.8489 22.2648 12.7176 22.3151 12.5866 22.3151 C 12.4555 22.3151 12.3242 22.2648 12.224 22.1645 L 10.8182 20.7567 C 10.6179 20.5561 10.6179 20.2308 10.8182 20.0303 C 11.0185 19.8297 11.3433 19.8297 11.5436 20.0303 L 12.5866 21.0747 L 15.5436 18.1135 C 15.7439 17.9132 16.0684 17.9132 16.2687 18.1138 Z" />
      </svg>
      <SecureMessageText>This is a secure 128-bit SSL encrypted payment</SecureMessageText>
    </Flex>
  )
}

const StyledTitle = styled(Title)`
  margin-bottom: 15px;
`

const StyledSecureMessage = styled(SecureMessage)`
  margin-bottom: 15px;
`

const SecureMessageText = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #6B6B6B;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 19px;
`

const CopyButton = styled.button`
  text-decoration: underline;
  font-size: 12px;
  line-height: 14px;
  color: #5A1094;
  cursor: pointer;
`