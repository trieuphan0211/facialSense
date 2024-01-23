import { useRoutes, useLocation } from "react-router-dom";
import { MainLayout } from "../layouts";
import {
  FacialsenseBioAttendannce,
  Facialsensevisitormanagement,
  Homepage,
} from "../pages";
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
      case "/facialsense-visitor-management":
        document.title =
          "CheckID FacialSense Service | FacialSense Visitor Management";
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
      children: [
        { path: "/", element: <Homepage /> },
        {
          path: "/facialsense-visitor-management",
          element: <Facialsensevisitormanagement />,
        },
        {
          path: "/facialsense-bio-attendance",
          element: <FacialsenseBioAttendannce />,
        },
      ],
    },
  ]);
  return routing;
};

export default Routers;
