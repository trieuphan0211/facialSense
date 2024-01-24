import male from "../assets/img/home/Male.png";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import "react-slideshow-image/dist/styles.css";
import { LeafButton, PoppyButton } from "../components/button";
import { useTranslation } from "react-i18next";
import ciclegray from "../assets/img/home/ciclegray.png";
import ciclepoppy from "../assets/img/home/ciclepoppy.png";
import cicletree from "../assets/img/home/cicletree.png";
import triangle from "../assets/img/home/triangle.png";
import dot from "../assets/img/home/dot.png";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import choose from "../assets/img/products/facialsensevisitormanagement/choose-shape.png.png";
import { Check } from "../assets/svg";
import cloud from "../assets/img/products/facialsensevisitormanagement/cloudne.png";
import premises from "../assets/img/products/facialsensevisitormanagement/cloud.png";
import choose1 from "../assets/img/products/facialsensevisitormanagement/choose.png";
import secure from "../assets/img/products/facialsensevisitormanagement/icon_brain_isecureometric_3d.png";
import safe from "../assets/img/products/facialsensevisitormanagement/icon_brain_isometric_3d.png";
import online from "../assets/img/products/facialsensevisitormanagement/icon_brain_biomatric_3d.png";
import automated from "../assets/img/products/facialsensevisitormanagement/icon_brain_server_3d.png";
import realtime from "../assets/img/products/facialsensevisitormanagement/icon_brain_realtime_3d.png";
import electro from "../assets/img/products/facialsensevisitormanagement/icon_brain_electrion_3d.png";
import data from "../assets/img/products/facialsensevisitormanagement/icon_brain_data_3d.png";
import sabiofe from "../assets/img/products/facialsensevisitormanagement/icon_brain_visitor_3d.png";
import custom from "../assets/img/products/facialsensevisitormanagement/icon_brain_customer_3d.png";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { QuickStart } from "../components/common";

const benefits = [
  {
    title: "For the institution",
    content: [
      {
        title: "Cost Effective",
        content:
          "no ID cards, badges or other equipment is needed for the system users, they just use biometrics.",
      },
      {
        title: "High accuracy and security",
        content:
          "identification based on multi modal biometrics facilitates very high accuracy and is reliable for fraud prevention.",
      },
      {
        title: 'No "buddy punching"',
        content:
          "nobody can do a fake check-in or check-out on behalf of another employee / user / attendee.",
      },
      {
        title: "Useful integrations",
        content:
          "CheckID FacialSense provides flexible data exporting to a range of popular payroll systems.",
      },
      {
        title: "Increase the efficiency of attendance monitoring",
        content:
          "the use of passive recognition and identification while using surveillance cameras enables large workforces to be monitored with ease.",
      },
    ],
  },
  {
    title: "For the user",
    content: [
      {
        title: "Easy to Use",
        content: "never worry about forgetting a time card.",
      },
      {
        title: "Accurate",
        content:
          "by using face, fingerprint or iris recognition it ensures that your attendance is recorded accurately.",
      },
      {
        title: "Anytime, Anywhere",
        content:
          "record attendance from wherever you are working using your personal smartphone.",
      },
      {
        title: "Contact less attendance",
        content:
          "multi-modality scanning offers a more hygienic solution to attendance monitoring.",
      },
      {
        title: "Off-line attendance",
        content:
          "never worry about no connectivity and miss of your wages. CheckID FacialSense Bio Attendance solution records your attendance securely offline.",
      },
    ],
  },
];
const features = [
  {
    parameters: "Biometrics",
    standard: "face, fingerprint, iris",
    lite: "face",
  },
  {
    parameters: "Automatic face detection and capture",
    standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    lite: <CloseRoundedIcon sx={{ color: "#E3162A", width: "18px" }} />,
  },
  {
    parameters: "Face liveness detection",
    standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    lite: <CloseRoundedIcon sx={{ color: "#E3162A", width: "18px" }} />,
  },
  {
    parameters: "Recognize all persons from group photo",
    standard: <CloseRoundedIcon sx={{ color: "#E3162A", width: "18px" }} />,
    lite: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
  },
  {
    parameters: "Geo fence tracking /n (Location restriction)",
    standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    lite: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
  },
  {
    parameters: "GPS location logging",
    standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    lite: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
  },
  {
    parameters: "Offline attendance logging",
    standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    lite: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
  },
  {
    parameters: "Operating system support",
    standard: "Windows, Android",
    lite: "Windows, Android, iOS",
  },
  {
    parameters: "Standalone operation",
    standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    lite: <CloseRoundedIcon sx={{ color: "#E3162A", width: "18px" }} />,
  },
  {
    parameters: "Access control",
    standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    lite: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
  },
  {
    parameters: "Kiosk mode",
    standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    lite: <CloseRoundedIcon sx={{ color: "#E3162A", width: "18px" }} />,
  },
  {
    parameters: "RFID, Barcode",
    standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    lite: <CloseRoundedIcon sx={{ color: "#E3162A", width: "18px" }} />,
  },
  {
    parameters: "Personal device /n (Use of your own device)",
    standard: <CloseRoundedIcon sx={{ color: "#E3162A", width: "18px" }} />,
    lite: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
  },
  {
    parameters: "Price",
    standard: "95 EUR / installation",
    lite: "Free",
  },
];
const bioAttendance = [
  {
    header: "Cloud",
    title:
      "Biometric employee management and access control system as a cloud service.",
    img: cloud,
    content: [
      { title: "Monthly subscription" },
      { title: "Subscription price depends on employee count" },
      { title: "Free subscription supports up to 5 users" },
      { title: "Support CheckID FacialSense Standatd and Lite client apps" },
      {
        title:
          "No need to worry about server installation and no maintenance needed.",
      },
    ],
    button: <LeafButton title="Sign up" />,
  },
  {
    header: "On-premises",
    title:
      "Biometric employee management and access control system that can be hosted on your own.",
    img: premises,
    content: [
      { title: "One time purchase" },
      { title: "No limitation on employee count" },
      { title: "Need a PC to install server software" },
      { title: "Support CheckID FacialSense Standatd and Lite client apps" },
      {
        title: "Customer has the freedom to configure the server as they like",
      },
    ],
    button: <PoppyButton title="Download trial" />,
  },
];

