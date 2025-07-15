import React, { createContext, useContext, useEffect, useState } from 'react';

import type { AuthContextValue, User } from 'types/auth';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('authUser');
    return saved ? JSON.parse(saved) : null;
  });

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem('authUser', JSON.stringify(user));
    }
  }, [user]);

  return <AuthContext.Provider value={{ user, setUser, logout }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuthContext must be used inside AuthProvider');
  return ctx;
};
