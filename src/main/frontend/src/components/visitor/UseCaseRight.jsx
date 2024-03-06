import PropTypes from "prop-types"; // Import PropTypes

export const UseCaseRight = ( { imageSrc, title, description, number } )  => {
    return (
      
      
                    <div className="460sm:max-w-[370px]  460max:max-w-[450px] w-[calc(50% + 2px)] pl-[52.7%] xlmaxmin:pl-[48%] 460sm:px-4  lg:px-0 group ">
                        <h5 className="text-[22px] text-[#2f3032] font-bold leading-[33px] group-hover:text-[#F7941D]">
                            <span className="hidden xl:block text-[#f7941d]">{number}</span>
                            <img className="xl:hidden absolute right-[49%] w-[80px]" src={imageSrc} alt="secure-visitor" width="134" height="134" />
                            {title}
                        </h5>
                        <div className="border-l-2 border-solid 460sm:max-w-[320px] max-w-[492px] group-hover:border-[#F7941D] border-gray-200 px-[28px] py-[15px] text-[#607D94] text-[16px] font-normal w-[550px] mb-[15px]">{description}</div>
                    </div>
                    
       
    )
}


UseCaseRight.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    number: PropTypes.string
  };

