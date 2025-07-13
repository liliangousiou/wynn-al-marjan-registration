import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center text-center px-4 md:px-8 py-16">
      <h1>{t('notFound.title')}</h1>
      <p className="font-avenir text-gray-600 my-6">
        {t('notFound.description')}
      </p>
      <Link
        to="/register/form"
        className="text-teal border border-teal px-4 py-2 rounded uppercase text-sm hover:bg-teal hover:text-white transition"
      >
        {t('notFound.cta')}
      </Link>
    </div>
  );
};

export default NotFound;
