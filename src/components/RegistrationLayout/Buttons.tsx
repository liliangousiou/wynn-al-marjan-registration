import React from 'react';
import { useTranslation } from 'react-i18next';

interface ButtonsProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ currentStep, onBack, onNext }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`flex ${currentStep !== 1 ? 'justify-between' : 'justify-center sm:justify-start'} gap-2 sm:gap-[40px]`}
    >
      {currentStep !== 1 && (
        <button onClick={onBack} className="btn-outline h-14 w-full">
          {t('back')}
        </button>
      )}

      <button
        onClick={onNext}
        className={`btn-primary ${currentStep !== 1 ? 'w-full' : 'w-[217px]'}`}
      >
        {t('next')}
      </button>
    </div>
  );
};

export default Buttons;
