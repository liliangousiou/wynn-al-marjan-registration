import React from 'react';

interface StepTabsProps {
  currentStep: number;
  onStepChange: (step: number) => void;
}

export const StepTabs: React.FC<StepTabsProps> = ({ currentStep, onStepChange }) => {
  return (
    <nav className="flex space-x-4 mb-6">
      {[1, 2, 3].map(step => (
        <button
          key={step}
          onClick={() => onStepChange(step)}
          className={`px-3 py-1 rounded ${
            currentStep === step
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          aria-current={currentStep === step ? 'step' : undefined}
        >
          Step {step}
        </button>
      ))}
    </nav>
  );
};
