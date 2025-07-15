import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

const Welcome: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1>{t('welcome.title')}</h1>
      <p className="description">{t('welcome.description')}</p>
    </div>
  );
};

export default Welcome;
