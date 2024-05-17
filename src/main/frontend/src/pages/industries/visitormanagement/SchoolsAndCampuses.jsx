
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";

import { useRef } from "react";
import useIntersectionObserver from "../../../components/useIntersectionObserver/useIntersectionObserver";
import { useWindowSize } from "@uidotdev/usehooks";
import visitor1 from "../../../assets/img/industries/organization/fun.png"
import after from "../../../assets/img/industries/organization/afterclass.png"
import left from "../../../assets/img/products/facialsensevisitormanagement/about-left.png.png";
import right from "../../../assets/img/products/facialsensevisitormanagement/about-shape.png.png";
import { useTranslation } from "react-i18next";
import { CloudButton, LeafButton } from "../../../components/button";
import choose from "../../../assets/img/products/facialsensevisitormanagement/choose.png";
import calender from "../../../assets/img/industries/organization/calender.png"
import calender1 from "../../../assets/img/industries/organization/calender2.png"
import {  UseCaseLeft, UseCaseRight } from "../../../components/visitor";
import choose1 from "../../../assets/img/products/facialsensevisitormanagement/choose-shape.png.png"
import { Features, Headerkeyfeatures } from "../../../components/bioatendance";
import secure from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_isecureometric_3d.png";
import safe from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_isometric_3d.png";
import online from "../../../assets/img/industries/schoolsandcampuses/onlineschool.png";
import realtime from "../../../assets/img/industries/schoolsandcampuses/realtimeschool.png";
import elec from "../../../assets/img/industries/schoolsandcampuses/eletricschool.png";
import data from "../../../assets/img/industries/schoolsandcampuses/dataschool.png";
import wifi from "../../../assets/img/industries/organization/wifibuilding.png";
import securebuilidng from "../../../assets/img/industries/organization/securebuilding.png";
import cuzs from "../../../assets/img/products/facialsensevisitormanagement/icon_brain_biomatric_3d.png";

// import { useWindowSize } from "@uidotdev/usehooks";

