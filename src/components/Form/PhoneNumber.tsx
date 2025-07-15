import React from 'react';
import { type Control, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import clsx from 'clsx';

import Label from './Label';

import 'react-phone-number-input/style.css';
import './index.scss';

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
    <div className="phone-number-container">
      <Label name={label} title={title || label} />
      <Controller
        name={name}
        control={control}
        rules={{ required }}
        render={({ field }) => (
          <div className={clsx('phone-number-wrapper', { error })}>
            <PhoneInput
              {...field}
              defaultCountry="AE"
              international
              countryCallingCodeEditable={false}
              placeholder="(___) - ____"
            />
          </div>
        )}
      />
    </div>
  );
};

export default PhoneNumber;
