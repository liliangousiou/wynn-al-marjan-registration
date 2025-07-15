import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useRegistrationContext } from 'context/RegistrationContext';
import { registrationSteps } from 'constants/index';
import type { RegistrationStep } from 'types';

interface Props {
  children: React.ReactNode;
}

const StepGuardRoute: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const { completedStep } = useRegistrationContext(); // track max completed step

  const currentIndex = registrationSteps.findIndex(
    (s: RegistrationStep) => s.path === location.pathname
  );

  // If user tries to access a step beyond what’s allowed → redirect to step 1
  if (currentIndex > completedStep) {
    return <Navigate to={registrationSteps[0].path} replace />;
  }

  return <>{children}</>;
};

export default StepGuardRoute;
