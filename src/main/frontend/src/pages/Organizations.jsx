import { useTranslation } from "react-i18next"
import { QuickStart } from "../components/common";
import choose from "../assets/img/products/facialsensevisitormanagement/choose-shape.png.png"
import calender from "../assets/img/industries/organization/calender.png"
import calender1 from "../assets/img/industries/organization/calender2.png"
import visitor from "../assets/img/industries/organization/calender3.png"
import calender4 from "../assets/img/industries/organization/calender4.png"
import {  UseCaseLeft, UseCaseRight } from "../components/visitor";


// import { useWindowSize } from "@uidotdev/usehooks";

export const Organizations = () => {
    const { t,i18n }  = useTranslation();
    // const { width } = useWindowSize()
    return (
        <>
            <div className=" bg-cover bg-center h-[260px]">
                    <div className="  max-w-[1300px] mx-auto pl-[10px] pt-[68px] ">
                            {
                                i18n.language === "en" ? (
                                    <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                    <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">{t("industries.organizations.header")}</span>
                                     </h1>
                                ):(
                                    <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                   
                                    <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[#2B159C] sm:ml-0">{t("industries.organizations.header")}</span>
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
                                <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                                     {t("industries.organizations.headerdes")}
                                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] lowercase">  {t("industries.organizations.header")}</span>
                                   
                                </h1>
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
            <div className="bg-white relative pb-[50px] ">
                <img src={choose} className="w-[574px] h-[737px] absolute top-[-50px] left-[-50px]" alt="" />
                
                    <div className="  max-w-[1300px] mx-auto py-[50px] flex flex-col items-center relative ">
                            <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                                        <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] mr-[16px]"> {t("industries.organizations.usecase")}   </span>
                                        {t("industries.organizations.usecaseheader")}   
                            </h1>
                    </div>
                    <div className=" mx-auto max-w-[1040px] items-center flex flex-wrap   relative ">
                                <UseCaseRight
                                    imageSrc={calender}
                                    title={t("industries.organizations.employee")}
                                    description={t("industries.organizations.employeedes")}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender1}
                                    title={t("industries.organizations.consumer")}
                                    description={t("industries.organizations.consumerdes")}
                                />
                                 <UseCaseRight
                                    imageSrc={visitor}
                                    title={t("industries.organizations.fresh")}
                                    description={t("industries.organizations.freshdes")}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender4}
                                    title={t("industries.organizations.leads")}
                                    description={t("industries.organizations.leadsdes")}
                                />

                           
                    </div>
            </div>
            <QuickStart></QuickStart>
                
                
                
               
                
          

           
        </>
    )
}