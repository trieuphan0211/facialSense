import { useRoutes, useLocation } from "react-router-dom";
import { MainLayout } from "../layouts";
import { Homepage } from "../pages";
import { useEffect } from "react";

const context = "";
const Routers = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    switch (location.pathname) {
      case "/":
        document.title = "CheckID FacialSense Service | Mobile-ID";
        break;
      default:
        document.title = "CheckID FacialSense Service | Mobile-ID";
        break;
    }
  }, [location]);
  const routing = useRoutes([
    {
      path: context,

      element: <MainLayout />,
      children: [{ path: "/", element: <Homepage /> }],
    },
  ]);
  return routing;
};

export default Routers;
