import React from 'react';
import { type Control, Controller, type FieldValues } from 'react-hook-form';
import { Trans } from 'react-i18next';
import clsx from 'clsx';

import CheckboxIcon from 'assets/checkbox.svg';
import CheckboxCheckedIcon from 'assets/checkbox-checked.svg';

import './index.scss';

type CheckboxProps = {
  name: string;
  label: string;
  control: Control<FieldValues>;
  className?: string;
  error?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({ name, label, control, className = '', error }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value = false, onChange } }) => (
        <div className={`checkbox-container ${className}`}>
          <div className="checkbox-icon-wrapper">
            <input
              type="checkbox"
              id={name}
              checked={value}
              onChange={onChange}
              className="peer absolute opacity-0 w-full h-full cursor-pointer"
            />
            <img
              src={CheckboxIcon}
              alt="Unchecked"
              className="unchecked peer-checked:hidden w-6 h-6"
            />
            <img
              src={CheckboxCheckedIcon}
              alt="Checked"
              className="checked hidden peer-checked:block w-6 h-6"
            />
          </div>
          <label htmlFor={name} className={clsx('checkbox-label', { error: error })}>
            <Trans
              i18nKey={label}
              components={{
                1: <a href="/terms" target="_blank" rel="noreferrer" />,
                3: <a href="/privacy" target="_blank" rel="noreferrer" />,
              }}
            />
          </label>
        </div>
      )}
    />
  );
};

export default Checkbox;
