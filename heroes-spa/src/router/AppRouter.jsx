import { Route, Routes } from "react-router-dom";
import { Heroes } from "../heroes/index";
import { Login } from "../auth/pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* <Route path="login" element={<Login />} /> */}

        <Route
          path="login/*"
          element={
            <PublicRoute>
              {/* <LoginPage /> */}
              <Routes>
                <Route path="/*" element={<Login />} />
              </Routes>
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
