import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout, RegistrationLayout } from 'components';
import { NotFound } from 'pages';

import { registrationSteps } from './constants';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/register/form" replace />} />
        {registrationSteps.map(({ path, component: Component }, index) => (
          <Route
            key={index}
            path={path}
            element={
              <RegistrationLayout>
                <Component />
              </RegistrationLayout>
            }
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
