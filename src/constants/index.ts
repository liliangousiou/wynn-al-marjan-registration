import { OTPSendCode, OTPVerification, PersonalInfoForm } from 'pages';
import type { FooterLinkGroup, NavigationItem, RegistrationStep, SocialLink } from 'types';
import { Android, Apple, Facebook, Instagram, Twitter } from 'assets/social';

export const registrationSteps: RegistrationStep[] = [
  {
    step: 1,
    path: '/register/form',
    component: PersonalInfoForm,
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

export const NAV_ITEMS: NavigationItem[] = [
  { key: 'rooms-and-suites', label: 'Rooms & Suites' },
  { key: 'wynn-rewards', label: 'Wynn Rewards' },
  { key: 'offers', label: 'Offers' },
  { key: 'dining', label: 'Dining' },
  { key: 'entertainment', label: 'Entertainment' },
  { key: 'meetings-and-events', label: 'Meetings & Events' },
];

export const LANGUAGES: string[] = ['EN', 'AR'];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    key: 'explore',
    items: [
      { label: 'Shop Home Collection', href: '/shop' },
      { label: 'Gift Cards', href: '/gift-cards' },
      { label: 'Wynn Stories', href: '/stories' },
      { label: 'Wynn Slots App', href: '/slots-app' },
      { label: 'Mobile App', href: '/mobile-app' },
      { label: 'Responsible Gaming', href: '/responsible-gaming' },
    ],
  },
  {
    key: 'company',
    items: [
      { label: 'About us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Investor Relations', href: '/investors' },
      { label: 'Privacy Notice', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Hotel Information & Directory', href: '/hotel-info' },
    ],
  },
  {
    key: 'destinations',
    items: [
      { label: 'Wynn Palace Cotai', href: '/destinations/wynn-palace' },
      { label: 'Encore Boston Harbor', href: '/destinations/encore-boston' },
      { label: 'Wynn Macau', href: '/destinations/wynn-macau' },
    ],
  },
  {
    key: 'contact',
    items: [
      {
        label: 'Wynn Al Marjan Island',
        href: 'https://maps.app.goo.gl/fq9H3LR9TULGYzF7A',
        target: '_blank',
      },
      {
        label: 'Al Marjan Island, Ras Al Khaimah',
        href: 'https://maps.app.goo.gl/fq9H3LR9TULGYzF7A',
        target: '_blank',
      },
      {
        label: '+971 7 209 6699',
        href: 'tel:+97172096699',
      },
    ],
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
