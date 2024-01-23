import { useIntersectionObserver, useWindowSize } from "@uidotdev/usehooks";
import { Question } from "../components/common";
import male1 from "../assets/img/home/Male1.png";
import ciclegray from "../assets/img/home/ciclegray.png";
import ciclepoppy from "../assets/img/home/ciclepoppy.png";
import cicletree from "../assets/img/home/cicletree.png";
import triangle from "../assets/img/home/triangle.png";
import dot from "../assets/img/home/dot.png";
import choose from "../assets/img/products/facialsensevisitormanagement/choose-shape.png.png";
import choose1 from "../assets/img/products/facialsensevisitormanagement/choose.png";
import { Check } from "../assets/svg";
import cloud from "../assets/img/products/facialsensevisitormanagement/cloudne.png";
import premises from "../assets/img/products/facialsensevisitormanagement/cloud.png";
import { LeafButton, PoppyButton } from "../components/button";
import { useTranslation } from "react-i18next";
import left from "../assets/img/products/facialsensevisitormanagement/about-left.png.png";
import right from "../assets/img/products/facialsensevisitormanagement/about-shape.png.png";
import secure from "../assets/img/products/facialsensevisitormanagement/icon_brain_isecureometric_3d.png";
import safe from "../assets/img/products/facialsensevisitormanagement/icon_brain_isometric_3d.png";
import online from "../assets/img/products/facialsensevisitormanagement/icon_brain_biomatric_3d.png";
import automated from "../assets/img/products/facialsensevisitormanagement/icon_brain_server_3d.png";
import realtime from "../assets/img/products/facialsensevisitormanagement/icon_brain_realtime_3d.png";
import electro from "../assets/img/products/facialsensevisitormanagement/icon_brain_electrion_3d.png";
import data from "../assets/img/products/facialsensevisitormanagement/icon_brain_data_3d.png";
import sabiofe from "../assets/img/products/facialsensevisitormanagement/icon_brain_visitor_3d.png";
import custom from "../assets/img/products/facialsensevisitormanagement/icon_brain_customer_3d.png";
import organiza from "../assets/img/products/facialsensevisitormanagement/div.default-image.png";
import travel from "../assets/img/products/facialsensevisitormanagement/div.travel-image.png";
import hotels from "../assets/img/products/facialsensevisitormanagement/div.hotel-image.png";
import consul from "../assets/img/products/facialsensevisitormanagement/div.consulting-image.png";
import banking from "../assets/img/products/facialsensevisitormanagement/div.bank-image.png";
import building from "../assets/img/products/facialsensevisitormanagement/div.building-image.png";
import school from "../assets/img/products/facialsensevisitormanagement/div.school-image.png";
import customer from "../assets/img/products/facialsensevisitormanagement/div.customer-image.png";
import AccordionToggle from "../components/accordion/AcoordionToggle";

