import React, { useEffect, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

import { Checkbox, Dropdown, TextInput } from 'components/Form';
import type { FormData } from 'types';
import { formFields } from 'utils/formFields';

import 'react-phone-number-input/style.css';
import './index.scss';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

const Registration: React.FC = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onTouched' });

  const watchedValues = useWatch({ control });
  const debouncedValues = useDebounce(watchedValues, 500);

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
  };

  // const emailField = formFields.find(f => f.name === 'email');

  useEffect(() => {
    console.log('Debounced form values:', debouncedValues);
  }, [debouncedValues]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      {/* ======================= Personal Info Section ======================= */}
      <div className="flex flex-col gap-5">
        <h2>{t('form.personalInfo')}</h2>

        {/* First Row: First Name & Last Name */}
        <div className="flex flex-row gap-6">
          {formFields.slice(0, 2).map(field => (
            <Controller
              key={field.name}
              name={field.name as keyof FormData}
              control={control}
              rules={{ required: t('form.required') }}
              render={({ field: controllerField }) => (
                <TextInput
                  name={controllerField.name}
                  label={t(`form.${field.name}.label`)}
                  placeholder={t(`form.${field.name}.placeholder`)}
                  onChange={controllerField.onChange}
                  value={typeof controllerField.value === 'string' ? controllerField.value : ''}
                  required
                  error={!!errors[field.name as keyof FormData]}
                  title={t(`form.${field.name}.info`)}
                />
              )}
            />
          ))}
        </div>
        {/* <Controller
          name="residenceCountry"
          control={control}
          rules={{ required: t('form.required') }}
          render={({ field }) => (
            <div className="flex flex-col gap-1.5">
              <Label name={t('form.residenceCountry.label')} title={t('form.residenceCountry.info')} />
              <select
                {...field}
                defaultValue=""
                className={`register-input ${errors.residenceCountry ? 'border-red-500' : ''}`}
              >
                <option value="" disabled>{t('form.residenceCountry.placeholder')}</option>
                {field.options?.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {t(`form.residenceCountry.${opt.value}`, opt.label)}
                  </option>
                ))}
              </select>
            </div>
          )}
        /> */}
        {formFields.map(field => {
          const isError = !!errors[field.name as keyof FormData];

          if (field.type === 'select') {
            return (
              <Controller
                key={field.name}
                name={field.name as keyof FormData}
                control={control}
                rules={{ required: t('form.required') }}
                render={({ field: controllerField }) => (
                  <Dropdown
                    name={controllerField.name}
                    label={t(`form.${field.name}.label`)}
                    title={t(`form.${field.name}.info`)}
                    value={typeof controllerField.value === 'string' ? controllerField.value : ''}
                    onChange={controllerField.onChange}
                    options={field.options!.map(opt => ({
                      value: opt.value,
                      label: t(`form.${field.name}.${opt.value}`, opt.label),
                    }))}
                    error={isError}
                    required
                  />
                )}
              />
            );
          }

          // More field types to follow, e.g., 'phone', 'text', etc.
          return null;
        })}
        {/* {formFields.slice(2).map(field => (
          <>
            <div className="flex flex-col gap-1.5">
              New {field.name} input
            </div>
            <div key={field.name} className="flex flex-col gap-1.5">
              <Label name={t(`form.${field.name}.label`)} title={t(`form.${field.name}.info`)} />
              {field.type === 'select' && (
                <select
                  {...register(field.name as keyof FormData, {
                    required: t('form.required'),
                  })}
                  defaultValue=""
                  className={`register-input ${errors[field.name as keyof FormData] ? 'border-red-500' : ''}`}
                >
                  <option value="" disabled>
                    {t(`form.${field.name}.placeholder`)}
                  </option>
                  {field.options?.map(opt => (
                    <option key={opt.value} value={opt.value}>
                      {t(`form.${field.name}.${opt.value}`, opt.label)}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </>
        ))} */}
      </div>

      {/* ======================= Contact Details Section ======================= */}
      <div className="flex flex-col gap-5">
        <h2>{t('form.contactDetails')}</h2>

        {/* Email */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: t('form.required'),
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: t('form.email.invalid'),
            },
          }}
          render={({ field }) => (
            <TextInput
              name="email"
              label={t('form.email.label')}
              placeholder={t('form.email.placeholder')}
              value={field.value}
              onChange={field.onChange}
              required
              error={!!errors.email}
              title={t('form.email.info')}
            />
          )}
        />
        {/* <Controller
          name={emailField.name}
          control={control}
          rules={{
            required: t('form.required'),
            pattern: { emailField.pattern },
          }}
          render={({ field }) => (
            <TextInput
              name={emailField.name}
              label={t(`form.${emailField.name}.label`)}
              placeholder={t(`form.${emailField.name}.placeholder`)}
              value={field.value}
              onChange={field.onChange}
              required
              error={!!errors[emailField.name]}
              title={t(`form.${emailField.name}.info`)}
            />
          )}
        /> */}

        {/* Phone Number */}
        <Controller
          name="phoneNumber"
          control={control}
          rules={{ required: t('form.required') }}
          render={({ field }) => (
            <PhoneInput
              {...field}
              placeholder={t('form.phone.placeholder')}
              defaultCountry="AE"
              international
              countryCallingCodeEditable={false}
              className={`w-full register-input ${errors.phoneNumber ? 'border-red-500' : ''}`}
            />
          )}
        />
        {/* <div className="flex flex-col gap-1.5">
          <Label name={t('form.phone.label')} title={t('form.phone.info')} />
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: t('form.required') }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                placeholder={t('form.phone.placeholder')}
                defaultCountry="AE"
                international
                countryCallingCodeEditable={false}
                className={`w-full register-input ${errors.phoneNumber ? 'border-red-500' : ''}`}
              />
            )}
          />
        </div> */}
      </div>

      {/* ======================= Terms & Conditions Section ======================= */}
      <Controller
        name="agreeTerms"
        control={control}
        rules={{ required: 'You must agree to the terms' }}
        render={({ field }) => (
          <Checkbox
            id="agreeTerms"
            label={
              <Trans i18nKey="form.agreeTermsHtml">I agree to the<a href="/terms" target="_blank" rel="noreferrer">terms and conditions</a> and <a href="/privacy" target="_blank" rel="noreferrer">privacy policy</a>.</Trans>
            }
            checked={field.value}
            onChange={field.onChange}
            error={errors.agreeTerms?.message}
          />
        )}
      />

      {/* <label htmlFor="agreeTerms" className="register-terms-text">
        <Trans i18nKey="form.agreeTermsHtml">
          I agree to the <a href="/terms" target="_blank" rel="noreferrer">terms and conditions</a> and <a href="/privacy" target="_blank" rel="noreferrer">privacy policy</a>.
        </Trans>
      </label> */}
    </form>
  );
};

export default Registration;
