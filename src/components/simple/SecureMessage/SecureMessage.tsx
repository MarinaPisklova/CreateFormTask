import React, { FC } from "react"
import SecureIcon from "../../UI/Icons/Secure/SecureIcon";
import { SecureMessageText, StyledFlex } from "./styles";

const SecureMessage: FC = () => {
  return (
    <StyledFlex jc="space-between">
      <SecureIcon />
      <SecureMessageText>
        This is a secure 128-bit SSL encrypted payment
      </SecureMessageText>
    </StyledFlex>
  )
}

export default SecureMessage;