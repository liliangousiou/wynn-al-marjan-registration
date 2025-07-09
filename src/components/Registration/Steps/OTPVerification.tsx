import React from 'react';

const OTPVerification: React.FC = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">OTP Verification</h2>
      <p>Please check your email.</p>
      <p>We've sent a code to anton@gmail.com</p> <br />
      <p>Code inputs here</p>
      <p>Didn’t get a code? Click to resend.</p>
    </div>
  );
};

export default OTPVerification;
