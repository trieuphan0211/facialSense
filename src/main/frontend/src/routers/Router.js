import { useRoutes } from "react-router-dom";
import { MainLayout } from "../layouts";
import { BiometricOffice, Facialsensevisitormanagement, Homepage, Retailworkforce, FacialsenseBioAttendannce, MobileRemote, StudentAttendance, ConstructionSite, Heathycare, Service, Factory, Agriculture, Organizations, Travel, Banking } from "../pages";


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
                 { path: "/biometric-school-attendance-monitoring-system",  element: <StudentAttendance />},
                 { path: "/construction-site-time-attendance-monitoring-system",  element: <ConstructionSite />},
                 { path: "/hospital-time-attendance-monitoring-system",  element: <Heathycare />},
                 { path: "/service-and-hospitality-time-attendance-monitoring-system",  element: <Service />},
                 { path: "/factory-and-warehouse-employee-time-attendance-monitoring-system",  element: <Factory />},
                 { path: "/agriculture-sector-time-attendance-monitoring-system",  element: <Agriculture />},
                 { path: "/meet-a-person-in-organization",  element: <Organizations />},
                 { path: "/travel-and-excursion",  element: <Travel />},
                 { path: "/banking-or-financial-institutes",  element: <Banking />},
               
      ],
    },
  ]);
  return routing;
};

export default Routers;
