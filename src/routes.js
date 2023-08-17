import { Routes, Route } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<strong>Root path</strong>} />
      <Route path='/home' element={<strong>Home</strong>} />
    </Routes>
  );
}
