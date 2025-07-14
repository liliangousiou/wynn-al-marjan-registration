import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import './index.scss';

const OTPVerification: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="otp-container">
      {/* Step Title */}
      <h2>{t('registration.otpVerification')}</h2>

      {/* White Box Wrapper */}
      <div className="white-box">
        <div className="header-section">
          <h3 className="header-title">{t('verification.checkEmailTitle')}</h3>
          <p className="header-subtitle">
            {t('verification.codeSent', { email: 'anton@gmail.com' })}
          </p>
        </div>

        <div className="inputs-wrapper">
          {/* OTP Code Inputs */}
          <div className="inputs-container">
            {[...Array(4)].map((_, idx) => (
              <input key={idx} type="text" maxLength={1} className="otp-input" />
            ))}
          </div>

          {/* Resend code */}
          <p className="resend-text">
            <Trans
              i18nKey="verification.noCode"
              components={{
                resend: <button type="button" className="resend-button" />,
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
