import React from 'react';
import { useForm } from 'react-hook-form';

import type { NewsletterFormData } from 'types';

const Newsletter: React.FC = () => {
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
    <section className="newsletter-section">
      <div className="newsletter-container">
        {/* Title */}
        <h2 className="heading-h2">Get News & Updates</h2>

        <div className="newsletter-box">
          {/* Description */}
          <p className="newsletter-description">
            Get latest developments and exciting news on how we are shaping the future!
          </p>

          {/* Email Input + Button */}
          <form onSubmit={handleSubmit(onSubmit)} className="newsletter-form">
            <div className="flex-1">
              <input
                type="email"
                autoComplete="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address',
                  },
                })}
                placeholder="Your email address"
                onChange={() => clearErrors('email')}
                className={`newsletter-input ${errors.email ? 'text-red' : 'text-grey'}`}
              />
            </div>

            <button type="submit" className="newsletter-btn">
              Join the newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
