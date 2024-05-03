import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { useIntersectionObserver, useWindowSize } from "@uidotdev/usehooks";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";


import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import female from "../assets/img/home/Female.png";
import male from "../assets/img/home/Male.png";
import male1 from "../assets/img/home/Male1.png";
import capterra from "../assets/img/home/capterra.png";
import ciclegray from "../assets/img/home/ciclegray.png";
import ciclepoppy from "../assets/img/home/ciclepoppy.png";
import cicletree from "../assets/img/home/cicletree.png";
import dot from "../assets/img/home/dot.png";
import fixthelogo from "../assets/img/home/fixthephoto.png";
import identity_female from "../assets/img/home/identify_female.png";
import office_building from "../assets/img/home/office-building.png";
import scan_man from "../assets/img/home/scan_man.png";
import softwareadvice from "../assets/img/home/softwareadvice.png";
import triangle from "../assets/img/home/triangle.png";
import { Check } from "../assets/svg";
import { AccordionTollge } from "../components/accordion";
import { LeafButton, PoppyButton } from "../components/button";
import { Question } from "../components/common";

// Benefits
const systemBenefits = [
  {
    img: office_building,
    header: "homepage.benefit.items.0.header",
    context: [
      {
        label: "homepage.benefit.items.0.context.0.label",
        text: "homepage.benefit.items.0.context.0.text",
      },
      {
        label: "homepage.benefit.items.0.context.1.label",
        text: "homepage.benefit.items.0.context.1.text",
      },
      {
        label: "homepage.benefit.items.0.context.2.label",
        text: "homepage.benefit.items.0.context.2.text",
      },
      {
        label: "homepage.benefit.items.0.context.3.label",
        text: "homepage.benefit.items.0.context.3.text",
      },
    ],
  },
  {
    img: scan_man,
    header: "homepage.benefit.items.1.header",
    context: [
      {
        label: "homepage.benefit.items.1.context.0.label",
        text: "homepage.benefit.items.1.context.0.text",
      },
      {
        label: "homepage.benefit.items.1.context.1.label",
        text: "homepage.benefit.items.1.context.1.text",
      },
      {
        label: "homepage.benefit.items.1.context.2.label",
        text: "homepage.benefit.items.1.context.2.text",
      },
      {
        label: "homepage.benefit.items.1.context.3.label",
        text: "homepage.benefit.items.1.context.3.text",
      },
      {
        label: "homepage.benefit.items.1.context.4.label",
        text: "homepage.benefit.items.1.context.4.text",
      },
    ],
  },
  {
    img: identity_female,
    header: "homepage.benefit.items.2.header",
    context: [
      {
        label: "homepage.benefit.items.2.context.0.label",
        text: "homepage.benefit.items.2.context.0.text",
      },
      {
        label: "homepage.benefit.items.2.context.1.label",
        text: "homepage.benefit.items.2.context.1.text",
      },
      {
        label: "homepage.benefit.items.2.context.2.label",
        text: "homepage.benefit.items.2.context.2.text",
      },
      {
        label: "homepage.benefit.items.2.context.3.label",
        text: "homepage.benefit.items.2.context.3.text",
      },
      {
        label: "homepage.benefit.items.2.context.4.label",
        text: "homepage.benefit.items.2.context.4.text",
      },
    ],
  },
];

// Carousel
const carousel = [
  {
    img: fixthelogo,
    description: "homepage.testimonials.items.0.description",
    name: "homepage.testimonials.items.0.name",
    position: "homepage.testimonials.items.0.position",
  },
  {
    img: capterra,
    description: "homepage.testimonials.items.1.description",
    name: "homepage.testimonials.items.1.name",
    position: "homepage.testimonials.items.1.position",
  },
  {
    img: capterra,
    description: "homepage.testimonials.items.2.description",
    name: "homepage.testimonials.items.2.name",
    position: "homepage.testimonials.items.2.position",
  },
  {
    img: capterra,
    description: "homepage.testimonials.items.3.description",
    name: "homepage.testimonials.items.3.name",
    position: "homepage.testimonials.items.3.position",
  },
  {
    img: softwareadvice,
    description: "homepage.testimonials.items.4.description",
    name: "homepage.testimonials.items.4.name",
    position: "homepage.testimonials.items.4.position",
  },
  {
    img: capterra,
    description: "homepage.testimonials.items.5.description",
    name: "homepage.testimonials.items.5.name",
    position: "homepage.testimonials.items.5.position",
  },
  {
    img: capterra,
    description: "homepage.testimonials.items.6.description",
    name: "homepage.testimonials.items.6.name",
    position: "homepage.testimonials.items.6.position",
  },
  {
    img: capterra,
    description: "homepage.testimonials.items.7.description",
    name: "homepage.testimonials.items.7.name",
    position: "homepage.testimonials.items.7.position",
  },
  {
    img: capterra,
    description: "homepage.testimonials.items.8.description",
    name: "homepage.testimonials.items.8.name",
    position: "homepage.testimonials.items.8.position",
  },
  {
    img: capterra,
    description: "homepage.testimonials.items.9.description",
    name: "homepage.testimonials.items.9.name",
    position: "homepage.testimonials.items.9.position",
  },
  {
    img: capterra,
    description: "homepage.testimonials.items.10.description",
    name: "homepage.testimonials.items.10.name",
    position: "homepage.testimonials.items.10.position",
  },
];

