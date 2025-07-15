import React from 'react';
import clsx from 'clsx';

import Label from './Label';

import './index.scss';

type TextInputProps = {
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  error?: boolean;
  title?: string;
  type?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  value,
  placeholder,
  onChange,
  required,
  error,
  title,
  type = 'text',
}) => {
  return (
    <div className={`textinput-custom ${type}-input-wrapper w-100`}>
      <Label name={label} title={title || label} />
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={clsx('form-input', { error: error })}
      />
    </div>
  );
};

export default TextInput;
