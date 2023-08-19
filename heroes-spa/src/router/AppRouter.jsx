import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { Heroes } from "../heroes/index";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Heroes />} />
      </Routes>
    </>
  );
};
