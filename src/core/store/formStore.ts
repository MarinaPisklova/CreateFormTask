import { makeAutoObservable } from 'mobx';
import Validator from 'validatorjs';

export interface IInput {
  name: string;
  placeholder: string;
  type: string;
  value: string | undefined;
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

interface ICardFields {
  cardholderName: ICardField;
  cardNumber: ICardField;
  expireDate: ICardField;
  securityCode: ICardField;
}

interface ICardField {
  name: string,
  label: string,
  placeholder: string,
  type: string,
  value: string | undefined,
  error: string | boolean;
  rule: string | string[];
}

interface IAddress {
  title: string;
  fields: IAddressFields;
}

interface ICard {
  fields: ICardFields;
}

interface IForm {
  recipient?: IRecipient;
  address?: IAddress;
  cardInfo?: ICard;
  meta: {
    isValid: boolean | void;
    error: string | boolean;
  }
}

export interface IForms {
  shipping: IForm;
  billing: IForm;
  payment: IForm;
}


let phoneRegex: RegExp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

let codeRegex: RegExp = /\d{3}/;
let dateRegex: RegExp = /\d{3}/;

class FormStore {
  public form: IForms = {
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
            rule: 'required|email'
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
    },
    payment: {
      cardInfo: {
        fields: {
          cardholderName: {
            name: "cardholderName",
            label: "Cardholder Name",
            placeholder: "Name as it appears on your card",
            type: "text",
            value: '',
            error: '',
            rule: 'required|string'
          },
          cardNumber:
          {
            name: "cardNumber",
            label: "Card Number",
            placeholder: "XXXX XXXX XXXX XXXX XXXX",
            type: "text",
            value: '',
            error: '',
            rule: 'required|numeric'
          },
          expireDate: {
            name: "expireDate",
            label: "Expire Date",
            placeholder: "MM / YY",
            type: "text",
            value: '',
            error: '',
            rule: 'required|string'
          },
          securityCode: {
            name: "securityCode",
            label: "Security Code",
            placeholder: "",
            type: "text",
            value: '',
            error: '',
            rule: [`required`,`regex:${codeRegex}`]
          },
        },
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

  onRecipientFieldChange = (formName: string, propName: string, value: string | undefined) => {
    let recipient: IRecipient | undefined = this.form[formName as keyof IForms].recipient;

    if (recipient != undefined) {
      let field: IInput | undefined = recipient.fields[propName as keyof IRecipientFields];

      if (field != undefined) {
        field.value = value;

        var validation = new Validator(
          { [propName]: field.value },
          { [propName]: field.rule },
          { required: `Please enter ${field.name}` }
        )
        this.form[formName as keyof IForms].meta.isValid = validation.passes();
        field.error = validation.errors.first(propName)
      }
    }
  };

  onCardInfoFieldChange = (formName: string, propName: string, value: string | undefined) => {
    let cardInfo: ICard | undefined = this.form[formName as keyof IForms].cardInfo;

    if (cardInfo != undefined) {
      let field: ICardField | undefined = cardInfo.fields[propName as keyof ICardFields];

      if (field != undefined) {
        
        field.value = value;

        var validation = new Validator(
          { [propName]: field.value },
          { [propName]: field.rule },
          { required: `Please enter ${field.name}` }
        )
        this.form[formName as keyof IForms].meta.isValid = validation.passes();
        field.error = validation.errors.first(propName)
      }
    }
  };

  onAddressFieldChange = (formName: string, propName: string, value: string | undefined) => {
    let address = this.form[formName as keyof IForms].address;

    if (address != undefined) {
      address.fields[propName as keyof IAddressFields].value = value;
      let field = address.fields[propName as keyof IAddressFields];

      var validation = new Validator(
        { [propName]: field.value },
        { [propName]: field.rule },
        { required: `Please enter ${field.name}` }
      )
      this.form[formName as keyof IForms].meta.isValid = validation.passes();
      address.fields[propName as keyof IAddressFields].error = validation.errors.first(propName)
    }
  };

  submitFields = (formName: string) => {
    let recFields = this.form[formName as keyof IForms].recipient?.fields;
    let addFields = this.form[formName as keyof IForms].address?.fields;
    let isValidForm: boolean | void = true;

    for (const ind in recFields) {
      const field = recFields[ind as keyof IRecipientFields];

      if (field != undefined) {
        let validation = new Validator(
          { [field.name]: field.value },
          { [field.name]: field.rule },
          { required: `Please enter ${field.name}` }
        )
        isValidForm = isValidForm && validation.passes();
        this.form[formName as keyof IForms].meta.isValid = validation.passes();
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
      this.form[formName as keyof IForms].meta.isValid = validation.passes();
      field.error = validation.errors.first(field.name)
    }
    this.isValidForm = isValidForm;
  };

  submitPaymentFields = () => {
    let fields = this.form.payment.cardInfo?.fields;
    let isValidForm: boolean | void = true;

    for (const ind in fields) {
      const field = fields[ind as keyof ICardFields];

      if (field != undefined) {
        let validation = new Validator(
          { [field.name]: field.value },
          { [field.name]: field.rule },
          { required: `Please enter ${field.name}` }
        )
        isValidForm = isValidForm && validation.passes();
        this.form.payment.meta.isValid = validation.passes();
        field.error = validation.errors.first(field.name)
      }
    }
    this.isValidForm = isValidForm;
  };

  copyShippingData() {
    console.log(this.form)
    let shipRecFields = this.form.shipping.recipient?.fields;
    let billRecFields = this.form.billing.recipient?.fields;

    for (const ind in billRecFields) {
      const field = billRecFields[ind as keyof IRecipientFields];
      if (field != undefined) {
        const name = field.name;

        if (shipRecFields && name in shipRecFields) {
          let field2 = shipRecFields[name as keyof IRecipientFields];
          if (field2 != undefined) {
            field.value = field2.value;
          }
        }
      }
    }

    let shipAdrFields = this.form.shipping.address?.fields;
    let billAdrFields = this.form.billing.address?.fields;

    for (const ind in billAdrFields) {
      const field = billAdrFields[ind as keyof IAddressFields];
      const name = field.name;

      if (shipAdrFields && name in shipAdrFields) {
        field.value = shipAdrFields[name as keyof IAddressFields].value;
      }
    }
  }
}

export default new FormStore();