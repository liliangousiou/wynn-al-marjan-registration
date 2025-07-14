import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo.svg';
import menuIcon from 'assets/menu.png';

import LanguageSwitcher from './LanguageSwitcher';
import NavigationItems from './NavigationItems';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  return (
    <div className="sticky top-0 z-10">
      <header className="wide flex-wrap w-full">
        {/* Mobile menu toggle */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <img src={menuIcon} alt="Open menu" className="w-6 h-6 object-contain" />
        </button>
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Wynn Al Marjan Island" className="logo" />
        </Link>

        {/* Laptop/desktop navigation menu */}
        <nav className={`hidden lg:flex flex-row gap-1`}>
          <NavigationItems />
        </nav>

        {/* Switch Language Dropdown */}
        <LanguageSwitcher />
      </header>

      {/* Mobile/tablet navigation menu */}
      {isMobileMenuOpen && (
        <nav className=" flex lg:hidden flex-col md:flex-row gap-1 min-w-full bg-white pb-3 md:px-12">
          <NavigationItems />
        </nav>
      )}
    </div>
  );
};

export default Header;
