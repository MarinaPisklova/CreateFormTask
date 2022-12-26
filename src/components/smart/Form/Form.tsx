import { observer } from "mobx-react-lite";
import React, { FC, FormEvent } from "react";
import { SingleValue } from 'react-select'
import Input from "../../Input/Input";
import formStore, { IForms } from "../../../core/store/formStore";
import appStore from "../../../core/store/appStore";
import OrderItemsStore from "../../../core/store/OrderItemsStore";
import { IOption } from "../../UI/Select";
import { DeliveryBox, FlexBox, Legend, Note, StyledButton, StyledFieldset, StyledSelect } from "./styles";

interface IFormProps {
  formName: string;
}

const Form: FC<IFormProps> = observer((props) => {
  const recipient = formStore.form[props.formName as keyof IForms].recipient;
  const address = formStore.form[props.formName as keyof IForms].address;
  const editMode = OrderItemsStore.editMode;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    formStore.submitFields(props.formName);
    if (formStore.isValidForm) {
      appStore.submit(props.formName);
    }
  }

  function handleChange(newValue: SingleValue<IOption>) {
    formStore.onAddressFieldChange(props.formName, "country", newValue?.value);
  };

  return (
    <>
      {
        recipient && address &&
        <form onSubmit={handleSubmit}>
          <StyledFieldset>
            <Legend>{recipient.title}</Legend>
            <Input
              field={recipient.fields.fullName}
              onChange={formStore.onRecipientFieldChange}
              formName={props.formName}
            />
            <DeliveryBox>
              {
                props.formName == "shipping" &&
                <>
                  <Input
                    field={recipient.fields.phone}
                    onChange={formStore.onRecipientFieldChange}
                    formName={props.formName}
                  />
                  <Note>For delivery questions only</Note>
                </>
              }
              {
                props.formName == "billing" &&
                <Input
                  field={recipient.fields.email}
                  onChange={formStore.onRecipientFieldChange}
                  formName={props.formName}
                />
              }

            </DeliveryBox>

          </StyledFieldset>

          <StyledFieldset>
            <Legend>{address.title}</Legend>
            <Input
              field={address.fields.streetAddress}
              onChange={formStore.onAddressFieldChange}
              formName={props.formName}
            />
            <Input
              field={address.fields.apartaments}
              onChange={formStore.onAddressFieldChange}
              formName={props.formName}
            />
            <Input
              field={address.fields.city}
              onChange={formStore.onAddressFieldChange}
              formName={props.formName}
            />

            <FlexBox>
              <StyledSelect
                classNamePrefix={'Select'}
                options={address.fields.country.country}
                placeholder={address.fields.country.placeholder}
                onChange={(newValue: SingleValue<IOption>) => handleChange(newValue)}
                value={{ value: address.fields.country.value, label: address.fields.country.value }}
              />

              <Input
                field={address.fields.zip}
                onChange={formStore.onAddressFieldChange}
                formName={props.formName}
              />
            </FlexBox>
          </StyledFieldset>

          <StyledButton
            type="submit"
            disabled={!formStore.form.shipping.meta.isValid || editMode}
          >
            Continue
          </StyledButton>
        </form>
      }
    </>
  );
})
export default Form;


