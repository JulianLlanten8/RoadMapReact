import { Route, Routes } from "react-router-dom";
import { JournalRoutes } from "../journal/routes/journalRoutes";
import { Auth } from "./routes/auth";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* login y registro */}
      <Route path="auth/*" element={<Auth />} />
      {/* journailApp */}
      <Route path="/*" element={<JournalRoutes />} />
      <Route />
    </Routes>
  );
};
