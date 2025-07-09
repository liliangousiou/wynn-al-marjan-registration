import React from 'react';

const Title: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  return (
    <>
      <header className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center mb-4">
        <h1 className="text-2xl font-semibold">Registration</h1>
        <div className="text-sm text-gray-500 mb-1 md:mb-0">Step {currentStep} of 3</div>
      </header>

      <p className="mb-4 text-gray-600">Please enter below information to create your account.</p>
    </>
  );
};

export default Title;
