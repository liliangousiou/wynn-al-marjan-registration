import React from 'react';

import { FormProvider } from 'context/FormContext';

import InnerLayout from './InnerLayout';

type RegistrationLayoutProps = {
  children: React.ReactNode;
  onSubmitStep: () => void;
};

const RegistrationLayout: React.FC<RegistrationLayoutProps> = ({ children, onSubmitStep }) => {
  return (
    <main>
      <FormProvider>
        <InnerLayout onSubmitStep={onSubmitStep}>{children}</InnerLayout>
      </FormProvider>
    </main>
  );
};

export default RegistrationLayout;
