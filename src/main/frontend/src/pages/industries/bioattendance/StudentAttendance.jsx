import { useTranslation } from "react-i18next"
import { useWindowSize } from "@uidotdev/usehooks";
import { QuickStart } from "../../../components/common";
import {   Features, Headerkeyfeatures, Whychoose } from "../../../components/bioatendance"
import { Question } from "../../../components/common"
import multiple from "../../../assets/img/industries/biometricoffice/multiple.png"
import sabiofe from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_visitor_3d.png"
import liveness from "../../../assets/img/industries/biometricoffice/liveness.png"
import choose1 from "../../../assets/img/products/facialsensevisitormanagement/choose.png";





export const StudentAttendance = () => {
   
    const { t,i18n }  = useTranslation();
    const { width } = useWindowSize() 
    let content;
    let check = false;

    const contentHeading = (title , subtitle, border, text) => (
        <div>
             <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-${text} font-extrabold leading-[60px] border-${border}`}>
                    {title}
            </h1>
            {subtitle && <br />}
            {
                subtitle && (
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-${text} font-extrabold leading-[60px] border-${border}`}>
                        {subtitle} 
                    </h1>
                )
            }
            {
                check && (
                 
                    <span>{t("industries.student.schooldes")}</span>
                ) 
            }
           
        </div>
    )

     let content1;
    if (width >= 554){
       
        content = contentHeading(t("industries.student.header"), undefined, "[#B9AAFD]", "white")
        
        check = true;
        content1 = i18n.language === "en" ? (
           
            contentHeading(t("industries.student.school"),undefined, "[var(--tree-poppy)]", "[#1C2045]")
            
            
            ) :
            (
                <div>
                    {
                        width >= 895 && (
                        <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px]`}>
                            {t("industries.student.school")}
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.schooldes")}</span>                    
                        </h1>
                        )
                    }
                    {
                        width < 895 && width >= 787 && (
                            <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px]`}>
                            {t("industries.student.school")}
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.schooldes1")}</span> 
                            <br />   
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.hoc")}</span>                                    
                        </h1>
                        )

                    }{
                        width < 787 && (
                            <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px]`}>
                            {t("industries.student.school")}
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.schooldes2")}</span> 
                            <br />   
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.hoc1")}</span>                                    
                        </h1>
                        )
                    }
                    
                </div>
                
            )
       

    }else if (width < 554 && width >= 432) {
        content = i18n.language === "en" ? (
            contentHeading(t("industries.student.student"),  t("industries.student.attent"),  "[#B9AAFD]", "white")
        ) : (
            contentHeading(t("industries.student.student1"), t("industries.student.sinh"), "[#B9AAFD]", "white")
        )
        check = true;
        content1 = i18n.language === "en" ? (
            <div>
                {
                width < 554 && width >= 449 && (
                    contentHeading(t("industries.student.school"),undefined, "[var(--tree-poppy)]", "[#1C2045]")
                )
                }
                {
                    width < 449 && (
                        <div>
                            <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px]`}>
                        
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.school1")}</span> 
                            <br />   
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.bio1")}</span>       
                            </h1>               
                            {t("industries.student.schooldes")}              
                        </div>
                    )
                }
            </div>
            
            
          
            
            
            ) :
            (
                <div>
              {
                        width < 554 && width >= 488 && (
                            <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px]`}>
                            {t("industries.student.school")}
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.schooldes2")}</span> 
                            <br />   
                            <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.hoc1")}</span>                                    
                        </h1>
                        )
                }
                {
                    width < 488 && (
                        <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px]`}>
                        {t("industries.student.school")}
                        <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.sinhtrac")}</span> 
                        <br />   
                        <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.hoccho")}</span>          
                        <br />   
                        <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.truonghoc")}</span>                                                              
                    </h1>
                    )
                }
                    
                </div>
                
            )
    }else {
        content = i18n.language === "en" ? (
            contentHeading(t("industries.student.student"),  t("industries.student.attent"),  "[#B9AAFD]", "white")
        ) : (
            contentHeading(t("industries.student.attent"), t("industries.student.student"), "[#B9AAFD]", "white")
        )
        check = true;
        content1 = i18n.language === "en" ? (
           
            <div>
            {
            width < 554 && width >= 449 && (
                contentHeading(t("industries.student.school"),undefined, "[var(--tree-poppy)]", "[#1C2045]")
            )
            }
            {
                width < 449 && (
                    <div>
                        <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px]`}>
                    
                        <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.school1")}</span> 
                        <br />   
                        <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.bio1")}</span>       
                        </h1>               
                        {t("industries.student.schooldes")}              
                    </div>
                )
            }
        </div>
            
            
            ) :
            (
                <div>
              
                
                        <h1 className={`  text-[#1C2045] text-5xl font-extrabold leading-[60px]`}>
                        {t("industries.student.school")}
                        <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.sinhtrac")}</span> 
                        <br />   
                        <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.hoccho")}</span>          
                        <br />   
                        <span className="border-b-[10px]  inline-block  h-[50px] border-[var(--tree-poppy)]">{t("industries.student.truonghoc")}</span>                                                              
                    </h1>
                    
                
                    
                </div>
                
            )


    }
    return (
        <>
            <div>
                <div className=" bg-cover bg-center h-[360px]" style={{ backgroundImage: "url('/src/assets/img/industries/biometricoffice/group.png')" }}>
                    <div className="  max-w-[1300px] mx-auto pl-[10px] pt-[68px] minxl:pt-[100px]">
                            {content}
                    </div>
                
                </div>
            </div>
            <div className=" bg-white">
                    <div className="max-w-[1300px] py-[50px] mx-auto relative">
                        <div className="ml-[10px]">
                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1110px] leading-[60px]">
                                {content1}
                            </h1>
                            <p className="text-[#3A505F] leading-[25px] text-[20px] font-montserrat mt-[15px]">
                               
                                <strong>{t("industries.student.thecheckid")}</strong>
                            </p>
                            <p className="text-[#3A505F] leading-[25px] text-[20px] font-montserrat mt-[15px]">
                               
                                <strong>{t("industries.student.wehave")}</strong>
                            </p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.student.with")}</p>
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.student.thesystem")}</p>
                        </div>
                    </div>
            </div>
            <QuickStart />
            <div className="relative">
                <img src={choose1} className="w-[574px] h-[737px] absolute top-[-50px] right-0 " alt="" />
                <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-[50px] flex flex-col items-center relative ">

                    <Headerkeyfeatures nameHader1={t("industries.student.keyfeaturesdes")} 
                                        underlineHeader={t("industries.mobileandremote.keyfeatures")}
                                        desHeader={t("industries.student.ourteam")}
                                        descac={t("industries.mobileandremote.features")}
                                        tinh={t("industries.mobileandremote.nang")}
                                        check={true}
                    />
                      <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <Features 
                                image={multiple}
                                des={t("industries.student.multipledes")}
                                title={t("industries.student.multiple")}
                            />
                             <Features 
                                image={sabiofe}
                                des={t("industries.student.realtimedes")}
                                title={t("industries.student.realtime")}
                            />
                             <Features 
                                image={liveness}
                                des={t("industries.student.youcan")}
                                title={t("industries.student.tail")}
                            />
                        </div>

                        
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
                                        {t("industries.student.whychossetitle")}
                                        </span>
                                        {t("industries.student.whychosse")}
                                    </h1>
                                    
                                </div>
                            ) :
                            (
                                <div className=" flex flex-col gap-[15px] items-center ">
                                    <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px] leading-[60px] ">
                                        <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                                        {t("industries.student.why")}
                                        </span>
                                        <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                                        {t("industries.student.choose")}
                                        </span>
                                        <br />
                                        {t("industries.student.whychosse")}
                                        
                                      
                                    </h1>
                                    
                                </div>
                            ) 
                        
                       
                            ) : (
                                width > 374 ? (
                        <div className=" flex flex-col gap-[15px] items-center " >
                            <h1 className="text-center text-5xl leading-tight text-[#1C2045] font-extrabold ">
                                <span className="border-b-[10px]  inline-block h-[50px] border-[var(--tree-poppy)]">
                                {t("industries.student.whychossetitle")}
                                </span>
                                {t("industries.student.whychosse")}
                            </h1>
                        
                        </div> ) : (
                             <div className=" flex flex-col gap-[15px] items-center ">
                             <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px] leading-[60px] ">
                                 <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                                 {t("industries.student.why")}
                                 </span>
                                 <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                                 {t("industries.student.choose")}
                                 </span>
                                 <br />
                                 {t("industries.student.whychosse")}
                                 
                               
                             </h1>
                             
                         </div>
                        )
                            )}

                            <p className="leading-[25px] font-montserrat text-[#3a505f] text-center">{t("industries.student.whychossedes")}</p>
                    
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <div className=" mx-auto flex gap-[20px] sm:flex-col  ">

                            <Whychoose 
                                title={t("industries.student.encourage")}
                                des={t("industries.student.encouragedes")}
                            />
                            <Whychoose 
                                title={t("industries.student.streamline")}
                                des={t("industries.student.streamlinedes")}
                            />
                            <Whychoose 
                                title={t("industries.student.reduce")}
                                des={t("industries.student.reducedes")}
                            />
                        </div>
                            <div className=" mx-auto flex gap-[20px] sm:flex-col  ">
                            <Whychoose 
                                title={t("industries.student.reducetruancy")}
                                des={t("industries.student.reducetruancydes")}
                            />
                            <Whychoose 
                                title={t("industries.student.environ")}
                                des={t("industries.student.environdes")}
                            />
                            <Whychoose 
                                title={t("industries.student.comprehensive")}
                                des={t("industries.student.comprehensivedes")}
                            />
                    </div>
                    </div>
                    
                </div>
            </div>
            <Question />
        </>
    )
}