export const SchoolsAndCampuses = () => {
    // const { width } = useWindowSize() 

    // Tạo một ref để tham chiếu đến thẻ div cần cuộn đến
    const targetDivRef = useRef(null);
    const isVisible = useIntersectionObserver(targetDivRef);

 
    const { t, i18n }  = useTranslation();
    const { width } = useWindowSize()
    return (
        <>
            <div className=" bg-cover bg-center h-[260px]">
                    <div className="  max-w-[1300px] mx-auto  pt-[68px] ">
                        {
                            i18n.language === "en" ? (
                                width > 609  ? (
                                    <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                    <span className="inline-block ml-[10px] border-b-[10px] h-[51px] border-[#2B159C] sm:ml-2">{t("industries.school.header")}</span>
                                     </h1>
                                ): (
                                    <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px] sm:text-4xl">
                                    <span className="inline-block ml-[10px] border-b-[10px] h-[51px] border-[#2B159C] sm:h-[40px] sm:ml-2">Schools and</span><br />
                                    <span className="inline-block ml-[10px] border-b-[10px] h-[51px] border-[#2B159C] sm:h-[40px] sm:ml-2">Campuses</span>
                                     </h1>
                                )
                            ) : (
                                width > 870  ? (
                                    <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                    <span className="inline-block ml-[10px] border-b-[10px] h-[51px] border-[#2B159C] sm:ml-2">{t("industries.school.header")}</span>
                                     </h1>
                                 ) : (
                                    width > 426 ? (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px]">
                                        <span className="inline-block ml-[10px] border-b-[10px] h-[51px] border-[#2B159C] sm:ml-2">Trường Học Và</span><br />
                                        <span className="inline-block ml-[10px] border-b-[10px] h-[51px] border-[#2B159C] sm:ml-2">Các Khuôn Viên</span>
                                         </h1>
                                    ) : (
                                        <h1 className="text-5xl text-white font-extrabold max-w-[1210px] leading-[60px] sm:text-4xl">
                                        <span className="inline-block ml-[10px] border-b-[10px] h-[51px] border-[#2B159C] sm:h-[40px] sm:ml-2">Trường Học </span><br />
                                        <span className="inline-block ml-[10px] border-b-[10px] h-[51px] border-[#2B159C] sm:h-[40px] sm:ml-2">Và Các </span><br />
                                        <span className="inline-block ml-[10px] border-b-[10px] h-[51px] border-[#2B159C] sm:h-[40px] sm:ml-2">Khuôn Viên</span>
                                         </h1>
                                    )
                                   
                                 )
                             
                            )
                        }
                      
                    </div>
                   
                
            </div>
            <div className=" bg-white">
                    <div className="max-w-[1300px] pt-[100px] pb-[50px] mx-auto relative">
                        <div className="ml-[10px]">
                            <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1110px] leading-[60px]">
                                {
                                    i18n.language === "en" ? (
                                       
                                            <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] sm:text-4xl">
                                                 <span className="">{t("industries.school.visitor")}</span>
                                            <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px]">{t("industries.school.school")}</span>
                                           
                                           
                                            </h1>
                                    ): (
                                       
                                            <h1 className="text-5xl text-[#1C2045] font-extrabold leading-[60px] sm:text-4xl">
                                                <span className="">{t("industries.school.visitor")}</span>
                                            <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)] sm:h-[40px]">{t("industries.school.school")}</span>
                                            
                                            </h1>
                                       
                                    )}
                                
                            </h1>
                           
                           
                            <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">{t("industries.school.our")}</p>



                            
                        </div>
                    </div>
            </div>
            <div ref={targetDivRef} className={`animation-fadeIn bg-white`}>
            {isVisible && (
            <div className=" animate-show-nav duration-300">
            <div className="bg-white relative pb-[50px] ">
            <img src={choose} className="w-[574px] h-[737px] absolute top-[-100px]  right-0" alt="" />
               
                    <div className=" mx-auto  max-w-[1040px] items-center  flex flex-wrap gap-[15px] lg:justify-center lg:flex-col relative">
                                      <UseCaseRight
                                    imageSrc={calender}
                                    title={t("industries.school.classdefine")}
                                    description={t("industries.school.classdefinedes")}
                                    number={"1"}
                                />
                                   <UseCaseLeft
                                    imageSrc={calender1}
                                    title={t("industries.school.classselect")}
                                    description={t("industries.school.classselectdes")}
                                    number={"2"}
                                />
                                 <UseCaseRight
                                    imageSrc={visitor1}
                                    title={t("industries.school.student")}
                                    description={t("industries.school.studentdes")}
                                    number={"3"}
                                />
                                 <UseCaseLeft
                                    imageSrc={after}
                                    title={t("industries.school.afterclass")}
                                    description={t("industries.school.afterclassdes")}
                                    number={"4"}
                                />
                                 

                           
                    </div>
            </div>
            </div> 
            )}              
            </div>
          

           
            <div className=" bg-[#293990] relative ">
        <img src={left} className=" absolute top-0 left-0 "></img>
        <img src={right} className=" absolute right-0 bottom-0 "></img>
        <div className=" flex items-center justify-center">
            <div className="flex flex-col gap-[30px] py-[50px] lg:px-[35px]  px-[100px] items-center sm:items-stretch ">
            <h1 className="text-center text-[#eef3fa] font-extrabold  text-[38px] leading-[56px]" >{t("products.facialsensevisitormanagement.quickstartguide.header")}</h1>
                <p className="text-center text-[#eef3fa] font-normal  text-[16px] leading-[24px] max-w-[1110px]">{t("industries.school.quicklydes")}</p>

                <div className="flex  gap-6 xl:justify-center sm:flex-col ">
                <CloudButton title={t("products.facialsensevisitormanagement.quickstartguide.cloud")}  />
                <LeafButton title={t("products.facialsensevisitormanagement.quickstartguide.onpremises")} />
                </div>
                <p className="text-center text-[#eef3fa] font-normal  text-[16px] leading-[24px] max-w-[1110px]">{t("industries.school.if")}
                <Link style={{color: '#eef3fa', textDecoration: 'underline' }} to="https://www.biometricsupply.com/" > {t("industries.school.contact")}</Link>
                {t("industries.school.anda")}
                </p>
            </div>
        </div>
    </div>

            <div className="relative bg-white pb-[50px]">
            <img src={choose1} className="w-[574px] h-[737px] absolute top-[-50px] left-[-50px]" alt="" />

            <div className="  max-w-[1300px]  mx-auto pt-[90px] pb-0 flex flex-col items-center relative ">
                  <Headerkeyfeatures nameHader1={t("industries.school.ofour")} 
                                          underlineHeader={t("industries.school.keyfeatures")}
                                          desHeader={t("industries.school.keyfeaturesdes")}
                                          descac={t("industries.school.keyfeatures")}
                                        //   tinh={t("industries.school.keyfeatures")}
                                          check={true}
                    />
                        <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <Features 
                                image={online}
                                title={t("industries.school.online")}
                                des={t("industries.school.onlinedes")}
                            />
                            <Features 
                                image={secure}
                                title={t("industries.school.secure")}
                                des={t("industries.school.securedes")}
                            />
                             <Features 
                                image={safe}
                                title={t("industries.school.safe")}
                                des={t("industries.school.safedes")}
                            />
                        </div>
                        <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <Features 
                                image={wifi}
                                title={t("industries.school.auto")}
                                des={t("industries.school.autodes")}
                            />
                            <Features 
                                image={realtime}
                                title={t("industries.school.real")}
                                des={t("industries.school.realdes")}
                            />
                             <Features 
                                image={elec}
                                title={t("industries.school.elec")}
                                des={t("industries.school.elecdes")}
                            />
                        </div>
                        <div className=" flex relative mt-[50px] mb-[30px] sm:flex-col">
                            <Features 
                                image={securebuilidng}
                                title={t("industries.school.bio")}
                                des={t("industries.school.biodes")}
                            />
                            <Features 
                                image={cuzs}
                                title={t("industries.school.cuztom")}
                                des={t("industries.school.cuztomdes")}
                            />
                             <Features 
                                image={data}
                                title={t("industries.school.data")}
                                des={t("industries.school.datades")}
                            />
                        </div>


                        
            </div>
            
            </div>
            <div className="bg-[#F1F6FA] ">
                <div className=" mx-auto max-w-[1300px] pt-[85px] pb-[50px] flex flex-col gap-[50px] px-4 ">
                    <div className=" relative">
                       
                                <div className=" flex flex-col gap-[15px] items-center ">
            
                                    <h1 className="text-center text-5xl text-[#1C2045] font-extrabold  max-w-[1290px] leading-[60px] sm:text-4xl ">
                                        <span className="border-b-[10px]  pl-2 inline-block  h-[50px] border-[var(--tree-poppy)] sm:h-[40px]">
                                        {t("industries.school.transfrom")}
                                        </span>
                                        {t("industries.school.howyou")}
                                    </h1>
                                    <p className=' pl-2 text-[18px] max-w-[1290px]  text-[#3A505F] text-center font-normal leading-[25px]'>{t("industries.school.transfromdes")}</p>
                                    <p className='pt-[15px] pl-2 text-[18px] max-w-[1290px]  text-[#3A505F] text-center font-bold leading-[25px]'>{t("industries.school.choosing")}</p>
                                   
                                </div>
                                <div className='flex flex-col pt-[30px] gap-[30px] '>
                                        <div className='flex items-center'>
                                        <div className='h-[6px] w-[6px] bg-[#F7941D] rounded-[3px]'></div>
                                        <p className='pl-[20px] text-[18px] max-w-[1290px]  text-[#3A505F] text-center font-normal leading-[25px]'>{t("industries.school.glowing")}</p>
                                        </div>
                                        <div className='flex items-center'>
                                        <div className='h-[6px] w-[6px] bg-[#F7941D] rounded-[3px]'></div>
                                        <p className='pl-[20px] text-[18px] max-w-[1290px]  text-[#3A505F] text-center font-normal leading-[25px]'>{t("industries.school.equipped")}</p>
                                        </div>
                                        <div className='flex items-center'>
                                        <div className='h-[6px] w-[6px] bg-[#F7941D] rounded-[3px]'></div>
                                        <p className='pl-[20px] text-[18px] max-w-[1290px]  text-[#3A505F] text-center font-normal leading-[25px]'>{t("industries.school.safetransfrom")}</p>
                                        </div>
                                        <div className='flex items-center'>
                                        <div className='h-[6px] w-[6px] bg-[#F7941D] rounded-[3px]'></div>
                                        <p className='pl-[20px] text-[18px] max-w-[1290px]  text-[#3A505F] text-center font-normal leading-[25px]'>{t("industries.school.encrypted")}</p>
                                        </div>
                                        <div className='flex items-center'>
                                        <div className='h-[6px] w-[6px] bg-[#F7941D] rounded-[3px]'></div>
                                        <p className='pl-[20px] text-[18px] max-w-[1290px]  text-[#3A505F] text-center font-normal leading-[25px]'>{t("industries.school.save")}</p>
                                        </div>
                                        <div className='flex items-center'>
                                        <div className='h-[6px] w-[6px] bg-[#F7941D] rounded-[3px]'></div>
                                        <p className='pl-[20px] text-[18px] max-w-[1290px]  text-[#3A505F] text-center font-normal leading-[25px]'>{t("industries.school.quick")}</p>
                                        </div>
                                        <div className='flex items-center'>
                                        <div className='h-[6px] w-[6px] bg-[#F7941D] rounded-[3px]'></div>
                                        <p className='pl-[20px] text-[18px] max-w-[1290px]  text-[#3A505F] text-center font-normal leading-[25px]'>{t("industries.school.remote")}</p>
                                        </div>
                                        

                                   
                                       
                                    </div>
                                
                    
                    </div>
                   
                    
                </div>
            </div>
            <div className="bg-[#151686]  ">
      <div className="max-w-[1300px] mx-auto px-2   py-10 flex justify-between items-center text-white lg:px-6 md:flex-col">
        <div>
          <h1 className="text-[38px] leading-[56px] font-extrabold mb-6 md:text-center">
            {t("industries.school.getstart")}
          </h1>
          <p className="text-lg sm:text-center">
            {t("industries.school.wehope")}
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
            {t("homepage.faq.contact")}
          </Button>
        </div>
      </div>
    </div>
                
                
                
               
                
          

           
        </>
    )
}
