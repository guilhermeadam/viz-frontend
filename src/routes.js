import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Notification from './pages/notification';
import Analyzer from './pages/analyzer';
import Dashboard from './pages/dashboard';
import Analytics from './pages/analytics';
import Documentation from './pages/documentation';

import Validation from './pages/validation';
import Liberation from './pages/liberation';

import Management from './pages/management';

export default function Router() {
  return (
    <Routes>
      <Route path='*' element={<strong>Em desenvolvimento.</strong>} />

      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Notification />} />
      <Route path='/analyzer' element={<Analyzer />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/analytics' element={<Analytics />} />
      <Route path='/documentation' element={<Documentation />} />

      <Route path='/validation' element={<Validation />} />
      <Route path='/liberation' element={<Liberation />} />

      <Route path='/management' element={<Management />} />
    </Routes>
  );
}