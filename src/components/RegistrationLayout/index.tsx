import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { registrationSteps, TOTAL_STEPS } from 'constants/index';

import Buttons from './Buttons';
import Title from './Title';

type RegistrationLayoutProps = {
  children: React.ReactNode;
};

const RegistrationLayout: React.FC<RegistrationLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentStep = registrationSteps.find(step => step.path === location.pathname)?.step ?? 1;

  const onStepChange = (step: number) => {
    const target = registrationSteps.find(s => s.step === step);
    if (target) {
      navigate(target.path);
    }
  };

  const onNext = () => {
    if (currentStep < TOTAL_STEPS) {
      onStepChange(currentStep + 1);
    }
  };

  const onBack = () => {
    if (currentStep > 1) {
      onStepChange(currentStep - 1);
    }
  };

  return (
    <main>
      <Title currentStep={currentStep} />

      {children}

      <Buttons currentStep={currentStep} totalSteps={TOTAL_STEPS} onBack={onBack} onNext={onNext} />
    </main>
  );
};

export default RegistrationLayout;
