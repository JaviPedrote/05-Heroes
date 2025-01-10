import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";
import { HeroesApp } from "./HeroesApp.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <HeroesApp />
    </StrictMode>
  </BrowserRouter>
);
