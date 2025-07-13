import React from 'react';
import { useTranslation } from 'react-i18next';

const Title: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center mb-4">
        <h1>{t('registration.title')}</h1>
        <div className="text-sm text-gray-500 mb-1 md:mb-0">
          {t('registration.stepIndicator', { current: currentStep, total: 3 })}</div>
      </div>

      <p className="mb-6 text-gray-600">{t('registration.subtitle')}.</p>
    </>
  );
};

export default Title;
