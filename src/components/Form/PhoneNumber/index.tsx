import React from 'react';
import { Controller, type Control } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import Label from '../Label';

import 'react-phone-number-input/style.css';

type PhoneNumberProps = {
  name: string;
  label: string;
  control: Control<any>;
  error?: boolean;
  required?: boolean;
  title?: string;
};

const PhoneNumber: React.FC<PhoneNumberProps> = ({
  name,
  label,
  control,
  error,
  required,
  title,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <Label name={label} title={title || label} />
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <PhoneInput
            {...field}
            placeholder="(___) - ____"
            defaultCountry="AE"
            international
            countryCallingCodeEditable={false}
            className={`w-full form-input ${error ? 'border-red-500' : ''}`}
            style={{
              width: 303,
              height: 60,
              padding: '17px 20px',
              borderRadius: 4,
              borderWidth: '1.5px',
              borderColor: error ? '#f87171' : '#E8E9E9',
              backgroundColor: '#fff',
              fontFamily: 'Actor, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: '150%',
              color: '#1D1F22',
            }}
          />
        )}
      />
    </div>
  );
};

export default PhoneNumber;
