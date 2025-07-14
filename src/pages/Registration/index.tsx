import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';

import { Label } from 'components';
import type { FormData } from 'types';
import { formFields } from 'utils/formFields';
import CheckboxIcon from 'assets/checkbox.svg';
import CheckboxCheckedIcon from 'assets/checkbox-checked.svg';

import 'react-phone-number-input/style.css';
import './index.scss';

const Registration: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onTouched' });

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        {/* Personal Information Section */}
        <h2>Personal Info</h2>

        {/* First Row: First Name & Last Name */}
        <div className="flex gap-6">
          {formFields.slice(0, 2).map(field => (
            <div key={field.name} className={`${field.className} flex flex-col gap-1.5`}>
              <Label name={field.label} title={field.info} />
              <input
                {...register(field.name as keyof FormData, {
                  required: field.requiredMsg,
                })}
                placeholder={field.placeholder}
                className={`register-input ${errors[field.name as keyof FormData] ? 'border-red-500' : ''}`}
              />
            </div>
          ))}
        </div>

        {/* Gender & Residence Country */}
        {formFields.slice(2).map(field => (
          <div key={field.name} className="flex flex-col gap-1.5">
            <Label name={field.label} title={field.info} />
            {field.type === 'select' ? (
              <select
                {...register(field.name as keyof FormData, {
                  required: field.requiredMsg,
                })}
                defaultValue=""
                className={`register-input ${errors[field.name as keyof FormData] ? 'border-red-500' : ''}`}
              >
                {field.options?.map(opt => (
                  <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        {/* Contact Details Section */}
        <h2>Contact Details</h2>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <Label
            name="Email"
            title="Enter your email. We'll use it to complete your registration."
          />
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
            type="email"
            placeholder="Enter email address..."
            className={`register-input ${errors.email ? 'border-red-500' : ''}`}
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-1.5">
          <Label
            name="Phone Number"
            title="Enter a valid phone number where we can reach you out."
          />
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: 'Phone number is required' }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                placeholder="(___) - ____"
                defaultCountry="AE"
                international
                countryCallingCodeEditable={false}
                className={`w-full register-input ${errors.phoneNumber ? 'border-red-500' : ''}`}
              />
            )}
          />
        </div>
      </div>

      {/* Agree Terms */}
      <div className="register-terms">
        <div className="relative w-6 h-6">
          <input
            {...register('agreeTerms', { required: 'You must agree to the terms' })}
            type="checkbox"
            id="agreeTerms"
            className="peer absolute opacity-0 w-full h-full cursor-pointer"
          />
          <img src={CheckboxIcon} alt="Checkbox" className="peer-checked:hidden w-6 h-6" />
          <img
            src={CheckboxCheckedIcon}
            alt="Checked Checkbox"
            className="hidden peer-checked:block w-6 h-6"
          />
        </div>

        <label htmlFor="agreeTerms" className="register-terms-text">
          I agree to the{' '}
          <a href="/terms" target="_blank" rel="noreferrer">
            terms and conditions
          </a>{' '}
          and{' '}
          <a href="/privacy" target="_blank" rel="noreferrer">
            privacy policy.
          </a>
          <span className="text-red-500">*</span>
        </label>
      </div>
    </form>
  );
};

export default Registration;
