import { useTranslation } from "react-i18next"
import { useWindowSize } from "@uidotdev/usehooks";
import { useRef} from "react";
import useIntersectionObserver from "../../../components/useIntersectionObserver/useIntersectionObserver";
import { Question, QuickStart } from "../../../components/common";
import choose from "../../../assets/img/products/facialsensevisitormanagement/choose-shape.png.png"
import calender from "../../../assets/img/industries/organization/calender.png"
import calender1 from "../../../assets/img/industries/organization/calender2.png"
import visitor from "../../../assets/img/industries/organization/image 6.png"
import calender4 from "../../../assets/img/industries/organization/image 7.png"
import {  UseCaseLeft, UseCaseRight } from "../../../components/visitor";
import choose1 from "../../../assets/img/products/facialsensevisitormanagement/choose.png";
import { Features, Headerkeyfeatures } from "../../../components/bioatendance";
import secure from "../../../assets/img/industries/organization/icon_brain_isometric_3d.png";
import safe from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_isometric_3d.png";
import online from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_biomatric_3d.png";
export const Travel = () => {
    const { t,i18n }  = useTranslation();
    const { width } = useWindowSize() 
     // Tạo một ref để tham chiếu đến thẻ div cần cuộn đến
  const targetDivRef = useRef(null);
  const isVisible = useIntersectionObserver(targetDivRef);

    return(
        <>
            <div className=" bg-cover bg-center h-[260px]">
                    <div className="  max-w-[1300px] mx-auto pl-[10px] pt-[68px]">
                            {
                                i18n.language === "en" ? (
                                    width > 593 ? (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                        <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">{t("industries.travel.header")}</span>
                                         </h1>
                                    ) : (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px] sm:text-4xl">
                                        <span className="inline-block  border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0 sm:h-[40px]">Travel and</span><br />
                                        <span className="inline-block  border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0 sm:h-[40px]">Excursion</span>
                                         </h1>
                                    )
                                   
                                ):(
                                    width > 593 ? (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                        <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">{t("industries.travel.header")}</span>
                                         </h1>
                                    ) : (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px] sm:text-4xl">
                                             <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0 sm:h-[40px]">Du Lịch Và</span><br />
                                        <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0 sm:h-[40px]">Tham Quan</span>
                                         </h1>
                                    )
                                )
                            }
                    </div>
                   
                
            </div>
            <div className=" bg-white">
                    <div className="max-w-[1300px] pt-[100px] pb-[50px] mx-auto relative">
                        <div className="ml-[10px]">
                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1110px] leading-[60px]">
                            { i18n.language === "en" ? (
                                width > 593 ? (
                                <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] "> {t("industries.travel.headerTravel")}</span>
                                </h1>
                                ) : (
                                    <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] sm:text-4xl">
                                   
                                   <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px]">Travel and</span><br />
                                   <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px] lowercase">excursion</span>
                                    </h1>
                                )
                                
                            ) : (
                               
                                width > 593 ? (
                                    <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                                        <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] "> {t("industries.travel.headerTravel")}</span>
                                    </h1>
                                    ) : (
                                        <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] sm:text-4xl">
                                       
                                       <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px]">Du lịch và</span><br />
                                       <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px] lowercase">tham quan</span>
                                        </h1>
                                    )
                                    
                               
                             )} 
                            </h1>
                           
                           
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.travel.after")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.travel.asan")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.travel.with")}</p>

                            
                        </div>
                    </div>
            </div>
            <div ref={targetDivRef} className={`animation-fadeIn bg-white`}>
            {isVisible && (
            <div className=" animate-show-nav duration-300">
            <div className="bg-white relative pb-[50px] ">
                <img src={choose} className="w-[574px] h-[737px] absolute top-[-50px] left-[-50px]" alt="" />
                
                    <div className=" mx-auto  max-w-[1040px] items-center flex gap-[15px] flex-wrap  lg:justify-center lg:flex-col relative ">
                                <UseCaseRight
                                    imageSrc={calender}
                                    title={t("industries.travel.organiza")}
                                    description={t("industries.travel.organizades")}
                                    number={"1"}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender1}
                                    title={t("industries.travel.visitor")}
                                    description={t("industries.travel.visitordes")}
                                    number={"2"}
                                />
                                 <UseCaseRight
                                    imageSrc={visitor}
                                    title={t("industries.travel.visitorCheckin")}
                                    description={t("industries.travel.visitorCheckindes")}
                                    number={"3"}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender4}
                                    title={t("industries.travel.ending")}
                                    description={t("industries.travel.endingdes")}
                                    number={"4"}
                                />

                           
                    </div>
            </div>
            </div> 
            )}              
            </div>
            <QuickStart></QuickStart>
            <div className="relative bg-white pb-[50px]">
            <img src={choose1} className="w-[574px] h-[737px] absolute top-[-50px] right-0 " alt="" />

            <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[100px] flex flex-col items-center relative ">
                  <Headerkeyfeatures nameHader={t("industries.retailworkforce.key")} 
                                          underlineHeader={t("industries.retailworkforce.feature")}
                                          desHeader={t("industries.travel.keyfeaturesdes")}
                                          descac={t("industries.retailworkforce.cac")}
                                          tinh={t("industries.retailworkforce.tinh")}
                                          check={false}
                    />
                        <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <Features 
                                image={online}
                                title={t("industries.travel.custom")}
                                des={t("industries.travel.customdes")}
                            />
                            <Features 
                                image={safe}
                                title={t("industries.travel.contact")}
                                des={t("industries.travel.contactdes")}
                            />
                             <Features 
                                image={secure}
                                title={t("industries.travel.issuing")}
                                des={t("industries.travel.issuingdes")}
                            />
                        </div>


                        
            </div>
            
            </div>
            <Question />
        </>
    )
}