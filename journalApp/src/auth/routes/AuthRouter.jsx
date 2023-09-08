import { Routes, Route, Navigate } from "react-router-dom";
import { Register, Login } from "../pages";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>

      <Route path="register" element={<Register />}></Route>

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
