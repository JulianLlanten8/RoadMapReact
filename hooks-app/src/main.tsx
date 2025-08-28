import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Toaster } from "sonner";
//import { HooksApp } from "./HooksApp";
//import { TrafficLight } from "./useState/TrafficLight";
//import { TrafficLightWithEffect } from "./useEffect/TrafficLightWithEffect";
//import { TrafficLightWithEffectHook } from "./useEffect/TrafficLightWithEffectHook";
//import { PokemonPage } from "./examples/PokemonPage";
//import { TasksApp } from "./useReducer/TaskApp";
//import { ScrambleWords } from "./useReducer/ScrambleWords";
//import { MemoHook } from "./memos/MemoHook";
//import { MemoCounter } from "./memos/MemoCounter";
//import { InstagromApp } from "./useOptimistic/IntagromApp";
//import { ClientInformation } from "./useSuspense/ClientInformation";
//import { getUserAction } from "./useSuspense/api/get-user-action";
import { ProfesionalApp } from "./useContext/ProfesionalApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithEffectHook /> */}
    {/* <PokemonPage /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook></MemoHook> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1 className="text-2xl">Cargando ...</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense> */}
    <ProfesionalApp />
  </StrictMode>
);
