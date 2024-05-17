import { useRef } from "react";
import useIntersectionObserver from "../../../components/useIntersectionObserver/useIntersectionObserver";
import { Question } from "../../../components/common";
import { useWindowSize } from "@uidotdev/usehooks";
import visitor1 from "../../../assets/img/industries/organization/fun.png";
import left from "../../../assets/img/products/facialsensevisitormanagement/about-left.png.png";
import right from "../../../assets/img/products/facialsensevisitormanagement/about-shape.png.png";
import { useTranslation } from "react-i18next";
import { CloudButton, LeafButton } from "../../../components/button";
import choose from "../../../assets/img/products/facialsensevisitormanagement/choose.png";
import calender from "../../../assets/img/industries/organization/calender.png";
import calender1 from "../../../assets/img/industries/organization/calender2.png";
import { UseCaseLeft, UseCaseRight } from "../../../components/visitor";
import choose1 from "../../../assets/img/products/facialsensevisitormanagement/choose-shape.png.png";
import {
  Features,
  Headerkeyfeatures,
  Whychoose,
} from "../../../components/bioatendance";
import online from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_isecureometric_3d.png";
import secure from "../../../assets/img/industries/organization/overhead.png";
import safe from "../../../assets/img/industries/organization/feeadback.png";

// import { useWindowSize } from "@uidotdev/usehooks";

