import type { FC, HTMLAttributeAnchorTarget } from 'react';

import type { NAVIGATION_KEYS } from '../constants';

export type LanguageCode = 'en' | 'ar' | 'el';

export type DisplayLang = 'EN' | 'AR' | 'GR';

export type NavigationKey = (typeof NAVIGATION_KEYS)[number];

export interface NavigationItem {
  key: NavigationKey;
  label: string;
}

export interface RegistrationStep {
  step: number;
  path: string;
  component: FC;
}

export type FooterLinkGroup = {
  key?: string;
  items: {
    label: string;
    href?: string;
    target?: HTMLAttributeAnchorTarget;
  }[];
};

export type ContactLink = {
  key: string;
  href: string;
};

export type SocialLink = {
  label: string;
  icon: string;
  href: string;
};

export type NewsletterFormData = {
  email: string;
};
