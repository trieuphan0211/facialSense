import left from "../../assets/img/products/facialsensevisitormanagement/about-left.png.png";
import right from "../../assets/img/products/facialsensevisitormanagement/about-shape.png.png";
import { useTranslation } from "react-i18next";
import { LeafButton, PoppyButton } from "../button";

export const QuickStart = () => {
    const { t } = useTranslation();
    return(
        <div className=" bg-[#293990] relative ">
        <img src={left} className=" absolute top-0 left-0 "></img>
        <img src={right} className=" absolute right-0 bottom-0 "></img>
        <div className=" flex items-center justify-center">
            <div className="flex flex-col gap-[30px] py-[50px] lg:px-[35px]  px-[250px] items-center sm:items-stretch ">
                <h1 className="text-center text-[#eef3fa] font-extrabold  text-[38px] leading-[56px]" >{t("products.facialsensevisitormanagement.quickstartguide.header")}</h1>
                <p className="text-center text-[#eef3fa] font-normal  text-[16px] leading-[24px] max-w-[540px]">{t("products.facialsensevisitormanagement.quickstartguide.description")}</p>
                <div className="flex  gap-6 xl:justify-center sm:flex-col ">
                <PoppyButton title={t("products.facialsensevisitormanagement.quickstartguide.cloud")} />
                <LeafButton title={t("products.facialsensevisitormanagement.quickstartguide.onpremises")} />
                </div>
            </div>
        </div>
    </div>
    )
}