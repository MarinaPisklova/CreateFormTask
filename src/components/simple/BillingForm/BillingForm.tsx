import React, { FC } from "react"
import { Title } from "../../../styles";
import Form from "../../smart/Form/Form";
import { CopyButton, StyledFlex } from "./styles";

interface IBillingForm {
  handleClick: () => void;
}

const BillingForm: FC<IBillingForm> = (props) => {
  return (
    <>
      <StyledFlex jc="space-between">
        <Title>Billing Information</Title>
        <CopyButton onClick={() => props.handleClick()}>
          Same as shipping
        </CopyButton>
      </StyledFlex>
      <Form formName="billing" />
    </>
  )
}

export default BillingForm;


