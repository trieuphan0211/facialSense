import { useTranslation } from "react-i18next"
import { useWindowSize } from "@uidotdev/usehooks";
import { Question, QuickStart } from "../components/common";
import {  Headerkeyfeatures, Features } from "../components/bioatendance/";
import choose from "../assets/img/products/facialsensevisitormanagement/choose-shape.png.png"
import safe from "../assets/img/products/facialsensevisitormanagement/icon_brain_isometric_3d.png";
import multiple from "../assets/img/industries/biometricoffice/multiple.png"
import liveness from "../assets/img/industries/biometricoffice/livenessheath.png"



export const Heathycare = () => {

    const { t,i18n }  = useTranslation();
    const { width } = useWindowSize()
    const contentHeading = (title , subtitle, border, text) => (
        <div>
             <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-${text} font-extrabold leading-[60px] border-${border}`}>
                    {title}
            </h1>
            {subtitle && <br />}
            {
                subtitle && (
                    <h1 className={`inline-block  border-b-[10px] h-[51px] text-5xl text-${text} font-extrabold leading-[60px] border-${border}`}>
                        {subtitle} 
                    </h1>
                )
            }
            {
                check && (
                 
                    <span>{t("industries.healthcare.headrdes")}</span>
                ) 
            }
        </div>
    )
    let check ;
    let content ;
    let content1;
    if (width > 519){
        
        content = i18n.language === "en" ? (contentHeading(t("industries.healthcare.header"), undefined, "[#B9AAFD]", "white"))
        : (contentHeading("Chăm Sóc Sức Khoẻ", undefined, "[#B9AAFD]", "white"))
        check = true;
        content1 = contentHeading(t("industries.healthcare.header"), undefined,  "[var(--tree-poppy)]", "[#1C2045]")
    }
    else if (width < 519 && width >= 364) {
        content = i18n.language === "en" ? (contentHeading(t("industries.healthcare.cham"), t("industries.healthcare.khoe"), "[#B9AAFD]", "white")) : (
            (contentHeading("Chăm Sóc Sức", "Khoẻ", "[#B9AAFD]", "white"))
        )
        check = true;
        content1 = i18n.language === "en" ? (contentHeading(t("industries.healthcare.header"), undefined,  "[var(--tree-poppy)]", "[#1C2045]")) :
        (
            contentHeading(t("industries.healthcare.cham"), t("industries.healthcare.khoe"),  "[var(--tree-poppy)]", "[#1C2045]")
        )
       

           
    }else{
        content =  i18n.language === "en" ? ( contentHeading(t("industries.healthcare.chamsoc"), t("industries.healthcare.suckhoe"), "[#B9AAFD]", "white")   ) : (
            contentHeading("Chăm sóc", "Sức Khoẻ",  "[#B9AAFD]", "white")
        ) 
        check = true;
        content1 = i18n.language === "en" ? (contentHeading(t("industries.healthcare.header"), undefined,  "[var(--tree-poppy)]", "[#1C2045]")) : 
        (
            contentHeading(t("industries.healthcare.chamsoc"), t("industries.healthcare.suckhoe"),  "[var(--tree-poppy)]", "[#1C2045]")
        )

    }
    return <>
                <div className=" bg-cover bg-center h-[360px]" style={{ backgroundImage: "url('/src/assets/img/industries/biometricoffice/group.png')" }}>
                    <div className="  max-w-[1300px] mx-auto pl-[10px] pt-[68px] minxl:pt-[100px]">
                            {
                                i18n.language === "en" ? (
                                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]`}>
                                    {t("industries.healthcare.header")}
                                    </h1>
                                ) : (
                                    content
                                )
                            }
                    </div>
                
                </div>
                <div className=" bg-white">
                    <div className="max-w-[1300px] py-[50px] mx-auto relative">
                        <div className="ml-[10px]">
                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1110px] leading-[60px]">
                                {content1}
                            </h1>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
                                {t("industries.healthcare.thecheckid")}
                                <strong>{t("industries.healthcare.face")}</strong>
                                {t("industries.healthcare.to")}
                            </p>
                            <p className="text-[#151686] font-bold leading-[25px] text-[18px] font-montserrat mt-[15px]">
                               
                                {t("industries.healthcare.ideal")}
                            </p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.healthcare.notonly")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.healthcare.checkidabbliti")}</p>
                        </div>
                    </div>
                </div>
                <QuickStart />
                <div className="relative">
                        <img src={choose} className="w-[592px] h-[623px] absolute top-[-50px] left-0]" alt="" />
                        <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[50px] flex flex-col items-center relative ">
                            <Headerkeyfeatures 
                                        
                                            underlineHeader={t("industries.healthcare.keyfeatures")}
                                            desHeader={t("industries.healthcare.keyfeaturesdes")}
                                            descac={t("industries.retailworkforce.cac")}
                                            tinh={t("industries.retailworkforce.tinh")}
                                            check={true}
                            />
                            <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                                    <Features 
                                        image={safe}
                                        des={t("industries.healthcare.contactlessdes")}
                                        title={t("industries.healthcare.contactless")}
                                    />
                                    <Features 
                                        image={multiple}
                                        des={t("industries.healthcare.multipledes")}
                                        title={t("industries.healthcare.multiple")}
                                    />
                                    <Features 
                                        image={liveness}
                                        des={t("industries.healthcare.muldes")}
                                        title={t("industries.healthcare.mulbio")}
                                    />

                                

                            </div>
                           
                        
                        </div>
                </div>
                <Question />
            
    </>
}