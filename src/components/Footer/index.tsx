import React from 'react';

import { Android, Apple, Facebook, Instagram, Twitter } from 'assets/social';

import { FOOTER_LINK_GROUPS } from '../../constants';
import Newsletter from './Newsletter';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white gap-[10px]">
      {/* Newsletter Section */}
      <Newsletter />

      {/* Main Footer */}
      <div className="bg-[#5a3e36] w-full py-[40px] px-[160px]">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[10px] text-white">
          {FOOTER_LINK_GROUPS.map((group, idx) => (
            <div key={idx}>
              <ul className="space-y-1 text-sm">
                {group.items.map((item, i) => (
                  <li key={i}>
                    {item.href ? (
                      <a href={item.href} className="hover:underline">
                        {item.label}
                      </a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
              {/* Social section only under the contact group (last one) */}
              {idx === FOOTER_LINK_GROUPS.length - 1 && (
                <div className="mt-6">
                  <p className="mb-3 font-semibold">Connect with us.</p>
                  <div className="flex gap-4 items-center">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="rounded-[30px] px-2 py-[5px] bg-white h-[27px] min-w-[27px]"
                    >
                      <img src={Facebook} alt="Facebook" className="h-full w-auto" />
                    </a>
                    <a
                      href="#"
                      aria-label="Android"
                      className="rounded-[30px] px-2 py-[5px] bg-white h-[27px] min-w-[27px]"
                    >
                      <img src={Android} alt="Android" className="h-full w-auto" />
                    </a>
                    <a
                      href="#"
                      aria-label="Apple"
                      className="rounded-[30px] px-2 py-[5px] bg-white h-[27px] min-w-[27px]"
                    >
                      <img src={Apple} alt="Apple" className="h-full w-auto" />
                    </a>
                    <a
                      href="#"
                      aria-label="Instagram"
                      className="rounded-[30px] px-2 py-[5px] bg-white h-[27px] min-w-[27px]"
                    >
                      <img src={Instagram} alt="Instagram" className="h-full w-auto" />
                    </a>
                    <a
                      href="#"
                      aria-label="X (Twitter)"
                      className="rounded-[30px] px-2 py-[5px] bg-white h-[27px] min-w-[27px]"
                    >
                      <img src={Twitter} alt="Twitter" className="h-full w-auto" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center text-white text-sm space-y-2">
          <p>Do Not Sell Or Share My Data</p>
          <p>&copy; {new Date().getFullYear()} Wynn Resorts Holdings, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
