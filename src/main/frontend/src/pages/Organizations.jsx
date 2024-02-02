import { useTranslation } from "react-i18next"
import { QuickStart } from "../components/common";
import choose from "../assets/img/products/facialsensevisitormanagement/choose-shape.png.png"
import point from "../assets/img/industries/organization/point.svg.png"
import point1 from "../assets/img/industries/organization/point1.png"
import leadfrom from "../assets/img/industries/organization/lead-form.svg.png"
import leadtobuyer from "../assets/img/industries/organization/lead-to-buyer.svg.png"
import imagepint from "../assets/svg/img-ponit.svg"
// import { useWindowSize } from "@uidotdev/usehooks";

export const Organizations = () => {
    const { t,i18n }  = useTranslation();
    // const { width } = useWindowSize()
    return (
        <>
            <div className=" bg-cover bg-center h-[360px]">
                    <div className="  max-w-[1300px] mx-auto pl-[10px] pt-[68px] minxl:pt-[100px]">
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
                    <div className="max-w-[1300px] py-[50px] ] mx-auto relative">
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
            <QuickStart />
            <div className="bg-white relative">
                <img src={choose} className="w-[574px] h-[737px] absolute top-[-50px] left-[-50px]" alt="" />
                <div className="absolute top-[655px] left-[55%] transform translate-x-[-49%] "><object type="image/svg+xml" data={imagepint}>

                </object></div>
                <img className="absolute top-[625px] left-[50%] transform translate-x-[-49%]" alt="Before" src={point1} />
                <div className="absolute top-[142px] left-1/2 w-[3px] bg-gradient-to-b from-teal-500 via-teal-300 to-transparent h-[4491px]">
  
 
                 </div>
                 <div className="  max-w-[1300px]  mx-auto py-[50px] flex flex-col items-center relative ">
                        <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] ">
                                    <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] mr-[16px]"> {t("industries.organizations.usecase")}   </span>
                                    {t("industries.organizations.usecaseheader")}   
                         </h1>
                         <img className=" absolute top-[137px] right-[300px]"  alt="Before" src={point} />
                         
                        
                </div>
                
                <div className="px-4 relative max-w-[1300px] mt-[420px]  mx-auto ">
                    <div>
                                <h1 className=" font-bold text-[22px] text-[#37474F]  ">{t("industries.organizations.employee")}   </h1>
                                <p className="font-normal mt-[40px] w-[434px] h-[123px] text-[16px] text-[#37474F] ">{t("industries.organizations.employeedes")}</p>
                                 
                    </div>
                    
                    
                </div>
                <div className=" relative  mt-[420px]  mx-auto ">
                <div className="absolute top-[240px] scale-x-[-1] right-[55%] transform -translate-x-[-49%] "><object type="image/svg+xml" data={imagepint}>
                </object></div>
                <img className="absolute top-[210px] left-[50%] transform translate-x-[-49%]" alt="Before" src={point1} />
                    <div className="flex justify-between items-center">
                        <img  className="minxl:w-[700px] minxl:h-[500px]" src={leadfrom} alt="" />
                        <div className="pr-[100px]  " >
                                    <h1 className=" font-bold text-[22px] text-[#37474F]  ">{t("industries.organizations.employee")}   </h1>
                                    <p className="font-normal mt-[40px] w-[434px] h-[123px] text-[16px] text-[#37474F] ">{t("industries.organizations.employeedes")}</p> 
                        </div>
                    </div>
                   
                    
                    
                </div>
                <div className=" relative  mt-[420px]  mx-auto ">
                <div className="absolute top-[240px]  left-[55%] transform translate-x-[-49%] "><object type="image/svg+xml" data={imagepint}>
                </object></div>
                <img className="absolute top-[210px] left-[50%] transform translate-x-[-49%]" alt="Before" src={point1} />
                    <div className="flex justify-between items-center">
                    <div className="px-[140px]" >
                                    <h1 className=" font-bold text-[22px] text-[#37474F]  ">{t("industries.organizations.employee")}   </h1>
                                    <p className="font-normal mt-[40px] w-[434px] h-[123px] text-[16px] text-[#37474F] ">{t("industries.organizations.employeedes")}</p> 
                        </div>
                        <img  className="minxl:w-[700px] minxl:h-[500px]" src={leadtobuyer} alt="" />
                        
                    </div>
                   
                    
                    
                </div>
                <div className=" relative  mt-[420px]  mx-auto ">
                <div className="absolute top-[240px] scale-x-[-1] right-[55%] transform -translate-x-[-49%] "><object type="image/svg+xml" data={imagepint}>
                </object></div>
                <img className="absolute top-[210px] left-[50%] transform translate-x-[-49%]" alt="Before" src={point1} />
                    <div className="flex justify-between items-center">
                        <img  className="minxl:w-[700px] minxl:h-[500px]" src={leadfrom} alt="" />
                        <div className="pr-[100px]  " >
                                    <h1 className=" font-bold text-[22px] text-[#37474F]  ">{t("industries.organizations.employee")}   </h1>
                                    <p className="font-normal mt-[40px] w-[434px] h-[123px] text-[16px] text-[#37474F] ">{t("industries.organizations.employeedes")}</p> 
                        </div>
                    </div>
                   
                    
                    
                </div>
              
               
            </div>
        </>
    )
}