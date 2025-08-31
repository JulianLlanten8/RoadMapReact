import { Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <div className="bg-fuchsia-500">
      <Outlet />
    </div>
  );
};
