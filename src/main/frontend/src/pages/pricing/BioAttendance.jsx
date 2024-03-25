import { useTranslation } from "react-i18next";
import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from "react"; 
import {   PoppyButton } from "../../components/button";
import { Prices } from "../../components/prices";
import dash from "../../assets/img/pricing/dash-lg.png"
import plus from "../../assets/img/pricing/plus-lg.png"
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export const BioAttendance = () => {
    const { t , i18n }  = useTranslation();
    const { width } = useWindowSize();
    const [activeIndex, setActiveIndex] = useState(0);
    if (width > 1000){
       console.log(width)
    }else{
        console.log(width)
    }
 
    return <>
            <div className=" bg-cover bg-center h-[360px]" style={{ backgroundImage: "url('/src/assets/img/industries/biometricoffice/group.png')" }}>
                <div className="  max-w-[1300px] mx-auto pl-[10px] pt-[68px] minxl:pt-[100px]">
                    <h1 className={`inline-block border-b-[10px] h-[51px] text-5xl text-white font-extrabold leading-[60px] border-[#B9AAFD]`}>
                                {t("pricing.header")}
                     </h1>
                </div>
            </div>
            <div className="bg-white">
                <div className=" max-w-[1300px] pl-[10px] pt-[50px] pb-[74px] mx-auto px-4">
                    <div className="flex flex-col gap-[30px]">
                    {
                        i18n.language === "en" ? (
                            width > 1000 ? (
                               
                                <h1 className={` h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] `}>
                                CheckID FacialSense 
                                <span className="inline-block max740to460:ml-0  ml-4 mds:ml-0 border-b-[10px] h-[51px] border-[#F7941D]"> Bio Attendance</span>
                                </h1>
                            ) : (
                                width > 413 ? (
                                    <h1 className={` h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] `}>
                                    CheckID FacialSense <br/>
                                    <span className={`inline-block ml-0 border-b-[10px] h-[51px] border-[#F7941D]`}>Bio Attendance</span>
                                    </h1>
                                ) : (
                                    <h1 className={` h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] `}>
                                    CheckID FacialSense <br/>
                                    <span className="inline-block  ml-0 border-b-[10px] h-[51px] border-[#F7941D]"> Bio</span><br />
                                    <span className="inline-block  ml-0 border-b-[10px] h-[51px] border-[#F7941D]"> Attendance</span>
                                    </h1>
                                )
                            
                            )
                        
                        ): (
                           width > 940 ? (
                            <h1 className={` h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] `}>
                            CheckID FacialSense 
                            <span className={`inline-block ml-4 border-b-[10px] h-[51px] border-[#F7941D]`}>Bio Điểm Danh</span>

                            </h1>
                           ) : (
                            width > 440 ? (
                                <h1 className={` h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] `}>
                                CheckID FacialSense <br/>
                                <span className={`inline-block ml-0 border-b-[10px] h-[51px] border-[#F7941D]`}>Bio Điểm Danh</span>
    
                                </h1>
                            ) : (
                                <h1 className={` h-[51px] text-5xl text-[#1C2045] font-extrabold leading-[60px] `}>
                                CheckID FacialSense <br/>
                                <span className={`inline-block ml-0 border-b-[10px] h-[51px] border-[#F7941D]`}>Bio Điểm</span><br/>
                                <span className={`inline-block ml-0  border-b-[10px] h-[51px] border-[#F7941D]`}>Danh </span>
                                </h1>
                            )
                           
                           )
                           
              
                        )
                    }

                        <div className={`max429:mt-[180px] sm:mt-[120px]  mds740:mt-[80px] 460sm:mt-[120px] mds:mt-[80px] gap-[30px] flex items-center justify-center`}>
                            <p 
                            className={`py-[12px] px-[16px] border-b-[2px]  font-montserrat text-[16px] font-bold ${activeIndex === 0 ? 'text-[#F7941D] border-[#F7941D]' : 'text-[#1F2937] '}`}
                            onClick={() => setActiveIndex(0)}
                            >
                                {t("pricing.cloud")}
                            </p>
                            <p 
                            className={`py-[12px] px-[16px] border-b-[2px] font-montserrat text-[16px] font-bold ${activeIndex === 1 ? 'text-[#F7941D] border-[#F7941D]' : 'text-[#1F2937]'}`}
                            onClick={() => setActiveIndex(1)}
                            >
                            {t("pricing.onpremises")}
                            </p>
                        </div>
                    </div>
                   
                    <div className={`${activeIndex === 0 ? "block" : "hidden"} `}>
                        <div className={`md:flex-col mlgd1160:flex-col flex items-center  pt-[50px] mlgd1160:gap-[30px]`}>
                            <div className="flex-1 md:flex-col flex items-center justify-between gap-[30px]  ">
                            <Prices 
                                price={t("pricing.price")}
                                free={t("pricing.free")}
                                money={"0"}
                                user={"5"}
                            />
                            <Prices 
                                price={t("pricing.price1")}
                                free={t("pricing.free1")}
                                money={"20"}
                                user={"20"}
                            />
                            </div>
                          
                            <div className="mlgd1160:ml-0 ml-[4%] flex-1 md:flex-col flex items-center justify-between gap-[30px] md:">
                            <div className=" flex flex-col mb-[60px] w-[260px] items-center md:mt-[30px] md:h-[400px]">
                                <div className="relative  flex items-center gap-6 xl:justify-center sm:flex-col">
                                    <button className=" text-[14px] mb-[-20px] font-semibold text-[#7F56D9] uppercase py-[5px] px-[6px] border-[] rounded-[22px] border-2 border-[#EEE2FE] bg-[#EEE2FE]">{t("pricing.mostporpular")}</button>
                                </div>
                                <div className="flex bg-white h-[420px]  flex-col items-center  w-[260px]  py-[110px] px-[20px] rounded-[20px] shadow-shawdowprice border-solid  border-2 border-[#9B86FC] ">

                                    <p className="text-[#2B1C50] text-center text-[18px] font-normal">{t("pricing.price2")}</p>
                                    <p className="text-[#2B1C50] text-center text-[30px] font-extrabold ">{t("pricing.free2")}</p>
                                    <div className="flex flex-col gap-0 items-center pt-[30px]">
                                        <div className="flex gap-[20px] items-center">
                                        <p className="text-[#002B4E] text-center text-[30px] font-extrabold">$</p>
                                        <p className="text-[#7F56D9] text-center text-[64px] font-extrabold leading-[50px] ">43</p>
                                        </div>
                                        <p className="text-[#002B4E] text-center text-[22px] font-bold ">{t("pricing.month")}</p>

                                    </div>
                                    <div className="flex items-center pt-[30px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.5377 3.98925C13.6596 4.11122 13.7281 4.27662 13.7281 4.44908C13.7281 4.62154 13.6596 4.78694 13.5377 4.90891L6.38335 12.0632C6.26139 12.1851 6.09599 12.2536 5.92353 12.2536C5.75107 12.2536 5.58567 12.1851 5.4637 12.0632L2.21174 8.81126C2.14962 8.75126 2.10007 8.67949 2.06599 8.60014C2.0319 8.52079 2.01396 8.43545 2.01321 8.34909C2.01246 8.26273 2.02891 8.17709 2.06162 8.09716C2.09432 8.01723 2.14261 7.94461 2.20368 7.88354C2.26475 7.82247 2.33736 7.77418 2.41729 7.74148C2.49722 7.70878 2.58287 7.69232 2.66923 7.69307C2.75559 7.69382 2.84093 7.71176 2.92028 7.74585C2.99963 7.77994 3.0714 7.82948 3.13139 7.8916L5.92353 10.6837L12.618 3.98925C12.74 3.86732 12.9054 3.79883 13.0778 3.79883C13.2503 3.79883 13.4157 3.86732 13.5377 3.98925Z" fill="#2B1C50"/>
                                        </svg>
                                        <p className="text-[#2B1C50] text-center text-[18px] font-normal"><strong>50</strong> {t("pricing.users")}</p>
                                    </div>

                                </div>
                            
                                <div className="flex mt-[-25px] items-center gap-6 xl:justify-center sm:flex-col">
                                        <PoppyButton style={{backgroundColor: '#F7941D', color: '#fff'}} title={t("pricing.getstart")} />
                                </div>
                                </div>
                            <Prices 
                                price={t("pricing.price3")}
                                free={t("pricing.free3")}
                                money={"73"}
                                user={"100"}
                            />
                            </div>
                           
                        
                        </div>
                        <div className="mlgd:mt-[60px] md:mt-[60px] flex  items-center gap-[10px] mx-[60px] 460sm:mx-[16px]">
                            <div>
                            <div className="h-[8px] w-[8px] rounded-[8px] bg-[#3A505F]"></div>
                            </div>
                            
                            <p className="text-[18px] font-normal text-[#3A505F]">{t("pricing.prices")}</p>
                        
                        </div>
                        <div className="flex  items-center gap-[10px] mx-[60px] 460sm:mx-[16px]">
                        <div>
                            <div className="h-[8px] w-[8px] rounded-[8px] bg-[#3A505F]"></div>
                            </div>
                            
                            <p className="text-[18px] font-normal text-[#3A505F]"><span className="text-[#F7941D]">{t("pricing.freeclient")}</span>{t("pricing.foremploy")}</p>
                        
                        </div>
                    </div>
                    <div className={`${activeIndex === 1 ? "block" : "hidden"}`}>
                        
                        <div className="flex   justify-center items-center pt-[50px]">
                           
                            <div className="flex flex-col  items-center ">
                            
                                <div className="flex bg-white   flex-col items-center    py-[50px] px-[20px] rounded-[20px] shadow-shawdowprice border-solid  border-2 border-[#9B86FC] ">

                                    <p className="text-[#2B1C50] text-center text-[18px] font-normal">{t("pricing.licensefor")}</p>
                                    <p className="text-[#2B1C50] text-center text-[30px] font-extrabold ">{t("pricing.license")}</p>
                                    <div className="flex flex-col gap-0 items-center pt-[30px]">
                                        <div className="flex gap-[20px] items-center">
                                        <p className="text-[#002B4E] text-center text-[30px] font-extrabold">$</p>
                                        <p className="text-[#7F56D9] text-center text-[64px] font-extrabold leading-[50px] ">95</p>
                                        </div>
                                        <p className="text-[#002B4E] text-center text-[22px] font-bold ">{t("pricing.one")}</p>

                                    </div>

                                    <div className="flex mt-[30px] gap-[30px]">
                                        <div className="quantity 460sm:flex rounded-lg border border-gray-200 bg-white shadow-sm">
                                            <button className="plus-btn py-[22px] px-[20px] 460sm:px-[10px] " type="button" name="button">
                                                <img src={dash} alt="" />
                                            </button>
                                            <input className="py-[22px] w-[50px] px-[20px] text-[#151686] text-[20px] font-bold " type="text" name="name" value="1" />
                                            <button className="minus-btn py-[22px] px-[20px] 460sm:px-[10px]" type="button" name="button">
                                                <img src={plus} alt="" />
                                            </button>
                                        </div>
                                        <div className={`flex ${i18n.language === "en" ? "w-none" : "460sm:w-[120px]"}  items-center gap-6 xl:justify-center sm:flex-col`}>
                                        <PoppyButton style={{backgroundColor: '#F7941D', color: '#fff'}} title={t("pricing.addtocart")} />
                                        </div>
                                    </div>
                                   
                                    <div className="flex gap-[16px] flex-col max-w-[320px] pt-[30px]">
                                        <p className="text-[18px] text-[#151686]">
                                            {t("pricing.these")}
                                        </p>
                                        <div className="flex gap-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 20 20" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.2558 4.41C17.412 4.56628 17.4998 4.7782 17.4998 4.99917C17.4998 5.22014 17.412 5.43206 17.2558 5.58834L8.08915 14.755C7.93288 14.9112 7.72096 14.999 7.49999 14.999C7.27902 14.999 7.06709 14.9112 6.91082 14.755L2.74415 10.5883C2.66456 10.5115 2.60108 10.4195 2.5574 10.3178C2.51373 10.2162 2.49074 10.1068 2.48978 9.99617C2.48882 9.88552 2.5099 9.77579 2.5518 9.67338C2.5937 9.57096 2.65558 9.47792 2.73382 9.39967C2.81207 9.32143 2.90511 9.25955 3.00752 9.21765C3.10994 9.17575 3.21967 9.15467 3.33032 9.15563C3.44097 9.15659 3.55032 9.17958 3.65199 9.22325C3.75366 9.26693 3.84561 9.33041 3.92249 9.41L7.49999 12.9875L16.0775 4.41C16.2338 4.25378 16.4457 4.16602 16.6667 4.16602C16.8876 4.16602 17.0995 4.25378 17.2558 4.41Z" fill="#151686"/>
                                            </svg>
                                            <p className="text-[18px] text-[#2B1C50]">
                                            {t("pricing.checkid")}
                                        </p>
                                        </div>
                                        <div className="flex gap-[6px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.2558 4.41C17.412 4.56628 17.4998 4.7782 17.4998 4.99917C17.4998 5.22014 17.412 5.43206 17.2558 5.58834L8.08915 14.755C7.93288 14.9112 7.72096 14.999 7.49999 14.999C7.27902 14.999 7.06709 14.9112 6.91082 14.755L2.74415 10.5883C2.66456 10.5115 2.60108 10.4195 2.5574 10.3178C2.51373 10.2162 2.49074 10.1068 2.48978 9.99617C2.48882 9.88552 2.5099 9.77579 2.5518 9.67338C2.5937 9.57096 2.65558 9.47792 2.73382 9.39967C2.81207 9.32143 2.90511 9.25955 3.00752 9.21765C3.10994 9.17575 3.21967 9.15467 3.33032 9.15563C3.44097 9.15659 3.55032 9.17958 3.65199 9.22325C3.75366 9.26693 3.84561 9.33041 3.92249 9.41L7.49999 12.9875L16.0775 4.41C16.2338 4.25378 16.4457 4.16602 16.6667 4.16602C16.8876 4.16602 17.0995 4.25378 17.2558 4.41Z" fill="#151686"/>
                                            </svg>
                                            <p className="text-[18px] text-[#2B1C50]">
                                            {t("pricing.checkidstandrad")}
                                        </p>
                                        </div>
                                    </div>
                                </div>

                                </div>
                                <div>
                               
                            
                              
                                </div>
                          
                        
                        </div>
                        <div className="flex pt-[70px] items-center gap-[10px] mx-[60px] 460sm:mx-[16px]">
                        <div>
                            <div className="h-[8px] w-[8px] rounded-[8px] bg-[#3A505F]"></div>
                            </div>
                            
                            <p className="text-[18px] font-normal text-[#3A505F]">{t("pricing.prices")}</p>
                        
                        </div>
                        <div className="flex  items-center gap-[10px] mx-[60px] 460sm:mx-[16px]">
                        <div>
                            <div className="h-[8px] w-[8px] rounded-[8px] bg-[#3A505F]"></div>
                            </div>
                            
                            <p className="text-[18px] font-normal text-[#3A505F]"><span className="text-[#F7941D]">{t("pricing.freeclient")}</span>{t("pricing.foremploy")}</p>
                        
                        </div>
                        <div className="flex  items-center gap-[10px] mx-[60px] 460sm:mx-[16px]">
                        <div>
                            <div className="h-[8px] w-[8px] rounded-[8px] bg-[#3A505F]"></div>
                            </div>
                            
                            <p className="text-[18px] font-normal text-[#3A505F]">{t("pricing.formore")}<Link  className="text-[#F7941D] underline cursor-pointer">{t("pricing.contactus")}</Link></p>
                        
                        </div>
                    </div>
                  
                   
                    
                    
                </div>

            </div>
            <div className="bg-[#151686]  ">
                <div className="max-w-[1300px] mx-auto px-2   py-10 flex justify-between items-center text-white lg:px-6 md:flex-col">
                    <div>
                    <h1 className="text-[38px] leading-[56px] font-extrabold mb-6 md:text-center">
                        {t("pricing.customsolu")}
                    </h1>
                    <p className="text-lg sm:text-center max-w-[540px] font-normal font-montserrat">
                        {t("pricing.makesolu")}
                    </p>
                    </div>
                    <div className="md:mt-5 sm:w-full">
                        
                    <Button
                        variant="contained"
                        sx={{
                        padding: "10px 20px",
                        bgcolor: "#F7941D",
                        borderRadius: "30px",
                        boxShadow: "0px 12px 30px 0px rgba(24, 92, 255, 0.18)",
                        width: width < 639 ? "100%" : "auto",
                        fontSize: "16px",
                        "&:hover": {
                            bgcolor: "rgb(242 170 83)",
                            boxShadow: "0px 12px 30px 0px rgba(24, 92, 255, 0.18)",
                        },
                        textTransform: "none",
                        }}
                    >
                        {t("pricing.customus")}
                    </Button>
                    </div>
                </div>
            </div>
         
    </>
}