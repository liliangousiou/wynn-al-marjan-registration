import { OTPSendCode, OTPVerification, PersonalInfoForm } from 'pages';
import type { FooterLinkGroup, NavigationItem, RegistrationStep } from 'types';

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
    // Contact group - no links
    items: [
      { label: 'Wynn and Encore Las Vegas' },
      { label: '3131 Las Vegas Blvd. Las Vegas, NV 89109' },
      { label: '+1 (702) 770-7000' },
    ],
  },
];
