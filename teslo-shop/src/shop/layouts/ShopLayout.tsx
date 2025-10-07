import { Outlet } from "react-router";
import { CustomHeader } from "../components/CustomHeader";
import { CustomFooter } from "../components/CustomFooter";

export const ShopLayout = () => {
  return (
    <main className="min-h-screen bg-background">
      <CustomHeader />
      <Outlet />

      <CustomFooter />
    </main>
  );
};
