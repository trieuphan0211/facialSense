
import { useTranslation } from "react-i18next"
import { useWindowSize } from "@uidotdev/usehooks";
import { LeafButton } from "../../../components/button";
import { Question, QuickStart } from "../../../components/common";

import {  Headerkeyfeatures, Features, Whychoose } from "../../../components/bioatendance";
import choose1 from "../../../assets/img/products/facialsensevisitormanagement/choose.png";
import remote from "../../../assets/img/industries/biometricoffice/remoteservice_3d.png";
import multiple from "../../../assets/img/industries/biometricoffice/multiple.png"
import liveness from "../../../assets/img/industries/biometricoffice/liveness.png"
import nore from "../../../assets/img/industries/biometricoffice/norequi.png"
import locaiton from "../../../assets/img/industries/biometricoffice/locationservice.png"
import compre from "../../../assets/img/industries/biometricoffice/compreservice_3d.png"

import { Link } from 'react-router-dom';
import { SingleItem } from "../../../components/testimonials";



// Carousel

export const Service = () => {
    const { t,i18n }  = useTranslation();
    const { width } = useWindowSize()



    const contentHeading = (title , subtitle, border, text) => (
        <div>
            
             <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-${text} font-extrabold leading-[60px] border-${border} sm:h-[40px] sm:text-4xl`}>
                    {title}
            </h1>
            {subtitle && <br />}
            {
                subtitle && (
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-${text} font-extrabold leading-[60px] border-${border} sm:h-[40px] sm:text-4xl`}>
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
           contentHeading(t("industries.service.header2"), t("industries.service.hopitalup"), "[#B9AAFD]", "white") 
       )
    }
    return (
        <>
            <div className=" bg-cover bg-center h-[360px]" style={{ backgroundImage: "url('/src/assets/img/industries/biometricoffice/group.png')" }}>
                    <div className="  max-w-[1300px] mx-auto pl-[10px] pt-[68px] minxl:pt-[100px] xl:pt-[115px] 460sm:pt-[105px]">
                            {
                               content
                            }
                    </div>
                   
                
            </div>
            <div className=" bg-white">
                    <div className="max-w-[1300px] py-[50px] mx-auto relative">
                        <div className="ml-[10px]">
                            {
                                i18n.language === "en" ? (
                                    <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px] 460sm:text-4xl xl:text-5xl">
                                    {t("industries.service.hopitaldes")}
                                    <span className="inline-block ml-[16px] border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:ml-0 460sm:h-[40px] xl:h-[46px]">{t("industries.service.hopital")}</span>
                                     </h1>
                                ) : (
                                    <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1210px] leading-[60px] sm:text-4xl">
                                    {t("industries.service.hopitaldes")}
                                    <span className="inline-block  border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px] sm:ml-0">{t("industries.service.hopital")}</span>
                                 </h1>
                                )
                            }
                           
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
                                <li className="ml-[34px]">{t("industries.service.simple")}</li>
                                <li className="ml-[34px]">{t("industries.service.intuitive")}</li>
                                <li className="ml-[34px]">{t("industries.service.cusztom")}</li>
                            </ul>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.service.our")}
                            <br />
                            {t("industries.service.simmular")}
                            </p>
                            <LeafButton title={t("industries.service.contactwithstart")}  style={{ marginTop: "30px", boxShadow: "0px 12px 30px 0px rgba(24, 92, 255, 0.18)" }}/>
                        </div>
                    </div>
            </div>
            <QuickStart />
            <div className="relative">
            <img src={choose1} className="w-[574px] h-[737px] absolute top-[-50px] right-0 " alt="" />
                        <div className="  max-w-[1300px]  mx-auto pt-[50px] pb-[50px] flex flex-col items-center relative ">
                            <Headerkeyfeatures 
                                        
                                            underlineHeader={t("industries.healthcare.keyfeatures")}
                                            desHeader={t("industries.service.keyfeaturesdes")}
                                            descac={t("industries.retailworkforce.cac")}
                                            tinh={t("industries.retailworkforce.tinh")}
                                            check={true}
                            />
                            <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                                    <Features 
                                        image={multiple}
                                        des={t("industries.service.multipledes")}
                                        title={t("industries.service.multiple")}
                                    />
                                    <Features 
                                        image={nore}
                                        des={t("industries.service.nospecificdes")}
                                        title={t("industries.service.nospecific")}
                                    />
                                    <Features 
                                        image={liveness}
                                        des={t("industries.service.livenessdes")}
                                        title={t("industries.service.liveness")}
                                    />

                                

                            </div>
                            <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                                    <Features 
                                        image={locaiton}
                                        des={t("industries.service.locationdes")}
                                        title={t("industries.service.location")}
                                    />
                                    
                                    <Features 
                                        image={remote}
                                        des={t("industries.service.remotedes")}
                                        title={t("industries.service.remote")}
                                    />
                                    <Features 
                                        image={compre}
                                        des={t("industries.service.comperdes")}
                                        title={t("industries.service.compre")}
                                    />

                                

                            </div>
                           
                            <p className="text-center italic font-light text-[#3A505f] relative text-[16px] md:px-[0px] px-[150px]">{t("industries.biometricoffice.footer")}
                            <Link style={{ color: '#151686', textDecoration: 'underline' }} to="https://www.mobile-id.vn/" > https://www.mobile-id.vn/</Link>
                            </p>
                        </div>
            </div>
            <div className="bg-[#F1F6FA] ">
                <div className=" mx-auto max-w-[1300px] pt-[50px] pb-[50px] flex flex-col gap-[50px] px-4 ">
                    <div className=" relative">{i18n.language === "en" ? (
                         width > 374 ?
                            (
                                <div className=" flex flex-col gap-[15px] items-center ">
                                    <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px] leading-[60px]  sm:text-4xl">
                                        <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[38px]">
                                        {t("industries.service.benefit")}
                                        </span>
                                        {t("industries.service.foryou")}
                                    </h1>
                                    
                                </div>
                            ) :
                            (
                                <div className=" flex flex-col gap-[15px] items-center ">
                                    <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px] leading-[60px] sm:text-4xl ">
                                        <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[38px]">
                                        {t("industries.service.benefit")}
                                        </span>
                                       
                                        
                                        {t("industries.service.foryou")}
                                        
                                      
                                    </h1>
                                    
                                </div>
                            ) 
                        
                       
                            ) : (
                                width > 374 ? (
                        <div className=" flex flex-col gap-[15px] items-center " >
                            <h1 className="text-center text-5xl leading-tight text-[#1C2045] font-extrabold sm:text-4xl">
                                <span className="border-b-[10px]  inline-block h-[50px] border-[var(--tree-poppy)] sm:h-[40px] ">
                                {t("industries.service.benefit")}
                                </span>
                                {t("industries.service.foryou")}
                            </h1>
                        
                        </div> ) : (
                             <div className=" flex flex-col gap-[15px] items-center ">
                             <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px] leading-[60px] sm:text-4xl ">
                                 <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[40px]">
                                 {t("industries.service.benefit")}
                                 </span>
                                
                                 {t("industries.service.foryou")}
                                 <br />
                                 {/* {t("industries.service.foryou")} */}
                                 
                               
                             </h1>
                             
                         </div>
                        )
                            )}

                    
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <div className=" mx-auto flex gap-[20px] sm:flex-col  ">

                            <Whychoose 
                                title={t("industries.service.employee")}
                                des={t("industries.service.employeedes")}
                            />
                            <Whychoose 
                                title={t("industries.service.streamline")}
                                des={t("industries.service.streamlinedes")}
                            />
                            <Whychoose 
                                title={t("industries.service.reduce")}
                                des={t("industries.service.reducedes")}
                            />
                        </div>
                            <div className=" mx-auto flex gap-[20px] sm:flex-col  ">
                            <Whychoose 
                                title={t("industries.service.increaseproductivity")}
                                des={t("industries.service.increaseproductivitydes")}
                            />
                            <Whychoose 
                                title={t("industries.service.cost")}
                                des={t("industries.service.costdes")}
                            />
                            <Whychoose 
                                title={t("industries.service.compre")}
                                des={t("industries.service.compredes1")}
                            />
                    </div>
                    </div>
                    
                </div>
            </div>
            <div className="bg-white ">
                <div className=" mx-auto max-w-[750px] mds:max-w-[520px]  mdsmin:max-w-[420px] pt-[50px] pb-[50px] flex flex-col gap-[50px] px-4  ">
                    <div>
                    {
                        i18n.language === "en" ? (
                            width >= 741 ? (
                                <div>
                                <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px]   leading-[60px]">
                                {t("industries.service.client")}
                                <span className="border-b-[10px]  ml-[16px] mdsmin:ml-[-8px]  inline-block  h-[50px] border-[var(--tree-poppy)]">
                                {t("industries.service.testimonials")}
                                </span>
                                               
                             </h1>
                                </div>

                               
                            ) : (
                                <div>
                                      <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px]   leading-[60px] sm:text-4xl ">
                                {t("industries.service.client")}
                                <br />
                                <span className="border-b-[10px]  ml-[16px] mdsmin:ml-[-8px]  inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[37px]">
                                {t("industries.service.testimonials")}
                                </span>
                                               
                             </h1>
                                </div>
                            )
                            
                        ):
                        (
                            width >= 348 ? (
                                <div>
                                <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px] leading-[60px] sm:text-4xl">
                            
                                    <span className="border-b-[10px]  mr-[16px] inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[40px]">
                                    {t("industries.service.client")}
                                    </span>
                                    {t("industries.service.testimonials")}     
                                    </h1>
                                </div>
                            ) : (
                                <div>
                                <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px] leading-[60px] sm:text-4xl ">
                            
                                    <span className="border-b-[10px]  mr-[16px] inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[40px]">
                                    {t("industries.service.client")}
                                    </span>
                                 
                                    {t("industries.service.testimonials")}     
                                    </h1>
                                </div>
                            )
                            
                        )
                    }
                   
                    </div>
                    <SingleItem />
                </div>
            </div>
            <Question />
        </>
    )
}