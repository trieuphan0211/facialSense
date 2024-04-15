import { useTranslation } from "react-i18next"
import { useWindowSize } from "@uidotdev/usehooks";
import { useRef} from "react";
import useIntersectionObserver from "../../../components/useIntersectionObserver/useIntersectionObserver";
import { Question, QuickStart } from "../../../components/common";
import choose from "../../../assets/img/products/facialsensevisitormanagement/choose-shape.png.png"
import calender from "../../../assets/img/industries/organization/calender.png"
import calender1 from "../../../assets/img/industries/organization/calender2.png"
import visitor from "../../../assets/img/industries/organization/calender3.png"
import calender4 from "../../../assets/img/industries/organization/door.png"
import {  UseCaseLeft, UseCaseRight } from "../../../components/visitor";
import choose1 from "../../../assets/img/products/facialsensevisitormanagement/choose.png";
import { Features, Headerkeyfeatures } from "../../../components/bioatendance";
import secure from "../../../assets/img/industries/organization/data.png";
import safe from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_isometric_3d.png";
import online from "../../../assets/img/industries/organization/bio.png";
export const Banking = () => {
    const { t,i18n }  = useTranslation();
    const { width } = useWindowSize() 
     // Tạo một ref để tham chiếu đến thẻ div cần cuộn đến
  const targetDivRef = useRef(null);
  const isVisible = useIntersectionObserver(targetDivRef);

    return(
        <>
            <div className=" bg-cover bg-center h-[260px]">
                    <div className="  max-w-[1300px] mx-auto pl-[10px] sm:pt-[18px] pt-[68px] ">
                            {
                                i18n.language === "en" ? (
                                    width > 840 ? (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                        <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">{t("industries.banking.header")}</span>
                                         </h1>
                                    ) : (
                                        width > 550 ? (
                                            <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Banking or Financial</span><br />
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Institutes</span>
                                             </h1>
                                        ) : (
                                            <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Banking or </span><br />
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Financial</span><br />
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Institutes</span>
                                             </h1>
                                        )
                                       
                                    )
                                   
                                ):(
                                    width > 1068 ? (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                        <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">{t("industries.banking.header")}</span>
                                         </h1>
                                    ) : (
                                        width > 559 ? (
                                            <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Ngân Hàng Hoặc Các</span><br />
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Tổ Chức Tài Chính</span>
                                             </h1>
                                        ) : (
                                            <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Ngân Hàng </span><br />
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Hoặc Các</span><br />
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Tổ Chức </span><br />
                                            <span className="inline-block border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">Tài Chính</span>
                                             </h1>
                                        )
                                       
                                    )
                                )
                            }
                    </div>
                   
                
            </div>
            <div className=" bg-white">
                    <div className="max-w-[1300px] pt-[100px] pb-[50px] mx-auto relative">
                        <div className="ml-[10px]">
                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1110px] leading-[60px]">
                            {
                                i18n.language === "en" ? (
                                    width > 840 ? (
                                        <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1110px] leading-[60px]">
                                        <span className="inline-block  border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">Banking or financial institutes</span>
                                         </h1>
                                    ) : (
                                        width > 550 ? (
                                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px]">
                                            <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">Banking or financial</span><br />
                                            <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">institutes</span>
                                             </h1>
                                        ) : (
                                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px]">
                                            <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">Banking or </span><br />
                                            <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">financial</span><br />
                                            <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">institutes</span>
                                             </h1>
                                        )
                                       
                                    )
                                   
                                ):(
                                    width > 1068 ? (
                                        <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px]">
                                        <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">Ngân hàng hoặc các tổ chức tài chính</span>
                                         </h1>
                                    ) : (
                                        width > 559 ? (
                                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px]">
                                            <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">Ngân hàng hoặc các</span><br />
                                            <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">tổ chức tài chính</span>
                                             </h1>
                                        ) : (
                                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px]">
                                            <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">Ngân hàng </span><br />
                                            <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">hoặc các</span><br />
                                            <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">tổ chức </span><br />
                                            <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0">tài chính</span>
                                             </h1>
                                        )
                                       
                                    )
                                )
                            }
                            </h1>
                           
                           
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.banking.finacial")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.banking.there")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.banking.checkid")}</p>

                            
                        </div>
                    </div>
            </div>
            <div ref={targetDivRef} className={`animation-fadeIn bg-white`}>
            {isVisible && (
            <div className=" animate-show-nav duration-300">
            <div className="bg-white relative pb-[50px] ">
                <img src={choose1} className="w-[574px] h-[737px] absolute top-[-120px] right-0" alt="" />
                
                    <div className=" mx-auto  max-w-[1040px] items-center flex gap-[15px] flex-wrap  lg:justify-center lg:flex-col relative ">
                                <UseCaseRight
                                    imageSrc={calender}
                                    title={t("industries.banking.bank")}
                                    description={t("industries.banking.bankdes")}
                                    number={"1"}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender1}
                                    title={t("industries.banking.custom")}
                                    description={t("industries.banking.customdes")}
                                    number={"2"}
                                />
                                 <UseCaseRight
                                    imageSrc={visitor}
                                    title={t("industries.banking.customvisit")}
                                    description={t("industries.banking.customvisitdes")}
                                    number={"3"}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender4}
                                    title={t("industries.banking.leave")}
                                    description={t("industries.banking.leavedes")}
                                    number={"4"}
                                />

                           
                    </div>
            </div>
            </div> 
            )}              
            </div>
            <QuickStart></QuickStart>
            <div className="relative bg-white pb-[50px]">
            <img src={choose} className="w-[574px] h-[737px] absolute top-[-50px] left-0 " alt="" />

            <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[100px] flex flex-col items-center relative ">
                  <Headerkeyfeatures nameHader={t("industries.retailworkforce.key")} 
                                          underlineHeader={t("industries.retailworkforce.feature")}
                                          desHeader={t("industries.banking.fearuresdes")}
                                          descac={t("industries.retailworkforce.cac")}
                                          tinh={t("industries.retailworkforce.tinh")}
                                          check={false}
                    />
                        <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <Features 
                                image={online}
                                title={t("industries.banking.biometric")}
                                des={t("industries.banking.biometricdes")}
                            />
                            <Features 
                                image={safe}
                                title={t("industries.banking.contact")}
                                des={t("industries.banking.contactdes")}
                            />
                             <Features 
                                image={secure}
                                title={t("industries.banking.data")}
                                des={t("industries.banking.datades")}
                            />
                        </div>


                        
            </div>
            
            </div>
            <Question />
        </>
    )
}