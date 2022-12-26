import React, { FC } from "react";
import { IState } from "../../../core/store/appStore";
import Arrow from "../../UI/Icons/Arrow/Arrow";
import { StyledBox, StyledSpan } from "./styles";

interface IFormSteps {
  appState: IState;
}

const FormSteps: FC<IFormSteps> = (props) => {
  if (props.appState.success.active)
    return null

  return (
    <StyledBox>
      <StyledSpan active={props.appState.shipping.active}>Shipping</StyledSpan>
      <StyledSpan>
        <Arrow />
      </StyledSpan>
      <StyledSpan active={props.appState.billing.active}>Billing</StyledSpan>
      <StyledSpan>
        <Arrow />
      </StyledSpan>
      <StyledSpan active={props.appState.payment.active}>Payment</StyledSpan>
    </StyledBox>
  )
}

export default FormSteps;