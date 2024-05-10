import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { useIntersectionObserver, useWindowSize } from "@uidotdev/usehooks";
import { useTranslation } from "react-i18next";
import "react-slideshow-image/dist/styles.css";
import male from "../../assets/img/home/Male.png";
import ciclegray from "../../assets/img/home/ciclegray.png";
import ciclepoppy from "../../assets/img/home/ciclepoppy.png";
import cicletree from "../../assets/img/home/cicletree.png";
import dot from "../../assets/img/home/dot.png";
import triangle from "../../assets/img/home/triangle.png";
import agriculture from "../../assets/img/products/bioAttendance/agriculture.png";
import companies from "../../assets/img/products/bioAttendance/companies.png";
import contactless from "../../assets/img/products/bioAttendance/contactless.png";
import education from "../../assets/img/products/bioAttendance/education.png";
import factories from "../../assets/img/products/bioAttendance/factories.png";
import healthcare from "../../assets/img/products/bioAttendance/healthcare.png";
import brainIsometric from "../../assets/img/products/bioAttendance/icon_brain_isometric.png";
import liveness from "../../assets/img/products/bioAttendance/liveness.png";
import locationIcon from "../../assets/img/products/bioAttendance/location.png";
import locationTracking from "../../assets/img/products/bioAttendance/location_tracking.png";
import multipleBiometrics from "../../assets/img/products/bioAttendance/multiple_biometrics.png";
import multipleFace from "../../assets/img/products/bioAttendance/multiple_face.png";
import office from "../../assets/img/products/bioAttendance/office.png";
import otherArea from "../../assets/img/products/bioAttendance/other_area.png";
import realTimeFace from "../../assets/img/products/bioAttendance/real_time_face.png";
import reporting from "../../assets/img/products/bioAttendance/reporting.png";
import retail from "../../assets/img/products/bioAttendance/retail.png";
import workforce from "../../assets/img/products/bioAttendance/workforce.png";
import left from "../../assets/img/products/facialsensevisitormanagement/about-left.png.png";
import right from "../../assets/img/products/facialsensevisitormanagement/about-shape.png.png";
import choose from "../../assets/img/products/facialsensevisitormanagement/choose-shape.png.png";
import choose1 from "../../assets/img/products/facialsensevisitormanagement/choose.png";
import premises from "../../assets/img/products/facialsensevisitormanagement/cloud.png";
import cloud from "../../assets/img/products/facialsensevisitormanagement/cloudne.png";
import hospitality from "../../assets/img/products/facialsensevisitormanagement/div.hotel-image.png";
import { Check } from "../../assets/svg";
import { LeafButton, PoppyButton } from "../../components/button";
import { Question, QuickStart } from "../../components/common";
import { AccordionTollge } from "../../components/accordion";
import { t } from "i18next";

const benefits = [
  {
    title: "products.bioattendance.benefits.body.0.title",
    content: [
      {
        title: "products.bioattendance.benefits.body.0.content.0.title",
        content: "products.bioattendance.benefits.body.0.content.0.content",
      },
      {
        title: "products.bioattendance.benefits.body.0.content.1.title",
        content: "products.bioattendance.benefits.body.0.content.1.content",
      },
      {
        title: "products.bioattendance.benefits.body.0.content.2.title",
        content: "products.bioattendance.benefits.body.0.content.2.content",
      },
      {
        title: "products.bioattendance.benefits.body.0.content.3.title",
        content: "products.bioattendance.benefits.body.0.content.3.content",
      },
      {
        title: "products.bioattendance.benefits.body.0.content.4.title",
        content: "products.bioattendance.benefits.body.0.content.4.content",
      },
    ],
  },
  {
    title: "products.bioattendance.benefits.body.1.title",
    content: [
      {
        title: "products.bioattendance.benefits.body.1.content.0.title",
        content: "products.bioattendance.benefits.body.1.content.0.content",
      },
      {
        title: "products.bioattendance.benefits.body.1.content.1.title",
        content: "products.bioattendance.benefits.body.1.content.1.content",
      },
      {
        title: "products.bioattendance.benefits.body.1.content.2.title",
        content: "products.bioattendance.benefits.body.1.content.2.content",
      },
      {
        title: "products.bioattendance.benefits.body.1.content.3.title",
        content: "products.bioattendance.benefits.body.1.content.3.content",
      },
      {
        title: "products.bioattendance.benefits.body.1.content.4.title",
        content: "products.bioattendance.benefits.body.1.content.4.content",
      },
    ],
  },
];

