import { observer } from "mobx-react-lite";
import React, { FC, FormEvent } from "react";
import { SingleValue } from 'react-select'
import formStore, { IForms } from "../../../core/store/formStore";
import appStore from "../../../core/store/appStore";
import OrderItemsStore from "../../../core/store/OrderItemsStore";
import { IOption } from "../../UI/Select";
import Button from "../../UI/Button/Button";
import AddressFieldSet from "../../simple/AddressFieldSet/AddressFieldSet";
import RecipientFieldSet from "../../simple/RecipientFieldSet/RecipientFieldSet";

interface IFormProps {
  formName: string;
}

const Form: FC<IFormProps> = observer((props) => {
  const recipient = formStore.form[props.formName as keyof IForms].recipient;
  const address = formStore.form[props.formName as keyof IForms].address;
  const editMode = OrderItemsStore.editMode;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formStore.submitFields(props.formName);
    if (formStore.isValidForm) {
      appStore.submit(props.formName);
    }
  }

  const handleChange = (newValue: SingleValue<IOption>) => {
    formStore.onAddressFieldChange(props.formName, "country", newValue?.value);
  };

  return (
    <>
      {
        recipient && address &&
        <form onSubmit={handleSubmit}>
          <RecipientFieldSet
            recipient={recipient}
            formName={props.formName}
            onChange={formStore.onRecipientFieldChange}
          />
          <AddressFieldSet
            address={address}
            formName={props.formName}
            onChange={formStore.onAddressFieldChange}
            onSelectChange={(newValue: SingleValue<IOption>) => handleChange(newValue)}
          />
          <Button
            type="submit"
            disabled={!formStore.form.shipping.meta.isValid || editMode}
          >
            Continue
          </Button>
        </form>
      }
    </>
  );
})

export default Form;


