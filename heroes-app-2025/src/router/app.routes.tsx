import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/pages/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layout/AdminLayout";
import { lazy } from "react";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/heroes/:idSlug",
        element: <HeroPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
