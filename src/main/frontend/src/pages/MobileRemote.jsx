
import choose1 from "../assets/img/products/facialsensevisitormanagement/choose.png";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "@uidotdev/usehooks";
import { Question } from "../components/common";
import {  Headerkeyfeatures, Features, Whychoose } from "../components/bioatendance/"
import multiple from "../assets/img/industries/biometricoffice/multiple.png"
import sabiofe from "../assets/img/products/facialsensevisitormanagement/icon_brain_visitor_3d.png"
import left from "../assets/img/products/facialsensevisitormanagement/about-left.png.png";
import right from "../assets/img/products/facialsensevisitormanagement/about-shape.png.png";
import { CloudButton, LeafButton } from "../components/button";
import liveness from "../assets/img/industries/biometricoffice/liveness.png"
import { Link } from 'react-router-dom';

export const MobileRemote = () => {
    const { t, i18n } = useTranslation() 
    const { width } = useWindowSize() 
    const generateHeader = (title, subTitle, borderColor, textColor) => (
        <div className="inline-block 460sm:block">
          <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-${textColor} font-extrabold leading-[60px] border-${borderColor}`}>
            {title}
          </h1>
        
          {subTitle && <br />}
          {subTitle && (
            <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-${textColor} font-extrabold leading-[60px] border-${borderColor}`}>
              {subTitle} 
              
            </h1>
          )}
          {
            checkne && (
                <>{t("industries.mobileandremote.headermobile")}</>
            )
          }
        </div>
    );




    let content ;
    let content1 ;
    let checkne = false;
    if (width >= 735) {
        console.log(window.innerWidth)
        content = i18n.language === "en" ? (
            
            generateHeader(t("industries.mobileandremote.header"),undefined,"[#B9AAFD]", 'white')
            ) : (
            <div>
                {width < 983 && width >= 826 && (
                    <div>
                        <h1 className="inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]">
                        Nhân Viên Di Động Và Làm Việc
                      
                        </h1>
                        <br />
                        <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]`}>
                            Từ Xa
                        </h1>
                        
                       
                    </div>
                )}
                {
                    width < 826 && (
                        <div>
                        <h1 className="inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]">
                        Nhân Viên Di Động Và Làm
                      
                        </h1>
                        <br />
                        <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]`}>
                        Việc Từ Xa
                        </h1>
                        
                      
                    </div>
                    )
                }
                {width > 982 && (generateHeader("Nhân Viên Di Động Và Làm Việc Từ Xa",undefined,"[#B9AAFD]", 'white'))}
            </div>
        );
        
        checkne = true;
        content1 = i18n.language === "en" ? ( generateHeader(t("industries.mobileandremote.header"),undefined,"[var(--tree-poppy)]", '[#1C2045]')) : (
            <div>
                {width < 944 && width >= 780 && (
                    <div>
                        <h1 className="inline-block border-b-[10px] h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]">
                        {t("industries.mobileandremote.hadernhan1")}
                      
                        </h1>
                        <br />
                        <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]`}>
                            {t("industries.mobileandremote.tuxa")}
                        </h1>
                        
                        {t("industries.mobileandremote.headermobile")}
                    </div>
                )}
                {
                    width < 780 && (
                        <div>
                        <h1 className="inline-block border-b-[10px] h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]">
                        {t("industries.mobileandremote.hadernhan2")}
                      
                        </h1>
                        <br />
                        <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]`}>
                            {t("industries.mobileandremote.tuxa2")}
                        </h1>
                        
                        {t("industries.mobileandremote.headermobile")}
                    </div>
                    )
                }
                {width > 943 && (generateHeader(t("industries.mobileandremote.header"),undefined,"[var(--tree-poppy)]", '[#1C2045]'))}
            </div>
        );
    } 
    else if (width < 735 ) {
        console.log(width)
        content = i18n.language === "en" ? ( generateHeader(t("industries.mobileandremote.header3"),t("industries.mobileandremote.employee"),"[#B9AAFD]",'white')
        ) : (
            <div>
            {width < 735  && width >= 501 && (
                <div>
                    <h1 className="inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]">
                    Nhân Viên Di Động
                  
                    </h1>
                    <br />
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]`}>
                        Và Làm Việc Từ Xa
                    </h1>
                   
                </div>
            )}
            {
                width < 501 && width >= 353 && (
                    <div>
                    <h1 className="inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]">
                         Nhân Viên Di
                  
                    </h1>
                    <br />
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]`}>
                         Động Và Làm
                    </h1>
                    <br />
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]`}>
                        Việc Từ Xa
                    </h1>
                   
                </div>
            )}
            {
                width < 353 && (
                    <div>
                    <h1 className="inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]">
                        Nhân Viên
                  
                    </h1>
                    <br />
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]`}>
                       Di Động
                    </h1>
                    <br />
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]`}>
                       Và Làm
                    </h1>
                    <br />
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]`}>
                       Từ Xa
                    </h1>
                </div>
                )
            }
          
            </div>
        );
        checkne = true;
        
        content1 = i18n.language === "en" ? (
            <div>
                <div>
                <div className="inline-block 460sm:block">
                    <h1 className="inline-block border-b-[10px] h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]">
                        {t("industries.mobileandremote.header3")}
                    </h1>
                   
                    
                    <br />
                
                        <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]`}>
                        {t("industries.mobileandremote.employee")} 
                        
                        </h1>
                        
                        {t("industries.mobileandremote.headermobile")}
                    
                </div>
            
            </div>
        
            </div>
           
          ) : (
            <div>
            {width < 735  && width >= 501 && (
                <div>
                    <h1 className="inline-block border-b-[10px] h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]">
                    {t("industries.mobileandremote.headernhan")}
                  
                    </h1>
                    <br />
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl ext-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]`}>
                        {t("industries.mobileandremote.xa")}
                    </h1>
                    {t("industries.mobileandremote.headermobile")}
                </div>
            )}
            {
                width < 501 && width >= 353 && (
                    <div>
                    <h1 className="inline-block border-b-[10px] h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]">
                    {t("industries.mobileandremote.employee")}
                  
                    </h1>
                    <br />
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl ext-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]`}>
                        {t("industries.mobileandremote.mobile1")}
                    </h1>
                    <br />
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl ext-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]`}>
                        {t("industries.mobileandremote.lam")}
                    </h1>
                    {t("industries.mobileandremote.headermobile")}
                </div>
                )
            }
             {
                width < 353 && (
                    <div>
                    <h1 className="inline-block border-b-[10px] h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]">
                        Nhân viên
                  
                    </h1>
                    <br />
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl ext-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]`}>
                       di động
                    </h1>
                    <br />
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl ext-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]`}>
                       và làm
                    </h1>
                    <br />
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl ext-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)]`}>
                       từ xa
                    </h1>
                    {t("industries.mobileandremote.headermobile")}
                </div>
                )
            }
            </div>
          );
        }
     
  
    return (
        <>
            <div className=" bg-cover bg-center h-[360px]" style={{ backgroundImage: "url('/src/assets/img/industries/biometricoffice/group.png')" }}>
                    <div className="  max-w-[1300px] mx-auto pl-[10px] pt-[68px] minxl:pt-[100px]">
                    {content}
                    </div>
            </div>
            <div className=" bg-white">
                        <div className="max-w-[1300px] py-[50px] mx-auto relative">
                            <div className="ml-[10px]">
                                <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1110px] leading-[60px]">
                                    {content1}
                                </h1>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
                              {t("industries.mobileandremote.recognise")}
                           </p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
                               {t("industries.mobileandremote.wewant")} <strong>{t("industries.mobileandremote.thecheckid")}</strong> {t("industries.mobileandremote.toeffect")}
                            </p>
                           <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
                           {t("industries.mobileandremote.thisall")} <strong>{t("industries.mobileandremote.yourbussiness")}</strong> {t("industries.mobileandremote.and")}
                           <strong>{t("industries.mobileandremote.effect")}</strong>  {t("industries.mobileandremote.workfore")}
                           </p>
                           <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
                              {t("industries.mobileandremote.thesystem")}
                           </p>
                            </div>
                        </div>
            </div>      
            <div className=" bg-[#293990] relative ">
                    <img src={left} className=" absolute top-0 left-0 "></img>
                    <img src={right} className=" absolute right-0 bottom-0 "></img>
                    <div className=" flex items-center justify-center">
                        <div className="flex flex-col gap-[30px] py-[50px] lg:px-[35px]  px-[250px] items-center sm:items-stretch ">
                            <h1 className="text-center text-[#eef3fa] font-extrabold  text-[38px] leading-[56px]" >{t("products.facialsensevisitormanagement.quickstartguide.header")}</h1>
                            <p className="text-center text-[#eef3fa] font-normal  text-[16px] leading-[24px] max-w-[540px]">{t("industries.mobileandremote.quickstart")}</p>
                            <div className="flex  gap-6 xl:justify-center sm:flex-col ">
                            <CloudButton title={t("products.facialsensevisitormanagement.quickstartguide.cloud")} />
                            <LeafButton title={t("products.facialsensevisitormanagement.quickstartguide.onpremises")} />
                            </div>
                        </div>
                    </div>
             </div>
            <div className="relative">
                <img src={choose1} className="w-[574px] h-[737px] absolute top-[-50px] right-0 " alt="" />
                <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[50px] flex flex-col items-center relative ">

                    <Headerkeyfeatures nameHader1={t("industries.mobileandremote.keyfeaturesdes")} 
                                        underlineHeader={t("industries.mobileandremote.keyfeatures")}
                                        desHeader={t("industries.mobileandremote.carefull")}
                                        descac={t("industries.mobileandremote.features")}
                                        tinh={t("industries.mobileandremote.nang")}
                                        check={true}
                    />
                      <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <Features 
                                image={multiple}
                                des={t("industries.mobileandremote.nospecificdes")}
                                title={t("industries.mobileandremote.nospecific")}
                            />
                             <Features 
                                image={sabiofe}
                                des={t("industries.mobileandremote.realdes")}
                                title={t("industries.mobileandremote.real")}
                            />
                             <Features 
                                image={liveness}
                                des={t("industries.mobileandremote.livenessdes")}
                                title={t("industries.mobileandremote.liveness")}
                            />
                        </div>

                        <p className="text-center italic font-light text-[#3A505f] relative text-[16px] md:px-[0px] px-[150px]">{t("industries.mobileandremote.footer")}
                        <Link style={{ color: '#3A505f', textDecoration: 'underline' }} to="https://www.biometricsupply.com/" > https://www.biometricsupply.com/</Link>
                        </p>
                </div>
            </div>
            <div className="bg-[#F1F6FA] ">
                <div className=" mx-auto max-w-[1300px] pt-[50px] pb-[90px] flex flex-col gap-[50px] px-4 ">
                    <div className=" relative">{i18n.language === "en" ? (
                         width > 374 ?
                            (
                                <div className=" flex flex-col gap-[15px] items-center ">
                                    <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px] leading-[60px] ">
                                        <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                                        {t("industries.biometricoffice.whychossetitle")}
                                        </span>
                                        {t("industries.mobileandremote.whychosse")}
                                    </h1>
                                    
                                </div>
                            ) :
                            (
                                <div className=" flex flex-col gap-[15px] items-center ">
                                    <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px] leading-[60px] ">
                                        <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                                        {t("industries.biometricoffice.why")}
                                        </span>
                                        <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                                        {t("industries.biometricoffice.choose")}
                                        </span>
                                        <br />
                                        {t("industries.mobileandremote.whychoose")}
                                        
                                      
                                    </h1>
                                    
                                </div>
                            ) 
                        
                       
                            ) : (
                                width > 374 ? (
                        <div className=" flex flex-col gap-[15px] items-center " >
                            <h1 className="text-center text-5xl leading-tight text-[#1C2045] font-extrabold ">
                                <span className="border-b-[10px]  inline-block h-[50px] border-[var(--tree-poppy)]">
                                {t("industries.biometricoffice.whychossetitle")}
                                </span>
                                {t("industries.mobileandremote.whychoose")}
                            </h1>
                        
                        </div> ) : (
                             <div className=" flex flex-col gap-[15px] items-center ">
                             <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px] leading-[60px] ">
                                 <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                                 {t("industries.biometricoffice.why")}
                                 </span>
                                 <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                                 {t("industries.biometricoffice.choose")}
                                 </span>
                                 <br />
                                 {t("industries.mobileandremote.whychoose")}
                                 
                               
                             </h1>
                             
                         </div>
                        )
                            )}
                    
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <div className=" mx-auto flex gap-[20px] sm:flex-col  ">

                            <Whychoose 
                                title={t("industries.mobileandremote.increasetem")}
                                des={t("industries.biometricoffice.increaseemploydes")}
                            />
                            <Whychoose 
                                title={t("industries.biometricoffice.streamline")}
                                des={t("industries.biometricoffice.streamlinedes")}
                            />
                            <Whychoose 
                                title={t("industries.biometricoffice.reduce")}
                                des={t("industries.biometricoffice.reducedes")}
                            />
                        </div>
                            <div className=" mx-auto flex gap-[20px] sm:flex-col  ">
                            <Whychoose 
                                title={t("industries.biometricoffice.increaseproductivity")}
                                des={t("industries.biometricoffice.increaseproductivitydes")}
                            />
                            <Whychoose 
                                title={t("industries.biometricoffice.cost")}
                                des={t("industries.biometricoffice.costdes")}
                            />
                            <Whychoose 
                                title={t("industries.biometricoffice.compre")}
                                des={t("industries.biometricoffice.comperdes")}
                            />
                    </div>
                    </div>
                    
                </div>
            </div>
            <Question />

        </>
    )
}