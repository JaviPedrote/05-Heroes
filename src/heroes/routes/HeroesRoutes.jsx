import { Navbar } from "../../ui/components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";

import { MarvelPages } from "../pages/MarvelPages";
import { DcPage } from "../pages/DcPage";
import { SearchPage } from "../pages/SearchPage";
import { HeroPage } from "../pages/HeroPage";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPages />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:id" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