export const Facialsensevisitormanagement = () => {
  const { width } = useWindowSize();

  const [manRef, entry1] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className=" xl:h-auto pb-[100px]">
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
              {t("products.facialsensevisitormanagement.solution.header")}
            </h1>
            <p className="text-lg text-[#9795B5]">
              {t("products.facialsensevisitormanagement.solution.description")}
            </p>
            <div className="flex gap-6 xl:justify-center sm:flex-col">
              <LeafButton
                title={t("products.facialsensevisitormanagement.solution.get")}
              />
              <PoppyButton
                title={t(
                  "products.facialsensevisitormanagement.solution.request"
                )}
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
                  {t(
                    "products.facialsensevisitormanagement.solution.janesmith"
                  )}
                </h6>
                <p className="font-normal text-sm">
                  {t("products.facialsensevisitormanagement.solution.visitor")}
                </p>
              </div>
              <div className="flex justify-between">
                <h6 className="text-base font-bold text-[var(--tree-poppy)]">
                  {t("products.facialsensevisitormanagement.solution.welcome")}
                </h6>
                <p className="text-base font-bold">07:55:41 AM</p>
              </div>
              <p className="text-xs font-semibold">
                {t("products.facialsensevisitormanagement.solution.day")}
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
                  {t("products.facialsensevisitormanagement.solution.checkid")}
                </h6>
                <p className="font-normal text-sm">
                  {t("products.facialsensevisitormanagement.solution.time1")}
                </p>
              </div>
              <p className="font-normal text-sm">
                {t(
                  "products.facialsensevisitormanagement.solution.titlecheckid"
                )}
              </p>
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
              {t("products.facialsensevisitormanagement.benefits.header")}
              <span
                style={{ whiteSpace: "nowrap" }}
                className="border-b-[10px]  inline-block pl-2 h-11 border-[var(--tree-poppy)]"
              >
                {t(
                  "products.facialsensevisitormanagement.benefits.benefitheader"
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
                  "products.facialsensevisitormanagement.benefits.benefitheader"
                )}
              </span>
              {t("products.facialsensevisitormanagement.benefits.header")}
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
            src="https://d1d661ml0e18pm.cloudfront.net/vms-video.mp4"
          ></video>
          <div>
            <div className="sm:flex-col flex mt-12 items-start gap-[50px]  ">
              <div className="flex-1">
                <p className="text-lg text-[#3A505F] font-semibold mb-[16px] max-w-[510px]">
                  {t(
                    "products.facialsensevisitormanagement.benefits.institution"
                  )}
                </p>
                <div className="flex sm:flex-col">
                  <ul className=" flex flex-col gap-4 sm:w-auto ">
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-[14px]" />
                      <p className=" font-Montserrat text-regular text-[#3A505F] text-[18px]	">
                        <span className="font-semibold">
                          {t(
                            "products.facialsensevisitormanagement.benefits.titlesecurity"
                          )}
                        </span>
                        {t(
                          "products.facialsensevisitormanagement.benefits.security"
                        )}
                      </p>
                    </li>
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-[14px]" />
                      <p className="text-[#3A505F] font-Montserrat text-regular">
                        <span className="font-semibold">
                          {t(
                            "products.facialsensevisitormanagement.benefits.titleappointment"
                          )}
                        </span>
                        {t(
                          "products.facialsensevisitormanagement.benefits.appointment"
                        )}
                      </p>
                    </li>
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-[14px]" />
                      <p className="text-[#3A505F] font-Montserrat text-regular">
                        <span className="font-semibold">
                          {t(
                            "products.facialsensevisitormanagement.benefits.titleincrease"
                          )}
                        </span>
                        {t(
                          "products.facialsensevisitormanagement.benefits.increase"
                        )}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-[#3A505F] font-semibold mb-[16px] max-w-[510px]">
                  {t("products.facialsensevisitormanagement.benefits.user")}
                </p>
                <div className="flex sm:flex-col">
                  <ul className=" flex flex-col gap-4 sm:w-auto ">
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-[14px]" />
                      <p className="text-[#3A505F] font-Montserrat text-regular">
                        <span className="font-semibold">
                          {t(
                            "products.facialsensevisitormanagement.benefits.titleconvenience"
                          )}
                        </span>
                        {t(
                          "products.facialsensevisitormanagement.benefits.convenience"
                        )}
                      </p>
                    </li>
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-[14px]" />
                      <p className="text-[#3A505F] font-Montserrat text-regular">
                        <span className="font-semibold">
                          {t(
                            "products.facialsensevisitormanagement.benefits.titleautomatic"
                          )}
                        </span>
                        {t(
                          "products.facialsensevisitormanagement.benefits.automatic"
                        )}
                      </p>
                    </li>
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-[14px]" />
                      <p className="text-[#3A505F] font-Montserrat text-regular">
                        <span className="font-semibold">
                          {t(
                            "products.facialsensevisitormanagement.benefits.titlecontactless"
                          )}
                        </span>
                        {t(
                          "products.facialsensevisitormanagement.benefits.contactless"
                        )}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1300px] mb-[50px] px-4">
        <div className=" flex justify-center items-center">
          <h1 className="text-center text-5xl text-[#1C2045] font-extrabold ">
            {width < 639 ? (
              <>
                <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
                  CheckID
                </span>
                <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
                  FacialSense
                </span>
              </>
            ) : (
              <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
                {t(
                  "products.facialsensevisitormanagement.systemserver.checkid"
                )}
              </span>
            )}

            <span style={{ whiteSpace: "wrap" }} className="block">
              {t("products.facialsensevisitormanagement.systemserver.header")}
            </span>
          </h1>
        </div>
        <div className="flex justify-between  items-start sm:flex-wrap  sm:w-auto">
          <div className="sm:flex-col flex px-[35px] flex-col py-[20px] gap-[30px] relative md:px-[15px]">
            <img
              src={cloud}
              alt=""
              className=" absolute bottom-0 right-0 w-[300px] h-[300px] "
            />
            <div className="flex flex-col gap-1 items-stretch h-[150px] mds:h-[160px]">
              <p className="text-[#151686] font-montserrat text-[38px] font-extrabold leading-[56px] ">
                {t("products.facialsensevisitormanagement.systemserver.cloud")}
              </p>
              <p className="text-[#1c2045] font-montserrat font-normal 	leading-[25px] max-w-[485px]">
                {t(
                  "products.facialsensevisitormanagement.systemserver.descriptioncloud"
                )}
              </p>
            </div>
            {i18n.language === "en" ? (
              <div className="flex  h-[300px] mds:h-[400px] mds740:h-[480px] 460sm:h-[400px]">
                <div className="flex sm:flex-col ">
                  <ul className=" flex flex-col gap-[15px] sm:w-auto ">
                    <li className="flex text-lg items-start ">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.monthly"
                      )}
                    </li>
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.subscription"
                      )}
                    </li>
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.free"
                      )}
                    </li>
                    <li className="flex text-lg items-start max-w-[485px]">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.support"
                      )}
                    </li>
                    <li className="flex text-lg items-start max-w-[485px]">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.noneed"
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex h-[290px] mds:h-[370px] mds740:h-[480px] 460sm:h-[400px]">
                <div className="flex sm:flex-col ">
                  <ul className=" flex flex-col gap-[15px] sm:w-auto ">
                    <li className="flex text-lg items-start ">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.monthly"
                      )}
                    </li>
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.subscription"
                      )}
                    </li>
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.free"
                      )}
                    </li>
                    <li className="flex text-lg items-start max-w-[485px]">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.support"
                      )}
                    </li>
                    <li className="flex text-lg items-start max-w-[485px]">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.noneed"
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div className="xl:flex ">
              <PoppyButton
                title={t(
                  "products.facialsensevisitormanagement.systemserver.signup"
                )}
              />
            </div>
          </div>
          <div className="flex px-[35px] flex-col py-[20px] gap-[30px]   relative  ">
            <img
              src={premises}
              alt=""
              className=" absolute bottom-0 right-0 w-[300px] h-[300px] md:h-[400px]"
            />
            <div className="flex flex-col gap-1 h-[150px] mds:h-[160px] ">
              <p className="text-[#151686] font-montserrat text-[38px] font-extrabold leading-[56px] mds:w-[300px]">
                {t(
                  "products.facialsensevisitormanagement.systemserver.premises"
                )}
              </p>
              <p className="text-[#1c2045] font-montserrat font-normal	max-w-[485px] leading-[25px]">
                {t(
                  "products.facialsensevisitormanagement.systemserver.descriptionpremises"
                )}
              </p>
            </div>
            {i18n.language === "en" ? (
              <div className="flex  h-[300px] mds:h-[400px] mds740:h-[480px] 460sm:h-[400px]">
                <div className="flex sm:flex-col">
                  <ul className=" flex flex-col gap-[15px] sm:w-auto ">
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.one"
                      )}
                    </li>
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.nolimitation"
                      )}
                    </li>
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.needno"
                      )}
                    </li>
                    <li className="flex text-lg items-start max-w-[485px]">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.support1"
                      )}
                    </li>
                    <li className="flex text-lg items-start max-w-[485px]">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.customer"
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex h-[290px] mds:h-[370px] mds740:h-[480px] 460sm:h-[400px]">
                <div className="flex sm:flex-col">
                  <ul className=" flex flex-col gap-[15px] sm:w-auto ">
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.one"
                      )}
                    </li>
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.nolimitation"
                      )}
                    </li>
                    <li className="flex text-lg items-start">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.needno"
                      )}
                    </li>
                    <li className="flex text-lg items-start max-w-[485px]">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.support1"
                      )}
                    </li>
                    <li className="flex text-lg items-start max-w-[485px]">
                      <Check className="m-[7px] min-w-4" />
                      {t(
                        "products.facialsensevisitormanagement.systemserver.customer"
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            )}

            <div className="xl:flex">
              <LeafButton
                title={t(
                  "products.facialsensevisitormanagement.systemserver.download"
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#293990] relative ">
        <img src={left} className=" absolute top-0 left-0 "></img>
        <img src={right} className=" absolute right-0 bottom-0 "></img>
        <div className=" flex items-center justify-center">
          <div className="flex flex-col gap-[30px] py-[50px] lg:px-[35px]  px-[250px] items-center sm:items-stretch ">
            <h1 className="text-center text-[#eef3fa] font-extrabold  text-[38px] leading-[56px]">
              {t(
                "products.facialsensevisitormanagement.quickstartguide.header"
              )}
            </h1>
            <p className="text-center text-[#eef3fa] font-normal  text-[16px] leading-[24px] max-w-[540px]">
              {t(
                "products.facialsensevisitormanagement.quickstartguide.description"
              )}
            </p>
            <div className="flex  gap-6 xl:justify-center sm:flex-col ">
              <PoppyButton
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

      <div className="bg-[#EEF3FA] px-4 pb-[50px] pt-[30px] flex flex-col items-center relative">
        <img src={left} className=" absolute left-0 top-0 "></img>
        <img src={right} className=" absolute right-0 bottom-0 "></img>
        <div className=" flex items-center justify-center flex-col gap-[15px]">
          {i18n.language === "en" ? (
            <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[832px]">
              {width < 745 ? (
                <>
                  <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
                    Applications
                  </span>
                  {/* {width < 473 && ( */}
                  <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
                    and{" "}
                  </span>
                  {/* </span>)} */}
                  <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
                    {t(
                      "products.facialsensevisitormanagement.applications.insdus"
                    )}
                  </span>
                </>
              ) : (
                <span
                  style={{ whiteSpace: "" }}
                  className="border-b-[10px]  inline-block pl-2 h-11 border-[var(--tree-poppy)]"
                >
                  {t(
                    "products.facialsensevisitormanagement.applications.header"
                  )}{" "}
                </span>
              )}
            </h1>
          ) : (
            <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[832px]">
              {width < 745 ? (
                <>
                  <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
                    {t(
                      "products.facialsensevisitormanagement.applications.applica"
                    )}
                  </span>
                  <span className="inline-block border-b-[10px] pl-2 h-11 border-[var(--tree-poppy)]">
                    {t(
                      "products.facialsensevisitormanagement.applications.insdus"
                    )}
                  </span>
                </>
              ) : (
                <span
                  style={{ whiteSpace: "" }}
                  className="border-b-[10px]  inline-block pl-2 h-11 border-[var(--tree-poppy)]"
                >
                  {t(
                    "products.facialsensevisitormanagement.applications.header"
                  )}{" "}
                </span>
              )}
            </h1>
          )}

          <p className="text-[#3A505F] text-[18px] font-normal leading-[25px] max-w-[900px] text-center">
            {t(
              "products.facialsensevisitormanagement.applications.description"
            )}
          </p>
        </div>
        <div className="flex max-w-[1300px] pt-[47px] pb-50px flex-col">
          <div className="flex px-[35px] gap-[81px] lg:gap-[40px]  flex-wrap justify-center items-center ">
            <div className="group flex flex-col justify-center items-center  h-[150px] lg:w-1/3 md:1/2 460sm:w-[150px]  hover:shadow-hoverAppAndIns  hover:rounded-2xl hover:bg-white w-2581  md:1/2 transition-all duration-500 ease-in-out relative">
              <img
                className="transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px]"
                src={organiza}
              ></img>
              <p className="text-[#3A505F] text-1 font-normal leading-[20px] max-w-[100px] text-center transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px] ">
                {" "}
                {t(
                  "products.facialsensevisitormanagement.applications.organizations"
                )}
              </p>
            </div>
            <div className="group flex flex-col justify-center items-center h-[150px]  460sm:w-[150px] hover:shadow-hoverAppAndIns  hover:rounded-2xl hover:bg-white w-2581 lg:w-1/3 md:1/2 transition-all duration-500 ease-in-out relative">
              <img
                className="transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px]"
                src={travel}
              ></img>
              <p className="text-[#3A505F] text-1 font-normal leading-[20px] max-w-[100px] text-center transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px] ">
                {" "}
                {t("products.facialsensevisitormanagement.applications.travel")}
              </p>
            </div>
            <div className="group flex flex-col justify-center items-center h-[150px] 460sm:w-[150px]  hover:shadow-hoverAppAndIns  hover:rounded-2xl hover:bg-white w-2581 lg:w-1/3 md:1/2 transition-all duration-500 ease-in-out relative ">
              <img
                className="transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px]"
                src={hotels}
              ></img>
              <p className="text-[#3A505F] text-1 font-normal leading-[20px] max-w-[100px] text-center transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px]">
                {" "}
                {t("products.facialsensevisitormanagement.applications.hotel")}
              </p>
            </div>
            <div className="group flex flex-col justify-center items-center h-[150px] 460sm:w-[150px] hover:shadow-hoverAppAndIns  hover:rounded-2xl hover:bg-white w-2581 lg:w-1/3 md:1/2 transition-all duration-500 ease-in-out relative">
              <img
                className="transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px]"
                src={consul}
              ></img>
              <p className="text-[#3A505F] text-1 font-normal leading-[20px] max-w-[100px] text-center transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px]">
                {" "}
                {t(
                  "products.facialsensevisitormanagement.applications.consulting"
                )}
              </p>
            </div>
            <div className="group flex flex-col justify-center items-center h-[150px] 460sm:w-[150px] hover:shadow-hoverAppAndIns  hover:rounded-2xl hover:bg-white w-2581 lg:w-1/3 md:1/2 transition-all duration-500 ease-in-out relative ">
              <img
                className="transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px]"
                src={banking}
              ></img>
              <p className="text-[#3A505F] text-1 font-normal leading-[20px] max-w-[100px] text-center transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px] ">
                {" "}
                {t("products.facialsensevisitormanagement.applications.bank")}
              </p>
            </div>
            <div className="group flex flex-col justify-center items-center h-[150px] 460sm:w-[150px] hover:shadow-hoverAppAndIns  hover:rounded-2xl hover:bg-white w-2581 lg:w-1/3 md:1/2 transition-all duration-500 ease-in-out relative">
              <img
                className="transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px]"
                src={building}
              ></img>
              <p className="text-[#3A505F] text-1 font-normal leading-[20px] max-w-[120px] text-center transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px] ">
                {" "}
                {t(
                  "products.facialsensevisitormanagement.applications.building"
                )}
              </p>
            </div>
            <div className="group flex flex-col justify-center items-center h-[150px] 460sm:w-[150px] hover:shadow-hoverAppAndIns  hover:rounded-2xl hover:bg-white w-2581 lg:w-1/3 md:1/2 transition-all duration-500 ease-in-out relative relative">
              <img
                className="transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px]"
                src={school}
              ></img>
              <p className="text-[#3A505F] text-1 font-normal leading-[20px] max-w-[100px] text-center transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px] ">
                {" "}
                {t("products.facialsensevisitormanagement.applications.school")}
              </p>
            </div>
            <div className="group flex flex-col justify-center items-center h-[150px] 460sm:w-[150px] hover:shadow-hoverAppAndIns  hover:rounded-2xl hover:bg-white w-2581 lg:w-1/3 md:1/2 transition-all duration-500 ease-in-out relative">
              <img
                className="transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px]"
                src={customer}
              ></img>
              <p className="text-[#3A505F] text-1 font-normal leading-[20px] max-w-[100px] text-center  transition-transform duration-500 ease-in-out transform translate-y-0 group-hover:translate-y-[4px] ">
                {" "}
                {t(
                  "products.facialsensevisitormanagement.applications.customer"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fff]">
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
          <AccordionToggle />
        </div>
      </div>
      <Question />
    </>
  );
};