export const FacialsenseBioAttendannce = () => {
  // const { width } = useWindowSize();
  // Translations
  const { t, i18n } = useTranslation();
  // Pie chart
  const dataPieChart = [
    { value: 25, color: "#87A7CD", label: t("homepage.solution.workhours") },
    { value: 75, color: "#1E62B0", label: t("homepage.solution.vacation") },
  ];
  //Begin: Check if the element is in the viewport
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  const [pieChart, entrys] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  //End: Check if the element is in the viewport
  return (
    <>
      <div className=" xl:h-auto h-[610px]">
        <div className="max-w-[1300px]  overflow-hidden px-2 mx-auto flex items-center justify-between xl:flex-col-reverse">
          <img
            className="absolute right-36 top-36 opacity-50 animate-bounce-slow"
            src={ciclegray}
            alt=""
          />

          <img
            className="absolute left-[5%] bottom-[20%] animate-spin-slow"
            src={triangle}
            alt=""
          />
          <img
            className="absolute left-[5%] top-[20%] animate-movesquare-slow"
            src={dot}
            alt=""
          />
          <div className="relative max-w-[616px] flex flex-col gap-5">
            <img
              className="absolute right-[20%] top-[150px]  animate-movesquare"
              src={ciclepoppy}
              alt=""
            />
            <img
              className="absolute right-[20%] top-[20px] animate-movesquare-slow"
              src={cicletree}
              alt=""
            />
            <h1 className="text-[#151686] text-[46px]  font-[800] leading-[60px] focus-visible:hidden">
              CheckID FacialSense biometric attendance system
            </h1>
            <p className="text-lg text-[#9795B5]">
              Accurate and efficient solution for registration, time management
              and attendance.
            </p>
            <div className="flex gap-6 xl:justify-center sm:flex-col">
              <LeafButton title={t("homepage.solution.get")} />
              <PoppyButton title={t("homepage.solution.request")} />
            </div>
          </div>
          <div
            className="relative w-[506px] h-[554px] p-[30px] sm:scale-[0.7]"
            ref={ref}
          >
            <div
              className={`absolute scale-0 ${
                entry?.isIntersecting ? "animate-scale-up-not-delay" : null
              } top-0 left-0 w-[250px]  p-4 bg-gradient-filter backdrop-blur-[14px] rounded flex flex-col gap-1`}
            >
              <div className="flex justify-between mb-3">
                <h6 className="text-base font-bold">
                  {t("homepage.solution.janedoe")}
                </h6>
                <p className="font-normal text-sm">
                  {t("homepage.solution.employee")}
                </p>
              </div>
              <div className="flex justify-between">
                <h6 className="text-base font-bold text-[var(--tree-poppy)]">
                  {t("homepage.solution.checkin")}
                </h6>
                <p className="text-base font-bold">07:55:41 AM</p>
              </div>
              <p className="text-xs font-semibold">
                {t("homepage.solution.day1")}
              </p>
            </div>
            <img src={male} alt="" />
            <div className="absolute bottom-0 left-0 w-[217px]   p-4 bg-gradient-filter backdrop-blur-[14px] rounded flex flex-col ">
              <div className="flex justify-between mb-3">
                <h6 className="text-base font-medium">
                  {t("homepage.solution.workhours")}
                </h6>
              </div>
              <div className="flex justify-between -my-12" ref={pieChart}>
                <BarChart
                  xAxis={[
                    {
                      scaleType: "band",
                      data: ["S", "M", "T", "W", "'T", "F", "'S"],
                    },
                  ]}
                  series={[
                    {
                      data: entrys?.isIntersecting
                        ? [0.0, 8.0, 6.3, 4.1, 7.5, 7.1, 0.0]
                        : [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
                    },
                  ]}
                  width={250}
                  height={300}
                  colors={["#151686"]}
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[250px]  p-4 bg-gradient-filter backdrop-blur-[14px] rounded flex flex-col gap-1">
              <div className="flex justify-between mb-3">
                <h6 className="text-base font-medium">
                  {" "}
                  {t("homepage.solution.totalhours")}
                </h6>
              </div>
              <div className="flex justify-between" ref={pieChart}>
                <PieChart
                  width={i18n == "en" ? 250 : 270}
                  height={70}
                  series={[
                    {
                      data: entrys?.isIntersecting ? dataPieChart : [],
                      arcLabelMinAngle: 45,
                      innerRadius: "50%",
                    },
                  ]}
                  sx={{
                    marginLeft: "-50px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-4 py-[100px] flex flex-col relative mx-auto gap-[50px] ">
        <img
          src={choose}
          className="w-[574px] h-[737px] absolute top-[-50px] left-[-50px]"
          alt=""
        />
        <div className=" flex justify-center relative self-stretch ">
          {i18n.language === "en" ? (
            <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[832px]">
              Biometric Visitor Management System
              <span
                style={{ whiteSpace: "nowrap" }}
                className="border-b-[10px]  inline-block pl-2 h-11 border-[var(--tree-poppy)]"
              >
                Benefits
              </span>
            </h1>
          ) : (
            <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[832px]">
              <span
                style={{ whiteSpace: "nowrap" }}
                className="border-b-[10px]  inline-block h-11 border-[var(--tree-poppy)]"
              >
                Benefits
              </span>
              Biometric Visitor Management System
            </h1>
          )}
        </div>
        <div className="max-w-[1300px] flex flex-col mx-auto  relative">
          <div className="mask ">&nbsp;</div>
          <video
            className="w-full h-full rounded-lg"
            poster=""
            autoPlay
            loop
            muted
            width="300"
            height="480"
            src="https://d1d661ml0e18pm.cloudfront.net/check-in.mp4"
          ></video>
          <div>
            <div className="sm:flex-col flex mt-12 items-start gap-[50px]  ">
              {benefits.map((benefit, index) => (
                <div className="flex-1" key={index}>
                  <h2 className="text-[22px] leading-[33px] text-[#3A505F] font-semibold mb-[16px] max-w-[510px]">
                    {benefit.title}
                  </h2>
                  <div className="flex sm:flex-col">
                    <ul className=" flex flex-col gap-4 sm:w-auto ">
                      {benefit.content.map((item, index1) => (
                        <li className="flex text-lg items-start" key={index1}>
                          <Check className="m-[7px] min-w-[14px]" />
                          <p className=" font-Montserrat text-regular text-[#3A505F] text-[18px]	">
                            <span className="font-semibold">{item.title}</span>
                            {" - "}
                            {item.content}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1300px] py-[50px] px-4">
        <div className="flex flex-col items-center items-center px-3">
          <h1 className="text-center text-5xl text-[#1C2045] font-extrabold mb-8">
            <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
              CheckID
            </span>
            <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
              FacialSense
            </span>

            <span style={{ whiteSpace: "wrap" }} className="block">
              BioAttendance server
            </span>
          </h1>
          <div className="max-h-[1100px] mx-auto flex gap-12">
            {bioAttendance.map((item, index) => (
              <div
                className="flex-1 flex flex-col gap-[30px] relative px-[35px] py-5 text-lg text-[#1C2045] "
                key={index}
              >
                <img
                  className="w-[300px] absolute bottom-0 right-0"
                  src={item.img}
                  alt=""
                />
                <div>
                  <h2 className="text-[38px] text-[var(--tree-leaf)] font-extrabold mb-4">
                    {item.header}
                  </h2>
                  <p>{item.title}</p>
                </div>
                <ul className="flex flex-col gap-[15px]">
                  {item.content.map((item, index) => (
                    <li className="flex text-lg items-start" key={index}>
                      <Check className="m-[7px] min-w-4" />
                      {item.title}
                    </li>
                  ))}
                </ul>
                <div className="">{item.button}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center py-[50px] px-3 bg-[#EEF3FA]">
        <h1 className="text-center text-5xl text-[#1C2045] font-extrabold mb-8">
          <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
            CheckID
          </span>
          <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
            FacialSense
          </span>
          <span> BioAttendance Client</span>
        </h1>
        <TableContainer
          sx={{ maxWidth: "1100px", padding: "20px", borderRadius: "8px" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    border: "none",
                    padding: "10px 25px",
                    fontSize: "18px",
                    fontWeight: "600",
                  },
                }}
              >
                <TableCell
                  sx={{
                    backgroundColor: "#EEF3FA",
                    textTransform: "uppercase",
                    width: "420px",
                  }}
                >
                  parameters
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    textTransform: "uppercase",
                  }}
                >
                  CheckID FacialSense Standard
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    textTransform: "uppercase",
                  }}
                >
                  CheckID FacialSense Lite
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "& th,td": {
                      border: "none",
                      padding: "10px 25px",
                      fontSize: "18px",
                      fontWeight:
                        index == features.length - 1 ? "bold" : "auto",
                    },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ backgroundColor: "#EEF3FA" }}
                  >
                    {feature.parameters.split("/n").map((item, index) => (
                      <p
                        key={index}
                        className={
                          feature.parameters.split("/n").length - 1 == index &&
                          index != 0
                            ? ""
                            : "font-medium"
                        }
                      >
                        {item}
                      </p>
                    ))}
                  </TableCell>
                  <TableCell align="center">{feature.standard}</TableCell>
                  <TableCell align="center">{feature.lite}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <QuickStart />
      <div className="px-4 py-[90px] flex flex-col items-center relative">
        <img src={choose1} className=" absolute right-0 top-[77px] "></img>
        <div className="max-w-[1300px] relative ">
          <div className=" flex items-center justify-center flex-col gap-[15px]">
            {i18n.language === "en" ? (
              <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[832px]">
                {t("products.facialsensevisitormanagement.fearures.header")}
                <span
                  style={{ whiteSpace: "nowrap" }}
                  className="border-b-[10px]  inline-block pl-2 h-11 border-[var(--tree-poppy)]"
                >
                  {t(
                    "products.facialsensevisitormanagement.fearures.featureheader"
                  )}
                </span>
              </h1>
            ) : (
              <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[832px]">
                <span
                  style={{ whiteSpace: "nowrap" }}
                  className="border-b-[10px]  inline-block h-11 border-[var(--tree-poppy)]"
                >
                  {t(
                    "products.facialsensevisitormanagement.fearures.featureheader"
                  )}
                </span>
                {t("products.facialsensevisitormanagement.fearures.header")}
              </h1>
            )}

            <p className="text-[#3A505F] text-[18px] font-normal leading-[25px] max-w-[900px] text-center">
              {t("products.facialsensevisitormanagement.fearures.description")}
            </p>
          </div>
          <div className="my-[50px] flex flex-wrap sm:flex-col justify-between items-center">
            <div className="p-[20px] w-1/3 mds:w-1/2 sm:w-full  ">
              <img className="w-[84px] h-[70px]" src={secure} alt="" />
              <div className="mt-[20px] ">
                <p className="text-[#1C2045] font-montserrat font-bold">
                  {t(
                    "products.facialsensevisitormanagement.fearures.titlesecure"
                  )}
                </p>
                <p className="mt-[20px] text-[#3A505F] font-montserrat h-[96px] mlgd:h-[134px] font-normal leading-[24px]">
                  {t("products.facialsensevisitormanagement.fearures.secure")}
                </p>
              </div>
            </div>
            <div className="p-[20px] w-1/3 mds:w-1/2 sm:w-full  ">
              <img className="w-[84px] h-[70px]" src={safe} alt="" />
              <div className="mt-[20px]">
                <p className="text-[#1C2045] font-montserrat font-bold">
                  {t(
                    "products.facialsensevisitormanagement.fearures.titlesafe"
                  )}
                </p>
                <p className="mt-[20px] text-[#3A505F] font-montserrat h-[96px] mlgd:h-[134px] font-normal leading-[24px]">
                  {t("products.facialsensevisitormanagement.fearures.safe")}
                </p>
              </div>
            </div>
            <div className="p-[20px] w-1/3 mds:w-1/2 sm:w-full  ">
              <img className="w-[84px] h-[70px]" src={online} alt="" />
              <div className="mt-[20px]">
                <p className="text-[#1C2045] font-montserrat font-bold">
                  {t(
                    "products.facialsensevisitormanagement.fearures.titleonline"
                  )}
                </p>
                <p className="mt-[20px] text-[#3A505F] font-montserrat h-[96px] mlgd:h-[134px] font-normal leading-[24px]">
                  {t("products.facialsensevisitormanagement.fearures.online")}
                </p>
              </div>
            </div>

            <div className="p-[20px] w-1/3 mds:w-1/2 sm:w-full  ">
              <img className="w-[84px] h-[70px]" src={automated} alt="" />
              <div className="mt-[20px]">
                <p className="text-[#1C2045] font-montserrat font-bold">
                  {t(
                    "products.facialsensevisitormanagement.fearures.titleautomated"
                  )}
                </p>
                <p className="mt-[20px] text-[#3A505F] font-montserrat h-[96px] mlgd:h-[134px] font-normal leading-[24px]">
                  {t(
                    "products.facialsensevisitormanagement.fearures.automated"
                  )}
                </p>
              </div>
            </div>
            <div className="p-[20px] w-1/3 mds:w-1/2 sm:w-full  ">
              <img className="w-[84px] h-[70px]" src={realtime} alt="" />
              <div className="mt-[20px]">
                <p className="text-[#1C2045] font-montserrat font-bold">
                  {t(
                    "products.facialsensevisitormanagement.fearures.titlerealtime"
                  )}
                </p>
                <p className="mt-[20px] text-[#3A505F] font-montserrat h-[96px]  mlgd:h-[134px] font-normalmlgd:h-[134px] leading-[24px]">
                  {t("products.facialsensevisitormanagement.fearures.realtime")}
                </p>
              </div>
            </div>
            <div className="p-[20px] w-1/3 mds:w-1/2 sm:w-full ">
              <img className="w-[84px] h-[70px]" src={electro} alt="" />
              <div className="mt-[20px]">
                <p className="text-[#1C2045] font-montserrat font-bold">
                  {t(
                    "products.facialsensevisitormanagement.fearures.titleelectronic"
                  )}
                </p>
                <p className="mt-[20px] text-[#3A505F] font-montserrat h-[96px] mlgd:h-[134px] font-normal leading-[24px]">
                  {t(
                    "products.facialsensevisitormanagement.fearures.electronic"
                  )}
                </p>
              </div>
            </div>

            <div className="p-[20px] w-1/3 mds:w-1/2 sm:w-full  ">
              <img className="w-[84px] h-[70px]" src={data} alt="" />
              <div className="mt-[20px]">
                <p className="text-[#1C2045] font-montserrat font-bold">
                  {t(
                    "products.facialsensevisitormanagement.fearures.titledata"
                  )}
                </p>
                <p className="mt-[20px] text-[#3A505F] font-montserrat font-normal h-[96px] mlgd:h-[134px] leading-[24px]">
                  {t("products.facialsensevisitormanagement.fearures.data")}
                </p>
              </div>
            </div>
            <div className="p-[20px] w-1/3 mds:w-1/2 sm:w-full  ">
              <img className="w-[84px] h-[70px]" src={sabiofe} alt="" />
              <div className="mt-[20px]">
                <p className="text-[#1C2045] font-montserrat font-bold">
                  {t(
                    "products.facialsensevisitormanagement.fearures.titlebiometric"
                  )}
                </p>
                <p className="mt-[20px] text-[#3A505F] font-montserrat font-normal h-[96px] mlgd:h-[134px] leading-[24px]">
                  {t(
                    "products.facialsensevisitormanagement.fearures.biometric"
                  )}
                </p>
              </div>
            </div>
            <div className="p-[20px] w-1/3 mds:w-1/2 sm:w-full  ">
              <img className="w-[84px] h-[70px]" src={custom} alt="" />
              <div className="mt-[20px]">
                <p className="text-[#1C2045] font-montserrat font-bold">
                  {t(
                    "products.facialsensevisitormanagement.fearures.titlecustomizable"
                  )}
                </p>
                <p className="mt-[20px] text-[#3A505F] font-montserrat font-normal h-[96px] mlgd:h-[134px] leading-[24px]">
                  {t(
                    "products.facialsensevisitormanagement.fearures.customizable"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
