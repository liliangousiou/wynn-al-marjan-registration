import React from 'react';
import { useTranslation } from 'react-i18next';

import { useAuthContext } from 'context/AuthContext';

import './index.scss';

const Welcome: React.FC = () => {
  const { t } = useTranslation();

  const { user } = useAuthContext();

  return (
    <div className="container">
      <h1>{t('welcome.title', { name: user?.name ?? '' })}</h1>
      <p className="description">{t('welcome.description')}</p>
    </div>
  );
};

export default Welcome;
