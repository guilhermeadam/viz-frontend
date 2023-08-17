import { Routes, Route } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<h1>Root Route</h1>} />
    </Routes>
  );
}