export const Entertainment = () => {
  // const { width } = useWindowSize()

  // Tạo một ref để tham chiếu đến thẻ div cần cuộn đến
  const targetDivRef = useRef(null);
  const isVisible = useIntersectionObserver(targetDivRef);

  const { t, i18n } = useTranslation();
  const { width } = useWindowSize();
  return (
    <>
      <div className=" bg-cover bg-center h-[260px]">
        <div className="  max-w-[1300px] mx-auto  pt-[68px] ">
          <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
            <span className="inline-block sm:text-4xl ml-[10px] border-b-[10px] sm:h-[42px] h-[55px] border-[#2B159C] sm:ml-2">
              {t("industries.entertainment.header")}
            </span>
          </h1>
        </div>
      </div>
      <div className=" bg-white">
        <div className="max-w-[1300px] pt-[100px] pb-[50px] mx-auto relative">
          <div className="ml-[10px]">
            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1110px] leading-[60px]">
              {i18n.language === "en" ? (
                width > 429 ? (
                  <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                    <span className="">
                      {t("industries.entertainment.headerdes")}
                    </span>
                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] ">
                      {t("industries.entertainment.system")}
                    </span>
                  </h1>
                ) : (
                  <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] sm:text-4xl">
                    <span className="">
                      {t("industries.entertainment.headerdes")}
                    </span>
                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px]">
                      System
                    </span>
                    <br />
                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px]">
                      Solution
                    </span>
                  </h1>
                )
              ) : width > 640 ? (
                <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                  <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] ">
                    {t("industries.entertainment.system")}
                  </span>
                  <span className="">
                    {t("industries.entertainment.headerdes")}
                  </span>
                </h1>
              ) : width > 520 ? (
                <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                  <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] ">
                    {t("industries.entertainment.system")}
                  </span>
                  <br />
                  <span className="">
                    {t("industries.entertainment.headerdes")}
                  </span>
                </h1>
              ) : (
                <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] sm:text-4xl">
                  <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px]">
                    Giải pháp hệ
                  </span>
                  <br />
                  <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px]">
                    thống{" "}
                  </span>
                  <span className="">
                    {t("industries.entertainment.headerdes")}
                  </span>
                </h1>
              )}
            </h1>

            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
              {t("industries.entertainment.here")}
            </p>
            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
              {t("industries.entertainment.entertainment")}
            </p>
            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
              {t("industries.entertainment.with")}
            </p>
          </div>
        </div>
      </div>
      <div ref={targetDivRef} className={`animation-fadeIn bg-white`}>
        {isVisible && (
          <div className=" animate-show-nav duration-300">
            <div className="bg-white relative pb-[50px] ">
              <img
                src={choose}
                className="w-[574px] h-[737px] absolute top-[-100px]  right-0"
                alt=""
              />
              <div className="  max-w-[1300px] mx-auto py-[50px] flex flex-col items-center relative ">
                {i18n.language === "en" ? (
                  <h1 className="text-5xl text-center text-[#1C2045] font-extrabold leading-[60px] sm:text-4xl">
                    {t("industries.entertainment.control")}
                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px]">
                      {" "}
                      {t("industries.entertainment.simplicity")}{" "}
                    </span>
                  </h1>
                ) : width > 537 ? (
                  <h1 className="text-5xl text-center text-[#1C2045] font-extrabold leading-[60px] sm:text-4xl">
                    {t("industries.entertainment.control")}
                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px]">
                      {" "}
                      {t("industries.entertainment.simplicity")}{" "}
                    </span>
                  </h1>
                ) : (
                  <h1 className="text-5xl text-center text-[#1C2045] font-extrabold leading-[60px] sm:text-4xl">
                    {t("industries.entertainment.control")}
                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px]">
                      sự đơn giản{" "}
                    </span>
                    <br />
                  </h1>
                )}
              </div>
              <div className=" mx-auto  max-w-[1040px] items-center  flex flex-wrap gap-[15px] lg:justify-center lg:flex-col relative ">
                <UseCaseRight
                  imageSrc={calender}
                  title={t("industries.entertainment.management")}
                  description={t("industries.entertainment.managementdes")}
                  number={"1"}
                />
                <UseCaseLeft
                  imageSrc={calender1}
                  title={t("industries.entertainment.visitor")}
                  description={t("industries.entertainment.visitordes")}
                  number={"2"}
                />
                <UseCaseRight
                  imageSrc={visitor1}
                  title={t("industries.entertainment.it")}
                  description={t("industries.entertainment.itdes")}
                  number={"3"}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className=" bg-[#293990] relative ">
        <img src={left} className=" absolute top-0 left-0 "></img>
        <img src={right} className=" absolute right-0 bottom-0 "></img>
        <div className=" flex items-center justify-center">
          <div className="flex flex-col gap-[30px] py-[50px] lg:px-[35px]  px-[100px] items-center sm:items-stretch ">
            <h1 className="text-center text-[#eef3fa] font-extrabold  text-[38px] leading-[56px]">
              {t("industries.entertainment.quickstartheader")}
            </h1>
            <p className="text-center text-[#eef3fa] font-normal  text-[16px] leading-[24px] max-w-[1110px]">
              {t("industries.entertainment.quickstartdes")}
            </p>
            <div className="flex  gap-6 xl:justify-center sm:flex-col ">
              <CloudButton
                title={t(
                  "products.facialsensevisitormanagement.quickstartguide.cloud"
                )}
              />
              <LeafButton
                title={t(
                  "products.facialsensevisitormanagement.quickstartguide.onpremises"
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white pb-[50px]">
        <img
          src={choose1}
          className="w-[574px] h-[737px] absolute top-[-50px] left-[-50px]"
          alt=""
        />

        <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[100px] flex flex-col items-center relative ">
          <Headerkeyfeatures
            nameHader={t("industries.retailworkforce.key")}
            underlineHeader={t("industries.retailworkforce.feature")}
            desHeader={t("industries.entertainment.fearuresdes")}
            descac={t("industries.retailworkforce.cac")}
            tinh={t("industries.retailworkforce.tinh")}
            check={false}
          />
          <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
            <Features
              image={online}
              title={t("industries.entertainment.auto")}
              des={t("industries.entertainment.autodes")}
            />
            <Features
              image={secure}
              title={t("industries.entertainment.overhead")}
              des={t("industries.entertainment.overheaddes")}
            />
            <Features
              image={safe}
              title={t("industries.entertainment.feedback")}
              des={t("industries.entertainment.feedbackdes")}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#F1F6FA] ">
        <div className=" mx-auto max-w-[1300px] pt-[50px] pb-[90px] flex flex-col gap-[50px] px-4 ">
          <div className=" relative">
            <div className=" flex flex-col gap-[15px] items-center ">
              <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px] leading-[60px] sm:text-4xl">
                <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[40px]">
                  {t("industries.student.whychossetitle")}
                </span>
                {t("industries.entertainment.whychossedes")}
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className=" mx-auto flex gap-[20px] sm:flex-col  ">
              <Whychoose
                title={t("industries.entertainment.increase")}
                des={t("industries.entertainment.increasedes")}
              />
              <Whychoose
                title={t("industries.entertainment.see")}
                des={t("industries.entertainment.seedes")}
              />
              <Whychoose
                title={t("industries.entertainment.automatedaccess")}
                des={t("industries.entertainment.automatedaccessdes")}
              />
            </div>
            <div className=" mx-auto flex gap-[20px] sm:flex-col  ">
              <Whychoose
                title={t("industries.entertainment.data")}
                des={t("industries.entertainment.datades")}
              />
              <Whychoose
                title={t("industries.entertainment.quickly")}
                des={t("industries.entertainment.quicklydes")}
              />
              <Whychoose
                title={t("industries.entertainment.customizable")}
                des={t("industries.entertainment.customizabledes")}
              />
            </div>
          </div>
        </div>
      </div>
      <Question />
    </>
  );
};
