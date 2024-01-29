import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "@uidotdev/usehooks"; 
export const Headerkeyfeatures = ( {nameHader, underlineHeader, desHeader, descac , tinh, check, nameHader1 } ) => {
    const { t ,i18n } = useTranslation()
    const { width } = useWindowSize()
    return (
       
     
            <div className=" relative">{i18n.language === "en" ? (

                        <div className=" flex flex-col gap-[15px] items-center ">
                            
                        <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1000px] leading-[60px] ">
                            
                            {nameHader}
                            {
                                check == true ? (
                                    width > 358 ? (
                                        <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                                        {underlineHeader}
                                    
                                        </span>
                                    ) : (
                                        <>
                                            <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                                            {t("industries.student.key")}
                                        
                                            </span>
                                            <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                                            {t("industries.student.features")}
                                        
                                            </span>
                                        </>
                                    )
                                ): (
                                <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                                        {underlineHeader}
                                    
                                    </span>
                                )
                            }
                          
                            
                            
                                <span>{nameHader1}</span>
                        
                        </h1>
                        <p className=" text-center text-[#3A505F] font-normal max-w-[806px]">{desHeader}</p>
                        </div>
            ) : (
                width < 358 ? ( 
                <div className=" flex flex-col gap-[15px] items-center " >
                    <h1 className="text-center text-5xl leading-tight text-[#1C2045] font-extrabold ">
                        <span className="border-b-[10px]  inline-block h-[50px] border-[var(--tree-poppy)]">
                        {descac}
                        </span>
                        <br />
                        <span className="border-b-[10px]  inline-block h-[50px] border-[var(--tree-poppy)]">
                        {tinh}
                        </span>
                        <br />
                        {check == true ? (
                                <div>
                               
                                {nameHader1}
                                </div>
                              
                            ) : null}
                        
                    </h1>
                  
                    <p className="text-center text-[#3A505F] max-w-[1000px]">{desHeader}</p>
                </div>
                ) : (
                <div className=" flex flex-col gap-[15px] items-center " >
                    <h1 className="text-center text-5xl leading-tight text-[#1C2045] font-extrabold ">
                        
                            {check == true ? (
                                <div>
                                <span className="border-b-[10px]  inline-block h-[50px] border-[var(--tree-poppy)]">
                               {underlineHeader}
                               </span>
                                {nameHader1}
                                </div>
                              
                            ) : null}
                        
                        <span className="border-b-[10px]  inline-block h-[50px] border-[var(--tree-poppy)]">
                        {nameHader}
                        </span>
                        {check == false ? (
                               
                                <span>
                                     {underlineHeader}
                               </span>
                               
                              
                            ) : null}
                       
                    </h1>
                    <p className="text-center text-[#3A505F] max-w-[1000px]">{desHeader}</p>
                </div>)
            )}

            </div>

      
    )


}

Headerkeyfeatures.propTypes = { 
    nameHader: PropTypes.string,
    underlineHeader : PropTypes.string,
    desHeader: PropTypes.string,
    descac: PropTypes.string,
    tinh: PropTypes.string,
    check: PropTypes.bool,
    nameHader1: PropTypes.string
}