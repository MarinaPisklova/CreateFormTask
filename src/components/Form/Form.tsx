import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import styled from 'styled-components';
import Select, { SingleValue } from 'react-select'
import Input from "../Input/Input";
import formStore, { IForm } from "../../store/formStore";
import appStore from "../../store/appStore";

interface IFormProps{
  formName: string;
}

const Form: FC<IFormProps> = observer((props) => {
  const recipient = formStore.form[props.formName as keyof IForm].recipient.fields;
  const address = formStore.form[props.formName as keyof IForm].address.fields;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    formStore.submitFields(props.formName);
    //appStore.submit(props.formName);
    console.log("submit");
  }

  function handleChange(newValue: SingleValue<MyOption>) {
    formStore.onAddressFieldChange(props.formName, "country", newValue?.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledFieldset>
        <Legend>{formStore.form[props.formName as keyof IForm].recipient.title}</Legend>
        <Input
          field={recipient.fullName}
          onChange={formStore.onRecipientFieldChange}
          formName={props.formName}
        />
        <Input
          field={recipient.phone}
          onChange={formStore.onRecipientFieldChange}
          formName={props.formName}
        />
      </StyledFieldset>

      <StyledFieldset>
        <Legend>{formStore.form[props.formName as keyof IForm].address.title}</Legend>
        <Input
          field={address.streetAddress}
          onChange={formStore.onAddressFieldChange}
          formName={props.formName}
        />
        <Input
          field={address.apartaments}
          onChange={formStore.onAddressFieldChange}
          formName={props.formName}
        />
        <Input
          field={address.city}
          onChange={formStore.onAddressFieldChange}
          formName={props.formName}
        />

        <FlexBox>
          <StyledSelect
            classNamePrefix={'Select'}
            options={address.country.country}
            placeholder={address.country.placeholder}
            onChange={(newValue: SingleValue<MyOption>) => handleChange(newValue)}
            value={{value: address.country.value, label: address.country.value}}
          />

          <Input
            field={address.zip}
            onChange={formStore.onAddressFieldChange}
            formName={props.formName}
          />
        </FlexBox>
      </StyledFieldset>

      <StyledButton
        type="submit"
        disabled={!formStore.form.shipping.meta.isValid}
      >
        Continue
      </StyledButton>
    </form>
  );
})
export default Form;

function MySelect(props: any) {
  return (
    <Select<MyOption>
      {...props}
    />
  )
}

type MyOption = { label: string, value: string };

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
const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
