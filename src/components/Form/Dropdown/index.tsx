import React from 'react';
import Label from '../Label';

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
    <div className="flex flex-col gap-1.5">
      <Label name={label} title={title || label} />
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`form-input ${error ? 'border-red-500' : ''}`}
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
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          appearance: 'none',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          backgroundImage:
            'url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' fill=\'%231D1F22\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M7 10l5 5 5-5z\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 20px center',
          backgroundSize: '16px 16px',
        }}
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
