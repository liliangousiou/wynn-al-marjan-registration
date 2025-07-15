import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FormProvider } from 'context/FormContext';
import { registrationSteps } from 'constants/index';
import type { RegistrationStep } from 'types';

import InnerLayout from './InnerLayout';

export const useNextStepNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return () => {
    const currentStepIndex = registrationSteps.findIndex(
      (step: RegistrationStep) => step.path === location.pathname
    );
    const nextStep = registrationSteps[currentStepIndex + 1];

    if (nextStep) {
      navigate(nextStep.path);
    } else {
      // Last step → go to welcome
      navigate('/welcome');
    }
  };
};

export interface RegistrationLayoutProps {
  children: React.ReactNode;
}

const RegistrationLayout: React.FC<RegistrationLayoutProps> = ({ children }) => {
  return (
    <main>
      <FormProvider>
        <InnerLayout>{children}</InnerLayout>
      </FormProvider>
    </main>
  );
};

export default RegistrationLayout;
