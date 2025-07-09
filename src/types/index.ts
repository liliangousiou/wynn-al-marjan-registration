import type { FC } from 'react';

export interface RegistrationStep {
  step: number;
  path: string;
  component: FC;
}

export type FooterLinkGroup = {
  title?: string;
  items: {
    label: string;
    href?: string;
  }[];
};
