import { makeAutoObservable } from 'mobx';
import Validator from 'validatorjs';

export interface IInput {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  error: string | boolean;
  rule: string | string[];
}

interface ISelect {
  name: string;
  placeholder: string;
  country: IOption[];
  value: string | undefined;
  error: string | boolean;
  rule: string | string[];
}

interface IOption {
  value: string;
  label: string;
}

interface IRecipientFields {
  fullName: IInput;
  phone: IInput;
}

interface IRecipient {
  title: string;
  fields: IRecipientFields
};

interface IAddressFields {
  streetAddress: IInput;
  apartaments: IInput;
  city: IInput;
  zip: IInput;
  country: ISelect;
}

interface IAddress {
  title: string;
  fields: IAddressFields;
}

interface IShippingForm {
  recipient: IRecipient;
  address: IAddress;
  meta: {
    isValid: boolean | void;
    error: string | boolean;
  }
}

export interface IForm {
  shipping: IShippingForm;
  billing: IShippingForm;
}

let phoneRegex: RegExp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

class FormStore {
  public form: IForm = {
    shipping: {
      recipient: {
        title: "Recipient",
        fields: {
          fullName: {
            name: "fullName",
            placeholder: "Full Name",
            type: "text",
            value: '',
            error: '',
            rule: 'required|string'
          },
          phone: {
            name: "phone",
            placeholder: "Daytime Phone",
            type: "tel",
            value: '',
            error: '',
            rule: ['required', `regex:${phoneRegex}`]
          }
        }
      },
      address: {
        title: "Address",
        fields: {
          streetAddress: {
            name: "streetAddress",
            placeholder: "Street Address",
            type: "text",
            value: '',
            error: '',
            rule: 'required|string'
          },
          apartaments: {
            name: "apartaments",
            placeholder: "Apt, Suite, Bldg, Gate Code. (optional)",
            type: "text",
            value: '',
            error: '',
            rule: 'string'
          },
          city: {
            name: "city",
            placeholder: "City",
            type: "text",
            value: '',
            error: '',
            rule: 'required|string'
          },
          zip: {
            name: "zip",
            placeholder: "ZIP",
            type: "text",
            value: '',
            error: '',
            rule: 'required|string'
          },
          country: {
            name: "country",
            placeholder: "Country",
            country: [
              { value: 'Russia', label: 'Russia' },
              { value: 'Россия', label: 'Россия' },
              { value: 'США', label: 'США' },
              { value: 'Великобритания', label: 'Великобритания' },
            ],
            value: '',
            error: '',
            rule: 'required'
          }
        }
      },
      meta: {
        isValid: false,
        error: "",
      }
    },
    billing: {
      recipient: {
        title: "Billing Contact",
        fields: {
          fullName: {
            name: "fullName",
            placeholder: "Full Name",
            type: "text",
            value: '',
            error: '',
            rule: 'required|string'
          },
          phone: {
            name: "phone",
            placeholder: "Daytime Phone",
            type: "tel",
            value: '',
            error: '',
            rule: ['required', `regex:${phoneRegex}`]
          }
        }
      },
      address: {
        title: "Billing Address",
        fields: {
          streetAddress: {
            name: "streetAddress",
            placeholder: "Street Address",
            type: "text",
            value: '',
            error: '',
            rule: 'required|string'
          },
          apartaments: {
            name: "apartaments",
            placeholder: "Apt, Suite, Bldg, Gate Code. (optional)",
            type: "text",
            value: '',
            error: '',
            rule: 'string'
          },
          city: {
            name: "city",
            placeholder: "City",
            type: "text",
            value: '',
            error: '',
            rule: 'required|string'
          },
          zip: {
            name: "zip",
            placeholder: "ZIP",
            type: "text",
            value: '',
            error: '',
            rule: 'required|string'
          },
          country: {
            name: "country",
            placeholder: "Country",
            country: [
              { value: 'Russia', label: 'Russia' },
              { value: 'Россия', label: 'Россия' },
              { value: 'США', label: 'США' },
              { value: 'Великобритания', label: 'Великобритания' },
            ],
            value: '',
            error: '',
            rule: 'required'
          }
        }
      },
      meta: {
        isValid: false,
        error: "",
      }
    }
  }

  constructor() {
    makeAutoObservable(this);
  }

  onRecipientFieldChange = (formName: string, propName: string, value: string) => {
    this.form[formName as keyof IForm].recipient.fields[propName as keyof IRecipientFields].value = value;
    let field = this.form[formName as keyof IForm].recipient.fields[propName as keyof IRecipientFields];

    var validation = new Validator(
      { [propName]: field.value },
      { [propName]: field.rule },
      { required: `Please enter ${field.name}` }
    )
    this.form[formName as keyof IForm].meta.isValid = validation.passes();
    this.form[formName as keyof IForm].recipient.fields[propName as keyof IRecipientFields].error = validation.errors.first(propName)
  };

  onAddressFieldChange = (formName: string, propName: string, value: string | undefined) => {
    this.form[formName as keyof IForm].address.fields[propName as keyof IAddressFields].value = value;
    let field = this.form[formName as keyof IForm].address.fields[propName as keyof IAddressFields];

    var validation = new Validator(
      { [propName]: field.value },
      { [propName]: field.rule },
      { required: `Please enter ${field.name}` }
    )
    this.form[formName as keyof IForm].meta.isValid = validation.passes();
    this.form[formName as keyof IForm].address.fields[propName as keyof IAddressFields].error = validation.errors.first(propName)
  };

  submitFields = (formName: string) => {
    let recFields = this.form[formName as keyof IForm].recipient.fields;
    let addFields = this.form[formName as keyof IForm].address.fields;
    console.log("valid = ",this.form.shipping.meta.isValid)

    for (const ind in recFields) {
      const field = recFields[ind as keyof IRecipientFields];
      
      var validation = new Validator(
        { [field.name]: field.value },
        { [field.name]: field.rule },
        { required: `Please enter ${field.name}` }
      )
      this.form[formName as keyof IForm].meta.isValid = validation.passes();
      console.log(this.form[formName as keyof IForm].meta.isValid)
      this.form[formName as keyof IForm].recipient.fields[ind as keyof IRecipientFields].error = validation.errors.first(field.name)
    }







  };


}

export default new FormStore();