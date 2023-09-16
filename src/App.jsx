import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./pages/home";
import { Theme } from "./styles/theme";
import { MainLayout } from "./components/layout/main";
import { HeroLayout } from "./components/layout/hero";

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={<HomePage />}
            />
          </Route> */}
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
