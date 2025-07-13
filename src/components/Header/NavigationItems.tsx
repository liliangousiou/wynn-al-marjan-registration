import React from 'react';

import { useLocalizedNavItems } from 'hooks';

const NavigationItems: React.FC = () => {
  const navItems = useLocalizedNavItems();

  return (
    <>
      {navItems.map(item => (
        <a key={item.key} href={`/${item.key}`} className='min-w-0 truncate'>
          {item.label}
        </a>
      ))}
    </>
  );
};

export default NavigationItems;
