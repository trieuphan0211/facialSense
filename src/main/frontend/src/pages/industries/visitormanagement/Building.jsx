

import { useRef } from "react";
import useIntersectionObserver from "../../../components/useIntersectionObserver/useIntersectionObserver";
import { useTranslation } from "react-i18next"
import { Question } from "../../../components/common";
import { useWindowSize } from "@uidotdev/usehooks";
import visitor1 from "../../../assets/img/industries/organization/image 6.png"
import run from "../../../assets/img/industries/organization/run.png"
import left from "../../../assets/img/products/facialsensevisitormanagement/about-left.png.png";
import right from "../../../assets/img/products/facialsensevisitormanagement/about-shape.png.png";
import { CloudButton, LeafButton } from "../../../components/button";
import choose from "../../../assets/img/products/facialsensevisitormanagement/choose-shape.png.png"
import calender from "../../../assets/img/industries/organization/calender.png"
import calender1 from "../../../assets/img/industries/organization/calender2.png"
import {  UseCaseLeft, UseCaseRight } from "../../../components/visitor";
import { Features, Headerkeyfeatures } from "../../../components/bioatendance";
import online from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_isecureometric_3d.png";
import safe from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_biomatric_3d.png";
import secure from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_isometric_3d.png";



// import { useWindowSize } from "@uidotdev/usehooks";

