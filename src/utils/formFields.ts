import type { FormField } from 'types';

/*

TODO: GROUPS
export const personalInfoFields: FieldConfig[] = [
  { name: 'firstName', ... },
  { name: 'lastName', ... },
];

export const contactDetailsFields: FieldConfig[] = [
  { name: 'email', ... },
  { name: 'phone', ... },
];

*/

export const formFields: FormField[] = [
  {
    name: 'firstName',
    type: 'text',
    label: 'form.firstName.label',
    placeholder: 'form.firstName.placeholder',
    requiredMsg: 'form.firstName.required',
    info: 'form.firstName.info',
    className: 'flex-1',
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'form.lastName.label',
    placeholder: 'form.lastName.placeholder',
    requiredMsg: 'form.lastName.required',
    info: 'form.lastName.info',
    className: 'flex-1',
  },
  {
    name: 'gender',
    type: 'select',
    label: 'form.gender.label',
    requiredMsg: 'form.gender.required',
    info: 'form.gender.info',
    options: [
      { value: '', label: 'form.gender.placeholder' },
      { value: 'female', label: 'form.gender.female' },
      { value: 'male', label: 'form.gender.male' },
      { value: 'other', label: 'form.gender.other' },
      { value: 'preferNotToSay', label: 'form.gender.preferNotToSay' },
    ],
  },
  {
    name: 'residenceCountry',
    type: 'select',
    label: 'form.residenceCountry.label',
    requiredMsg: 'form.residenceCountry.required',
    info: 'form.residenceCountry.info',
    options: [
      { value: '', label: 'form.residenceCountry.placeholder' },
      { value: 'ae', label: 'form.residenceCountry.ae' },
      { value: 'us', label: 'form.residenceCountry.us' },
      { value: 'uk', label: 'form.residenceCountry.uk' },
    ],
  },
  {
    name: 'email',
    type: 'email',
    label: 'form.email.label',
    placeholder: 'form.email.placeholder',
    requiredMsg: 'form.email.required',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'form.email.invalid',
    },
    info: 'form.email.info',
  },
  {
    name: 'phoneNumber',
    type: 'phone',
    label: 'form.phoneNumber.label',
    requiredMsg: 'form.phoneNumber.required',
    info: 'form.phoneNumber.info',
  },
  {
    name: 'agreeTerms',
    type: 'checkbox',
    label: 'form.agreeTerms.label',
    placeholder: 'form.agreeTerms.placeholder',
    requiredMsg: 'form.agreeTerms.required',
  },
];
