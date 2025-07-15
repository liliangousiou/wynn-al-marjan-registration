import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useFormContextStep } from 'context/FormContext';
import { registrationSteps, TOTAL_STEPS } from 'constants/index';

import Buttons from './Buttons';
import Title from './Title';

type InnerLayoutProps = {
  children: React.ReactNode;
};

const InnerLayout: React.FC<InnerLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { submitStepRef } = useFormContextStep();

  const currentStep = registrationSteps.find(step => step.path === location.pathname)?.step ?? 1;

  const onStepChange = (step: number) => {
    const target = registrationSteps.find(s => s.step === step);
    if (target) {
      navigate(target.path);
    }
  };

  const handleNext = () => {
    if (submitStepRef.current) {
      submitStepRef.current();
    }
  };

  const onBack = () => {
    if (currentStep > 1) {
      onStepChange(currentStep - 1);
    }
  };

  return (
    <>
      <Title currentStep={currentStep} />
      {children}
      <Buttons
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        onBack={onBack}
        onNext={handleNext}
      />
    </>
  );
};

export default InnerLayout;
