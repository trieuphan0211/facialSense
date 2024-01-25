import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

export const Headerkeyfeatures = ( {nameHader, underlineHeader, desHeader} ) => {
    const { i18n } = useTranslation()
    return (
     
            <div className=" relative">{i18n.language === "en" ? (
            <div className=" flex flex-col gap-[15px] items-center ">
            <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1000px] leading-[60px] ">
            
                {nameHader}
                <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)]">
                {underlineHeader}
            
                </span>
            </h1>
            <p className=" text-center text-[#3A505F] font-normal max-w-[806px]">{desHeader}</p>
        </div>
            ) : (
        <div className=" flex flex-col gap-[15px] items-center " >
            <h1 className="text-center text-5xl leading-tight text-[#1C2045] font-extrabold ">
                <span className="border-b-[10px]  inline-block h-[50px] border-[var(--tree-poppy)]">
                {nameHader}
                </span>
                {underlineHeader}
            </h1>
            <p className="text-center text-[#3A505F] max-w-[1000px]">{desHeader}</p>
        </div>
            )}

            </div>

      
    )


}

Headerkeyfeatures.propTypes = { 
    nameHader: PropTypes.string,
    underlineHeader : PropTypes.string,
    desHeader: PropTypes.string
}