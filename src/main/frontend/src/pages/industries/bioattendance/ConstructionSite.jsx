
import { useTranslation } from "react-i18next"
import { useWindowSize } from "@uidotdev/usehooks";
import { Question, QuickStart } from "../../../components/common";
import {  Headerkeyfeatures, Features } from "../../../components/bioatendance";

import choose from "../../../assets/img/products/facialsensevisitormanagement/choose-shape.png.png"
import multiple from "../../../assets/img/industries/biometricoffice/multiple.png"
import location from "../../../assets/img/industries/biometricoffice/location.png"
import remote from "../../../assets/img/industries/biometricoffice/remote.png"
import identifer from "../../../assets/img/industries/biometricoffice/identifier.png"
import sabiofe from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_visitor_3d.png"

import liveness from "../../../assets/img/industries/biometricoffice/liveness.png"

export const ConstructionSite = () => {
    const { t,i18n }  = useTranslation();
    const { width } = useWindowSize() 
    let content;
    let check = false;

    const contentHeading = (title , subtitle, border, text) => (
        <div className="sm:text-4xl">
             <h1 className={`inline-block border-b-[10px] sm:h-[39px] h-[51px] text-5xl text-${text} font-extrabold leading-[60px] border-${border} sm:text-4xl`}>
                    {title}
            </h1>
            {subtitle && <br />}
            {
                subtitle && (
                    <h1 className={`inline-block border-b-[10px] sm:h-[39px] h-[51px] text-5xl text-${text} font-extrabold leading-[60px] border-${border} sm:text-4xl`}>
                        {subtitle} 
                    </h1>
                )
            }
            {
                check && (
                 
                    <span>{t("industries.constructtion.headerdes")}</span>
                ) 
            }
           
        </div>
    )

     let content1;
    if (width >= 554){
       
        content = i18n.language === "en" ? (contentHeading(t("industries.constructtion.header"), undefined, "[#B9AAFD]", "white")): (
            width > 590 ? (
                contentHeading("Công Trường Xây Dựng",undefined, "[#B9AAFD]", "white")
            ) : (
                <div>
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]`}>
                    Công Trường Xây
                    </h1>
                    <br />
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]`}>
                   Dựng
                    </h1>
                </div>
            )

        )
        
        check = true;
        content1 = i18n.language === "en" ? (
           
            contentHeading(t("industries.constructtion.header"),undefined, "[var(--tree-poppy)]", "[#1C2045]")
            
            
            
            ) :
            (
                <div>
                    {
                        width >= 895 && (
                        <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px]`}>
                            {t("industries.constructtion.headerdes")}
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.constructtion.header1")}</span>                    
                        </h1>
                        )
                    }
                    {
                        width < 895 && width >= 787 && (
                            <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px]`}>
                              {t("industries.constructtion.headerdes")}
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.constructtion.site")}</span> 
                           
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.constructtion.construct")}</span>                                    
                        </h1>
                        )

                    }{
                        width < 787 && (
                            <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px]`}>
                            {t("industries.constructtion.headerdes")}
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.constructtion.site")}</span> 
                            <span className="border-b-[10px] pl-4 inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.constructtion.construct")}</span>                                    
                        </h1>
                        )
                    }
                    
                    
                </div>
                
            )
       

    }else if (width < 554 && width >= 456) {
        content = i18n.language === "en" ? (
            contentHeading(t("industries.constructtion.header"), undefined,  "[#B9AAFD]", "white")
        ) : (
            contentHeading("Công Trường Xây", "Dựng", "[#B9AAFD]", "white")
        )
        check = true;
        content1 = i18n.language === "en" ? (
            <div>
                {
                width < 554 && width >= 456 && (
                    contentHeading(t("industries.constructtion.header"),undefined, "[var(--tree-poppy)]", "[#1C2045]")
                )
                }
                {
                    width < 456 && (
                        <div>
                            <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px]`}>
                        
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.constructtion.header1")}</span> 
                            <br />   
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.constructtion.bio1")}</span>       
                            </h1>               
                            {t("industries.constructtion.headerdes")}              
                        </div>
                    )
                }
            </div>
            
            
          
            
            
            ) :
            (
                <div>
              {
                        width < 554 && width >= 488 && (
                            <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px] sm:text-4xl`}>
                            {t("industries.constructtion.headerdes")}
                            <span className="border-b-[10px]  inline-block  h-[50px]  border-[var(--tree-poppy)] sm:h-[40px]">{t("industries.constructtion.site")}</span> 
                            <br />   
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[40px]">{t("industries.constructtion.construct")}</span>                                    
                        </h1>
                        )
                }
                {
                    width < 488 && (
                        <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px] sm:text-4xl`}>
                        {t("industries.constructtion.headerdes")}
                        <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[40px]">{t("industries.constructtion.site")}</span> 
                        <br />   
                        <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[40px]">{t("industries.constructtion.construct")}</span>          
                        
                    </h1>
                    )
                }
                    
                </div>
                
            )
    }else {
        content = i18n.language === "en" ? (
            contentHeading(t("industries.constructtion.construct"),  t("industries.constructtion.site"),  "[#B9AAFD]", "white")
        ) : (
            contentHeading("Công Trường", "Xây Dựng", "[#B9AAFD]", "white")
        )
        check = true;
        content1 = i18n.language === "en" ? (
           
            
           
                contentHeading(t("industries.constructtion.construct"),  t("industries.constructtion.site"), "[var(--tree-poppy)]", "[#1C2045]"))
            :
            (
                width > 391 ? (
                <div>
                    
                
                    <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px] sm:text-4xl`}>
                    {t("industries.constructtion.headerdes")}
                    <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[40px]">{t("industries.constructtion.site")}</span> 
                    <br />   
                    <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[40px]">{t("industries.constructtion.construct")}</span>          
                    
                </h1>

                    </div>          
                ) : (
                    <div>
                    
                
                    <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px] sm:text-4xl`}>
                    {t("industries.constructtion.headerdes")}
                    <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[40px]">công</span> 
                    <br />   
                    <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[40px]">trường xây</span>    
                    <br />   
                    <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[40px]">dựng</span>                
                    
                     </h1>

                    </div>
                )
                
                
            )


    }
    return (
        <>
         <div>
                <div className=" bg-cover bg-center h-[360px]" style={{ backgroundImage: "url('/src/assets/img/industries/biometricoffice/group.png')" }}>
                    <div className="  max-w-[1300px] mx-auto pl-[10px] pt-[68px] minxl:pt-[100px] xl:pt-[115px] 460sm:pt-[105px]">
                            {content}
                    </div>
                
                </div>
        </div>
            <div className=" bg-white">
                    <div className="max-w-[1300px] py-[50px] mx-auto relative">
                        <div className="ml-[10px]">
                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1110px] leading-[60px]">
                                {content1}
                            </h1>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
                            {t("industries.constructtion.thecheckid")}
                                <strong>{t("industries.constructtion.face")}</strong>
                                {t("industries.constructtion.to")}
                            </p>
                            
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.constructtion.accurate")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.constructtion.whilst")}</p>
                        </div>
                    </div>
            </div>
            <QuickStart />
            <div className="relative">
            <img src={choose} className="w-[592px] h-[623px] absolute top-[-50px] left-0]" alt="" />
                <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[50px] flex flex-col items-center relative ">
                    <Headerkeyfeatures 
                                  
                                    underlineHeader={t("industries.constructtion.keyfeatures")}
                                    desHeader={t("industries.constructtion.keyfeaturesdes")}
                                    descac={t("industries.retailworkforce.cac")}
                                    tinh={t("industries.retailworkforce.tinh")}
                                    check={true}
                    />
                    <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <Features 
                                image={multiple}
                                des={t("industries.constructtion.multipledes")}
                                title={t("industries.constructtion.multiple")}
                            />
                             <Features 
                                image={location}
                                des={t("industries.constructtion.locationdes")}
                                title={t("industries.constructtion.location")}
                            />
                             <Features 
                                image={liveness}
                                des={t("industries.constructtion.livenessdes")}
                                title={t("industries.constructtion.liveness")}
                            />

                          

                    </div>
                    <div className=" flex relative  mb-[30px] sm:flex-col">
                             <Features 
                                image={sabiofe}
                                des={t("industries.constructtion.hardhatdes")}
                                title={t("industries.constructtion.hardhat")}
                            />
                            <Features 
                                image={remote}
                                des={t("industries.constructtion.remotedes")}
                                title={t("industries.constructtion.remote")}
                            />
                            <Features 
                                image={identifer}
                                des={t("industries.constructtion.identificationdes")}
                                title={t("industries.constructtion.identification")}
                            />

                          

                    </div>
                   
                </div>
            </div>
            <Question />
        </>
    )
}