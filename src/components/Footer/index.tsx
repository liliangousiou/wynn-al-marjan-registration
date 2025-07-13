import React from 'react';
import { useTranslation } from 'react-i18next';

import { CONTACT_INFO, FOOTER_LINK_GROUPS } from 'constants/index';
import type { FooterLinkGroup } from 'types';
import { getCurrentYear, renderContactLinkAttrs } from 'utils';

import Newsletter from './Newsletter';
import SocialLinks from './SocialLinks';

import './index.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      {/* Newsletter Section */}
      <Newsletter />

      {/* Main Footer */}
      <div className="footer-main">
        <div className="nav-container">
          {/* Footer navigation */}
          {FOOTER_LINK_GROUPS.map((column, colIdx) => (
            <ul className="nav-group" key={colIdx}>
              {column.map(key => (
                <li key={key} className="nav-item">
                  <a href={`/${key}`} >
                    {t(`footer.links.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          ))}

          {/* Contact Links */}
          <ul className="nav-group contact">
            {CONTACT_INFO.map(item => (
              <li key={item.key} className="nav-item">
                <a href={item.href} {...renderContactLinkAttrs(item)}>
                  {t(`footer.contact.${item.key}`)}
                </a>
              </li>
            ))}

            {/* Social links */}
            <SocialLinks />
          </ul>
        </div>

        <div className="copyright-container">
          <p className="copyright-data">{t('footer.doNotSell')}</p>
          <p className="copyright-text">
            &copy; {t('footer.copyright', { year: getCurrentYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
