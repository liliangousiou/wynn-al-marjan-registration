import React from 'react';
import Label from '../Label';

type TextInputProps = {
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  error?: boolean;
  title?: string;
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
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <Label name={label} title={title || label} />
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
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
        }}
      />
    </div>
  );
};

export default TextInput;
