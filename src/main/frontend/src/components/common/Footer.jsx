import { useTranslation } from "react-i18next";
import logo from "../../assets/img/logo.png";
import { LanguageMenu } from "../menu";
import { Link } from "react-router-dom";
import { ReactComponent as Address } from "../../assets/svg/Vector.svg";
import { ReactComponent as Phone } from "../../assets/svg/Icon.svg";
import { ReactComponent as Email} from "../../assets/svg/Symbol.svg";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#F1F6FA] pt-[50px] text-[#1C2045] sm: pl-[15px]">
      <div className="flex justify-between pb-5 px-2 mb-5 border-b-[1px] border-[#C9DCEC] max-w-[1300px] mx-auto lg:flex-col lg:items-center lg:gap-5">
        <div className="w-[420px] flex flex-col  items-start lg:w-3/4 md:!w-full">
          <img src={logo} className="h-[74px] -ml-10 mb-3" alt="" />
          <p className="text-sm ">{t("footer.description")}</p>
        </div>
        <div className="w-[540px] flex text-sm justify-between lg:w-3/4 lg:gap-3 lg:flex-wrap md:!w-full">
          <div className="flex flex-col gap-[10px] max-w-[270px]">
            <h3 className="text-base font-bold">{t("footer.contact.us")}</h3>
            <div className=" flex items-start gap-[10px] ">
              <div className="min-w-[20px] flex justify-start">

              <Address />
              </div>
              {t("footer.contact.address")}
            </div>    
            <div className=" flex items-start gap-[10px]">
              <Phone />
              <p>{t("footer.contact.phone")
              .split("/n")
              .map((item) => (<>
                <span key={item}>
                  {item}
                </span>
                  <br />
              </>
              ))}</p>
            </div>  

            <div className="flex items-center gap-[10px]">
              <Email/>
              <a className="hover:text-[#4B2BE3] text-[#3A505F] inline-block"
                href="mailto:info@mobile-id.vn">
                {t("footer.contact.emailName")}
              </a>
            </div>

            {/* <p>
              <a
                className="hover:text-[#4B2BE3] text-[#3A505F] inline-block"
                href="mailto:info@mobile-id.vn"
              >
                {t("footer.contact.emailName")}
              </a>
            </p> */}
          </div>
          <div className="flex flex-col gap-[10px] max-w-[220px]">
            <h3 className="text-base font-bold">
              {t("footer.legal.infomation")}
            </h3>
            <p className=" hover:text-[#4B2BE3] text-[#3A505F]">
              <Link> {t("footer.legal.term")}</Link>
            </p>
            <p className=" hover:text-[#4B2BE3] text-[#3A505F]">
              <Link>{t("footer.legal.elements")}</Link>
            </p>
            <p className=" hover:text-[#4B2BE3] text-[#3A505F]">
              <Link>{t("footer.legal.data")}</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pb-5 text-sm text-[#3A505F] max-w-[1300px] mx-auto md:px-4 sm:px-3">
        <div className="md:hidden"></div>
        <div>
          <p>
            Copyright © {new Date().getFullYear() != "2023" ? "2023 - " : ""}{" "}
            {new Date().getFullYear()} 
            <Link style={{color: '#3A505F', textDecoration: 'none' }} to="https://mobile-id.vn/" > Mobile-ID</Link>
          </p>
        </div>
        <div className="w-[160px] flex justify-end">
          <LanguageMenu />
        </div>
      </div>
    </footer>
  );
};
