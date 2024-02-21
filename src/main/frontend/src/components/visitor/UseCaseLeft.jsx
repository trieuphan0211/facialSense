import PropTypes from "prop-types"; // Import PropTypes

export const UseCaseLeft = ( { imageSrc, title, description } ) => {
    return (

                    <div className="w-[calc(50% + 2px)] ">
                        <h5 className="text-[22px] text-[#2f3032] font-bold leading-[33px]">
                            <span className="hidden">1</span>
                            <img className="absolute left-[55%] w-[80px]" src={imageSrc} alt="secure-visitor" width="134" height="134" />
                            {title}
                        </h5>
                        <div className="border-r-2 border-solid text-right border-gray-200 pr-[28px] py-[15px] text-[#607D94] text-[16px] font-normal w-[550px] mb-[15px]">  {description}</div>
                     </div>
      


              

    )
}


UseCaseLeft.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  };

