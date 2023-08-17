import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<strong>Em desenvolvimento!</strong>} />
      <Route path='/notification' element={<strong>Notificações</strong>} />
    </Routes>
  );
}
