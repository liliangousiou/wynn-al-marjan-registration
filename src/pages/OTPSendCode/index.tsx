import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { OTPMethod } from 'types';
import RadioIcon from 'assets/radio.svg';
import RadioCheckedIcon from 'assets/radio-checked.svg';

import './index.scss';

const OTPSendCode: React.FC = () => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState<OTPMethod>('phone');

  return (
    <div className="otp-container">
      {/* Step Title */}
      <h2>{t('registration.otpVerification')}</h2>

      {/* White Box Wrapper */}
      <div className="white-box">
        <div className="header-section">
          <h3 className="header-title">{t('otp.sendTitle')}</h3>
          <p className="header-subtitle">{t('otp.sendDescription')}</p>
        </div>

        {/* Radio Buttons */}
        <div className="radio-wrapper">
          {(['phone', 'email'] as OTPMethod[]).map(method => (
            <label key={method} className="radio-label">
              <input
                type="radio"
                name="otpMethod"
                value={method}
                checked={selected === method}
                onChange={() => setSelected(method)}
                className="radio-input hidden"
              />
              <img
                src={selected === method ? RadioCheckedIcon : RadioIcon}
                alt={selected === method ? 'Checked radio' : 'Radio'}
                className="radio-icon"
              />
              {method === 'phone' ? t('otp.sendToPhone') : t('otp.sendToEmail')}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OTPSendCode;
