import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import { LANG_STORAGE_KEY } from '../constants';
import ar from './ar.json';
import el from './el.json';
import en from './en.json';

const storedLang = localStorage.getItem(LANG_STORAGE_KEY) || 'en';

i18n.use(initReactI18next).init({
  lng: storedLang,
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    el: { translation: el },
    ar: { translation: ar },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