const features = [
  {
    icon: brainIsometric,
    title: "products.bioattendance.features.body.0.title",
    description: "products.bioattendance.features.body.0.description",
  },
  {
    icon: contactless,
    title: "products.bioattendance.features.body.1.title",
    description: "products.bioattendance.features.body.1.description",
  },
  {
    icon: locationIcon,
    title: "products.bioattendance.features.body.2.title",
    description: "products.bioattendance.features.body.2.description",
  },
  {
    icon: multipleBiometrics,
    title: "products.bioattendance.features.body.3.title",
    description: "products.bioattendance.features.body.3.description",
  },
  {
    icon: reporting,
    title: "products.bioattendance.features.body.4.title",
    description: "products.bioattendance.features.body.4.description",
  },
  {
    icon: locationTracking,
    title: "products.bioattendance.features.body.5.title",
    description: "products.bioattendance.features.body.5.description",
  },
  {
    icon: liveness,
    title: "products.bioattendance.features.body.6.title",
    description: "products.bioattendance.features.body.6.description",
  },
  {
    icon: realTimeFace,
    title: "products.bioattendance.features.body.7.title",
    description: "products.bioattendance.features.body.7.description",
  },
  {
    icon: multipleFace,
    title: "products.bioattendance.features.body.8.title",
    description: "products.bioattendance.features.body.8.description",
  },
];
const applications = [
  {
    icon: office,
    title: "products.bioattendance.applicationIndustries.body.0.title",
  },
  {
    icon: factories,
    title: "products.bioattendance.applicationIndustries.body.1.title",
  },
  {
    icon: workforce,
    title: "products.bioattendance.applicationIndustries.body.2.title",
  },
  {
    icon: hospitality,
    title: "products.bioattendance.applicationIndustries.body.3.title",
  },
  {
    icon: agriculture,
    title: "products.bioattendance.applicationIndustries.body.4.title",
  },
  {
    icon: companies,
    title: "products.bioattendance.applicationIndustries.body.5.title",
  },
  {
    icon: education,
    title: "products.bioattendance.applicationIndustries.body.6.title",
  },
  {
    icon: healthcare,
    title: "products.bioattendance.applicationIndustries.body.7.title",
  },
  {
    icon: retail,
    title: "products.bioattendance.applicationIndustries.body.8.title",
  },
  {
    icon: otherArea,
    title: "products.bioattendance.applicationIndustries.body.9.title",
  },
];
// Accordion
const accordionData = [
  {
    header: "products.bioattendance.question.0.header",
    body: "products.bioattendance.question.0.body",
  },
  {
    header: "products.bioattendance.question.1.header",
    body: "products.bioattendance.question.1.body",
  },
  {
    header: "products.bioattendance.question.2.header",
    body: "products.bioattendance.question.2.body",
  },
  {
    header: "products.bioattendance.question.3.header",
    body: "products.bioattendance.question.3.body",
  },
  {
    header: "products.bioattendance.question.4.header",
    body: "products.bioattendance.question.4.body",
  },
  {
    header: "products.bioattendance.question.5.header",
    items: [
      {
        header: (
          <span className="font-bold">
            {t("products.bioattendance.question.5.items.0.header")}
          </span>
        ),
        body: "products.bioattendance.question.5.items.0.body",
      },
      {
        header: (
          <span className="font-bold">
            {t("products.bioattendance.question.5.items.1.header")}
          </span>
        ),
        body: "products.bioattendance.question.5.items.1.body",
      },
      {
        header: (
          <span className="font-bold">
            {t("products.bioattendance.question.5.items.2.header")}
          </span>
        ),
        body: "products.bioattendance.question.5.items.2.body",
      },
    ],
  },
  {
    header: "products.bioattendance.question.6.header",
    body: "products.bioattendance.question.6.body",
  },
];
export const FacialsenseBioAttendannce = () => {
  const { width } = useWindowSize();
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
  // Data client
  const client = [
    {
      header: "products.bioattendance.client.0.header",
      title: "products.bioattendance.client.0.title",
      img: cloud,
      content: [
        { title: "products.bioattendance.client.0.content.0.title" },
        { title: "products.bioattendance.client.0.content.1.title" },
        { title: "products.bioattendance.client.0.content.2.title" },
        { title: "products.bioattendance.client.0.content.3.title" },
        { title: "products.bioattendance.client.0.content.4.title" },
      ],
      button: (
        <LeafButton title={t("products.bioattendance.client.0.button")} />
      ),
    },
    {
      header: "products.bioattendance.client.1.header",
      title: "products.bioattendance.client.1.title",
      img: premises,
      content: [
        { title: "products.bioattendance.client.1.content.0.title" },
        { title: "products.bioattendance.client.1.content.1.title" },
        { title: "products.bioattendance.client.1.content.2.title" },
        { title: "products.bioattendance.client.1.content.3.title" },
        { title: "products.bioattendance.client.1.content.4.title" },
      ],
      button: (
        <PoppyButton title={t("products.bioattendance.client.1.button")} />
      ),
    },
  ];
  // Data server
  const server = [
    {
      parameters: t("products.bioattendance.server.body.0.parameters"),
      standard: t("products.bioattendance.server.body.0.standard"),
      lite: t("products.bioattendance.server.body.0.lite"),
    },
    {
      parameters: t("products.bioattendance.server.body.1.parameters"),
      standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
      lite: <CloseRoundedIcon sx={{ color: "#E3162A", width: "18px" }} />,
    },
    {
      parameters: t("products.bioattendance.server.body.2.parameters"),
      standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
      lite: <CloseRoundedIcon sx={{ color: "#E3162A", width: "18px" }} />,
    },
    {
      parameters: t("products.bioattendance.server.body.3.parameters"),
      standard: <CloseRoundedIcon sx={{ color: "#E3162A", width: "18px" }} />,
      lite: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    },
    {
      parameters: t("products.bioattendance.server.body.4.parameters"),
      standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
      lite: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    },
    {
      parameters: t("products.bioattendance.server.body.5.parameters"),
      standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
      lite: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    },
    {
      parameters: t("products.bioattendance.server.body.6.parameters"),
      standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
      lite: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    },
    {
      parameters: t("products.bioattendance.server.body.7.parameters"),
      standard: t("products.bioattendance.server.body.7.standard"),
      lite: t("products.bioattendance.server.body.7.standard"),
    },
    {
      parameters: t("products.bioattendance.server.body.8.parameters"),
      standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
      lite: <CloseRoundedIcon sx={{ color: "#E3162A", width: "18px" }} />,
    },
    {
      parameters: t("products.bioattendance.server.body.9.parameters"),
      standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
      lite: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    },
    {
      parameters: t("products.bioattendance.server.body.10.parameters"),
      standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
      lite: <CloseRoundedIcon sx={{ color: "#E3162A", width: "18px" }} />,
    },
    {
      parameters: t("products.bioattendance.server.body.11.parameters"),
      standard: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
      lite: <CloseRoundedIcon sx={{ color: "#E3162A", width: "18px" }} />,
    },
    {
      parameters: t("products.bioattendance.server.body.12.parameters"),
      standard: <CloseRoundedIcon sx={{ color: "#E3162A", width: "18px" }} />,
      lite: <CheckRoundedIcon sx={{ color: "#228920", width: "18px" }} />,
    },
    {
      parameters: t("products.bioattendance.server.body.13.parameters"),
      standard: t("products.bioattendance.server.body.13.standard"),
      lite: t("products.bioattendance.server.body.13.lite"),
    },
  ];
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
              {t("products.bioattendance.intro.header")}
            </h1>
            <p className="text-lg text-[#9795B5]">
              {t("products.bioattendance.intro.description")}
            </p>
            <div className="flex gap-6 xl:justify-center sm:flex-col">
              <LeafButton title={t("products.bioattendance.intro.button")} />
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
            <h1 className="text-center text-5xl text-[#1C2045] sm:text-4xl font-extrabold  max-w-[832px]">
              {t("products.bioattendance.benefits.header.bio")}
              <span
                style={{ whiteSpace: "nowrap" }}
                className="border-b-[10px]  inline-block pl-2 h-11 border-[var(--tree-poppy)]"
              >
                {t("products.bioattendance.benefits.header.benefit")}
              </span>
            </h1>
          ) : (
            <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[832px]">
              <span
                style={{ whiteSpace: "nowrap" }}
                className="border-b-[10px]  inline-block h-11 border-[var(--tree-poppy)]"
              >
                {t("products.bioattendance.benefits.header.benefit")}
              </span>
              {t("products.bioattendance.benefits.header.bio")}
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
            <div className="md:flex-col flex mt-12 items-start gap-[50px]  ">
              {benefits.map((benefit, index) => (
                <div className="flex-1" key={index}>
                  <h2 className="text-[22px] leading-[33px] text-[#3A505F] font-semibold mb-[16px] max-w-[510px]">
                    {t(benefit.title)}
                  </h2>
                  <div className="flex sm:flex-col">
                    <ul className=" flex flex-col gap-4 sm:w-auto ">
                      {benefit.content.map((item, index1) => (
                        <li className="flex text-lg items-start" key={index1}>
                          <Check className="m-[7px] min-w-[14px]" />
                          <p className=" font-Montserrat text-regular text-[#3A505F] text-[18px]	">
                            <span className="font-semibold">
                              {t(item.title)}
                            </span>
                            {" - "}
                            {t(item.content)}
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
          {i18n.language === "en" ? (
            <h1 className="text-center text-5xl text-[#1C2045] font-extrabold mb-8 sm:text-4xl">
              <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
                CheckID
              </span>
              <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
                FacialSense
              </span>

              <span style={{ whiteSpace: "wrap" }} className="block">
                {t("products.bioattendance.serverHeader")}
              </span>
            </h1>
          ) : (
            <h1 className="text-center text-5xl text-[#1C2045] font-extrabold mb-8 sm:text-4xl">
              <span style={{ whiteSpace: "wrap" }} className="block">
                {t("products.bioattendance.serverHeader")}
              </span>
              <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
                CheckID
              </span>
              <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
                FacialSense
              </span>
            </h1>
          )}

          <div className="max-w-[1100px] mx-auto flex gap-12 md:flex-col">
            {client.map((item, index) => (
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
                    {t(item.header)}
                  </h2>
                  <p>{t(item.title)}</p>
                </div>
                <ul className="flex flex-col gap-[15px]">
                  {item.content.map((item, index) => (
                    <li className="flex text-lg items-start" key={index}>
                      <Check className="m-[7px] min-w-4" />
                      {t(item.title)}
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
        {i18n.language === "en" ? (
          <h1 className="text-center text-5xl text-[#1C2045] font-extrabold mb-8 sm:text-4xl">
            <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
              CheckID
            </span>
            <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
              FacialSense
            </span>
            <span> {t("products.bioattendance.clientHeader")}</span>
          </h1>
        ) : (
          <h1 className="text-center text-5xl text-[#1C2045] font-extrabold mb-8 sm:text-4xl">
            {" "}
            <span> {t("products.bioattendance.clientHeader")}</span>
            <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
              CheckID
            </span>
            <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
              FacialSense
            </span>
          </h1>
        )}

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
                  {/* {t("products.bioattendance.server.header.parameters")} */}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    textTransform: "uppercase",
                  }}
                >
                  {t("products.bioattendance.server.header.standard")}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    textTransform: "uppercase",
                  }}
                >
                  {t("products.bioattendance.server.header.lite")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {server.map((feature, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "& th,td": {
                      border: "none",
                      padding: "10px 25px",
                      fontSize: "18px",
                      fontWeight: index == server.length - 1 ? "bold" : "auto",
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
                        {t(item)}
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
            <h1 className="text-5xl text-[#1C2045] font-extrabold inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
              {t("products.bioattendance.features.header")}
            </h1>
            <p className="text-[#3A505F] text-[18px] font-normal leading-[25px] max-w-[900px] text-center">
              {t("products.bioattendance.features.description")}
            </p>
          </div>
          <div className="my-[50px] flex flex-wrap sm:flex-col justify-between items-stretch">
            {features.map((feature, index) => (
              <div className="p-[20px] w-1/3 mds:w-1/2 sm:w-full  " key={index}>
                <img src={feature.icon} alt="" />
                <div className="mt-[20px] ">
                  <p className="text-[#1C2045] font-montserrat font-bold">
                    {t(feature.title)}
                  </p>
                  <p className="mt-[20px] text-[#3A505F] font-montserrat mlgd:h-[134px] font-normal leading-[24px]">
                    {t(feature.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-3 py-[50px] bg-[#EEF3FA] relative">
        <img src={left} className=" absolute left-0 top-0 "></img>
        <img src={right} className=" absolute right-0 bottom-0 "></img>
        <h1 className="text-[46px] leading-[60px] font-extrabold mb-4 text-[#2F3032]">
          <span className="inline-block border-b-[10px] pl-2 h-[50px] border-[var(--tree-poppy)]">
            {t(
              "products.bioattendance.applicationIndustries.header.application"
            )}
          </span>
          <span className="inline-block border-b-[10px] pl-2 h-[50px] border-[var(--tree-poppy)]">
            {t("products.bioattendance.applicationIndustries.header.and")}
          </span>
          <span className="inline-block border-b-[10px] pl-2 h-[50px] border-[var(--tree-poppy)]">
            {t(
              "products.bioattendance.applicationIndustries.header.industries"
            )}
          </span>
        </h1>
        <p className="text-lg text-[#3A505F]">
          {t("products.bioattendance.applicationIndustries.description")}
        </p>
        <div className="flex justify-center max-w-[1100px] flex-wrap gap-[80px] mt-[50px]">
          {applications.map((application, index) => (
            <div
              className="flex flex-col items-center py-5 px-[30px] h-[150px] w-[200px] rounded hover:bg-white hover:shadow-lg transition-all"
              key={index}
            >
              <img
                className="w-[60px] h-[60px]"
                src={application.icon}
                alt=""
              />
              <p className="text-base text-[#3A505F] text-center">
                {t(application.title)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#F2F5FE]">
        <div className="max-w-[1300px] mx-auto  py-[100px] px-6">
          {i18n.language === "en" ? (
            <h1 className="text-center text-[46px] leading-[1] text-[#1C2045] font-extrabold mb-4">
              {t("homepage.question.header.frequently")}
              {width > 460 ? (
                <span className="border-b-[10px] pl-2 inline-block h-11 border-[var(--tree-poppy)]">
                  {t("homepage.question.header.asked")}
                </span>
              ) : (
                t("homepage.question.header.asked")
                  .split(" ")
                  .map((item, index) => (
                    <span
                      className="border-b-[10px] pl-2 inline-block h-11 border-[var(--tree-poppy)]"
                      key={index}
                    >
                      {item}
                    </span>
                  ))
              )}
            </h1>
          ) : (
            <h1 className="text-center text-[46px] leading-[1] text-[#1C2045] font-extrabold mb-4">
              <span className="border-b-[10px]  inline-block h-11 border-[var(--tree-poppy)]">
                {t("homepage.question.header.asked")}
              </span>
              {t("homepage.question.header.frequently")}
            </h1>
          )}

          <p className="text-[#3A505F] text-center mb-[50px]">
            {t("homepage.question.description")}
          </p>
          <AccordionTollge accordionData={accordionData} type="default" />
        </div>
      </div>
      <Question />
    </>
  );
};
