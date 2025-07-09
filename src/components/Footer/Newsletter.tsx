import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="max-w-[1120px] mx-auto w-full py-[20px] px-[70px]">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        {/* Title */}
        <h2 className="inline-block border-b-2 border-gray-300 pb-1 pr-6 mb-6 font-semibold text-xl">
          Get News & Updates
        </h2>

        {/* Description */}
        <p className="max-w-[440px] pr-[0] lg:pr-[71px] text-gray-600 mb-6 lg:mb-0">
          Get latest developments and exciting news on how we are shaping the future!
        </p>

        {/* Email Input + Button */}
        <div className="flex items-center gap-[81px]">
          <label className="text-sm font-medium text-gray-700">Your email address</label>
          <button className="uppercase border border-green-600 text-green-600 bg-white px-4 py-2 text-sm hover:bg-green-50 transition">
            Join the newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
