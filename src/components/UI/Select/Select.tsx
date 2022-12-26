import React, { FC } from "react";
import Select from 'react-select';

export type IOption = { label: string, value: string };

const FormSelect = (props: any) => {
  return (
    <Select<IOption>
      {...props}
    />
  )
}

export default FormSelect;

