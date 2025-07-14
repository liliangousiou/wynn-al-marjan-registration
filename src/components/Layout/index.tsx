import React from 'react';

import { Footer, Header } from 'components';
import { useScrollToTopOnRouteChange } from 'hooks/useScrollToTopOnRouteChange';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useScrollToTopOnRouteChange(true); // false for instant scroll

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
