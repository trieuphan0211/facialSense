import PropTypes from "prop-types"; // Import PropTypes

export const UseCaseRight = ( { imageSrc, title, description } )  => {
    return (
      
      
                    <div className="w-[calc(50% + 2px)] pl-[52.7%] ">
                        <h5 className="text-[22px] text-[#2f3032] font-bold leading-[33px]">
                            <span className="hidden">1</span>
                            <img className="absolute right-[49%] w-[80px]" src={imageSrc} alt="secure-visitor" width="134" height="134" />
                            {title}
                        </h5>
                        <div className="border-l-2 border-solid border-gray-200 px-[28px] py-[15px] text-[#607D94] text-[16px] font-normal w-[550px] mb-[15px]">{description}</div>
                    </div>
                    
       
    )
}


UseCaseRight.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  };

