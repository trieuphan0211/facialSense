import { useRef } from "react";
import useIntersectionObserver from "../../../components/useIntersectionObserver/useIntersectionObserver";
import { useTranslation } from "react-i18next"
import { Question, QuickStart } from "../../../components/common";
import { useWindowSize } from "@uidotdev/usehooks";
import visitor1 from "../../../assets/img/industries/organization/calender3.png"
import bus from "../../../assets/img/industries/organization/image 7.png"
import run from "../../../assets/img/industries/organization/run.png"

import choose from "../../../assets/img/products/facialsensevisitormanagement/choose-shape.png.png"
import calender from "../../../assets/img/industries/organization/calender.png"
import calender1 from "../../../assets/img/industries/organization/calender2.png"
import visitor from "../../../assets/img/industries/organization/image 6.png"
import calender4 from "../../../assets/img/industries/organization/door.png"
import {  UseCaseLeft, UseCaseRight } from "../../../components/visitor";
import choose1 from "../../../assets/img/products/facialsensevisitormanagement/choose.png";
import { Features, Headerkeyfeatures } from "../../../components/bioatendance";
import secure from "../../../assets/img/industries/organization/wifi.png";
import safe from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_biomatric_3d.png";
import online from "../../../assets/img/industries/organization/bio.png";


// import { useWindowSize } from "@uidotdev/usehooks";

export const Hotels = () => {
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
                                    width > 613 ? (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                        <span className="inline-block border-b-[10px] h-[56px] border-[#2B159C] sm:ml-0">{t("industries.hotel.header")}</span>
                                         </h1>
                                    ): (
                                        <h1 className="text-5xl sm:text-4xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                        <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0 sm:h-[40px]">Hotels and</span><br />
                                        <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0 sm:h-[40px]">Restaurants</span>
                                         </h1>
                                    )
                                   
                                ):(
                                    width > 689 ? (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                   
                                        <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">{t("industries.hotel.header")}</span>
                                         </h1>
                                    ): (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px] sm:text-4xl">
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0 sm:h-[40px]">Khách Sạn Và</span><br />
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0 sm:h-[40px]">Nhà Hàng</span>
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
                                width > 613 ? (
                                <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                                   
                                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] ">  {t("industries.hotel.headernone")}</span>
                                   
                                </h1>
                                ) : (
                                    <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] sm:text-4xl">
                                        <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)]  sm:h-[40px]">Hotels and</span><br />
                                        <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)]  sm:h-[40px] lowercase">Restaurants</span>
                                    </h1>
                                )
                                
                            ) : (
                                width > 689 ? (
                                    <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px]">
                               
                                    <span className="inline-block  border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">{t("industries.hotel.headernone")}</span>
                                     </h1>
                                ): (
                                    <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px] sm:text-4xl">
                                        <span className="inline-block  border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0 sm:h-[40px]">Khách sạn và</span><br />
                                        <span className="inline-block  border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0 sm:h-[40px]">nhà hàng</span>
                                     </h1>
                                )
                               
                             )} 
                            </h1>
                           
                           
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.hotel.inthe")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.hotel.when")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.hotel.for")}</p>

                            
                        </div>
                    </div>
            </div>
            <div ref={targetDivRef} className={`animation-fadeIn bg-white`}>
            {isVisible && (
            <div className=" animate-show-nav duration-300">
            <div className="bg-white relative pb-[50px] ">
                <img src={choose} className="w-[574px] h-[737px] absolute top-[-50px] left-[-50px]" alt="" />
                <img src={choose1} className="w-[574px] h-[737px] absolute top-[1100px] right-0 " alt="" />

                    <div className=" mx-auto  max-w-[1040px] items-center pt-[50px] flex flex-wrap gap-[15px] lg:justify-center lg:flex-col relative ">
                                <UseCaseRight
                                    imageSrc={calender}
                                    title={t("industries.hotel.organiza")}
                                    description={t("industries.hotel.organizades")}
                                    number={"1"}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender1}
                                    title={t("industries.hotel.visitor")}
                                    description={t("industries.hotel.visitordes")}
                                    number={"2"}
                                />
                                 <UseCaseRight
                                    imageSrc={visitor}
                                    title={t("industries.hotel.visitorCheckin")}
                                    description={t("industries.hotel.visitorCheckindes")}
                                    number={"3"}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender4}
                                    title={t("industries.hotel.ending")}
                                    description={t("industries.hotel.endingdes")}
                                    number={"4"}
                                />
                                 <UseCaseRight
                                    imageSrc={calender}
                                    title={t("industries.hotel.bank")}
                                    description={t("industries.hotel.bankdes")}
                                    number={"1"}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender1}
                                    title={t("industries.hotel.customer")}
                                    description={t("industries.hotel.customerdes")}
                                    number={"2"}
                                />
                                 <UseCaseRight
                                    imageSrc={visitor1}
                                    title={t("industries.hotel.customvisit")}
                                    description={t("industries.hotel.customvisitdes")}
                                    number={"3"}
                                />
                                   <UseCaseLeft
                                    imageSrc={bus}
                                    title={t("industries.hotel.leaving")}
                                    description={t("industries.hotel.leavingdes")}
                                    number={"4"} />
                                      <UseCaseRight
                                    imageSrc={calender}
                                    title={t("industries.hotel.hotel")}
                                    description={t("industries.hotel.hoteldes")}
                                    number={"1"}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender1}
                                    title={t("industries.hotel.guest")}
                                    description={t("industries.hotel.guestdes")}
                                    number={"2"}
                                />
                                 <UseCaseRight
                                    imageSrc={visitor}
                                    title={t("industries.hotel.guestCheck")}
                                    description={t("industries.hotel.guestCheckdes")}
                                    number={"3"}
                                />
                                   <UseCaseLeft
                                    imageSrc={run}
                                    title={t("industries.hotel.endingStay")}
                                    description={t("industries.hotel.endingStaydes")}
                                    number={"4"} />

                           
                    </div>
            </div>
            </div> 
            )}              
            </div>
          

           
            <QuickStart></QuickStart>

            <div className="relative bg-white pb-[50px]">
            <img src={choose} className="w-[574px] h-[737px] absolute top-[-50px] left-[-50px]" alt="" />

            <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[100px] flex flex-col items-center relative ">
                  <Headerkeyfeatures nameHader={t("industries.retailworkforce.key")} 
                                          underlineHeader={t("industries.retailworkforce.feature")}
                                          desHeader={t("industries.hotel.fearuresdes")}
                                          descac={t("industries.retailworkforce.cac")}
                                          tinh={t("industries.retailworkforce.tinh")}
                                          check={false}
                    />
                        <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <Features 
                                image={online}
                                title={t("industries.hotel.bio")}
                                des={t("industries.hotel.biodes")}
                            />
                            <Features 
                                image={secure}
                                title={t("industries.hotel.automated")}
                                des={t("industries.hotel.automateddes")}
                            />
                             <Features 
                                image={safe}
                                title={t("industries.hotel.custom")}
                                des={t("industries.hotel.customdes")}
                            />
                        </div>


                        
            </div>
            
            </div>
            <Question />
                
                
                
               
                
          

           
        </>
    )
}
