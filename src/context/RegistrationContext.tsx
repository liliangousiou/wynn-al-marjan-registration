import React, { createContext, useContext, useState } from 'react';

interface RegistrationContextValue {
  completedStep: number;
  setCompletedStep: (s: number) => void;
}

const RegistrationContext = createContext<RegistrationContextValue | undefined>(undefined);

export const RegistrationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedStep, setCompletedStep] = useState<number>(0);

  return (
    <RegistrationContext.Provider value={{ completedStep, setCompletedStep }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistrationContext = (): RegistrationContextValue => {
  const ctx = useContext(RegistrationContext);
  if (!ctx) throw new Error('useRegistrationContext must be used inside RegistrationProvider');
  return ctx;
};
