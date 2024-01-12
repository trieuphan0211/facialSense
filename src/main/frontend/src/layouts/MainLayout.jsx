import { Outlet } from "react-router-dom";
import { BackToTop, Footer } from "../components/common";

export const MainLayout = () => {
  return (
    <main className="">
      <Outlet />
      <Footer />
      <BackToTop />
    </main>
  );
};
