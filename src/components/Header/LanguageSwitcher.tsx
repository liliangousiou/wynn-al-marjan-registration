import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { DisplayLang, LanguageCode } from 'types';
import arrow from 'assets/arrow.svg';

import { DISPLAY_TO_CODE_MAP, LANG_STORAGE_KEY, LANGUAGE_MAP, LANGUAGES } from '../../constants';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const [currentLang, setCurrentLang] = useState<DisplayLang>('EN');

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  // on mount, use stored value or i18n default
  useEffect(() => {
    const storedLang = localStorage.getItem(LANG_STORAGE_KEY) as LanguageCode | null;

    const langToUse: LanguageCode =
      storedLang && LANGUAGE_MAP[storedLang] ? storedLang : (i18n.language as LanguageCode);

    i18n.changeLanguage(langToUse);
    setCurrentLang(LANGUAGE_MAP[langToUse]);
  }, []);

  // close dropdown if click outside
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // set html lang dynamically
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  // change language handler
  const handleChange = (lang: DisplayLang) => {
    const code = DISPLAY_TO_CODE_MAP[lang];
    i18n.changeLanguage(code);
    localStorage.setItem(LANG_STORAGE_KEY, code);
    setCurrentLang(lang);
    setIsOpen(false);
  };

  return (
    <div
      ref={ref}
      className="relative flex items-center gap-2 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="text-black text-sm font-avenir font-medium uppercase">{currentLang}</span>
      <img src={arrow} alt="Language arrow" />

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-max bg-white border rounded shadow z-10">
          {LANGUAGES.map(lang => (
            <div
              key={lang}
              onClick={() => handleChange(lang)}
              className="px-3 py-2 text-black text-sm font-avenir font-semibold uppercase hover:bg-gray-100 transition"
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
