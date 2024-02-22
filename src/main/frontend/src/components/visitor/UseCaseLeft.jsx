import PropTypes from "prop-types"; // Import PropTypes

export const UseCaseLeft = ( { imageSrc, title, description, number } ) => {
    return (

                    <div className="460sm:max-w-[370px]  lg:pl-0 lg:max-w-[450px] w-[calc(50% + 2px)] group xlmaxmin:pl-[40px] 460sm:px-4   ">
                        <h5 className="text-[22px] max-w-[550px] text-[#2f3032] font-bold leading-[33px] group-hover:text-[#F7941D] ">
                            <span className="hidden xl:block text-[#f7941d]">{number}</span>
                            <img className="absolute xl:hidden left-[55%] w-[80px]" src={imageSrc} alt="secure-visitor" width="134" height="134" />
                            {title}
                        </h5>
                        <div className="minlg:border-r-2  460sm:max-w-[340px] max-w-[550px] xl:border-l-2 xl:text-left xl:px-[28px] group-hover:border-[#F7941D] border-solid text-right border-gray-200 pr-[28px] py-[15px] text-[#607D94] text-[16px] font-normal w-[550px] mb-[15px]">  {description}</div>
                     </div>
      


              

    )
}


UseCaseLeft.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    number: PropTypes.string,
  };

