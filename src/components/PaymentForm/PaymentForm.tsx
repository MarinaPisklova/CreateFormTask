import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import styled from 'styled-components';
import Select, { SingleValue } from 'react-select'
import Input from "../Input/Input";
import formStore, { IForms } from "../../store/formStore";
import appStore from "../../store/appStore";
import OrderItemsStore from "../../store/OrderItemsStore";


const PaymentForm: FC = observer(() => {
  const cardInfo = formStore.form.payment.cardInfo;
  const editMode = OrderItemsStore.editMode;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // formStore.submitFields(props.formName);
    // if (formStore.isValidForm) {
    //   appStore.submit(props.formName);
    // }
  }

  function handleChange(newValue: SingleValue<MyOption>) {
    formStore.onCardInfoFieldChange("payment", "country", newValue?.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledFieldset>
        <InputBox>
          <Label>{cardInfo?.fields.cardholderName.label}</Label>
          <Input
            field={cardInfo?.fields.cardholderName}
            onChange={formStore.onCardInfoFieldChange}
            formName={"payment"}
          />
        </InputBox>
        <InputBox>
          <Label>{cardInfo?.fields.cardNumber.label}</Label>
          <Input
            field={cardInfo?.fields.cardNumber}
            onChange={formStore.onCardInfoFieldChange}
            formName={"payment"}
          />
        </InputBox>
        <FlexBox>
          <InputBox>
            <Label>{cardInfo?.fields.expireDate.label}</Label>
            <Input
              field={cardInfo?.fields.expireDate}
              onChange={formStore.onCardInfoFieldChange}
              formName={"payment"}
            />
          </InputBox>
          <InputBox>
            <Label>{cardInfo?.fields.securityCode.label}</Label>
            <Input
              field={cardInfo?.fields.securityCode}
              onChange={formStore.onCardInfoFieldChange}
              formName={"payment"}
            />
          </InputBox>

        </FlexBox>
      </StyledFieldset>
      <StyledButton
        type="submit"
        disabled={!formStore.form.shipping.meta.isValid || editMode}
      >
        Pay Securely
      </StyledButton>
    </form>
  );
})
export default PaymentForm;

function MySelect(props: any) {
  return (
    <Select<MyOption>
      {...props}
    />
  )
}

type MyOption = { label: string, value: string };

const InputBox = styled.div`
  margin-bottom: 20px;
`

const DeliveryBox = styled.div`
  display: flex;
  align-items: center;
`
const Note = styled.div`
  margin-left: 10px;
  font-size: 13px;
  line-height: 12px;
  color: #777879;
`

const StyledSelect = styled(MySelect)`
  & .Select__control {
    width: 180px;
    padding: 2px 0;
		background: #FFFFFF;
    border: 1px solid #DEDCDC;
    border-radius: 5px;
	}

  & .Select__indicator-separator{
    display: none;
  }

  & .Select__value-container, .Select__indicator{
    padding-left: 14px;
  }

  & .Select__control--menu-is-open .Select__indicator{
    display: none;
  }

  & .Select__menu{
    border: 1px solid #DEDCDC;
    box-shadow: 0px -3px 7px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Legend = styled.legend`
  margin-bottom: 6px;
  font-size: 16px;
  line-height: 18px;
  color: #5A1094;
`

const Label = styled.label`
  margin-bottom: 6px;
  font-size: 16px;
  line-height: 18px;
  color: #5A1094;
`

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  margin-bottom: 20px;
  border: none;
`

const StyledButton = styled.button`
  padding: 12px 56px 14px 57px;
  background-color: rgba(90, 16, 148, 0.8);
  border: 1px solid rgba(67, 28, 93, 0.8);
  border-radius: 5px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #FFFFFF;
`
