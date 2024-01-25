import { useRoutes } from "react-router-dom";
import { MainLayout } from "../layouts";
import { BiometricOffice, Facialsensevisitormanagement, Homepage, Retailworkforce, FacialsenseBioAttendannce } from "../pages";


const context = "";
const Routers = () => {
  const routing = useRoutes([
    {
      path: context,

      element: <MainLayout />,
      children: [{ path: "/", element: <Homepage /> },
     
               { path: "/facialsense-bio-attendance",  element: <FacialsenseBioAttendannce />},
                  { path: "/facialsense-visitor-management",  element: <Facialsensevisitormanagement />},
                 { path: "/office-employee-time-attendance-monitoring-system",  element: <BiometricOffice />},
                 { path: "/retail-workforce-time-attendance-monitoring-system",  element: <Retailworkforce />}

               
      ],
    },
  ]);
  return routing;
};

export default Routers;
