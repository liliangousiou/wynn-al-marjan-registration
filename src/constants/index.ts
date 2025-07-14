import { OTPSendCode, OTPVerification, Registration } from 'pages';
import type { ContactLink, DisplayLang, LanguageCode, RegistrationStep, SocialLink } from 'types';
import { Android, Apple, Facebook, Instagram, Twitter } from 'assets/social';

/* language set up for english, arabic and greek */
export const LANG_STORAGE_KEY = 'language';
export const LANGUAGES: DisplayLang[] = ['EN', 'AR', 'GR'];

export const DISPLAY_LANG_MAP = {
  en: 'EN',
  ar: 'AR',
  el: 'GR', // display as GR but still use `el` internally
};
export const LANGUAGE_MAP: Record<LanguageCode, DisplayLang> = {
  en: 'EN',
  ar: 'AR',
  el: 'GR',
};

export const DISPLAY_TO_CODE_MAP: Record<DisplayLang, LanguageCode> = {
  EN: 'en',
  AR: 'ar',
  GR: 'el',
};

/* header navigation */
export const NAVIGATION_KEYS = [
  'rooms-and-suites',
  'wynn-rewards',
  'offers',
  'dining',
  'entertainment',
  'meetings-and-events',
] as const;

/* registration steps */
export const registrationSteps: RegistrationStep[] = [
  {
    step: 1,
    path: '/register/form',
    component: Registration,
  },
  {
    step: 2,
    path: '/register/OTP',
    component: OTPSendCode,
  },
  {
    step: 3,
    path: '/register/verify',
    component: OTPVerification,
  },
];

export const TOTAL_STEPS: number = registrationSteps.length;

/* footer mocked data */
export const FOOTER_LINK_GROUPS: string[][] = [
  ['shop', 'gift-cards', 'stories', 'slots-app', 'mobile-app', 'responsible-gaming'],
  ['about', 'careers', 'investors', 'privacy', 'terms', 'hotel-info'],
  ['wynn-palace', 'encore-boston', 'wynn-macau'],
];

export const CONTACT_INFO: ContactLink[] = [
  {
    key: 'name',
    href: 'https://maps.app.goo.gl/fq9H3LR9TULGYzF7A',
  },
  {
    key: 'address',
    href: 'https://maps.app.goo.gl/fq9H3LR9TULGYzF7A',
  },
  {
    key: 'phone',
    href: 'tel:+97172096699',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/people/Wynn-Al-Marjan-Island/61571529939111/',
  },
  {
    label: 'Android',
    icon: Android,
    href: 'https://play.google.com/store/apps/details?id=com.wynn.mobileapp&amp;hl=en_US&amp;gl=US',
  },
  { label: 'Apple', icon: Apple, href: 'https://apps.apple.com/us/app/wynn-resorts/id1474419728' },
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/WynnAlMarjanIsland' },
  { label: 'X (Twitter)', icon: Twitter, href: 'https://twitter.com/search?q=%23wynnalmarjan' },
];
