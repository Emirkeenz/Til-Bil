import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/home";
import { Theme } from "./styles/theme";
import { MainLayout } from "./components/layout/main";
import { HeroLayout } from "./components/layout/hero";
import GamePage from "./pages/games";

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="/games" element={<MainLayout />}>
            <Route
              index
              element={<GamePage />}
            />
          </Route>
          <Route path="/" element={<HeroLayout />}>
            <Route
              index
              element={<HomePage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
