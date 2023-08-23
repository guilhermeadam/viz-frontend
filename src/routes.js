import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Notification from './pages/notification';
import Analyzer from './pages/analyzer';
import Dashboard from './pages/dashboard';
import Analytics from './pages/analytics';
import Documentation from './pages/documentation';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<strong>Em desenvolvimento!</strong>} />
      <Route path='/notification' element={<Notification />} />
      <Route path='/analyzer' element={<Analyzer />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/analytics' element={<Analytics />} />
      <Route path='/documentation' element={<Documentation />} />
    </Routes>
  );
}
