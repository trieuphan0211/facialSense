
import { LeafButton } from "../button";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next"



export const PriceVitor = ( {price, free, money, user,month} ) => {
    const { t  }  = useTranslation();
return (
    <div className="flex-1 flex flex-col w-[300px] items-center h-[408px]">
    <div className="flex flex-col items-center  w-[290px]   py-[60px] px-[10px] h-[408px] rounded-[20px] border-solid  border-2 border-[#EFF0FF] bg-[#EFF0FF]">
        <p className="text-[#2B1C50] text-center text-[18px] font-normal">{price}</p>
        <p className="text-[#2B1C50] text-center text-[30px] font-extrabold ">{free}</p>
        <div className="flex flex-col items-center pt-[30px]">
            <div className="flex gap-[20px] items-center">
            <p className="text-[#002B4E] text-center text-[30px] font-extrabold">$</p>
            <p className="text-[#151686] text-center text-[46px] font-extrabold leading-[60px] ">{money}</p>
            </div>
            <p className="text-[#AEAEAE] text-center text-[22px] font-bold ">{month}</p>

        </div>
        <div className="flex items-center pt-[30px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5377 3.98925C13.6596 4.11122 13.7281 4.27662 13.7281 4.44908C13.7281 4.62154 13.6596 4.78694 13.5377 4.90891L6.38335 12.0632C6.26139 12.1851 6.09599 12.2536 5.92353 12.2536C5.75107 12.2536 5.58567 12.1851 5.4637 12.0632L2.21174 8.81126C2.14962 8.75126 2.10007 8.67949 2.06599 8.60014C2.0319 8.52079 2.01396 8.43545 2.01321 8.34909C2.01246 8.26273 2.02891 8.17709 2.06162 8.09716C2.09432 8.01723 2.14261 7.94461 2.20368 7.88354C2.26475 7.82247 2.33736 7.77418 2.41729 7.74148C2.49722 7.70878 2.58287 7.69232 2.66923 7.69307C2.75559 7.69382 2.84093 7.71176 2.92028 7.74585C2.99963 7.77994 3.0714 7.82948 3.13139 7.8916L5.92353 10.6837L12.618 3.98925C12.74 3.86732 12.9054 3.79883 13.0778 3.79883C13.2503 3.79883 13.4157 3.86732 13.5377 3.98925Z" fill="#2B1C50"/>
            </svg>
            <p className="text-[#2B1C50] text-center text-[18px] font-normal"><strong>{user}</strong> {t("pricing.dayaponit")}</p>
        </div>

    </div>
    <div className="flex mt-[-25px] items-center gap-6 xl:justify-center sm:flex-col">
            <LeafButton title={t("pricing.getstart")} />
    </div>
    </div>
)
    
}
PriceVitor.propTypes = {
    price: PropTypes.string,
    free: PropTypes.string,
    money: PropTypes.string,
    user: PropTypes.string,
    month: PropTypes.string,
  };