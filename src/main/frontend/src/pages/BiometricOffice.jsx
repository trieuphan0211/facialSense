
// import vector from "../assets/img/industries/biometricoffice/Vector 2.png"
import { useTranslation } from "react-i18next";
import { Question, QuickStart } from "../components/common";
import { Features, Headerkeyfeatures, Transfrom, Whychoose } from "../components/bioatendance/"
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
                <Headerkeyfeatures nameHader={t("industries.biometricoffice.biomatricfeature")} 
                                underlineHeader={t("industries.biometricoffice.biomatricfeaturekey")}
                                desHeader={t("industries.biometricoffice.biomatricfeaturedes")}
                />
                        <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <Features 
                                image={multiple}
                                des={t("industries.biometricoffice.multipledes")}
                                title={t("industries.biometricoffice.multiple")}
                            />
                             <Features 
                                image={realtime}
                                des={t("industries.biometricoffice.realtimedes")}
                                title={t("industries.biometricoffice.realtime")}
                            />
                             <Features 
                                image={turnkey}
                                des={t("industries.biometricoffice.turnkeydes")}
                                title={t("industries.biometricoffice.turnkey")}
                            />
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
                    <div className="flex flex-col gap-[20px]">
                        <div className=" mx-auto flex gap-[20px] sm:flex-col  ">
                            <Whychoose 
                                title={t("industries.biometricoffice.increaseemploy")}
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