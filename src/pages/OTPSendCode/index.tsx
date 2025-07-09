import React from 'react';

const OTPSendCode: React.FC = () => {
  return (
    <div>
      {/* Step Title */}
      <h2 className='inline-block border-b-2 border-gray-300 pb-1 pr-6 mb-6 font-semibold text-xl'>OTP Verification</h2>

      {/* White Box Wrapper */}
      <div className='bg-white p-6 rounded-xl shadow-md w-full flex flex-col items-center'>
        <h3 className="mb-4 text-gray-700">Send code</h3>

        <p className="mb-2 text-gray-600">How would you like to receive the code?</p>

        {/* Radio Buttons */}
        <div className="flex items-center py-4 gap-[20px]">
          <label className="flex items-center gap-2 w-[200px]">
            <input
              type="radio"
              name="otpMethod"
              value="phone"
              defaultChecked
              className="accent-primary"
            />
            Send to Phone
          </label>
          <label className="flex items-center gap-2 w-[200px]">
            <input
              type="radio"
              name="otpMethod"
              value="email"
              className="accent-primary"
            />
            Send to Email
          </label>
        </div>
      </div>
    </div>
  );
};

export default OTPSendCode;
