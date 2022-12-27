import { observer } from "mobx-react-lite";
import React, { FC, FormEvent } from "react";
import formStore from "../../../core/store/formStore";
import appStore from "../../../core/store/appStore";
import OrderItemsStore from "../../../core/store/OrderItemsStore";
import Button from "../../UI/Button/Button";
import { StyledFieldset, StyledInput, FlexBox } from "./styles";


const PaymentForm: FC = observer(() => {
  const cardInfo = formStore.form.payment.cardInfo;
  const editMode = OrderItemsStore.editMode;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formStore.submitPaymentFields();
    if (formStore.isValidForm) {
      appStore.submit("payment");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledFieldset>
        <StyledInput
          field={cardInfo?.fields.cardholderName}
          onChange={formStore.onCardInfoFieldChange}
          formName={"payment"}
        />
        <StyledInput
          field={cardInfo?.fields.cardNumber}
          onChange={formStore.onCardInfoFieldChange}
          formName={"payment"}
        />
        <FlexBox>
          <StyledInput
            field={cardInfo?.fields.expireDate}
            onChange={formStore.onCardInfoFieldChange}
            formName={"payment"}
          />
          <StyledInput
            field={cardInfo?.fields.securityCode}
            onChange={formStore.onCardInfoFieldChange}
            formName={"payment"}
          />
        </FlexBox>
      </StyledFieldset>
      <Button
        type="submit"
        disabled={!formStore.form.shipping.meta.isValid || editMode}
      >
        Pay Securely
      </Button>
    </form>
  );
})

export default PaymentForm;