
import Slider from "react-slick";

import svg from "../../assets/img/industries/biometricoffice/SVG.png";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import { useWindowSize } from "@uidotdev/usehooks";
import review from "../../assets/img/industries/biometricoffice/reviews-from-capterra-1-e1667983702240.png.png"
import sofeware from "../../assets/img/industries/biometricoffice/image 9.png"
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types"; // Import PropTypes
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";

function SampleNextArrow(props) {
    const { width } = useWindowSize()

    var leftPosition = width < 1250 && width >= 900 ? "-120px" : "-250px" 
    if (width < 900){
        leftPosition = "-100px"
    }
    

    const {  onClick } = props;
    return (
      <div
        className="absolute top-1/2"
        style={{   right: leftPosition, width:"54px", background: "#EEF3FA", height: "40px",display: "flex",
        alignItems: "center", // Center vertically
        justifyContent: "center",
        borderRadius: "14px"
    }
        
    } // Center horizontally}}
        onClick={onClick}
      >
       <EastRoundedIcon sx={{ fontSize: "24px", color: "#002B4E",  }} />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { width } = useWindowSize()
    var leftPosition = width < 1250 && width >= 900 ? "-120px" : "-250px" 
    if ( width < 900){
        leftPosition = "-100px"
    }
    const {   onClick } = props;
    return (
      <div
      className="absolute top-1/2"
      style={{ left: leftPosition, width:"54px", background: "#EEF3FA", height: "40px",display: "flex",
      alignItems: "center", // Center vertically
      justifyContent: "center",
      borderRadius: "14px"}}
      onClick={onClick}
      >
         <WestRoundedIcon sx={{ fontSize: "24px", color: "#002B4E",  }} />
      </div>
    );
  }
  export { SampleNextArrow, SamplePrevArrow };
  // Add PropTypes validation for SampleNextArrow
SampleNextArrow.propTypes = {
    

    onClick: PropTypes.func,
  };
  
  // Add PropTypes validation for SamplePrevArrow
  SamplePrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };
  
const carousel = [
    {
      img: review,
      description: "industries.service.items.description",
      name: "homepage.testimonials.items.0.name",
      position: "homepage.testimonials.items.0.position",
    },
    {
      img: sofeware,
      description: "homepage.testimonials.items.1.description",
      name: "homepage.testimonials.items.1.name",
      position: "homepage.testimonials.items.1.position",
    },
    {
      img: review,
      description: "homepage.testimonials.items.2.description",
      name: "homepage.testimonials.items.2.name",
      position: "homepage.testimonials.items.2.position",
    },
    {
      img: review,
      description: "homepage.testimonials.items.3.description",
      name: "homepage.testimonials.items.3.name",
      position: "homepage.testimonials.items.3.position",
    },
    {
      img: sofeware,
      description: "homepage.testimonials.items.4.description",
      name: "homepage.testimonials.items.4.name",
      position: "homepage.testimonials.items.4.position",
    },
    {
      img: review,
      description: "homepage.testimonials.items.5.description",
      name: "homepage.testimonials.items.5.name",
      position: "homepage.testimonials.items.5.position",
    },
    {
      img: review,
      description: "homepage.testimonials.items.6.description",
      name: "homepage.testimonials.items.6.name",
      position: "homepage.testimonials.items.6.position",
    },
    {
      img: review,
      description: "homepage.testimonials.items.7.description",
      name: "homepage.testimonials.items.7.name",
      position: "homepage.testimonials.items.7.position",
    },
    {
      img: review,
      description: "homepage.testimonials.items.8.description",
      name: "homepage.testimonials.items.8.name",
      position: "homepage.testimonials.items.8.position",
    },
    {
      img: review,
      description: "homepage.testimonials.items.9.description",
      name: "homepage.testimonials.items.9.name",
      position: "homepage.testimonials.items.9.position",
    },
    {
      img: review,
      description: "homepage.testimonials.items.10.description",
      name: "homepage.testimonials.items.10.name",
      position: "homepage.testimonials.items.10.position",
    },
  ];


export const SingleItem = () => {
  const { width } = useWindowSize(); 
  let checkAuto;
  if (width >= 639){
    checkAuto = false;
  }else{
    checkAuto = true;
  }
    
    const nextArrow = width >= 640 ? <SampleNextArrow /> : null;
     const prevArrow = width >= 640 ? <SamplePrevArrow /> : null;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: checkAuto,
        autoplaySpeed: 3000,
        nextArrow: nextArrow,
        prevArrow: prevArrow
      };
      const { t } = useTranslation();
    return (
        <div>
        
        <Slider {...settings}>
          
        {carousel.map((item, index) => ( 
                   <div key={index} className="slick-center">
                   <div className=" ">
                     <div className="flex mds:flex-col mdsmin:flex-col gap-[35px] justify-between mdsmin:items-center mds:items-center ">
                        <div className="relative"> 
                            <div className="absolute top-[50px] mds:top-[28px] mdsmin:top-[30px]  mds:left-[100px] left-[48%] mt-[50px] -translate-x-1/2">
                                <img
                                    className="w-[200px]  h-[75px] mds:w-[100px] mdsmin:w-[100px]  mds:h-[35px] mdsmin:h-[35px]"
                                    src={item.img}
                                    alt={`Carousel ${index}`}
                                />
                            </div>
                            <img
                                className="w-[400px] mds:w-[200px] mdsmin:w-[200px]  "
                                src={svg}
                                alt={`Carousel ${index}`}
                            />
                            
                        </div>
                       
                       <div className="flex flex-col gap-[35px] justify-between">

                         <p className="max-w-[590px] lg:max-w-[490px] text-[#3A505F] text-[16px] font-montserrat leading-[24px]">{t(item.description)}</p>
                         <div>
                           <p className="max-w-[470px] text-[#1C2045] text-[16px] font-montserrat leading-[24px]"><strong>{t(item.name)}</strong></p>
                           <p className="max-w-[470px] text-[#3A505F] text-[14px] uppercase font-montserrat leading-[24px]">{t(item.position)}</p>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                        
        ))}
        </Slider>
      </div>
    )
}