export const Building = () => {
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
                                    width > 715 ? (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                        <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">{t("industries.building.header")}</span>
                                         </h1>
                                    ): (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                        <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Building and</span><br />
                                        <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Apartments</span>
                                         </h1>
                                    )
                                   
                                ):(
                                    width > 503 ? (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                   
                                        <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">{t("industries.building.header")}</span>
                                         </h1>
                                    ): (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                            <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Toà Nhà Và</span><br />
                                            <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Căn Hộ</span>
                                         </h1>
                                    )
                                   
                                )
                            }
                    </div>
                   
                
            </div>
            <div className=" bg-white">
                    <div className="max-w-[1300px] pt-[100px] pb-[50px] mx-auto relative">
                        <div className="ml-[10px]">
                            <h1 className="text-5xl text-[#1C2045] font-extrabold  leading-[60px]">
                            { i18n.language === "en" ? (
                                width > 1155 ? (
                                <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                                    {t("industries.building.headerdes")}
                                    <span className="inline-block border-b-[10px] ml-[16px] h-[51px] border-[var(--tree-poppy)] "> Apartments </span>
                                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] ">and Building</span>
                                   
                                </h1>
                                ) : (
                                    width > 824 ? (
                                        
                                        <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                                            {t("industries.building.headerdes")}
                                            <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] ">Apartments and Building</span>
                                   
                                        </h1>
                                    ) : (
                                        width > 606 ? (
                                            <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                                            Visitor Management <br /> <span className="ml-4">System for</span> 
                                            <span className="inline-block border-b-[10px]  h-[51px] border-[var(--tree-poppy)] "> Apartments </span><br />
                                            <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] ">and Building</span>
                                        
                                            </h1>
                                        ): (
                                            <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                                            Visitor Management <br />System for <br />
                                            <span className="inline-block border-b-[10px]  h-[51px] border-[var(--tree-poppy)] "> Apartments </span><br />
                                            <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] ">and Building</span>
                                        
                                            </h1>
                                        )
                                       
                                    )
                                    
                                )
                                
                            ) : (
                                width > 1071 ? (
                                    <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px]">
                                        {t("industries.building.headerdes")}  <span className="inline-block border-b-[10px]  h-[51px] border-[var(--tree-poppy)] "> căn hộ  </span><br />
                                    <span className="inline-block  border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">và toà nhà</span>
                                     </h1>
                                ): (
                                    width > 729 ? (
                                        <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px]">
                                       
                                        <span className="mr-4 "> {t("industries.building.headerdes")}</span>
                                        <span className="inline-block  border-b-[10px] h-[51px] border-[var(--tree-poppy)]  sm:ml-0"> căn hộ và toà nhà</span>
                                        </h1>
                                    ): (
                                        width > 464 ? (
                                        <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px]">
                                        Hệ thống quản lý <br/> khách hàng cho 
                                    
                                        <span className="inline-block  border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0"> căn hộ và toà nhà</span>
                                        </h1>
                                        ): (
                                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px]">
                                               
                                                 Hệ thống <br/>quản lý<br /> khách hàng <br></br>cho  <span className="inline-block  border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">căn hộ </span>
                                    
                                                <span className="inline-block  border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">và toà nhà</span>
                                            </h1>
                                        )
                                        
                                    )
                                   
                                )
                               
                             )} 
                            </h1>
                           
                           
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.building.ensure")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.building.sercuity")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.building.using")}</p>
                            
                        </div>
                    </div>
            </div>
            <div ref={targetDivRef} className={`animation-fadeIn bg-white`}>
            {isVisible && (
            <div className=" animate-show-nav duration-300">
            <div className="bg-white relative pb-[50px] ">
                <img src={choose} className="w-[574px] h-[737px] absolute top-[-50px] left-[-50px]" alt="" />
              

                    <div className=" mx-auto  max-w-[1040px] items-center pt-[50px] flex flex-wrap gap-[15px] lg:justify-center lg:flex-col relative ">
                                      <UseCaseRight
                                    imageSrc={calender}
                                    title={t("industries.building.create")}
                                    description={t("industries.building.createdes")}
                                    number={"1"}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender1}
                                    title={t("industries.building.guest")}
                                    description={t("industries.building.guestdes")}
                                    number={"2"}
                                />
                                 <UseCaseRight
                                    imageSrc={visitor1}
                                    title={t("industries.building.guestCheck")}
                                    description={t("industries.building.guestCheckdes")}
                                    number={"3"}
                                />
                                   <UseCaseLeft
                                    imageSrc={run}
                                    title={t("industries.building.leaving")}
                                    description={t("industries.building.leavingdes")}
                                    number={"4"} />

                           
                    </div>
            </div>
            </div> 
            )}              
            </div>
          

           
            <div className=" bg-[#293990] relative ">
        <img src={left} className=" absolute top-0 left-0 "></img>
        <img src={right} className=" absolute right-0 bottom-0 "></img>
        <div className=" flex items-center justify-center">
            <div className="flex flex-col gap-[30px] py-[50px] lg:px-[35px]  px-[100px] items-center sm:items-stretch ">
                <h1 className="text-center text-[#eef3fa] font-extrabold  text-[38px] leading-[56px]" >{t("products.facialsensevisitormanagement.quickstartguide.header")}</h1>
                <p className="text-center text-[#eef3fa] font-normal  text-[16px] leading-[24px] max-w-[1110px]">{t("industries.building.quickdes")}</p>
                <div className="flex  gap-6 xl:justify-center sm:flex-col ">
                <CloudButton title={t("products.facialsensevisitormanagement.quickstartguide.cloud")}  />
                <LeafButton title={t("products.facialsensevisitormanagement.quickstartguide.onpremises")} />
                </div>
            </div>
        </div>
    </div>

            <div className="relative bg-white pb-[50px]">
            <img src={choose} className="w-[574px] h-[737px] absolute top-[-50px] left-[-50px]" alt="" />

            <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[100px] flex flex-col items-center relative ">
                  <Headerkeyfeatures       nameHader={t("industries.building.headerdesapr")} 
                                          underlineHeader={t("industries.building.key")}
                                          desHeader={t("industries.building.keyfeatures")}
                                          descac={t("industries.retailworkforce.cac")}
                                          tinh={t("industries.retailworkforce.tinh")}
                                          check={false}
                    />
                        <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <Features 
                                image={online}
                                title={t("industries.consultation.electronic")}
                                des={t("industries.consultation.electronicdes")}
                            />
                            <Features 
                                image={secure}
                                title={t("industries.consultation.contact")}
                                des={t("industries.consultation.contactdes")}
                            />
                             <Features 
                                image={safe}
                                title={t("industries.consultation.customer")}
                                des={t("industries.consultation.customerdes")}
                            />
                        </div>


                        
            </div>
            
            </div>
            <Question />
                
                
                
               
                
          

           
        </>
    )
}
