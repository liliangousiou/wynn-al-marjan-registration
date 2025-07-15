import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from 'context/AuthContext';
import { RegistrationProvider } from 'context/RegistrationContext';
import { AppRoutes } from 'routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RegistrationProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </RegistrationProvider>
    </AuthProvider>
  );
};

export default App;
