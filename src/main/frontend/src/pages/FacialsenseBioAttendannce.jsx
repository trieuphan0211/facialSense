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
      <div className=" xl:h-auto ">
        <div className="max-w-[1300px] overflow-hidden px-2 mx-auto flex items-center justify-between xl:flex-col-reverse">
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
          <div className="relative mt-28 max-w-[616px] flex flex-col gap-5">
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
              {t("homepage.solution.header")}
            </h1>
            <p className="text-lg text-[#9795B5]">
              {t("homepage.solution.description")}
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
    </>
  );
};
