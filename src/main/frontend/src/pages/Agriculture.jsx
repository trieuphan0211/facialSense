import { useWindowSize } from "@uidotdev/usehooks";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import identifer from "../assets/img/industries/biometricoffice/identifier.png";
import locaiton from "../assets/img/industries/biometricoffice/locationservice.png";
import multiple from "../assets/img/industries/biometricoffice/multiple.png";
import remote from "../assets/img/industries/biometricoffice/remoteservice_3d.png";
import turnkey from "../assets/img/industries/biometricoffice/turnkey.png";
import choose1 from "../assets/img/products/facialsensevisitormanagement/choose.png";
import realtime from "../assets/img/products/facialsensevisitormanagement/icon_brain_realtime_3d.png";
import { Features, Headerkeyfeatures } from "../components/bioatendance/";
import { Question, QuickStart } from "../components/common";

export const Agriculture = () => {
  const { t, i18n } = useTranslation();
  const { width } = useWindowSize();

  var content;

  const contentHeading = (title, subtitle, border, text) => (
    <div>
      <h1
        className={`inline-block border-b-[10px] h-[51px] text-5xl text-${text} font-extrabold leading-[60px] border-${border}`}
      >
        {title}
      </h1>
      {subtitle && <br />}
      {subtitle && (
        <h1
          className={`inline-block  border-b-[10px] h-[51px] text-5xl text-${text} font-extrabold leading-[60px] border-${border}`}
        >
          {subtitle}
        </h1>
      )}
    </div>
  );

  if (width > 350) {
    content =
      i18n.language === "en"
        ? contentHeading(
            t("industries.agriculture.header"),
            undefined,
            "[#B9AAFD]",
            "white"
          )
        : contentHeading("Nông Nghiệp", undefined, "[#B9AAFD]", "white");
  } else {
    content =
      i18n.language === "en"
        ? contentHeading(
            t("industries.agriculture.nong"),
            t("industries.agriculture.nghiep"),
            "[#B9AAFD]",
            "white"
          )
        : contentHeading("Nông", "Nghiệp", "[#B9AAFD]", "white");
  }

  return (
    <>
      <div
        className=" bg-cover bg-center h-[360px]"
        style={{
          backgroundImage:
            "url('/src/assets/img/industries/biometricoffice/group.png')",
        }}
      >
        <div className="  max-w-[1300px] mx-auto pl-[10px] pt-[68px] minxl:pt-[100px]">
          {i18n.language === "en" ? (
            <h1
              className={`inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]`}
            >
              {t("industries.agriculture.header")}
            </h1>
          ) : (
            content
          )}
        </div>
      </div>
      <div className=" bg-white">
        <div className="max-w-[1300px] py-[50px] mx-auto relative">
          <div className="ml-[10px]">
            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1110px] leading-[60px]">
              {i18n.language === "en" ? (
                <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                  <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)]">
                    {" "}
                    {t("industries.agriculture.header")}
                  </span>
                  {t("industries.agriculture.headerdes")}
                </h1>
              ) : width < 350 ? (
                <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                  {t("industries.agriculture.headerdes")}
                  <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)]">
                    {" "}
                    {t("industries.agriculture.nong1")}
                  </span>
                  <br />
                  <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)]">
                    {" "}
                    {t("industries.agriculture.nghiep")}
                  </span>
                </h1>
              ) : (
                <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                  {t("industries.agriculture.headerdes")}
                  <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)]">
                    {" "}
                    {t("industries.agriculture.header1")}
                  </span>
                </h1>
              )}
            </h1>

            <p className="text-[#151686] font-bold leading-[25px] text-[18px] font-montserrat mt-[15px]">
              {t("industries.agriculture.thecheckid")}
            </p>
            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
              {t("industries.agriculture.accurate")}
            </p>
            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
              {t("industries.agriculture.whilst")}
            </p>
            <p className="text-center italic font-light text-[#3A505f] mt-[30px] relative text-[16px] md:px-[0px] px-[80px]">
              {t("industries.biometricoffice.footer")}
              <Link
                style={{ color: "#151686", textDecoration: "underline" }}
                to="https://checkid.mobile-id.vn"
              >
                {" "}
                https://checkid.mobile-id.vn
              </Link>
            </p>
          </div>
        </div>
      </div>
      <QuickStart />
      <div className="relative">
        <img
          src={choose1}
          className="w-[574px] h-[737px] absolute top-[-50px] right-0 "
          alt=""
        />

        <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[50px] flex flex-col items-center relative ">
          <Headerkeyfeatures
            underlineHeader={t("industries.healthcare.keyfeatures")}
            desHeader={t("industries.agriculture.fearuresdes")}
            descac={t("industries.retailworkforce.cac")}
            tinh={t("industries.retailworkforce.tinh")}
            check={true}
          />
          <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
            <Features
              image={realtime}
              des={t("industries.biometricoffice.realtimedes")}
              title={t("industries.biometricoffice.realtime")}
            />
            <Features
              image={multiple}
              des={t("industries.biometricoffice.multipledes")}
              title={t("industries.biometricoffice.multiple")}
            />
            <Features
              image={turnkey}
              des={t("industries.biometricoffice.turnkeydes")}
              title={t("industries.biometricoffice.turnkey")}
            />
          </div>
          <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
            <Features
              image={locaiton}
              des={t("industries.service.locationdes")}
              title={t("industries.service.location")}
            />

            <Features
              image={remote}
              des={t("industries.service.remotedes")}
              title={t("industries.service.remote")}
            />
            <Features
              image={identifer}
              des={t("industries.constructtion.identificationdes")}
              title={t("industries.constructtion.identification")}
            />
          </div>

          <p className="text-center italic font-light text-[#3A505f] relative text-[16px] md:px-[0px] px-[150px]">
            {t("industries.biometricoffice.footer")}
            <Link
              style={{ color: "#151686", textDecoration: "underline" }}
              to="https://checkid.mobile-id.vn"
            >
              {" "}
              https://checkid.mobile-id.vn
            </Link>
          </p>
        </div>
      </div>
      <Question />
    </>
  );
};
