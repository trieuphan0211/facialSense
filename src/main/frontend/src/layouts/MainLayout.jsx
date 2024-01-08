import { Outlet } from "react-router-dom";
import { Footer } from "../components/common";

export const MainLayout = () => {
  return (
    <main className="">
      <Outlet />
      <Footer />
    </main>
  );
};
