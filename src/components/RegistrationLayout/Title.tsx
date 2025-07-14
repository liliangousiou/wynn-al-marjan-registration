import React from 'react';
import { useTranslation } from 'react-i18next';

const Title: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-4 md:mb-6">
        <h1>{t('registration.title')}</h1>
        <div className="font-caslon text-xl md:text-2xl leading-[42px] text-dark mb-0">
          {t('registration.stepIndicator', { current: currentStep, total: 3 })}
        </div>
      </div>

      <p className="font-avenir font-medium text-[15.5px] leading-[100%] text-black text-start px-0">
        {t('registration.subtitle')}
      </p>
    </div>
  );
};

export default Title;
