import i18n from 'i18next';

import type { ContactLink } from 'types';

const isExternalLink = (url: string): boolean =>
  Boolean(url && (url.startsWith('http://') || url.startsWith('https://')));

export const renderContactLinkAttrs = (link: ContactLink) => {
  const external = isExternalLink(link.href);
  const label = i18n.t(`footer.contact.${link.key}`);

  return {
    ...(external && {
      target: '_blank',
      rel: 'noopener noreferrer',
    }),
    'aria-label': label,
    title: label,
  };
};

export const getCurrentYear = () => new Date().getFullYear();
