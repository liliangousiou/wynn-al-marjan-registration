import { OTPSendCode, OTPVerification, PersonalInfoForm } from '../pages';

export const registrationSteps = [
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

export const TOTAL_STEPS = registrationSteps.length;
