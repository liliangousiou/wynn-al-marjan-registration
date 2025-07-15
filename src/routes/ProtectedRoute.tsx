import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuthContext } from 'context/AuthContext';

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { user } = useAuthContext();
  return user ? <>{children}</> : <Navigate to="/register/form" replace />;
};

export default ProtectedRoute;
