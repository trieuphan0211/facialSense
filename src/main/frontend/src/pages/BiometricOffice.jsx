
// import vector from "../assets/img/industries/biometricoffice/Vector 2.png"
import { useTranslation } from "react-i18next";
import { Question, QuickStart } from "../components/common";
import { Transfrom } from "../components/bioatendance/"
import choose from "../assets/img/products/facialsensevisitormanagement/choose-shape.png.png"
import multiple from "../assets/img/industries/biometricoffice/multiple.png"
import turnkey from "../assets/img/industries/biometricoffice/turnkey.png"
import realtime from "../assets/img/products/facialsensevisitormanagement/icon_brain_realtime_3d.png"
import { Link } from 'react-router-dom';
export const BiometricOffice = () => { 
    const { t, i18n } = useTranslation()
  
    return(
        <>
            <div className=" bg-white">
                    <Transfrom 
                        title= {t("industries.biometricoffice.titletransrom")}
                        titlenormal= {t("industries.biometricoffice.transfrom")}
                        subtitle1= {t("industries.biometricoffice.transfromdes1")}
                        effect={t("industries.biometricoffice.effect")}
                        workfor={t("industries.biometricoffice.workfor")}
                        subtitle2= {t("industries.biometricoffice.transfromdes2")}
                        biomatriciden={t("industries.biometricoffice.biomatriciden")}
                        checkid=  {t("industries.biometricoffice.checkid")}
                        subtitle3={t("industries.biometricoffice.transfromdes3")}
                        userinf={t("industries.biometricoffice.userinf")}
                        around=  {t("industries.biometricoffice.around")}
                        showAdditionalParagraph={false}
                    />
                    
            </div>
            <QuickStart />
            
            <div className="relative">
            <img src={choose} className="w-[574px] h-[737px] absolute top-[-50px] left-[-50px]" alt="" />
            <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[50px] flex flex-col items-center relative ">
              
                        <div className=" relative">{i18n.language === "en" ? (
                    <div className=" flex flex-col gap-[15px] items-center ">
                        <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1000px] leading-[60px] ">
                        
                            {t("industries.biometricoffice.biomatricfeature")}
                            <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                            {t("industries.biometricoffice.biomatricfeaturekey")}
                        
                            </span>
                        </h1>
                        <p className=" text-center  max-w-[806px]">{t("industries.biometricoffice.biomatricfeaturedes")}</p>
                    </div>
                        ) : (
                    <div className=" flex flex-col gap-[15px] items-center " >
                        <h1 className="text-center text-5xl leading-tight text-[#1C2045] font-extrabold ">
                            <span className="border-b-[10px]  inline-block h-[50px] border-[var(--tree-poppy)]">
                            {t("homepage.benefit.header.benefit")}
                            </span>
                            {t("homepage.benefit.header.bio")}
                        </h1>
                        <p className="text-center  max-w-[1000px]">{t("industries.biometricoffice.biomatricfeaturedes")}</p>
                    </div>
                        )}
                
                        </div>

                        <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <div className="p-[20px] w-1/3 smAndmd:w-1/2 sm:w-full  ">
                                            <img className="w-[84px] h-[70px]" src={multiple} alt="" />
                                            <div className="mt-[20px]">
                                                <p className="text-[#1C2045] font-montserrat font-bold">{t("industries.biometricoffice.multiple")}</p>
                                                <p className="mt-[20px] text-[#3A505F] font-montserrat ] font-normal leading-[24px]">{t("industries.biometricoffice.multipledes")}</p>
                                            </div>
                            </div>
                            <div className="p-[20px] w-1/3 smAndmd:w-1/2 sm:w-full  ">
                                        <img className="w-[84px] h-[70px]" src={realtime} alt="" />
                                        <div className="mt-[20px] h-min-[202px]">
                                            <p className="text-[#1C2045] font-montserrat font-bold">{t("industries.biometricoffice.realtime")}</p>
                                            <p className="mt-[20px] text-[#3A505F] font-montserrat font-normal leading-[24px]">{t("industries.biometricoffice.realtimedes")}</p>
                                        </div>
                            </div>
                            <div className="p-[20px] w-1/3 smAndmd:w-1/2 sm:w-full  ">
                                        <img className="w-[84px] h-[70px]" src={turnkey} alt="" />
                                        <div className="mt-[20px]">
                                            <p className="text-[#1C2045] font-montserrat font-bold">{t("industries.biometricoffice.turnkey")}</p>
                                            <p className="mt-[20px] text-[#3A505F] font-montserrat  font-normal leading-[24px]">{t("industries.biometricoffice.turnkeydes")}</p>
                                        </div>
                            </div>
                        </div>

                        <p className="text-center italic font-light text-[#3A505f] relative text-[16px] md:px-[0px] px-[150px]">{t("industries.biometricoffice.footer")}
                        <Link style={{ color: '#151686', textDecoration: 'underline' }} to="https://checkid.mobile-id.vn" > https://checkid.mobile-id.vn</Link>
                        </p>
            </div>
            </div>
            <div className="bg-[#F1F6FA] ">
                <div className=" mx-auto max-w-[1300px] pt-[50px] pb-[90px] flex flex-col gap-[50px] px-4 ">
                    <div className=" relative">{i18n.language === "en" ? (
                        <div className=" flex flex-col gap-[15px] items-center ">
                            <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px] leading-[60px] ">
                                <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                                {t("industries.biometricoffice.whychossetitle")}
                                </span>
                                {t("industries.biometricoffice.whychosse")}
                            </h1>
                            
                        </div>
                            ) : (
                        <div className=" flex flex-col gap-[15px] items-center " >
                            <h1 className="text-center text-5xl leading-tight text-[#1C2045] font-extrabold ">
                                <span className="border-b-[10px]  inline-block h-[50px] border-[var(--tree-poppy)]">
                                {t("industries.biometricoffice.whychossetitle")}
                                </span>
                                {t("industries.biometricoffice.whychosse")}
                            </h1>
                        
                        </div>
                            )}
                    
                    </div>
                    <div className=" mx-auto flex gap-[20px] sm:flex-col ">
                        <div className="p-[10px] sm:w-full rounded-[6px]  flex flex-col items-start gap-[20px] bg-white ">
                            <div className=" flex gap-[10px] items-start">
                                <p className="text-[#F7941D] text-[20px] font-bold ">#</p>
                                <p className="text-[#1C2045] text-[20px] max-w-[200px]  font-bold leading-[33px] font-montserrat w-max-[310px]"> {t("industries.biometricoffice.increaseemploy")}</p>
                            </div>             
                            <p className=" text-[#3A505F] font-montserrat text-1 font-normal leading-[24px] ">{t("industries.biometricoffice.increaseemploydes")}</p>               
                        </div>
                        <div className="p-[10px]   sm:w-full flex flex-col items-start gap-[20px] rounded-[6px] bg-white ">
                            <div className=" flex gap-[10px] items-start">
                                <p className="text-[#F7941D] text-[20px] font-bold ">#</p>
                                <p className="text-[#1C2045] text-[20px] max-w-[300px]  font-bold leading-[33px] rounded-[6px]  font-montserrat"> {t("industries.biometricoffice.streamline")}</p>
                            </div>             
                            <p className=" text-[#3A505F] font-montserrat text-1 font-normal leading-[24px] ">{t("industries.biometricoffice.streamlinedes")}</p>               
                        </div>
                        <div className="p-[10px]  sm:w-full flex flex-col items-start gap-[20px] bg-white ">
                            <div className=" flex gap-[10px] items-start">
                                <p className="text-[#F7941D] text-[20px] font-bold ">#</p>
                                <p className="text-[#1C2045] text-[20px] max-w-[200px]  font-bold leading-[33px] font-montserrat "> {t("industries.biometricoffice.reduce")}</p>
                            </div>             
                            <p className=" text-[#3A505F] font-montserrat text-1 font-normal leading-[24px] ">{t("industries.biometricoffice.reducedes")}</p>               
                        </div>
                    </div>
                </div>
            </div>
            <Question />

        </>
            
          
    )
}