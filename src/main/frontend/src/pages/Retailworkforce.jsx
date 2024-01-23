
import { useTranslation } from "react-i18next";
import {  QuickStart } from "../components/common";
import { Transfrom, Headerkeyfeatures, Features } from "../components/bioatendance/";
import multiple from "../assets/img/industries/biometricoffice/multiple.png"
import choose from "../assets/img/products/facialsensevisitormanagement/choose-shape.png.png"
import safe from "../assets/img/products/facialsensevisitormanagement/icon_brain_isometric_3d.png"
import sabiofe from "../assets/img/products/facialsensevisitormanagement/icon_brain_visitor_3d.png"

export const Retailworkforce = () => {  
    const { t } = useTranslation() 
    return (
        <>
          <div className=" bg-white">
                    <Transfrom 
                        ischeck={true}
                        thetitleStrong={t("industries.retailworkforce.theckeckid")}
                        title= {t("industries.retailworkforce.headertitle")}
                        titlenormal= {t("industries.retailworkforce.header")}
                        subtitle1= {t("industries.retailworkforce.uses")}
                        effect={t("industries.retailworkforce.biomatrici")}
                        workfor={t("industries.retailworkforce.desbiomatric")}
                        subtitle2= {t("industries.retailworkforce.thisal")}
                        biomatriciden={t("industries.retailworkforce.retail")}
                        checkid= {t("industries.retailworkforce.tomain")}
                        titleStrong1={t("industries.retailworkforce.effect")}
                        titlenormal1={t("industries.retailworkforce.workfore")}
                        subtitle3={t("industries.retailworkforce.theckeckidFacial")}
                       

                        showAdditionalParagraph={false}
                    />
                    
            </div>
            <QuickStart />
            <div className="relative">
            <img src={choose} className="w-[574px] h-[737px] absolute top-[-50px] left-[-50px]" alt="" />
                <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[50px] flex flex-col items-center relative ">
                    <Headerkeyfeatures nameHader={t("industries.retailworkforce.key")} 
                                    underlineHeader={t("industries.retailworkforce.feature")}
                                    desHeader={t("industries.retailworkforce.desfeature")}
                    />
                    <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <Features 
                                image={multiple}
                                des={t("industries.retailworkforce.multipledes")}
                                title={t("industries.retailworkforce.multiple")}
                            />
                             <Features 
                                image={safe}
                                des={t("industries.retailworkforce.contactlessdes")}
                                title={t("industries.retailworkforce.contactless")}
                            />
                             <Features 
                                image={sabiofe}
                                des={t("industries.retailworkforce.livenessdes")}
                                title={t("industries.retailworkforce.liveness")}
                            />
                    </div>
                </div>
            </div>
        </>
      
    )
}