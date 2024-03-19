import { Outlet } from "react-router-dom";
import { BackToTop, Footer } from "../components/common";
import { Header } from "../components/common";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import logoWhite from "../assets/img/logo_white.png";


export const MainLayout = () => {
  const location = useLocation();
  const [bg, setBg] = useState("bg-home bg-right-top bg-no-repeat");
  const [logoImg, setLogoImg] = useState(logo);
  // set Logo & Background & title
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setBg("bg-home bg-right-top bg-no-repeat");
        setLogoImg(logo);
        document.title = "CheckID FacialSense Service | Mobile-ID";
        break;
      case "/facialsense-visitor-management":
        setBg("bg-home bg-right-top bg-no-repeat");
        setLogoImg(logo);
        document.title =
          "CheckID FacialSense Service | FacialSense Visitor Management";
        break;
      case "/facialsense-bio-attendance":
        setBg("bg-home bg-right-top bg-no-repeat  ");
        setLogoImg(logo);
        document.title =
          "CheckID FacialSense Service | FacialSense Bio Attendance";
        break;
      case "/office-employee-time-attendance-monitoring-system":
        setBg("bg-industries w bg-center-top bg-no-repeat max-w-full");
        setLogoImg(logoWhite);
        document.title =
          "CheckID FacialSense Service | FacialSense Visitor Management";
        break;

  

        case "/retail-workforce-time-attendance-monitoring-system":
          setBg("bg-industries w bg-center-top bg-no-repeat max-w-full");
          setLogoImg(logoWhite);
          document.title =
            "CheckID FacialSense Service | FacialSense Visitor Management";
          break;
          case "/mobile-workforce-time-attendance-monitoring-system":
            setBg("bg-industries w bg-center-top bg-no-repeat max-w-full");
            setLogoImg(logoWhite);
            document.title =
              "CheckID FacialSense Service | FacialSense Visitor Management";
            break;
            case "/biometric-school-attendance-monitoring-system":
            setBg("bg-industries w bg-center-top bg-no-repeat max-w-full");
            setLogoImg(logoWhite);
            document.title =
              "CheckID FacialSense Service | FacialSense Visitor Management";
            break;
            case "/construction-site-time-attendance-monitoring-system":
            setBg("bg-industries w bg-center-top bg-no-repeat max-w-full");
            setLogoImg(logoWhite);
            document.title =
              "CheckID FacialSense Service | FacialSense Visitor Management";
            break;
            case "/hospital-time-attendance-monitoring-system":
              setBg("bg-industries w bg-center-top bg-no-repeat max-w-full");
              setLogoImg(logoWhite);
              document.title =
                "CheckID FacialSense Service | FacialSense Visitor Management";
              break;
            case "/service-and-hospitality-time-attendance-monitoring-system":
              setBg("bg-industries w bg-center-top bg-no-repeat max-w-full");
              setLogoImg(logoWhite);
              document.title =
                "CheckID FacialSense Service | FacialSense Visitor Management";
              break;
            case "/factory-and-warehouse-employee-time-attendance-monitoring-system":
                setBg("bg-industries w bg-center-top bg-no-repeat max-w-full");
                setLogoImg(logoWhite);
                document.title =
                  "CheckID FacialSense Service | FacialSense Visitor Management";
                break;
            case "/agriculture-sector-time-attendance-monitoring-system":
                setBg("bg-industries w bg-center-top bg-no-repeat max-w-full");
                setLogoImg(logoWhite);
                document.title =
                    "CheckID FacialSense Service | FacialSense Visitor Management";
                break;    
            case "/meet-a-person-in-organization":
                  setBg("bg-organization w bg-center-top bg-no-repeat max-w-full");
                  setLogoImg(logoWhite);
                  document.title =
                      "CheckID FacialSense Service | FacialSense Visitor Management";
                  break;    
            case "/travel-and-excursion":
                  setBg("bg-organization w bg-center-top bg-no-repeat max-w-full");
                  setLogoImg(logoWhite);
                  document.title =
                      "CheckID FacialSense Service | FacialSense Visitor Management";
                  break;    
            case "/banking-or-financial-institutes":
                  setBg("bg-organization w bg-center-top bg-no-repeat max-w-full");
                  setLogoImg(logoWhite);
                  document.title =
                      "CheckID FacialSense Service | FacialSense Visitor Management";
                  break;  
            case "/hotels-and-restaurants":
                    setBg("bg-organization w bg-center-top bg-no-repeat max-w-full");
                    setLogoImg(logoWhite);
                    document.title =
                        "CheckID FacialSense Service | FacialSense Visitor Management";
                    break;    
            case "/consultation-services":
                      setBg("bg-organization w bg-center-top bg-no-repeat max-w-full");
                      setLogoImg(logoWhite);
                      document.title =
                          "CheckID FacialSense Service | FacialSense Visitor Management";
                      break;    
            case "/buildings-and-apartments":
                      setBg("bg-organization w bg-center-top bg-no-repeat max-w-full");
                      setLogoImg(logoWhite);
                      document.title =
                          "CheckID FacialSense Service | FacialSense Visitor Management";
                      break;    
            case "/customer-support":
                        setBg("bg-organization w bg-center-top bg-no-repeat max-w-full");
                        setLogoImg(logoWhite);
                        document.title =
                            "CheckID FacialSense Service | FacialSense Visitor Management";
                        break;   
            case "/entertainment":
                          setBg("bg-organization w bg-center-top bg-no-repeat max-w-full");
                          setLogoImg(logoWhite);
                          document.title =
                              "CheckID FacialSense Service | FacialSense Visitor Management";
                          break;    
            case "/schools-and-campuses":
                            setBg("bg-organization w bg-center-top bg-no-repeat max-w-full");
                            setLogoImg(logoWhite);
                            document.title =
                                "CheckID FacialSense Service | FacialSense Visitor Management";
                            break;    
           case "/pricing":
                              setBg("bg-industries w bg-center-top bg-no-repeat max-w-full");
                              setLogoImg(logoWhite);
                              document.title =
                                  "CheckID FacialSense Service | FacialSense Visitor Management";
                              break;    
          default:
            setBg("bg-home bg-right-top bg-no-repeat");
            setLogoImg(logo);
            document.title = "CheckID FacialSense Service | Mobile-ID";
            break;
        }
  }, [location]);

  return (
    <main className={`${bg}  lg:!bg-left-top bg-[100% 100%] minxl:bg-contain`}>
      <Header logo={logoImg} />
      <Outlet />
      <Footer />
      <BackToTop />
    </main>
  );
};
