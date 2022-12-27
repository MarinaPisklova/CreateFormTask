import React, { FC } from "react";
import { IRecipient } from "../../../core/store/formStore";
import Input from "../../smart/Input/Input";
import { DeliveryBox, Legend, Note, StyledFieldset } from "./styles";

interface IRecipientSet{
  recipient: IRecipient;
  formName: string;
  onChange: (formName: string, name: string, value: string) => void,
}

const RecipientFieldSet:FC<IRecipientSet> = (props:IRecipientSet) => {
  let recipient = props.recipient;

  return (
    <StyledFieldset>
      <Legend>{recipient.title}</Legend>
      <Input
        field={recipient.fields.fullName}
        onChange={props.onChange}
        formName={props.formName}
      />
      <DeliveryBox>
        {
          props.formName == "shipping" &&
          <>
            <Input
              field={recipient.fields.phone}
              onChange={props.onChange}
              formName={props.formName}
            />
            <Note>For delivery questions only</Note>
          </>
        }
        {
          props.formName == "billing" &&
          <Input
            field={recipient.fields.email}
            onChange={props.onChange}
            formName={props.formName}
          />
        }
      </DeliveryBox>
    </StyledFieldset>
  )
}

export default RecipientFieldSet;