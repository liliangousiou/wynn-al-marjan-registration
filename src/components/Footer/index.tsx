import React from 'react';

import { FOOTER_LINK_GROUPS } from 'constants/index';
import type { FooterLinkGroup } from 'types';
import { getCurrentYear } from 'utils';

import Newsletter from './Newsletter';
import SocialLinks from './SocialLinks';

import './index.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      {/* Newsletter Section */}
      <Newsletter />

      {/* Main Footer */}
      <div className="footer-main">
        <div className="nav-container">
          {FOOTER_LINK_GROUPS.map((group: FooterLinkGroup, idx: number) => (
            <ul className="nav-group" key={idx}>
              {group.items.map(item => (
                <li key={item.label} className="nav-item">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item?.target}
                      rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                      className="hover:underline"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
              {/* Social section under the contact group (last one) */}

              {idx === FOOTER_LINK_GROUPS.length - 1 && <SocialLinks />}
            </ul>
          ))}
        </div>

        <div className="copyright-container">
          <p className="copyright-data">Do Not Sell Or Share My Data</p>
          <p className="copyright-text">
            &copy; {getCurrentYear()} Wynn Resorts Holdings, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
