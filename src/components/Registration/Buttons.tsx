import React from 'react';

interface FooterProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
}

export const Buttons: React.FC<FooterProps> = ({ currentStep, onBack, onNext }) => {
  return (
    <footer className="flex justify-between mt-8">
      <button
        onClick={onBack}
        disabled={currentStep === 1}
        className={`px-4 py-2 rounded border ${
          currentStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
        }`}
      >
        Back
      </button>

      <button
        onClick={onNext}
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Next
      </button>
    </footer>
  );
};
