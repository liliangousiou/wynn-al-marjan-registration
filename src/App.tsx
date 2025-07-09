import { Navigate, Route, Routes } from 'react-router-dom';

import { registrationSteps } from 'constants/index';
import { Layout } from 'components';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/register/form" replace />} />
        {registrationSteps.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
