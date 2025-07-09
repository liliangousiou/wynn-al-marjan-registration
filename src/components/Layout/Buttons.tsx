import React from 'react';

interface FooterProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
}

const Buttons: React.FC<FooterProps> = ({ currentStep, onBack, onNext }) => {
  return (
    <footer className="flex justify-between mt-8">
      {currentStep !== 1 && (
        <button
          onClick={onBack}
          disabled={currentStep === 1}
          className="px-4 py-2 rounded border hover:bg-gray-100"
        >
          Back
        </button>
      )}

      <button
        onClick={onNext}
        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        Next
      </button>
    </footer>
  );
};

export default Buttons;
