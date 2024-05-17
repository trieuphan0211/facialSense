import { useTranslation } from "react-i18next";
import { useWindowSize } from "@uidotdev/usehooks";
import { Question, QuickStart } from "../../../components/common";
import { Features, Headerkeyfeatures } from "../../../components/bioatendance";
import choose1 from "../../../assets/img/products/facialsensevisitormanagement/choose.png";
import multiple from "../../../assets/img/industries/biometricoffice/multiple.png"
import turnkey from "../../../assets/img/industries/biometricoffice/turnkey.png"
import realtime from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_realtime_3d.png"
import { Link } from 'react-router-dom';
export const Factory = () => {
    const { t, i18n } = useTranslation()
    const { width } = useWindowSize()
    let check;
    const contentHeading = (title , subtitle, border, text) => (
        <div>
            
             <h1 className={`inline-block border-b-[10px] h-[51px] sm:text-4xl sm:h-[40px] text-5xl text-${text} font-extrabold leading-[60px] border-${border}`}>
                    {title}
            </h1>
            {subtitle && <br />}
            {
                subtitle && (
                    <h1 className={`inline-block border-b-[10px] h-[51px] sm:text-4xl sm:h-[40px] text-5xl text-${text} font-extrabold leading-[60px] border-${border}`}>
                        {subtitle} 
                    </h1>
                )
            }
            {
                check && (
                 
                    <span>{t("industries.factory.headerdes")}</span>
                ) 
            }
           
        </div>
    )
    let content;
    let content1;
    if (width > 433){
        {
            width > 626 ? (
                content = i18n.language === "en" ? ( contentHeading(t("industries.factory.header"), undefined, "[#B9AAFD]", "white") ) : (contentHeading("Nhà Máy Và Kho Hàng", undefined, "[#B9AAFD]", "white"))
            ) : (
                content = i18n.language === "en" ? (contentHeading(t("industries.factory.headerder2"), t("industries.factory.warehose"), "[#B9AAFD]", "white")) :   (contentHeading("Nhà Máy Và", "Kho Hàng", "[#B9AAFD]", "white") )
            )
           
            
        }
       check = true;
       {
        width > 626 ? (
            content1 =  contentHeading(t("industries.factory.header"), undefined, "[var(--tree-poppy)]", "[#1C2045]")
        ) : (
            content1 =  contentHeading(t("industries.factory.headerder2"), t("industries.factory.warehose"), "[var(--tree-poppy)]", "[#1C2045]")
        )
       }
       
        
    }else {
        content =  i18n.language === "en" ? (
            contentHeading(t("industries.factory.headerder2"), t("industries.factory.warehose"), "[#B9AAFD]", "white") 
       ) : (
           contentHeading("Nhà Máy Và", "Kho Hàng", "[#B9AAFD]", "white") 
       )
       check = true;
            content1 =  contentHeading(t("industries.factory.headerder2"), t("industries.factory.warehose"), "[var(--tree-poppy)]", "[#1C2045]")
        
    
    }
    return (
        <>
          <div className=" bg-cover bg-center h-[360px]" style={{ backgroundImage: "url('/src/assets/img/industries/biometricoffice/group.png')" }}>
                    <div className="  max-w-[1300px] mx-auto pl-[10px] pt-[68px] minxl:pt-[100px] xl:pt-[115px] 460sm:pt-[95px]">
                            {
                               content
                            }
                    </div>
            </div>
            <div className=" bg-white">
                    <div className="max-w-[1300px] py-[50px] mx-auto relative">
                        <div className="ml-[10px]">
                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1110px] leading-[60px] sm:text-4xl">
                                {content1}
                            </h1>
                           
                            <p className="text-[#151686] font-bold leading-[25px] text-[18px] font-montserrat mt-[15px]">
                               
                                {t("industries.factory.thecheckid")}
                            </p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
                                {t("industries.factory.checkid")}
                                <strong>{t("industries.factory.biometric")}</strong>
                                {t("industries.factory.thesystem")}
                            </p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
                                {t("industries.factory.whilst")}
                                <strong>{t("industries.factory.user")}</strong>
                                {t("industries.factory.around")}
                            </p>
                            
                        </div>
                    </div>
            </div>
            <QuickStart />
            <div className="relative">
            <img src={choose1} className="w-[574px] h-[737px] absolute top-[-50px] right-0 " alt="" />

            <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[50px] flex flex-col items-center relative ">
            <Headerkeyfeatures 
                                        underlineHeader={t("industries.healthcare.keyfeatures")}
                                        desHeader={t("industries.factory.keyfeaturesdes")}
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


                        <p className="text-center italic font-light text-[#3A505f] relative text-[16px] md:px-[0px] px-[150px]">{t("industries.biometricoffice.footer")}
                        <Link style={{ color: '#151686', textDecoration: 'underline' }} to="https://www.mobile-id.vn/" > https://www.mobile-id.vn</Link>
                        </p>
            </div>
            
            </div>
            <Question />
        </>
    )
}