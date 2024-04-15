import { useRef } from "react";
import useIntersectionObserver from "../../../components/useIntersectionObserver/useIntersectionObserver";
import { useTranslation } from "react-i18next"
import { Question, QuickStart } from "../../../components/common";
import { useWindowSize } from "@uidotdev/usehooks";

import choose from "../../../assets/img/products/facialsensevisitormanagement/choose-shape.png.png"
import calender from "../../../assets/img/industries/organization/calender.png"
import calender1 from "../../../assets/img/industries/organization/calender2.png"
import visitor from "../../../assets/img/industries/organization/calender3.png"
import calender4 from "../../../assets/img/industries/organization/calender4.png"
import {  UseCaseLeft, UseCaseRight } from "../../../components/visitor";
import choose1 from "../../../assets/img/products/facialsensevisitormanagement/choose.png";
import { Features, Headerkeyfeatures } from "../../../components/bioatendance";
import secure from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_isecureometric_3d.png";
import safe from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_isometric_3d.png";
import online from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_biomatric_3d.png";


// import { useWindowSize } from "@uidotdev/usehooks";

export const Organizations = () => {
    const { width } = useWindowSize() 

    // Tạo một ref để tham chiếu đến thẻ div cần cuộn đến
    const targetDivRef = useRef(null);
    const isVisible = useIntersectionObserver(targetDivRef);

 
    const { t,i18n }  = useTranslation();
    // const { width } = useWindowSize()
    return (
        <>
            <div className=" bg-cover bg-center h-[260px]">
                    <div className="  max-w-[1300px] mx-auto pl-[10px] pt-[68px] ">
                            {
                                i18n.language === "en" ? (
                                    <h1 className="text-5xl sm:text-4xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                    <span className="inline-block  border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">{t("industries.organizations.header")}</span>
                                     </h1>
                                ):(
                                    <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                   
                                    <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">{t("industries.organizations.header")}</span>
                                     </h1>
                                )
                            }
                    </div>
                   
                
            </div>
            <div className=" bg-white">
                    <div className="max-w-[1300px] pt-[100px] pb-[50px] mx-auto relative">
                        <div className="ml-[10px]">
                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1110px] leading-[60px]">
                            { i18n.language === "en" ? (
                                width > 437 ? (
                                <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                                     {t("industries.organizations.headerdes")}
                                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] lowercase">  {t("industries.organizations.header")}</span>
                                   
                                </h1>
                                ) : (
                                    <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                                    <span>Meet a </span><br /><span>person in the</span>
                                   <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] lowercase">  {t("industries.organizations.header")}</span>
                                  
                                    </h1>
                                )
                                
                            ) : (
                               
                                <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                                    {t("industries.organizations.headerdes")}
                                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] lowercase">  {t("industries.organizations.header")}</span>
                                </h1>
                               
                             )} 
                            </h1>
                           
                           
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.organizations.usually")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.organizations.thecheckid")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.organizations.when")}</p>

                            
                        </div>
                    </div>
            </div>
            <div ref={targetDivRef} className={`animation-fadeIn bg-white`}>
            {isVisible && (
            <div className=" animate-show-nav">
            <div className="bg-white relative pb-[50px] ">
                <img src={choose} className="w-[574px] h-[737px] absolute top-[-50px] left-[-50px]" alt="" />
                
                    <div className="  max-w-[1300px] mx-auto py-[50px] flex flex-col items-center relative ">
                        {
                            i18n.language === "en" ? (
                                <h1 className="text-5xl text-center text-[#1C2045] font-extrabold leading-[60px] ">
                                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] mr-[16px]"> {t("industries.organizations.usecase")}   </span>
                                    {t("industries.organizations.usecaseheader")}   
                                </h1>   
                            ): (
                                width > 537 ? (
                                    <h1 className="text-5xl text-center text-[#1C2045] font-extrabold leading-[60px] ">
                                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] mr-[16px]"> {t("industries.organizations.usecase")}   </span>
                                    {t("industries.organizations.usecaseheader")}   
                                    </h1>   
                                ) : (
                                    <h1 className="text-5xl text-center text-[#1C2045] font-extrabold leading-[60px] ">
                                      <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] mr-[16px]">Trường hợp </span>
                                      <br />
                                        <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] mr-[16px]">sử dụng</span>
                                        <br />
                                    {t("industries.organizations.usecaseheader")}   
                                    </h1>   
                                )
                               
                            )
                        }
                          
                    </div>
                    <div className=" mx-auto  max-w-[1040px] items-center flex flex-wrap gap-[15px] lg:justify-center lg:flex-col relative ">
                                <UseCaseRight
                                    imageSrc={calender}
                                    title={t("industries.organizations.employee")}
                                    description={t("industries.organizations.employeedes")}
                                    number={"1"}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender1}
                                    title={t("industries.organizations.consumer")}
                                    description={t("industries.organizations.consumerdes")}
                                    number={"2"}
                                />
                                 <UseCaseRight
                                    imageSrc={visitor}
                                    title={t("industries.organizations.fresh")}
                                    description={t("industries.organizations.freshdes")}
                                    number={"3"}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender4}
                                    title={t("industries.organizations.leads")}
                                    description={t("industries.organizations.leadsdes")}
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
                                          desHeader={t("industries.organizations.thecheckid2")}
                                          descac={t("industries.retailworkforce.cac")}
                                          tinh={t("industries.retailworkforce.tinh")}
                                          check={false}
                    />
                        <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <Features 
                                image={online}
                                title={t("industries.organizations.online")}
                                des={t("industries.organizations.onlinedes")}
                            />
                            <Features 
                                image={secure}
                                title={t("industries.organizations.secure")}
                                des={t("industries.organizations.securedes")}
                            />
                             <Features 
                                image={safe}
                                title={t("industries.organizations.feedback")}
                                des={t("industries.organizations.feedbackdes")}
                            />
                        </div>


                        
            </div>
            
            </div>
            <Question />
                
                
                
               
                
          

           
        </>
    )
}