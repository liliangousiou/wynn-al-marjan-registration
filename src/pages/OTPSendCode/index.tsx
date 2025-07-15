import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { api, getErrorMessage } from 'api/client';

interface SendOtpRequest {
  email: string;
}
interface SendOtpResponse {
  success: boolean;
  message?: string;
}

const OTPSendCode: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendCode = async () => {
    if (!email) {
      setError('Please enter your email');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const payload: SendOtpRequest = { email };
      const response = await api.post<SendOtpResponse>('/send/otp', payload);

      /** TODO: Mock endpoint */
      if (response.data.success) {
        navigate('/verify-otp', { state: { email } });
      } else {
        setError(response.data.message || 'Failed to send OTP');
      }
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="otp-container">
      <h2>{t('verification.sendCodeTitle')}</h2>

      <div className="white-box">
        <input
          type="email"
          placeholder={t('form.email.label')}
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="text-input"
        />

        {error && <p className="text-red mt-2">{error}</p>}

        <button className="btn-primary mt-4" onClick={handleSendCode} disabled={loading || !email}>
          {loading ? t('verification.sending') : t('verification.sendCode')}
        </button>
      </div>
    </div>
  );
};

export default OTPSendCode;
