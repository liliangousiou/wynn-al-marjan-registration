// src/pages/Registration.tsx
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Buttons } from './Buttons';
import Form from './Steps/Form';
import OTPSendCode from './Steps/OTPSendCode';
import OTPVerification from './Steps/OTPVerification';
import { StepTabs } from './StepTabs';
import { Title } from './Title';

const TOTAL_STEPS = 3;

export const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentStep = parseInt(location.pathname.split('-')[1]) || 1;

  const onStepChange = (step: number) => {
    navigate(`/register/step-${step}`);
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
    <main className="max-w-4xl mx-auto p-6">
      <Title currentStep={currentStep} />

      <StepTabs currentStep={currentStep} onStepChange={onStepChange} />

      <Routes>
        <Route path="step-1" element={<Form />} />
        <Route path="step-2" element={<OTPSendCode />} />
        <Route path="step-3" element={<OTPVerification />} />
      </Routes>

      <Buttons currentStep={currentStep} totalSteps={TOTAL_STEPS} onBack={onBack} onNext={onNext} />
    </main>
  );
};
