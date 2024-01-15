import { Outlet } from "react-router-dom";
import { BackToTop, Footer } from "../components/common";
import { Header } from "../components/common";

export const MainLayout = () => {
  return (
    <main className="bg-home bg-right-top bg-no-repeat  lg:!bg-left-top ">
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </main>
  );
};
