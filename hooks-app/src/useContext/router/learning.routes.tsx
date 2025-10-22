import { Suspense, lazy } from "react";
import { HooksApp } from "@/HooksApp";
import { TrafficLight } from "@/useState/TrafficLight";
import { TrafficLightWithEffect } from "@/useEffect/TrafficLightWithEffect";
import { TrafficLightWithEffectHook } from "@/useEffect/TrafficLightWithEffectHook";
import { PokemonPage } from "@/examples/PokemonPage";
import { TasksApp } from "@/useReducer/TaskApp";
import { ScrambleWords } from "@/useReducer/ScrambleWords";
import { MemoHook } from "@/memos/MemoHook";
import { MemoCounter } from "@/memos/MemoCounter";
import { InstagromApp } from "@/useOptimistic/InstagromApp";
import { ClientInformation } from "@/useSuspense/ClientInformation";
import { getUserAction } from "@/useSuspense/api/get-user-action";

const ProfesionalApp = lazy(() =>
  import("../ProfesionalApp").then((module) => ({
    default: module.ProfesionalApp,
  }))
);

export const learningRoutes = [
  {
    path: "/profesional-app",
    element: (
      <Suspense
        fallback={
          <div className="bg-gradient flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-semibold">
              Cargando Profesional App...
            </h1>
          </div>
        }
      >
        <ProfesionalApp />
      </Suspense>
    ),
  },
  { path: "/hooks", element: <HooksApp /> },
  { path: "/state/traffic-light", element: <TrafficLight /> },
  { path: "/effect/traffic-light", element: <TrafficLightWithEffect /> },
  {
    path: "/effect/traffic-light-hook",
    element: <TrafficLightWithEffectHook />,
  },
  { path: "/examples/pokemon", element: <PokemonPage /> },
  { path: "/reducer/tasks", element: <TasksApp /> },
  { path: "/reducer/scramble", element: <ScrambleWords /> },
  { path: "/memos/memo-hook", element: <MemoHook /> },
  { path: "/memos/memo-counter", element: <MemoCounter /> },
  { path: "/optimistic/instagrom", element: <InstagromApp /> },
  {
    path: "/suspense/client",
    element: (
      <Suspense
        fallback={
          <div className="bg-gradient flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-semibold">Cargando ...</h1>
          </div>
        }
      >
        <ClientInformation getUser={getUserAction(1000)} />
      </Suspense>
    ),
  },
];
