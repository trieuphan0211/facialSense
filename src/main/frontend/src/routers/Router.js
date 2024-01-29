import { useRoutes } from "react-router-dom";
import { MainLayout } from "../layouts";
import { BiometricOffice, Facialsensevisitormanagement, Homepage, Retailworkforce, FacialsenseBioAttendannce, MobileRemote, StudentAttendance } from "../pages";


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
                 { path: "/retail-workforce-time-attendance-monitoring-system",  element: <Retailworkforce />},
                 { path: "/mobile-workforce-time-attendance-monitoring-system",  element: <MobileRemote />},
                 { path: "/biometric-school-attendance-monitoring-system",  element: <StudentAttendance />}

               
      ],
    },
  ]);
  return routing;
};

export default Routers;
