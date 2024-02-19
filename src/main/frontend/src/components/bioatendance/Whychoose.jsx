import PropTypes from "prop-types";

export const Whychoose = ( {title , des} ) => {
    return (
        <div className="flex-1 p-[10px] sm:w-full  rounded-[6px]  flex flex-col items-start gap-[20px] bg-white shadow-shawdowDefault min-h-[246px] ">
                            <div className="  flex gap-[10px] items-start ">
                                <p className="text-[#F7941D] text-[20px] font-bold ">#</p>
                                <p className="text-[#1C2045] text-[20px] max-w-[300px]  font-bold leading-[33px] font-montserrat w-max-[310px]"> {title}</p>
                            </div>             
                            <p className=" text-[#3A505F] font-montserrat text-1 font-normal leading-[24px] ">{des}</p>               
         </div>
    )
}
Whychoose.propTypes = {
    title: PropTypes.string,
    des:  PropTypes.string,
}