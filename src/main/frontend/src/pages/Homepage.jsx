import { Header } from "../components/common";
import Button from "@mui/material/Button";
import female from "../assets/img/home/Female.png";
import male from "../assets/img/home/Male.png";
import male1 from "../assets/img/home/Male1.png";
import { Check } from "../assets/svg";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

export const Homepage = () => {
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
  const [manRef, entry1] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  //End: Check if the element is in the viewport
  const dataPieChart = [
    { value: 25, color: "#87A7CD", label: "Work hours" },
    { value: 75, color: "#1E62B0", label: "Vacation" },
  ];

  return (
    <>
      <div className="bg-home bg-right bg-no-repeat h-[737px]">
        <Header />
        <div className="w-[1100px] mx-auto flex items-center justify-between">
          <div className="max-w-[616px] flex flex-col gap-5">
            <h1 className="text-[#151686] text-[46px]  font-[800] leading-[60px] focus-visible:hidden">
              Biometric employee attendance and visitor management solutions
            </h1>
            <p className="text-lg text-[#9795B5]">
              Simple to use and easy to integrate, CheckID FacialSense
              multi-biometric solutions offer fast and secure employee and
              visitor time management.
            </p>
            <div className="flex gap-6">
              <Button
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  padding: "10px 20px",
                  backgroundColor: "var(--tree-leaf)",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                Get started for free now!
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "30px",
                  padding: "10px 20px",
                  borderColor: "var(--tree-poppy)",
                  color: "var(--tree-poppy)",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                Request demo
              </Button>
            </div>
          </div>
          <div className="relative w-[500px] h-[480px] px-[108px] pt-8">
            <div className="absolute scale-0 animate-scale-up  top-0 left-0 w-[250px]  p-4 bg-gradient-filter backdrop-blur-[14px] rounded-sm flex flex-col gap-1">
              <div className="flex justify-between mb-3">
                <h6 className="text-base font-bold">Jane Doe</h6>
                <p className="font-normal text-sm">Employee</p>
              </div>
              <div className="flex justify-between">
                <h6 className="text-base font-bold text-[var(--tree-poppy)]">
                  Check in
                </h6>
                <p className="text-base font-bold">07:55:41 AM</p>
              </div>
              <p className="text-xs font-semibold">Friday, August 12, 2022</p>
            </div>
            <img src={female} alt="female" className="" />
            <div className="absolute animate-scale-up-slow top-0 bottom-0 my-auto right-0 left-0 mx-auto w-[135px] h-40 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={135}
                height={158}
                viewBox="0 0 135 158"
                fill="none"
              >
                <g clipPath="url(#clip0_39_3451)">
                  <path
                    d="M126.518 1.93115H8.65634C5.06649 1.93115 2.15634 4.8413 2.15634 8.43115V149.093C2.15634 152.683 5.06649 155.593 8.65634 155.593H126.518C130.108 155.593 133.018 152.683 133.018 149.093V8.43115C133.018 4.8413 130.108 1.93115 126.518 1.93115Z"
                    stroke="#F7941D"
                    strokeWidth={3}
                    strokeDasharray="17 17"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_39_3451">
                    <rect width={135} height={158} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="absolute scale-0 animate-scale-up bottom-0 right-0 w-[250px]  p-4 bg-gradient-filter backdrop-blur-[14px] rounded-sm flex flex-col gap-1">
              <div className="flex justify-between mb-3">
                <h6 className="text-base font-bold">Jane Doe</h6>
                <p className="font-normal text-sm">Visitor</p>
              </div>
              <div className="flex justify-between">
                <h6 className="text-base font-bold text-[var(--tree-poppy)]">
                  Welcome
                </h6>
                <p className="text-base font-bold">07:55:41 AM</p>
              </div>
              <p className="text-xs font-semibold">Friday, August 12, 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape bg-no-repeat bg-[left_top_-115px] py-[100px] px-4">
        <h1 className="text-center text-5xl text-[#1C2045] font-extrabold mb-12">
          Our{" "}
          <span className="border-b-[10px] inline-block h-11 border-[var(--tree-poppy)]">
            products
          </span>
        </h1>
        <div className="max-w-[1280px] mx-auto mb-12 flex justify-between">
          <div className="w-[570px]">
            <h2 className="text-[38px] font-extrabold leading-[56px] text-[#1C2045] mb-5">
              Biometric Attendance Management System
            </h2>
            <p className="text-lg text-[#3A505F] mb-8 max-w-[510px]">
              CheckID FacialSense BioAttendance is a Biometric Attendance
              Management System designed to register and manage employee using
              face, fingerprint, and iris biometric identification..
            </p>
            <div>
              <p className="text-lg text-[#3A505F] font-semibold mb-8 max-w-[510px]">
                Powerful features:
              </p>
              <div className="flex">
                <ul className="w-[324px] flex flex-col gap-4">
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    Face, Fingerprint, and Iris attendance recognition
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    Geofencing and location based tracking
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    Contactless and hygienic
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    Identification with face mask
                  </li>
                </ul>
                <ul className="w-[324px] flex flex-col gap-4">
                  <li className="flex text-lg items-center">
                    <Check className="m-[10px] min-w-8" />
                    Face liveness detection
                  </li>
                  <li className="flex text-lg items-center">
                    <Check className="m-[10px] min-w-8" />
                    Real-time face detection
                  </li>
                  <li className="flex text-lg items-center">
                    <Check className="m-[10px] min-w-8" />
                    Fraudulent prevention
                  </li>
                  <li className="flex text-lg items-center">
                    <Check className="m-[10px] min-w-8" />
                    Multiple face detection
                  </li>{" "}
                  <li className="flex text-lg items-center">
                    <Check className="m-[10px] min-w-8" />
                    Advanced reporting
                  </li>
                </ul>
              </div>
            </div>
            <Button
              variant="contained"
              sx={{
                borderRadius: "30px",
                padding: "10px 20px",
                backgroundColor: "var(--tree-leaf)",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "capitalize",
                marginTop: "30px",
              }}
            >
              Learn more
            </Button>
          </div>
          <div className="relative w-[506px] h-[554px] p-[30px]" ref={ref}>
            <div
              className={`absolute scale-0 ${
                entry?.isIntersecting ? "animate-scale-up-not-delay" : null
              } top-0 left-0 w-[250px]  p-4 bg-gradient-filter backdrop-blur-[14px] rounded-sm flex flex-col gap-1`}
            >
              <div className="flex justify-between mb-3">
                <h6 className="text-base font-bold">Jane Doe</h6>
                <p className="font-normal text-sm">Employee</p>
              </div>
              <div className="flex justify-between">
                <h6 className="text-base font-bold text-[var(--tree-poppy)]">
                  Check in
                </h6>
                <p className="text-base font-bold">07:55:41 AM</p>
              </div>
              <p className="text-xs font-semibold">Friday, August 12, 2022</p>
            </div>
            <img src={male} alt="" />
            <div className="absolute bottom-0 left-0 w-[217px]   p-4 bg-gradient-filter backdrop-blur-[14px] rounded-sm flex flex-col ">
              <div className="flex justify-between mb-3">
                <h6 className="text-base font-medium">Work hours</h6>
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
            <div className="absolute bottom-0 right-0 w-[250px]  p-4 bg-gradient-filter backdrop-blur-[14px] rounded-sm flex flex-col gap-1">
              <div className="flex justify-between mb-3">
                <h6 className="text-base font-medium">Total hours</h6>
              </div>
              <div className="flex justify-between" ref={pieChart}>
                <PieChart
                  width={250}
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
        <div className="max-w-[1280px] mx-auto flex flex-row-reverse justify-between">
          <div className="w-[590px]">
            <h2 className="text-[38px] font-extrabold leading-[56px] text-[#1C2045] mb-5">
              Biometric Visitor Management System
            </h2>
            <p className="text-lg text-[#3A505F] mb-5 max-w-[510px]">
              CheckID FacialSense Biometric Visitor Management is designed to
              register, monitor, and manage visitors, their appointments,
              attendance & access control of any organization or institute by
              using face, fingerprint, and iris biometric identification.
            </p>
            <p className="text-lg text-[#3A505F] mb-8 max-w-[510px]">
              It can be used to manage any type of visitor, such as customers,
              guests, attendees, suppliers, and passengers.
            </p>
            <div>
              <p className="text-lg text-[#3A505F] font-semibold mb-8 max-w-[510px]">
                Powerful features:
              </p>
              <div className="flex">
                <ul className="w-[335px] flex flex-col gap-4">
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    Secure visitor identification
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    Real-time visitor analytics
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    Online visitor appointments
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    Visitor registration kiosk
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    Visitor access control
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    Visit logs
                  </li>
                </ul>
                <ul className="w-[300px] flex flex-col gap-4">
                  <li className="flex text-lg items-center">
                    <Check className="m-[10px] min-w-8" />
                    Visitor information kiosk
                  </li>
                  <li className="flex text-lg items-center">
                    <Check className="m-[10px] min-w-8" />
                    Real-time notifications
                  </li>
                  <li className="flex text-lg items-center">
                    <Check className="m-[10px] min-w-8" />
                    Advanced scheduling
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    Automatic appointment time and visitor queue management
                  </li>
                </ul>
              </div>
            </div>
            <Button
              variant="contained"
              sx={{
                borderRadius: "30px",
                padding: "10px 20px",
                backgroundColor: "var(--tree-leaf)",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "capitalize",
                marginTop: "30px",
              }}
            >
              Learn more
            </Button>
          </div>
          <div className="relative w-[506px] h-[554px] p-[30px]" ref={manRef}>
            <div
              className={`absolute scale-0 ${
                entry1?.isIntersecting ? "animate-scale-up-not-delay" : null
              } top-0 left-0 w-[250px]  p-4 bg-gradient-filter backdrop-blur-[14px] rounded-sm flex flex-col gap-1`}
            >
              <div className="flex justify-between mb-3">
                <h6 className="text-base font-bold">John Smith</h6>
                <p className="font-normal text-sm">Visitor</p>
              </div>
              <div className="flex justify-between">
                <h6 className="text-base font-bold text-[var(--tree-poppy)]">
                  Welcome
                </h6>
                <p className="text-base font-bold">07:55:41 AM</p>
              </div>
              <p className="text-xs font-semibold">Friday, August 12, 2022</p>
            </div>
            <img src={male1} alt="" />

            <div
              className={`absolute scale-0 ${
                entry1?.isIntersecting ? "animate-scale-up-not-delay" : null
              } bottom-0 right-0 w-[380px]  p-4 bg-gradient-filter backdrop-blur-[14px] rounded-sm flex flex-col gap-1`}
            >
              <div className="flex justify-between mb-3">
                <h6 className="text-base font-bold">CheckID FacialSense VMS</h6>
                <p className="font-normal text-sm">now</p>
              </div>
              <p className="font-normal text-sm">
                This is a reminder that you have an appointment scheduled for
                tomorrow at 10 am.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
