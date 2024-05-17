
import { useTranslation } from "react-i18next";
import { useWindowSize } from "@uidotdev/usehooks";
import {  Question, QuickStart } from "../../../components/common";
import {  Headerkeyfeatures, Features } from "../../../components/bioatendance";
import multiple from "../../../assets/img/industries/biometricoffice/multiple.png"
import choose from "../../../assets/img/products/facialsensevisitormanagement/choose-shape.png.png"
import safe from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_isometric_3d.png"
import sabiofe from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_visitor_3d.png"

export const Retailworkforce = () => {  
    const { t, i18n } = useTranslation() 
    const { width } = useWindowSize() 
    let content ;
    let content1;
    let check = false;
    const generateHeader = (title, subTitle, borderColor, textColor) => (
        <div className="inline-block 460sm:block ">
          <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-${textColor} font-extrabold leading-[60px] sm:text-4xl sm:h-[40px] border-${borderColor}`}>
            {title}
          </h1>
        
          {subTitle && <br />}
          {subTitle && (
            <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-${textColor} font-extrabold leading-[60px] sm:text-4xl sm:h-[40px] border-${borderColor}`}>
              {subTitle} 
              
            </h1>
          )}
          {
            check && (
                <>{t("industries.retailworkforce.header")}</>
            )
          }
        </div>
    );

      if (width >= 588) {
        content = generateHeader(t("industries.retailworkforce.headertitle"),undefined,"[#B9AAFD]", 'white');
        check = true;
        content1 =  generateHeader(t("industries.retailworkforce.headertitle1"),undefined,"[var(--tree-poppy)]", '[#1C2045]');
      } 
      else if (width <= 587 && width > 513) {
        content = i18n.language === "en" ? (
          generateHeader(t("industries.retailworkforce.headertitle"), undefined, "[#B9AAFD]", 'white')
        ) : (
          generateHeader(t("industries.retailworkforce.doanh"), t("industries.retailworkforce.le"), "[#B9AAFD]", 'white')
        );
        check = true;
        content1 = i18n.language === "en" ? (
            generateHeader(t("industries.retailworkforce.headertitle"), undefined, "[var(--tree-poppy)]", '[#1C2045]')
          ) : (
            generateHeader(t("industries.retailworkforce.doanhcontent1"), t("industries.retailworkforce.lecontent1"), "[var(--tree-poppy)]", '[#1C2045]')
          );
      } else if (width <= 513 && width > 399) {
        content = i18n.language === "en" ? (
          <div>
            {(width < 466 || width >=504) &&  generateHeader(t("industries.retailworkforce.retail1"), t("industries.retailworkforce.work"),"[#B9AAFD]",'white')}
            {width >= 466 && generateHeader(t("industries.retailworkforce.headertitle1"),undefined,"[#B9AAFD]",'white')}
          </div>
        ) : (
          // <div></div>
          generateHeader(t("industries.retailworkforce.doanh1"), t("industries.retailworkforce.le1"),"[#B9AAFD]",'white')
        );
        check = true;
        content1 = i18n.language === "en" ? (
            <div>
              {width < 466 && generateHeader(t("industries.retailworkforce.retail1"), t("industries.retailworkforce.work"),"[var(--tree-poppy)]",'[#1C2045]')}
              {width >= 466 && generateHeader(t("industries.retailworkforce.headertitle1"),undefined,"[var(--tree-poppy)]",'[#1C2045]')}
            </div>
          ) : (
            generateHeader(t("industries.retailworkforce.doanh1content1"), t("industries.retailworkforce.le1content1"),"[var(--tree-poppy)]",'[#1C2045]')
          );
      } else {
        content = i18n.language === "en" ? (
          <div>
            {width < 393 && generateHeader(t("industries.retailworkforce.retail1"), t("industries.retailworkforce.work"),"[#B9AAFD]",'white')}
          </div>
        ) : (
          <div>
            {generateHeader(t("industries.retailworkforce.doanh3"), t("industries.retailworkforce.nghiep3content"),"[#B9AAFD]",'white')}
            {generateHeader(t("industries.retailworkforce.le1"),undefined,"[#B9AAFD]",'white')}
          </div>
        );
        check = true;
        content1 = i18n.language === "en" ? (
            <div>
              {width < 393 && generateHeader(t("industries.retailworkforce.retail1"), t("industries.retailworkforce.work"),"[var(--tree-poppy)]",'[#1C2045]')}
            </div>
          ) : (
            <div>
             <div className="inline-block 460sm:block">
                <h1 className="inline-block border-b-[10px] h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)] sm:text-4xl sm:h-[40px]">
                    {t("industries.retailworkforce.doanh3")}
                </h1>
                <br />
                <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)] sm:text-4xl sm:h-[40px]`}>
                    {t("industries.retailworkforce.nghiep3")}
                </h1>
                <br />
               
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] border-[var(--tree-poppy)] sm:text-4xl sm:h-[40px]`}>
                    bán lẻ
                    
                    </h1>
                     {t("industries.retailworkforce.header")}
                   
        </div>
             
            </div>
          );
      }
      

    return (
        <>
          <div className=" bg-cover bg-center h-[360px]" style={{ backgroundImage: "url('/src/assets/img/industries/biometricoffice/group.png')" }}>
            { i18n.language === "en" ? (
                <div className="  max-w-[1300px] mx-auto px-4 pt-[68px] minxl:pt-[100px] 460sm:pt-[112px] xl:pt-[108px] ">
                  {content}
                </div>
              ) : (
                <div className="  max-w-[1300px] mx-auto px-4 pt-[68px] minxl:pt-[100px] 460sm:pt-[90px] xl:pt-[108px] ">
                  {content}
                </div>
              )
            }
          </div>
          <div className=" bg-white">
                    <div className="max-w-[1300px] py-[50px] mx-auto relative">
                        <div className="ml-[10px]">
                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1110px] leading-[60px] sm:text-4xl">
                            
                               {content1}
                         
                          
                            </h1>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
                               
                                <strong>{t("industries.retailworkforce.theckeckid")}</strong>
                                
                            {t("industries.retailworkforce.uses")} <strong>{t("industries.retailworkforce.biomatrici")}</strong> {t("industries.retailworkforce.desbiomatric")}
                            </p>
                                <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
                                {t("industries.retailworkforce.thisal")} <strong>{t("industries.retailworkforce.retail")}</strong> {t("industries.retailworkforce.tomain")}
                              
                                <strong>{t("industries.retailworkforce.effect")}</strong> 
                             
                              
                                    <span>{t("industries.retailworkforce.workfore")}</span>
                               
                                    </p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
                            {t("industries.retailworkforce.theckeckidFacial")} 
                            </p>
                           
                     </div>
                </div>
                    
                    
            </div>
            <QuickStart />
            <div className="relative">
            <img src={choose} className="w-[592px] h-[623px] absolute top-[-50px] left-0]" alt="" />
                <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[50px] flex flex-col items-center relative ">
                    <Headerkeyfeatures nameHader={t("industries.retailworkforce.key")} 
                                    underlineHeader={t("industries.retailworkforce.feature")}
                                    desHeader={t("industries.retailworkforce.desfeature")}
                                    descac={t("industries.retailworkforce.cac")}
                                    tinh={t("industries.retailworkforce.tinh")}
                                    check={false}
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
            <Question />
        </>
      
    )
}