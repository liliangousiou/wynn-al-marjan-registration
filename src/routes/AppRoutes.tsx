import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout, RegistrationLayout } from 'components';
import { registrationSteps } from 'constants/index';
import { ProtectedRoute, StepGuardRoute } from 'routes';
import { OTPSendCode, OTPVerification, Welcome } from 'pages';

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        {/* Redirect root → first registration step */}
        <Route path="/" element={<Navigate to={registrationSteps[0].path} />} />

        {/* Dynamic registration steps */}
        {registrationSteps.map(({ path, component: Component }, index) => (
          <Route
            key={index}
            path={path}
            element={
              <StepGuardRoute>
                <RegistrationLayout>
                  <Component />
                </RegistrationLayout>
              </StepGuardRoute>
            }
          />
        ))}

        {/* OTP pages */}
        <Route path="/send-otp" element={<OTPSendCode />} />
        <Route path="/verify-otp" element={<OTPVerification />} />

        {/* Protected Welcome page */}
        <Route
          path="/welcome"
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          }
        />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
