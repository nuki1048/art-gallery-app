// eslint-disable-next-line import/no-extraneous-dependencies
import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';

import Spinner from '../spinner/Spinner';

// import LocationPage from '../pages/LocationPage';
// import MainPage from '../pages/MainPage';
const MainPage = lazy(() => import('../pages/MainPage'));
const LocationPage = lazy(() => import('../pages/LocationPage'));
function App() {
  const location = useLocation();
  return (
    <Suspense fallback={<Spinner />}>
      <div className="app">
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route index element={<MainPage />} />
            <Route path="location" element={<LocationPage />} />
          </Routes>
          <Outlet />
        </AnimatePresence>
      </div>
    </Suspense>
  );
}

export default App;
