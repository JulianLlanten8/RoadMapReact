import { createBrowserRouter, Navigate } from "react-router";
import { learningRoutes } from "./learning.routes";
import { ProjectsPage } from "@/pages/ProjectsPage";

export const appRouter = createBrowserRouter([
  ...learningRoutes,
  {
    path: "/",
    element: <ProjectsPage />,
  },

  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
