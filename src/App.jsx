import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home';
import { Theme } from './styles/theme';
import { MainLayout } from './components/layout/main';
import { HeroLayout } from './components/layout/hero';
import GamePage from './pages/games';
import LoginPage from './pages/auth/login';
import SignUpPage from './pages/auth/sign-up';
import { AuthLayout } from './components/layout/auth';
import { PATHS } from './utils/constants/paths';
import Lessons from './pages/lessons';
import SavedLessons from './pages/lessons/saved-lessons';
import OnlineLessons from './pages/lessons/online-lessons';

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/games" element={<MainLayout />}>
            <Route index element={<GamePage />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/signup" element={<SignUpPage />} />
          </Route>
          <Route path="/" element={<HeroLayout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path={PATHS.home.lessons.root} element={<Lessons />}>
            <Route index element={<Navigate to={`${PATHS.home.lessons.onlineLesson}`} />} />
            <Route path={PATHS.home.lessons.savedLessons} element={<SavedLessons />} />
            <Route path={PATHS.home.lessons.onlineLesson} element={<OnlineLessons />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
