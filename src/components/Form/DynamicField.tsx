import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { FormField } from 'types';

import { Checkbox, Dropdown, PhoneNumber, TextInput } from '.';

type Props = {
  field: FormField;
};

const DynamicField: React.FC<Props> = ({ field }) => {
  const { t } = useTranslation();
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[field.name];
  const baseKey = `form.${field.name}`;
  const label = t(`${baseKey}.label`, field.label ?? '');
  const info = t(`${baseKey}.info`, { defaultValue: field.info ?? '' });
  const placeholder = t(`${baseKey}.placeholder`, { defaultValue: field.placeholder ?? '' });

  switch (field.type) {
    case 'select':
      return (
        <Dropdown
          name={field.name}
          label={label}
          title={info}
          required
          error={!!error}
          options={field.options!.map(opt => ({
            value: opt.value,
            label:
              opt.value === ''
                ? t(`form.${field.name}.placeholder`, opt.label)
                : t(`form.${field.name}.${opt.value}`, opt.label),
          }))}
        />
      );

    case 'phone':
      return (
        <PhoneNumber
          name={field.name}
          label={label}
          title={info}
          required
          error={!!error}
          control={control}
        />
      );

    case 'checkbox':
      return <Checkbox name={field.name} label={label} error={!!error} control={control} />;

    default:
      return (
        <TextInput
          type={field.type}
          label={label}
          title={info}
          placeholder={placeholder}
          error={!!error}
          {...register(field.name, {
            required: field.requiredMsg && t(`${baseKey}.required`, field.requiredMsg),
            pattern: field.pattern,
          })}
        />
      );
  }
};

export default DynamicField;
