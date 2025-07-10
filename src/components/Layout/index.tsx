import React from 'react';

import { Footer, Header } from 'components';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* <main className="max-w-layout flex-grow container mx-auto my-8 py-6"> */}
      {children}
      {/* </main> */}
      <Footer />
    </div>
  );
};

export default Layout;
