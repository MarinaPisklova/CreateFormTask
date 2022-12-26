import React, { FC } from "react"
import Form from "../../smart/Form/Form";
import { StyledTitle } from "./styles";

const ShippingForm: FC = () => {
  return (
    <>
      <StyledTitle>Shipping Info</StyledTitle>
      <Form formName="shipping" />
    </>
  )
}

export default ShippingForm;