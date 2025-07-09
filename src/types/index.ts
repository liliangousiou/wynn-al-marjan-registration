import type { FC } from 'react';

export interface RegistrationStep {
  step: number;
  path: string;
  component: FC;
}
