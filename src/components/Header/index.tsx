import React from 'react';

import arrow from 'assets/arrow.svg';
import logo from 'assets/logo.svg';

import { LANGUAGES, NAV_ITEMS } from '../../constants';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-[24px] px-[60px] border-b border-gray-200 bg-white">
      {/* Logo */}
      <div className="w-[161px]">
        <img src={logo} alt="Logo" className="h-auto w-full" />
      </div>

      {/* Navigation Menu */}
      <nav className="flex gap-[41px] uppercase text-sm font-medium text-gray-700">
        {NAV_ITEMS.map(item => (
          <a
            key={item.key}
            href={`/${item.key}`}
            className="hover:text-black transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Language Selector */}
      <div className="relative">
        <select
          className="bg-transparent text-sm uppercase appearance-none pr-6 pl-2 py-1 text-gray-700 focus:outline-none"
          defaultValue="EN"
        >
          {LANGUAGES.map(lang => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        {/* Down arrow */}
        <img src={arrow} alt="Language" className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2" />
      </div>
    </header>
  );
};

export default Header;