// Accordion
const accordionData = [
  {
    header: "homepage.question.items.0.header",
    body: "homepage.question.items.0.body",
  },
  {
    header: "homepage.question.items.1.header",
    body: "homepage.question.items.1.body",
  },
  {
    header: "homepage.question.items.2.header",
    body: "homepage.question.items.2.body",
  },
  {
    header: "homepage.question.items.3.header",
    body: "homepage.question.items.3.body",
  },
  {
    header: "homepage.question.items.4.header",
    body: "homepage.question.items.4.body",
  },
];

export const Homepage = () => {
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
  const [manRef, entry1] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  //End: Check if the element is in the viewport
  // Begin: Carousel
  const nextCarouselRef = useRef();
  const prevCarouselRef = useRef();
  const [activeCarousel, setActiveCarousel] = useState(0);
  const maxCarousel = carousel.length;
  const handleNext = () => {
    nextCarouselRef.current.click();
  };

  const handleBack = () => {
    prevCarouselRef.current.click();
  };
  const properties = {
    prevArrow: <button className="hidden" ref={prevCarouselRef}></button>,
    nextArrow: <button className="hidden" ref={nextCarouselRef}></button>,
    slidesToShow: width < 1023 ? 1 : 2,
    onStartChange: (oldIndex, newIndex) => {
      console.log(newIndex);
      setActiveCarousel(newIndex);
    },
    infinite: false,
    canSwipe: false,
    autoplay: false,
  };
  // End: Carousel

  return (
    <>
      <div className=" xl:h-auto ">
        <div className="max-w-[1300px] overflow-hidden px-2 mx-auto flex items-center justify-between sm840:flex-col-reverse">
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
          <div className="relative mt-28 max-w-[616px] xl:max-w-[400px] flex flex-col gap-5 sm840:!max-w-none">
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
          <div className="relative w-[500px]  h-[480px] px-[108px] pt-8 sm:scale-[0.7]">
            <div className="absolute scale-0 animate-scale-up  top-0 left-0 w-[250px]  p-4 bg-gradient-filter backdrop-blur-[14px] rounded flex flex-col gap-1">
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
            <div className="absolute scale-0 animate-scale-up bottom-0 right-0 w-[250px]  p-4 bg-gradient-filter backdrop-blur-[14px] rounded flex flex-col gap-1">
              <div className="flex justify-between mb-3">
                <h6 className="text-base font-bold">
                  {t("homepage.solution.janedoe")}
                </h6>
                <p className="font-normal text-sm">
                  {t("homepage.solution.visitor")}
                </p>
              </div>
              <div className="flex justify-between">
                <h6 className="text-base font-bold text-[var(--tree-poppy)]">
                  {t("homepage.solution.welcome")}
                </h6>
                <p className="text-base font-bold">07:55:41 AM</p>
              </div>
              <p className="text-xs font-semibold">
                {t("homepage.solution.day1")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape bg-no-repeat bg-[left_top_-115px] py-[100px] px-4">
        {i18n.language === "en" ? (
          <h1 className="text-center text-5xl text-[#1C2045] font-extrabold mb-12">
            {t("homepage.product.our")}
            <span className="border-b-[10px] pl-2 inline-block h-11 border-[var(--tree-poppy)]">
              {t("homepage.product.products")}
            </span>
          </h1>
        ) : (
          <h1 className="text-center text-5xl text-[#1C2045] font-extrabold mb-12">
            <span className="border-b-[10px]  inline-block h-11 border-[var(--tree-poppy)]">
              {t("homepage.product.products")}
            </span>
            {t("homepage.product.our")}
          </h1>
        )}

        <div className="max-w-[1300px] px-2 mx-auto mb-12 flex justify-between xl:flex-col-reverse xl:items-center">
          <div className="w-[570px] sm:w-auto">
            <h2 className="text-[38px] font-extrabold leading-[56px] text-[#1C2045] mb-5">
              {t("homepage.product.header")}
            </h2>
            <p className="text-lg text-[#3A505F] mb-8 max-w-[510px]">
              {t("homepage.product.description")}
            </p>
            <div>
              <p className="text-lg text-[#3A505F] font-semibold mb-8 max-w-[510px]">
                {t("homepage.product.features.header")}
              </p>
              <div className="flex sm:flex-col">
                <ul className="w-[324px] flex flex-col gap-4 sm:w-auto ">
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.product.features.feature1")}
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.product.features.feature2")}
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.product.features.feature3")}
                  </li>
                  <li className="flex text-lg items-start mb-4">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.product.features.feature4")}
                  </li>
                </ul>
                <ul className="w-[324px] flex flex-col gap-4 sm:w-auto">
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.product.features.feature5")}
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.product.features.feature6")}
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.product.features.feature7")}
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.product.features.feature8")}
                  </li>{" "}
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.product.features.feature9")}
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:flex xl:justify-center">
              <LeafButton
                title={t("homepage.product.learnmore")}
                style={{ marginTop: "30px" }}
              />
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
        <div className="max-w-[1300px] px-2 mx-auto flex flex-row-reverse justify-between xl:flex-col-reverse xl:items-center">
          <div className="w-[590px] sm:w-auto">
            <h2 className="text-[38px] font-extrabold capitalize leading-[56px] text-[#1C2045] mb-5">
              {t("homepage.visitor.header")}
            </h2>
            <p className="text-lg text-[#3A505F] mb-5 max-w-[510px]">
              {t("homepage.visitor.description")}
            </p>
            <p className="text-lg text-[#3A505F] mb-8 max-w-[510px]">
              {t("homepage.visitor.description1")}
            </p>
            <div>
              <p className="text-lg text-[#3A505F] font-semibold mb-8 max-w-[510px]">
                {t("homepage.visitor.features.header")}
              </p>
              <div className="flex sm:flex-col">
                <ul className="w-[335px] flex flex-col gap-4 sm:w-auto">
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.visitor.features.feature1")}
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.visitor.features.feature2")}
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.visitor.features.feature3")}
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.visitor.features.feature4")}
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.visitor.features.feature5")}
                  </li>
                  <li className="flex text-lg items-start mb-4">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.visitor.features.feature6")}
                  </li>
                </ul>
                <ul className="w-[300px] flex flex-col gap-4 sm:w-auto">
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.visitor.features.feature7")}
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.visitor.features.feature8")}
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.visitor.features.feature9")}
                  </li>
                  <li className="flex text-lg items-start">
                    <Check className="m-[10px] min-w-8" />
                    {t("homepage.visitor.features.feature10")}
                  </li>
                </ul>
              </div>
            </div>{" "}
            <div className="xl:flex xl:justify-center">
              <LeafButton
                title={t("homepage.product.learnmore")}
                style={{ marginTop: "30px" }}
              />
            </div>
          </div>
          <div
            className="relative w-[506px] h-[554px] p-[30px] sm:scale-[0.7]"
            ref={manRef}
          >
            <div
              className={`absolute scale-0 ${
                entry1?.isIntersecting ? "animate-scale-up-not-delay" : null
              } top-0 left-0 w-[250px]  p-4 bg-gradient-filter backdrop-blur-[14px] rounded flex flex-col gap-1`}
            >
              <div className="flex justify-between mb-3">
                <h6 className="text-base font-bold">
                  {t("homepage.visitor.johnsmith")}
                </h6>
                <p className="font-normal text-sm">
                  {t("homepage.solution.visitor")}
                </p>
              </div>
              <div className="flex justify-between">
                <h6 className="text-base font-bold text-[var(--tree-poppy)]">
                  {t("homepage.solution.welcome")}
                </h6>
                <p className="text-base font-bold">07:55:41 AM</p>
              </div>
              <p className="text-xs font-semibold">
                {t("homepage.solution.day1")}
              </p>
            </div>
            <img src={male1} alt="" />

            <div
              className={`absolute scale-0 ${
                entry1?.isIntersecting ? "animate-scale-up-not-delay" : null
              } bottom-0 right-0 w-[380px]  p-4 bg-gradient-filter backdrop-blur-[14px] rounded flex flex-col gap-1`}
            >
              <div className="flex justify-between mb-3">
                <h6 className="text-base font-bold">
                  {t("homepage.visitor.checkid")}
                </h6>
                <p className="font-normal text-sm">
                  {t("homepage.visitor.now")}
                </p>
              </div>
              <p className="font-normal text-sm">{t("homepage.visitor.des")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F5FE] p-[100px] lg:px-3">
        {i18n.language === "en" ? (
          <h1 className="text-center text-5xl text-[#1C2045] font-extrabold mb-12">
            {t("homepage.benefit.header.bio")}
            <span className="border-b-[10px] pl-2 inline-block pl-2 h-11 border-[var(--tree-poppy)]">
              {t("homepage.benefit.header.benefit")}
            </span>
          </h1>
        ) : (
          <h1 className="text-center text-5xl leading-tight text-[#1C2045] font-extrabold mb-12">
            <span className="border-b-[10px]  inline-block h-[50px] border-[var(--tree-poppy)]">
              {t("homepage.benefit.header.benefit")}
            </span>
            {t("homepage.benefit.header.bio")}
          </h1>
        )}

        <div className="flex gap-[30px] justify-center md:flex-col md:items-center xl: ml-[92px] xl: mr-[84px]">
          {systemBenefits.map((item, index) => (
            <div className="max-w-[350px] p-[30px] md:max-w-none" key={index}>
              <div className="w-20 h-20 bg-white flex items-center justify-center rounded-full">
                <img className="" src={item.img} alt="" />
              </div>
              <h2 className="mt-[30px] text-[22px] font-bold leading-[33px] text-[#1C2045]">
                {t(item.header)}
              </h2>
              <ul className="text-[#3A505F] text-base">
                {item.context.map((subitem, index) => (
                  <li className="flex gap-[8px] mt-4" key={`item_${index}`}>
                    <div className="mt-[5px]">
                      <Check className="w-[25px] h-[25px] py-[7px]" />
                    </div>
                    <p>
                      <span className="font-bold">{t(subitem.label)}</span> -{" "}
                      {t(subitem.text)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto px-2 pt-[100px] pb-16">
        <Box sx={{ display: "flex", gap: "50px", flexDirection: "column" }}>
          <div className="flex items-center justify-between sm:flex-col sm:gap-2 px-3">
            <h1 className="text-center text-5xl text-[#1C2045] font-extrabold border-b-[10px] inline-block h-11 border-[var(--tree-poppy)]">
              {t("homepage.testimonials.header")}
            </h1>
            <MobileStepper
              steps={maxCarousel}
              position="static"
              activeStep={activeCarousel}
              sx={{
                "& .MuiMobileStepper-dots": { display: "none" },
                gap: "15px",
              }}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  sx={{
                    padding: "15px 40px",
                    bgcolor: "#EEF3FA",
                    borderRadius: "20px",
                    color: "#002B4E",
                    "&:hover": { backgroundColor: "#EEF3FA" },
                  }}
                  disabled={
                    activeCarousel === maxCarousel - (width < 1023 ? 1 : 2)
                  }
                >
                  <EastRoundedIcon sx={{ fontSize: "30px" }} />
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  sx={{
                    padding: "15px 40px",
                    bgcolor: "#EEF3FA",
                    borderRadius: "20px",
                    color: "#002B4E",
                    "&:hover": { backgroundColor: "#EEF3FA" },
                  }}
                  disabled={activeCarousel === 0}
                >
                  <WestRoundedIcon sx={{ fontSize: "30px" }} />
                </Button>
              }
            />
          </div>
          <Slide {...properties}>
            {carousel.map((item, index) => (
              <div
                className="each-slide-effect mx-[20px] mb-10 text-[#3A505F]"
                key={index}
              >
                <div className="shadow-xl shadow-[#0c44cc1a] p-[30px] flex flex-col justify-between h-[330px] sm:h-auto rounded">
                  <div className="flex flex-col gap-[35px]">
                    <div>
                      <img className=" h-[25px]" src={item.img} alt="" />
                    </div>
                    <p
                      className="text-base"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {t(item.description)}
                    </p>
                  </div>
                  <div>
                    <h6 className="text-base font-bold">{t(item.name)}</h6>
                    <p className="text-sm">{t(item.position)}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slide>
        </Box>
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
