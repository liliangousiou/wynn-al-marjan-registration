import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import type { NewsletterFormData } from 'types';

const Newsletter: React.FC = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<NewsletterFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit = async (data: NewsletterFormData) => {
    console.log('Submitting email:', data.email);
    // TODO: API call / toast here
    // try {
    //   await api.subscribe(data.email); // hypothetical API call
    //   toast.success('Thanks for subscribing!');
    // } catch (err) {
    //   toast.error('Something went wrong. Try again later.');
    // }
  };

  return (
    <section className="newsletter">
      <div className='newsletter-left'>
        {/* Title */}
        <h3>{t('newsletter.title')}</h3>

        {/* Description */}
        <p className="newsletter-description">{t('newsletter.description')}</p>
      </div>

      {/* Email Input + Button */}
      <form onSubmit={handleSubmit(onSubmit)} className="newsletter-form">
        <input
          type="email"
          autoComplete="email"
          {...register('email', {
            required: t('newsletter.emailRequired'),
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: t('newsletter.emailInvalid'),
            },
          })}
          placeholder={t('newsletter.emailPlaceholder')}
          onChange={() => clearErrors('email')}
          className={`newsletter-form-input ${errors.email ? 'text-red' : 'text-neutral-dark'}`}
        />

        <button type="submit" className="newsletter-form-btn">
          {t('newsletter.cta')}
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
