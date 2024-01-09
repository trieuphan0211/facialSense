import { useTranslation } from "react-i18next";
import logo from "../../assets/img/logo.png";
import { LanguageMenu } from "../menu";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#F1F6FA] pt-[50px] text-[#1C2045]">
      <div className="flex justify-between pb-5 px-5 mb-5 border-b-[1px] border-[#C9DCEC] max-w-[1100px] mx-auto lg:flex-col lg:items-center lg:gap-5">
        <div className="w-[420px] flex flex-col  items-start lg:w-3/4 md:!w-full">
          <img src={logo} className="h-[74px] -ml-10 mb-3" alt="" />
          <p className="text-sm ">{t("footer.description")}</p>
        </div>
        <div className="w-[540px] flex text-sm justify-between lg:w-3/4 lg:gap-3 lg:flex-wrap md:!w-full">
          <div className="flex flex-col gap-[10px] max-w-[270px]">
            <h3 className="text-base font-bold">{t("footer.contact.us")}</h3>
            <p>{t("footer.contact.address")}</p>
            <p>
              {t("footer.contact.phone")
                .split("/n")
                .map((item) => (
                  <>
                    {item}
                    <br />
                  </>
                ))}
            </p>
            <p>{t("footer.contact.email")}</p>
          </div>
          <div className="flex flex-col gap-[10px] max-w-[220px]">
            <h3 className="text-base font-bold">
              {t("footer.legal.infomation")}
            </h3>
            <p> {t("footer.legal.term")}</p>
            <p>{t("footer.legal.elements")}</p>
            <p>{t("footer.legal.data")}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pb-5 text-sm text-[#3A505F] max-w-[1100px] mx-auto md:px-4">
        <div className="md:hidden"></div>
        <div>
          <p>
            Copyright © {new Date().getFullYear() != "2023" ? "2023 - " : ""}{" "}
            {new Date().getFullYear()} Mobile-ID
          </p>
        </div>
        <div className="w-[160px] flex justify-end">
          <LanguageMenu />
        </div>
      </div>
    </footer>
  );
};
