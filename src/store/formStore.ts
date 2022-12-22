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
  phone?: IInput | undefined;
  email?: IInput | undefined;
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
          email: {
            name: "email",
            placeholder: "Email Address",
            type: "text",
            value: '',
            error: '',
            rule: 'required'
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

  isValidForm: boolean | void = true;

  constructor() {
    makeAutoObservable(this);
  }

  onRecipientFieldChange = (formName: string, propName: string, value: string) => {
    let field: IInput | undefined = this.form[formName as keyof IForm].recipient.fields[propName as keyof IRecipientFields];

    if (field != undefined) {
      field.value = value;

      var validation = new Validator(
        { [propName]: field.value },
        { [propName]: field.rule },
        { required: `Please enter ${field.name}` }
      )
      this.form[formName as keyof IForm].meta.isValid = validation.passes();
      field.error = validation.errors.first(propName)
    }
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
    let isValidForm: boolean | void = true;

    for (const ind in recFields) {
      const field = recFields[ind as keyof IRecipientFields];

      if(field != undefined){
        let validation = new Validator(
          { [field.name]: field.value },
          { [field.name]: field.rule },
          { required: `Please enter ${field.name}` }
        )
        isValidForm = isValidForm && validation.passes();
        this.form[formName as keyof IForm].meta.isValid = validation.passes();
        field.error = validation.errors.first(field.name)
      }

    }

    for (const ind in addFields) {
      const field = addFields[ind as keyof IAddressFields];

      let validation = new Validator(
        { [field.name]: field.value },
        { [field.name]: field.rule },
        { required: `Please enter ${field.name}` }
      )
      isValidForm = isValidForm && validation.passes();
      this.form[formName as keyof IForm].meta.isValid = validation.passes();
      this.form[formName as keyof IForm].address.fields[ind as keyof IAddressFields].error = validation.errors.first(field.name)
    }
    this.isValidForm = isValidForm;
  };

  copyShippingData() {
    let shipRecFields = this.form.shipping.recipient.fields;
    let billRecFields = this.form.billing.recipient.fields;

    for (const ind in billRecFields) {
      const field = billRecFields[ind as keyof IRecipientFields];
      if(field != undefined){
        const name = field.name;

        if (name in shipRecFields) {
          let field2 = shipRecFields[name as keyof IRecipientFields];
          if(field2 != undefined){
            field.value = field2.value;
          }


          
        }
      }
    }

    let shipAdrFields = this.form.shipping.address.fields;
    let billAdrFields = this.form.billing.address.fields;

    for (const ind in billAdrFields) {
      const field = billAdrFields[ind as keyof IAddressFields];
      const name = field.name;

      if (name in shipAdrFields) {
        field.value = shipAdrFields[name as keyof IAddressFields].value;
      }
    }







  }


}

export default new FormStore();