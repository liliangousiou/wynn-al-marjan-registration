import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './index.scss';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1>{t('notFound.title')}</h1>
      <p className="description">{t('notFound.description')}</p>
      <Link to="/register/form" className="cta">
        {t('notFound.cta')}
      </Link>
    </div>
  );
};

export default NotFound;
