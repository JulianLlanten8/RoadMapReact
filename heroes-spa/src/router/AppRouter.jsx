import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { Heroes } from "../heroes/index";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path="login" element={<Login />} /> */}

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Heroes />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};
