import { OTPSendCode, OTPVerification, PersonalInfoForm } from 'pages';
import type { RegistrationStep } from 'types';

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

export const NAV_ITEMS: string[] = [
  'Rooms & Suites',
  'Wynn Rewards',
  'Offers',
  'Dining',
  'Entertainment',
  'Meetings & Events',
];

export const LANGUAGES: string[] = ['EN', 'AR'];
