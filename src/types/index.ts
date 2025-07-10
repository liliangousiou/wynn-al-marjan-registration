import type { FC, HTMLAttributeAnchorTarget } from 'react';

export interface RegistrationStep {
  step: number;
  path: string;
  component: FC;
}

export type NavigationItem = {
  key: string;
  label: string;
};

export type FooterLinkGroup = {
  key?: string;
  items: {
    label: string;
    href?: string;
    target?: HTMLAttributeAnchorTarget;
  }[];
};

export type SocialLink = {
  label: string;
  icon: string;
  href: string;
};

export type NewsletterFormData = {
  email: string;
};
