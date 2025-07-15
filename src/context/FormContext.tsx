import React, { createContext, type RefObject, useContext, useRef } from 'react';

type FormContextType = {
  submitStepRef: RefObject<(() => void) | null>;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const submitStepRef = useRef<(() => void) | null>(null);

  return <FormContext.Provider value={{ submitStepRef }}>{children}</FormContext.Provider>;
};

export const useFormContextStep = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContextStep must be used within a FormProvider');
  }
  return context;
};
