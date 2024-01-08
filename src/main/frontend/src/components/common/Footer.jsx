import { useTranslation } from "react-i18next";
import logo from "../../assets/img/logo.png";
import { LanguageMenu } from "../button";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#F1F6FA] pt-[50px] text-[#1C2045]">
      <div className="flex justify-between pb-5 mb-5 border-b-[1px] border-[#C9DCEC] max-w-[1100px] mx-auto">
        <div className="w-[420px] flex flex-col  items-start">
          <img src={logo} className="h-[74px] -ml-10 mb-3" alt="" />
          <p className="text-sm ">{t("footer.description")}</p>
        </div>
        <div className="w-[540px] flex text-sm justify-between">
          <div className="flex flex-col gap-[10px] max-w-[270px]">
            <h3 className="text-base font-bold">Contact us</h3>
            <p>
              Address: 19 Dang Tien Dong, An Phu Ward, Thu Duc City, Ho Chi Minh
              City
            </p>
            <p>
              Phone:
              <br /> 1900 6884
              <br /> +84 28 3636 6015
            </p>
            <p>Email: info@mobile-id.vn</p>
          </div>
          <div className="flex flex-col gap-[10px] max-w-[220px]">
            <h3 className="text-base font-bold">Legal information</h3>
            <p>Terms and conditions</p>
            <p>Elements</p>
            <p>Data transfer agreement</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pb-5 text-sm text-[#3A505F] max-w-[1100px] mx-auto">
        <div></div>
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
