import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { registrationSteps, TOTAL_STEPS } from 'constants/index';
import { Footer, Header } from 'components';

import Buttons from './Buttons';
import Title from './Title';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-layout flex-grow container mx-auto my-8 py-6">
        <Title currentStep={currentStep} />

        {children}

        <Buttons
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          onBack={onBack}
          onNext={onNext}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
