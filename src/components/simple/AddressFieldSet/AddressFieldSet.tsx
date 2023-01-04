import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { SingleValue } from "react-select";
import { IAddress } from "../../../core/store/formStore";
import Input from "../../smart/Input/Input";
import { IOption } from "../../UI/Select";
import { FlexBox, Legend, StyledFieldset, StyledSelect } from "./styles";

interface IAddressSet {
  address: IAddress;
  formName: string;
  onChange: (formName: string, name: string, value: string) => void,
  onSelectChange: (newValue: SingleValue<IOption>) => void
}

const AddressFieldSet: FC<IAddressSet> = (props: IAddressSet) => {
  let address = props.address;

  return (
    <StyledFieldset>
      <Legend>{address.title}</Legend>
      <Input
        field={address.fields.streetAddress}
        onChange={props.onChange}
        formName={props.formName}
      />
      <Input
        field={address.fields.apartaments}
        onChange={props.onChange}
        formName={props.formName}
      />
      <Input
        field={address.fields.city}
        onChange={props.onChange}
        formName={props.formName}
      />

      <FlexBox>
        <StyledSelect
          classNamePrefix={'Select'}
          field={address.fields.country}
          options={address.fields.country.country}
          placeholder={!address.fields.country.value && address.fields.country.placeholder}
          onChange={props.onSelectChange}
          value={!!address.fields.country.value && { value: address.fields.country.value, label: address.fields.country.value}}
          errorColor={address.fields.country.error ? "#f8e71c11" : "transperent"}
        />

        <Input
          field={address.fields.zip}
          onChange={props.onChange}
          formName={props.formName}
        />
      </FlexBox>
    </StyledFieldset>
  )
}

export default observer(AddressFieldSet);