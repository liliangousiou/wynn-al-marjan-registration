import { useTranslation } from 'react-i18next';

import type { NavigationItem } from 'types';

import { NAVIGATION_KEYS } from '../constants';

export const useLocalizedNavItems = (): NavigationItem[] => {
  const { t } = useTranslation();

  return NAVIGATION_KEYS.map(
    (key): NavigationItem => ({
      key,
      label: t(`nav.${key}`),
    })
  );
};
