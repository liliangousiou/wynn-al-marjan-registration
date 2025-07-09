import React from 'react';

const OTPVerification: React.FC = () => {
  return (
    <div>
      {/* Step Title */}
      <h2 className='inline-block border-b-2 border-gray-300 pb-1 pr-6 mb-6 font-semibold text-xl'>OTP Verification</h2>

      {/* White Box Wrapper */}
      <div className='bg-white p-6 rounded-xl shadow-md w-full flex flex-col items-center'>
        <h3 className="mb-4 text-gray-700">Please check your email.</h3>

        <p className="mb-2 text-gray-600">We've sent a code to anton@gmail.com</p>

        {/* OTP Code Inputs */}
        <div className="flex justify-between mx-auto gap-2 mb-6">
          {[...Array(4)].map((_, idx) => (
            <input
              key={idx}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          ))}
        </div>

        <p className="text-sm text-gray-500 text-center">
          Didn’t get a code?{' '}
          <button
            type="button"
            className="text-primary font-medium hover:underline"
          >
            Click to resend
          </button>
        </p>
      </div>
    </div>
  );
};

export default OTPVerification;
