import { useRoutes } from "react-router-dom";
import { MainLayout } from "../layouts";
import {
  BiometricOffice,
  FacialsenseBioAttendannce,
  Facialsensevisitormanagement,
  Homepage,
} from "../pages";

const context = "";
const Routers = () => {
  const routing = useRoutes([
    {
      path: context,

      element: <MainLayout />,
      children: [
        { path: "/", element: <Homepage /> },

        {
          path: "/facialsense-bio-attendance",
          element: <FacialsenseBioAttendannce />,
        },
        {
          path: "/facialsense-visitor-management",
          element: <Facialsensevisitormanagement />,
        },
        {
          path: "/office-employee-time-attendance-monitoring-system",
          element: <BiometricOffice />,
        },
      ],
    },
  ]);
  return routing;
};

export default Routers;
