import { Registration } from '@components/Registration';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register/step-1" replace />} />
      <Route path="/register" element={<Navigate to="/register/step-1" replace />} />
      <Route path="/register/*" element={<Registration />} />
    </Routes>
  );
}
