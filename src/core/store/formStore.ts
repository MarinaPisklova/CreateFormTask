import { makeAutoObservable } from 'mobx';
import Validator from 'validatorjs';



export interface IInput {
  label: string;
  name: string;
  placeholder: string;
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

export interface IRecipient {
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
  value: string | undefined,
  error: string | boolean;
  rule: string | string[];
}

export interface IAddress {
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

Validator.register('cardNumbers', function (value, requirement, attribute) {
  value = String(value).replace(/ /g, '');
  return value.length == 20;
}, 'The card number must be 20 characters.');

Validator.register('cardNumbersNumeric', function (value, requirement, attribute) {
  value = String(value).replace(/ /g, '');
  return !isNaN(Number(value));
}, 'The card number must be numeric.');

Validator.register('securityCode', function (value, requirement, attribute) {
  return !isNaN(Number(value)) && String(value).length == 3;
}, 'The security code must be numeric and 3 characters.');

Validator.register('expireDateSize', function (value, requirement, attribute) {
  value = String(value);
  value = value.replace(/[\s\/]/g, '');
  return value.length == 4;
}, 'The expire date must be 4 characters');

Validator.register('expireDateExpired', function (value, requirement, attribute) {
  value = String(value);
  value = value.replace(/[\s\/]/g, '');

  let isCorrectDate = false;
  if (value.length == 4) {
    let today = new Date();
    let month = Number(value[0] + value[1]);
    let year = Number("20" + value[2] + value[3]);
    if (Number(month) < 13) {
      var expDate = new Date(year, (month - 1));
      if (today.getTime() < expDate.getTime()) {
        isCorrectDate = true;
      }
    }
  }

  return isCorrectDate;
}, 'Your Card is expired.');

Validator.register('expireDateNumeric', function (value, requirement, attribute) {
  value = String(value);
  value = value.replace(/[\s\/]/g, '');
  return !isNaN(Number(value));
}, 'The expire date must be numeric');


class FormStore {
  public form: IForms = {
    shipping: {
      recipient: {
        title: "Recipient",
        fields: {
          fullName: {
            label: "",
            name: "fullName",
            placeholder: "Full Name",
            value: '',
            error: '',
            rule: 'required|string'
          },
          phone: {
            label: "",
            name: "phone",
            placeholder: "Daytime Phone",
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
            label: "",
            name: "streetAddress",
            placeholder: "Street Address",
            value: '',
            error: '',
            rule: 'required|string'
          },
          apartaments: {
            label: "",
            name: "apartaments",
            placeholder: "Apt, Suite, Bldg, Gate Code. (optional)",
            value: '',
            error: '',
            rule: 'string'
          },
          city: {
            label: "",
            name: "city",
            placeholder: "City",
            value: '',
            error: '',
            rule: 'required|string'
          },
          zip: {
            label: "",
            name: "zip",
            placeholder: "ZIP",
            value: '',
            error: '',
            rule: 'required|string'
          },
          country: {
            name: "country",
            placeholder: "Country",
            country: [
              { value: '????????????', label: '????????????' },
              { value: '??????', label: '??????' },
              { value: '????????????????????????????', label: '????????????????????????????' },
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
            label: "",
            name: "fullName",
            placeholder: "Full Name",
            value: '',
            error: '',
            rule: 'required|string'
          },
          email: {
            label: "",
            name: "email",
            placeholder: "Email Address",
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
            label: "",
            name: "streetAddress",
            placeholder: "Street Address",
            value: '',
            error: '',
            rule: 'required|string'
          },
          apartaments: {
            label: "",
            name: "apartaments",
            placeholder: "Apt, Suite, Bldg, Gate Code. (optional)",
            value: '',
            error: '',
            rule: 'string'
          },
          city: {
            label: "",
            name: "city",
            placeholder: "City",
            value: '',
            error: '',
            rule: 'required|string'
          },
          zip: {
            label: "",
            name: "zip",
            placeholder: "ZIP",
            value: '',
            error: '',
            rule: 'required|string'
          },
          country: {
            name: "country",
            placeholder: "Country",
            country: [
              { value: 'Russia', label: 'Russia' },
              { value: '????????????', label: '????????????' },
              { value: '??????', label: '??????' },
              { value: '????????????????????????????', label: '????????????????????????????' },
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
            value: '',
            error: '',
            rule: 'required|string'
          },
          cardNumber:
          {
            name: "cardNumber",
            label: "Card Number",
            placeholder: "XXXX XXXX XXXX XXXX XXXX",
            value: '',
            error: '',
            rule: 'required|cardNumbers|cardNumbersNumeric'
          },
          expireDate: {
            name: "expireDate",
            label: "Expire Date",
            placeholder: "MM / YY",
            value: '',
            error: '',
            rule: 'required|expireDateSize|expireDateNumeric|expireDateExpired'
          },
          securityCode: {
            name: "securityCode",
            label: "Security Code",
            placeholder: "",
            value: '',
            error: '',
            rule: 'required|securityCode'
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
        if (propName == "cardNumber") {
          field.value = cardNumberMusk(value);
        }
        else if (propName == "expireDate") {
          field.value = expireDateMusk(value);
        }
        else {
          field.value = value;
        }

        let validation = new Validator(
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

const cardNumberMusk = (value: string | undefined): string | undefined => {
  if (value) {
    let muskValue = [];
    let muskValueStr = "";
    value = value.replace(/ /g, '')
    for (let i = 0; i < value.length; i++) {
      const element = value[i];
      if (i % 4 == 0 && i != 0) {
        muskValue.push(" ");
      }
      muskValue.push(element);
      muskValueStr = muskValue.join("");
    }
    return muskValueStr;
  }
  return value;
}

const expireDateMusk = (value: string | undefined): string | undefined => {
  if (value) {
    let muskValue = [];
    let muskValueStr = "";
    value = value.replace(/[\s\/]/g, '');
    for (let i = 0; i < value.length; i++) {
      const element = value[i];
      if (i % 2 == 0 && i != 0) {
        muskValue.push("/");
      }
      muskValue.push(element);
      muskValueStr = muskValue.join("");
    }
    return muskValueStr;
  }
  return value;
}

export default new FormStore();