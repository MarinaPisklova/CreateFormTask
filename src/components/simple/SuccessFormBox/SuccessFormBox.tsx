import React, { FC } from "react"
import { OrderNumber, StyledDateSpan, StyledEmailSpan, StyledRecipeSpan, SuccessContainer, SuccessMessage, SuccessTitle } from "./styles";

const SuccessFormBox:FC<{ email: string | undefined }> = (props: { email: string | undefined }) => {
  return (
    <SuccessContainer>
      <SuccessTitle>Thank you for your order!</SuccessTitle>
      <OrderNumber>Order number is: 188787788</OrderNumber>
      <SuccessMessage>Your will recieve an email confirmation
        shortly to <StyledEmailSpan>{props.email}</StyledEmailSpan>
      </SuccessMessage>
      <SuccessMessage>Estimated delivery Day is <br/> <StyledDateSpan>Friday 1st April 2023</StyledDateSpan></SuccessMessage>
      {/* <StyledRecipeSpan>Print Recipe</StyledRecipeSpan> */}
    </SuccessContainer>
  )
}

export default SuccessFormBox;