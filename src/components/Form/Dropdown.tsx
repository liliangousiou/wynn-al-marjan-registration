import React from 'react';
import clsx from 'clsx';

import Label from './Label';

import './index.scss';

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  name: string;
  label: string;
  options: Option[];
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  required?: boolean;
  error?: boolean;
  title?: string;
};

const Dropdown: React.FC<DropdownProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  required,
  error,
  title,
}) => {
  return (
    <div className="dropdown-custom">
      <Label name={label} title={title || label} />
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={clsx('form-input bg-white', { error: error })}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
