

import PropTypes from "prop-types";

export const Features = ( {title, des,image} ) => {
    return (
        <div className="p-[20px] w-1/3 smAndmd:w-1/2 sm:w-full  ">
            <img className="w-[84px] h-[70px]" src={image} alt="" />
            <div className="mt-[20px]">
                <p className="text-[#1C2045] text-[22px] font-montserrat max-w-[338px] font-bold">{title}</p>
                <p className="mt-[20px] text-[#3A505F] font-montserrat ] font-normal leading-[24px]">{des}</p>
            </div>
        </div>
    )
}
Features.propTypes = {
    title: PropTypes.string,
    des:  PropTypes.string,
    image:  PropTypes.string
}