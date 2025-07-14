import React from 'react';
import clsx from 'clsx';

import CheckboxIcon from 'assets/checkbox.svg';
import CheckboxCheckedIcon from 'assets/checkbox-checked.svg';

import './index.scss';

type CheckboxProps = {
  id: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: React.ReactNode;
  className?: string;
  error?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
  label,
  className = '',
  error,
}) => {
  return (
    <div className={`checkbox-container ${className}`}>
      <div className="checkbox-icon-wrapper">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="peer absolute opacity-0 w-full h-full cursor-pointer"
        />
        <img src={CheckboxIcon} alt="Unchecked" className="unchecked peer-checked:hidden w-6 h-6" />
        <img
          src={CheckboxCheckedIcon}
          alt="Checked"
          className="checked hidden peer-checked:block w-6 h-6"
        />
      </div>
      <label htmlFor={id} className={clsx('checkbox-label', { 'text-red': !!error })}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
