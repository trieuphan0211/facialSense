
import { useRef } from "react";
import useIntersectionObserver from "../../../components/useIntersectionObserver/useIntersectionObserver";
import { useTranslation } from "react-i18next"
import { Question, QuickStart } from "../../../components/common";
import { useWindowSize } from "@uidotdev/usehooks";
import visitor1 from "../../../assets/img/industries/organization/calender3.png"

import choose from "../../../assets/img/products/facialsensevisitormanagement/choose.png";
import calender from "../../../assets/img/industries/organization/calender.png"
import calender1 from "../../../assets/img/industries/organization/calender2.png"
import {  UseCaseLeft, UseCaseRight } from "../../../components/visitor";
import choose1 from "../../../assets/img/products/facialsensevisitormanagement/choose-shape.png.png"
import { Features, Headerkeyfeatures } from "../../../components/bioatendance";
import online from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_isecureometric_3d.png";
import secure from "../../../assets/img/industries/organization/overhead.png";
import safe from "../../../assets/img/industries/organization/feeadback.png";



// import { useWindowSize } from "@uidotdev/usehooks";

export const CustomerSupport = () => {
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
                                    width > 568 ? (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                        <span className="inline-block border-b-[10px] h-[55px] border-[#2B159C] sm:ml-0">{t("industries.customer.header")}</span>
                                         </h1>
                                    ): (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px] sm:text-4xl">
                                        <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0 sm:h-[40px]">Customer</span><br />
                                        <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0 sm:h-[40px]">Support</span>
                                         </h1>
                                    )
                                   
                                ):(
                                    width > 568 ? (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                   
                                        <span className="inline-block border-b-[10px] h-[55px] border-[#2B159C] sm:ml-0">{t("industries.customer.header")}</span>
                                         </h1>
                                    ): (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px] sm:text-4xl">
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0 sm:h-[40px]">Hỗ Trợ</span><br />
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0 sm:h-[40px]">Khách Hàng</span>
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
                                width > 568 ? (
                                <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                                   
                                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px]">  {t("industries.customer.headernone")}</span>
                                   
                                </h1>
                                ) : (
                                    <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] sm:text-4xl">
                                        <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px]">Customer</span><br />
                                        <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px] lowercase">support</span>
                                    </h1>
                                )
                                
                            ) : (
                                width > 405 ? (
                                    <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px] sm:text-4xl">
                               
                                    <span className="inline-block  border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0 sm:h-[40px]">{t("industries.customer.headernone")}</span>
                                     </h1>
                                ): (
                                    <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px] sm:text-4xl">
                                        <span className="inline-block  border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0 sm:h-[40px]">Hỗ trợ</span><br />
                                        <span className="inline-block  border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0 sm:h-[40px]">khách hàng</span>
                                     </h1>
                                )
                               
                             )} 
                            </h1>
                           
                           
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.customer.allbuissess")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.customer.using")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.customer.customer")}</p>


                            
                        </div>
                    </div>
            </div>
            <div ref={targetDivRef} className={`animation-fadeIn bg-white`}>
            {isVisible && (
            <div className=" animate-show-nav duration-300">
            <div className="bg-white relative pb-[50px] ">
                <img src={choose} className="w-[574px] h-[737px] absolute top-[-100px]  right-0" alt="" />

                    <div className=" mx-auto  max-w-[1040px] items-center pt-[50px] flex flex-wrap gap-[15px] lg:justify-center lg:flex-col relative ">
                                      <UseCaseRight
                                    imageSrc={calender}
                                    title={t("industries.customer.create")}
                                    description={t("industries.customer.createdes")}
                                    number={"1"}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender1}
                                    title={t("industries.customer.resception")}
                                    description={t("industries.customer.resceptiondes")}
                                    number={"2"}
                                />
                                 <UseCaseRight
                                    imageSrc={visitor1}
                                    title={t("industries.customer.address")}
                                    description={t("industries.customer.addressdes")}
                                    number={"3"}
                                />
                                 

                           
                    </div>
            </div>
            </div> 
            )}              
            </div>
          

           
            <QuickStart></QuickStart>

            <div className="relative bg-white pb-[50px]">
            <img src={choose1} className="w-[574px] h-[737px] absolute top-[-50px] left-[-50px]" alt="" />

            <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[100px] flex flex-col items-center relative ">
                  <Headerkeyfeatures nameHader={t("industries.retailworkforce.key")} 
                                          underlineHeader={t("industries.retailworkforce.feature")}
                                          desHeader={t("industries.customer.featuredes")}
                                          descac={t("industries.retailworkforce.cac")}
                                          tinh={t("industries.retailworkforce.tinh")}
                                          check={false}
                    />
                        <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <Features 
                                image={online}
                                title={t("industries.customer.auto")}
                                des={t("industries.customer.autodes")}
                            />
                            <Features 
                                image={secure}
                                title={t("industries.customer.overhead")}
                                des={t("industries.customer.overheaddes")}
                            />
                             <Features 
                                image={safe}
                                title={t("industries.customer.feedback")}
                                des={t("industries.customer.feedbackdes")}
                            />
                        </div>


                        
            </div>
            
            </div>
            <Question />
                
                
                
               
                
          

           
        </>
    )
}
