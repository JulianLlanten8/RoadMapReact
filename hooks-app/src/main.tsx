import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import { HooksApp } from "./HooksApp";
//import { TrafficLight } from "./useState/TrafficLight";
//import { TrafficLightWithEffect } from "./useEffect/TrafficLightWithEffect";
//import { TrafficLightWithEffectHook } from "./useEffect/TrafficLightWithEffectHook";
import { PokemonPage } from "./examples/PokemonPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithEffectHook /> */}
    <PokemonPage />
  </StrictMode>
);
