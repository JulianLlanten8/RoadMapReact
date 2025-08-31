import { createBrowserRouter } from "react-router";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/pages/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layout/AdminLayout";
import { lazy } from "react";

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
        path: "/hero/1",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
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
