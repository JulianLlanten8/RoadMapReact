import { Route, Routes } from "react-router-dom";
import { Heroes } from "../heroes/index";
import { Login } from "../auth/pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
        <Routes>
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <Heroes />
              </PrivateRoute>
            }
          />
        </Routes>
    </>
  );
};
