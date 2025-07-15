import React, { useEffect, useState } from 'react';
import { FormProvider as RHFProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import { DynamicField } from 'components/Form';
import { useNextStepNavigation } from 'components/RegistrationLayout';
import { useFormContextStep } from 'context/FormContext';
import { registrationSteps } from 'constants/index';
import type { FormData } from 'types';
import { formFields, groupedFieldGroups } from 'utils/formFields';

const Registration: React.FC = () => {
  const { t } = useTranslation();

  const methods = useForm<FormData>();
  const { handleSubmit } = methods;
  const { submitStepRef } = useFormContextStep();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigateNextStep = useNextStepNavigation();

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      setError(null);
      console.log('Submitting...', data);
      const response = await axios.post('/api/register', data);
      console.log('Submission success:', response.data);

      // Navigate to the next step (Send OTP Code)
      const otpStep = registrationSteps.find(step => step.step === 2);
      if (otpStep) {
        navigateNextStep();
      }
    } catch (err: any) {
      console.error('Submission failure', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    submitStepRef.current = () => {
      handleSubmit(onSubmit)();
    };
    return () => {
      submitStepRef.current = null;
    };
  }, [handleSubmit, submitStepRef]);

  return (
    <RHFProvider {...methods}>
      <form>
        <div className="flex flex-col gap-8">
          {groupedFieldGroups.map(groupKey => {
            const groupTitle = t(`form.groups.${groupKey}`);
            const fieldsInGroup = formFields.filter(f => f.group === groupKey);

            return (
              <div key={groupKey} className="flex flex-col flex-wrap gap-5">
                <h2>{groupTitle}</h2>

                {fieldsInGroup.map(field => (
                  <DynamicField key={field.name} field={field} />
                ))}
              </div>
            );
          })}
        </div>

        {error && <div className="text-red mt-4">{error}</div>}
        {loading && <div className="text-sm text-gray-500 mt-4">Sending...</div>}
      </form>
    </RHFProvider>
  );
};

export default Registration;
