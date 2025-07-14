import type { FormField } from "types";

export const formFields: FormField[] = [
  {
    name: 'firstName',
    label: 'First Name',
    placeholder: 'Enter first name...',
    type: 'text',
    requiredMsg: 'First name is required',
    info: 'Your first name should match your ID',
    className: 'flex-1',
  },
  {
    name: 'lastName',
    label: 'Last Name',
    placeholder: 'Enter last name...',
    type: 'text',
    requiredMsg: 'Last name is required',
    info: 'Your last name should match your ID',
    className: 'flex-1',
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'select',
    requiredMsg: 'Gender is required',
    options: [
      { value: '', label: 'Select gender...' },
      { value: 'female', label: 'Female' },
      { value: 'male', label: 'Male' },
      { value: 'other', label: 'Other' },
      { value: 'preferNotToSay', label: 'Prefer not to say' },
    ],
    info: 'Select your gender',
  },
  {
    name: 'residenceCountry',
    label: 'Your Residence Country',
    type: 'select',
    requiredMsg: 'Residence country is required',
    options: [
      { value: '', label: 'Select residence country...' },
      { value: 'ae', label: 'United Arab Emirates' },
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
    ],
    info: 'Select residence country',
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Enter email address...',
    type: 'email',
    requiredMsg: 'Email is required',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: 'Invalid email address',
    },
    info: "Enter your email, we'll use it to complete your registration",
  },
];
