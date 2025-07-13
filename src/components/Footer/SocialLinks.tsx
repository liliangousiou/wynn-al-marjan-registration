import React from 'react';
import { useTranslation } from 'react-i18next';

import { SOCIAL_LINKS } from 'constants/index';
import type { SocialLink } from 'types';

const SocialLinks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="social-container">
      <p className="social-title">{t('footer.connect')}</p>
      <div className="social-links">
        {SOCIAL_LINKS.map(({ label, icon, href }: SocialLink) => (
          <a key={label} href={href} aria-label={label} target="_blank" className="social-link">
            <img src={icon} alt={label} className="h-full w-auto" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
