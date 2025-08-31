import "./index.css";
import { createRoot } from "react-dom/client";
import { HeroesApp } from "./HeroesApp";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroesApp />
  </StrictMode>
);
