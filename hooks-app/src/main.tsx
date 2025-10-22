import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Toaster } from "sonner";
import { ProfesionalApp } from "./useContext/ProfesionalApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    <ProfesionalApp />
  </StrictMode>
);
