import React from "react";
import appStore from "../../../core/store/appStore";
import { observer } from 'mobx-react-lite';
import PaymentFormBox from "../../simple/PaymentFormBox/PaymentFormBox";
import BillingForm from "../../simple/BillingForm/BillingForm";
import FormSteps from "../../simple/FormSteps/FormSteps";
import ShippingForm from "../../simple/ShippingForm/ShippingForm";
import formStore from "../../../core/store/formStore";
import { Container } from "./styles";
import SuccessFormBox from "../../simple/SuccessFormBox/SuccessFormBox";

const FormBox = observer(() => {
  let appState = appStore.state;
  let email = formStore.form.billing.recipient?.fields.email?.value;

  return (
    <Container>
      <FormSteps appState={appState} />
      {
        appState.shipping.active && <ShippingForm />
      }
      {
        appState.billing.active && 
        <BillingForm handleClick={formStore.copyShippingData.bind(formStore)} />
      }
      {
        appState.payment.active && <PaymentFormBox />
      }
      {
        appState.success.active && <SuccessFormBox email={email} />
      }
    </Container>
  )
})

export default FormBox;


