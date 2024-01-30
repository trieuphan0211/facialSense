
import { useTranslation } from "react-i18next"
import { useWindowSize } from "@uidotdev/usehooks";
import { LeafButton } from "../components/button";
import { QuickStart } from "../components/common";
export const Service = () => {
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
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-${text} font-extrabold leading-[60px] border-${border}`}>
                        {subtitle} 
                    </h1>
                )
            }
           
        </div>
    )
    let content;

    if (width > 601){
        content =  i18n.language === "en" ? (
             contentHeading(t("industries.service.header"), undefined, "[#B9AAFD]", "white")
            
        ) : (
            contentHeading(t("industries.service.header"), undefined, "[#B9AAFD]", "white") 
        )
       
        
    }else {
        content =  i18n.language === "en" ? (
            contentHeading(t("industries.service.header2"), t("industries.service.hopital"), "[#B9AAFD]", "white") 
       ) : (
           contentHeading(t("industries.service.header2"), t("industries.service.hopital"), "[#B9AAFD]", "white") 
       )
    }
    return (
        <>
            <div className=" bg-cover bg-center h-[360px]" style={{ backgroundImage: "url('/src/assets/img/industries/biometricoffice/group.png')" }}>
                    <div className="  max-w-[1300px] mx-auto pl-[10px] pt-[68px] minxl:pt-[100px]">
                            {
                               content
                            }
                    </div>
                   
                
            </div>
            <div className=" bg-white">
                    <div className="max-w-[1300px] py-[50px] mx-auto relative">
                        <div className="ml-[10px]">
                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px]">
                                {t("industries.service.hopitaldes")}
                                <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">{t("industries.service.hopital")}</span>
                            </h1>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
                                {t("industries.service.thecheckid")}
                                <strong>{t("industries.service.face")}</strong>
                                {t("industries.service.to")}
                            </p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
                                {t("industries.service.thisal")}
                                <strong>{t("industries.service.retail")}</strong>
                                {t("industries.service.tomain")}
                                <strong>{t("industries.service.effect")}</strong>
                                {t("industries.service.workfore")}
                            </p>
                            <ul className="list-disc text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.service.whilst")}
                                <li className="ml-[24px]">{t("industries.service.simple")}</li>
                                <li className="ml-[24px]">{t("industries.service.intuitive")}</li>
                                <li className="ml-[24px]">{t("industries.service.cusztom")}</li>
                            </ul>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.service.our")}
                            <br />
                            {t("industries.service.simmular")}
                            </p>
                            <LeafButton title={t("industries.service.contactwithstart")}  style={{ marginTop: "30px" }}/>
                        </div>
                    </div>
            </div>
            <QuickStart />
            
        </>
    )
}