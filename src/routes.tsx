// routes.tsx
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={SearchPage} />
    </Routes>
  );
};

export default AppRoutes;
