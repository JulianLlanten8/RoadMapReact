import { Route, Routes } from "react-router-dom";

import { AuthRouter } from "../auth/routes/AuthRouter";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Login y Registro */}
      <Route path="/auth/*" element={<AuthRouter />} />

      {/* JournalApp */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
