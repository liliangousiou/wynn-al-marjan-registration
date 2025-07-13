import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';

import info from 'assets/info.svg';

import 'react-phone-number-input/style.css';

type FormData = {
  firstName: string;
  lastName: string;
  gender: string;
  residenceCountry: string;
  email: string;
  phoneNumber: string;
  agreeTerms: boolean;
};

const PersonalInfoForm: React.FC = () => {
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
    <form onSubmit={handleSubmit(onSubmit)} className="my-8">
      {/* Personal Info Title */}
      <h2>Personal Info</h2>

      <div className="flex gap-6 mb-6">
        {/* First Name */}
        <div className="flex-1 flex flex-col">
          <label className="flex items-center justify-between mb-1 font-medium text-gray-700">
            <div>
              First Name <span className="text-red-500">*</span>
            </div>
            <img
              src={info}
              alt="First Name"
              title="Your first name name should match your ID"
              className="ml-2 cursor-pointer"
            />
          </label>
          <input
            {...register('firstName', { required: 'First name is required' })}
            placeholder="Enter first name..."
            className={`bg-white border rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.firstName ? 'border-red-500' : ''
            }`}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="flex-1 flex flex-col">
          <label className="flex items-center justify-between mb-1 font-medium text-gray-700">
            <div>
              Last Name <span className="text-red-500">*</span>
            </div>
            <img
              src={info}
              alt="Last Name"
              title="Your last name name should match your ID"
              className="ml-2 cursor-pointer"
            />
          </label>
          <input
            {...register('lastName', { required: 'Last name is required' })}
            placeholder="Enter last name..."
            className={`bg-white border rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.lastName ? 'border-red-500' : ''
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Gender Select */}
      <div className="flex flex-col mb-6">
        <label className="flex items-center justify-between mb-1 font-medium text-gray-700">
          <div>
            Gender <span className="text-red-500">*</span>
          </div>
          <img src={info} alt="Gender" title="Select your gender" className="ml-2 cursor-pointer" />
        </label>
        <select
          {...register('gender', { required: 'Gender is required' })}
          defaultValue=""
          className={`bg-white border rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            errors.gender ? 'border-red-500' : ''
          }`}
        >
          <option value="" disabled>
            Select gender...
          </option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
          <option value="preferNotToSay">Prefer not to say</option>
        </select>
        {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
      </div>

      {/* Residence Country Select */}
      <div className="flex flex-col mb-6">
        <label className="flex items-center justify-between mb-1 font-medium text-gray-700">
          <div>
            Your Residence Country <span className="text-red-500">*</span>
          </div>
          <img
            src={info}
            alt="Residence Country"
            title="Select residence country"
            className="ml-2 cursor-pointer"
          />
        </label>
        <select
          {...register('residenceCountry', { required: 'Residence country is required' })}
          defaultValue=""
          className={`bg-white border rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            errors.residenceCountry ? 'border-red-500' : ''
          }`}
        >
          <option value="" disabled>
            Select residence country...
          </option>
          <option value="ae">United Arab Emirates</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          {/* Add more countries as needed */}
        </select>
        {errors.residenceCountry && (
          <p className="text-red-500 text-sm mt-1">{errors.residenceCountry.message}</p>
        )}
      </div>

      {/* Contact Details Title */}
      <h2>Contact Details</h2>

      {/* Email */}
      <div className="flex flex-col mb-6">
        <label className="flex items-center justify-between mb-1 font-medium text-gray-700">
          <div>
            Email <span className="text-red-500">*</span>
          </div>
          <img
            src={info}
            alt="Email"
            title="Enter your email, we'll use it to complete your registration"
            className="ml-2 cursor-pointer"
          />
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address',
            },
          })}
          placeholder="Enter email address..."
          type="email"
          autoComplete="email"
          className={`bg-white border rounded-md px-3 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            errors.email ? 'border-red-500' : ''
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Phone Number */}
      <div className="flex flex-col mb-6">
        <label className="flex items-center justify-between mb-1 font-medium text-gray-700">
          <div>
            Phone Number <span className="text-red-500">*</span>
          </div>
          <img
            src={info}
            alt="Phone Number"
            title="Enter a valid phone number where we can reach you out."
            className="ml-2 cursor-pointer"
          />
        </label>

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
              className={`w-full bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.phoneNumber ? 'border-red-500' : ''
              }`}
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
        )}
      </div>

      {/* Agree Terms Checkbox */}
      <div className="flex items-center mb-6">
        <input
          {...register('agreeTerms', { required: 'You must agree to the terms' })}
          type="checkbox"
          id="agreeTerms"
          className={`mr-2 focus:ring-indigo-500 ${errors.agreeTerms ? 'border-red-500' : ''}`}
        />
        <label htmlFor="agreeTerms" className="text-gray-700 text-sm">
          I agree to the{' '}
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline"
          >
            terms and conditions
          </a>{' '}
          and{' '}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 underline"
          >
            privacy policy
          </a>
          <span className="text-red-500">*</span>
        </label>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
