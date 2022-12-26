import React, { FC } from "react"
import PaymentForm from "../../PaymentForm/PaymentForm";
import { StyledSecureMessage, StyledTitle } from "./styles";

const PaymentFormBox: FC = () => {
  return (
    <>
      <StyledTitle>Payment</StyledTitle>
      <StyledSecureMessage />
      <PaymentForm />
    </>
  )
}

export default PaymentFormBox;