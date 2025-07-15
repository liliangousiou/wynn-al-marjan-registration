import React, { useRef, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { api, getErrorMessage } from 'api/client';
import { useAuthContext } from 'context/AuthContext';
import type { CheckOtpRequest, CheckOtpResponse } from 'types/auth';

import './index.scss';

const OTPVerification: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setUser } = useAuthContext();

  const [otpValues, setOtpValues] = useState<string[]>(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Only allow 0-9
    const updated = [...otpValues];
    updated[index] = value;
    setOtpValues(updated);

    // Move to next input if value is filled
    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const otp = otpValues.join('');

  const handleVerify = async () => {
    if (otp.length !== 4) return;

    try {
      setLoading(true);
      setError(null);

      /** TODO: Mock endpoint */
      const payload: CheckOtpRequest = { otp };
      const response = await api.post<CheckOtpResponse>('/check/otp', payload);

      const user = response.data.user; // { id, name, token }
      setUser(user); // Save in context

      navigate('/welcome');
    } catch (err) {
      console.error('OTP Verify Error', err);
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-container">
      <h2>{t('registration.otpVerification')}</h2>

      <div className="white-box">
        <div className="header-section">
          <h3 className="header-title">{t('verification.checkEmailTitle')}</h3>
          <p className="header-subtitle">
            {t('verification.codeSent', { email: 'anton@gmail.com' })}
          </p>
        </div>

        <div className="inputs-wrapper">
          <div className="inputs-container">
            {otpValues.map((val, idx) => (
              <input
                key={idx}
                type="text"
                maxLength={1}
                className="otp-input"
                value={val}
                onChange={e => handleChange(idx, e.target.value)}
                ref={el => {
                  inputsRef.current[idx] = el;
                }}
              />
            ))}
          </div>

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

      <div className="flex flex-col flex-1 items-center justify-center">
        {error && <p className="text-red">{error}</p>}

        <button
          className="btn-primary mt-4"
          disabled={otp.length !== 4 || loading}
          onClick={handleVerify}
        >
          {loading ? 'Verifying...' : 'Verified!'}
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
