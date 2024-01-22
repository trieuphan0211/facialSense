import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useTranslation } from "react-i18next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";


const AccordionToggle = ( ) => {
  const [expanded, setExpanded] = React.useState(false);
  const { t } = useTranslation();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <div>
         <Accordion expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          key={"panel1"}
      sx={{
        boxShadow: "none",
            border: "1px solid #C9DCEC" ,
        borderRadius: "6px",
        padding: "15px 35px",
        marginBottom: "20px",
        backgroundColor: "#EEF3FA",
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary expandIcon={
                <ExpandMoreIcon sx={{ fontSize: "30px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              padding: "0px",
              color: "#1C2045",
              "& .Mui-expanded": {
                color: "#151686",
                margin: "0px",
              },
            }}>
        <Typography
         sx={{
          fontSize: "22px",
          fontWeight: "bold",
        }}
        >{t("products.facialsensevisitormanagement.askedquestions.howi")}</Typography>
      </AccordionSummary>
      <AccordionDetails
       sx={{
        "&.MuiAccordionDetails-root": {
          paddingLeft: "0px",
          width: "94%",
        },
      }}
      >
        <Typography 
         sx={{
          fontSize: "18px",
          lineHeight: "25px",
          fontWeight: 400,
          color: "#3A505F",
        }}>
          {t("products.facialsensevisitormanagement.askedquestions.howides")}
        </Typography>
      </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          key={"panel2"}
      sx={{
        boxShadow: "none",
            border: "1px solid #C9DCEC" ,
        borderRadius: "6px",
        padding: "15px 35px",
        marginBottom: "20px",
        backgroundColor: "#EEF3FA",
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary expandIcon={
                <ExpandMoreIcon sx={{ fontSize: "30px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              padding: "0px",
              color: "#1C2045",
              "& .Mui-expanded": {
                color: "#151686",
                margin: "0px",
              },
            }}>
        <Typography
         sx={{
          fontSize: "22px",
          fontWeight: "bold",
        }}
        >{t("products.facialsensevisitormanagement.askedquestions.howcan")}</Typography>
      </AccordionSummary>
      <AccordionDetails
       sx={{
        "&.MuiAccordionDetails-root": {
          paddingLeft: "0px",
          width: "94%",
        },
      }}
      >
        <Typography 
         sx={{
          fontSize: "18px",
          lineHeight: "25px",
          fontWeight: 400,
          color: "#3A505F",
        }}>
          <p> {t("products.facialsensevisitormanagement.askedquestions.howcandes")}</p>
        
          <ul className='mt-[10px] mb-[15px] ml-[30px] list-disc 	'>
            <li className='mb-[10px] '>{t("products.facialsensevisitormanagement.askedquestions.howcandes1")}</li>
            <li className='mb-[10px]'>{t("products.facialsensevisitormanagement.askedquestions.howcandes2")}</li>
            <li className='mb-[10px]'>{t("products.facialsensevisitormanagement.askedquestions.howcandes3")}</li>
            <li className='mb-[10px]'>{t("products.facialsensevisitormanagement.askedquestions.howcandes4")}</li>
          </ul>
        </Typography>
      </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          key={"panel3"}
      sx={{
        boxShadow: "none",
            border: "1px solid #C9DCEC" ,
        borderRadius: "6px",
        padding: "15px 35px",
        marginBottom: "20px",
        backgroundColor: "#EEF3FA",
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary expandIcon={

                <ExpandMoreIcon sx={{ fontSize: "30px" }} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              padding: "0px",
              color: "#1C2045",
              "& .Mui-expanded": {
                color: "#151686",
                margin: "0px",
              },
            }}>
        <Typography
         sx={{
          fontSize: "22px",
          fontWeight: "bold",
        }}
        >{t("products.facialsensevisitormanagement.askedquestions.cani")}</Typography>
      </AccordionSummary>
      <AccordionDetails
       sx={{
        "&.MuiAccordionDetails-root": {
          paddingLeft: "0px",
          width: "94%",
        },
      }}
      >
        <Typography 
         sx={{
          fontSize: "18px",
          lineHeight: "25px",
          fontWeight: 400,
          color: "#3A505F",
        }}>
          <p></p>
          {t("products.facialsensevisitormanagement.askedquestions.canides")}
          <ul className='mt-[10px] mb-[15px] ml-[30px] list-disc 	'>
            <li className='mb-[10px]' >{t("products.facialsensevisitormanagement.askedquestions.canides1")}</li>
            <li className='mb-[10px]'>{t("products.facialsensevisitormanagement.askedquestions.canides2")}</li>
            <li className='mb-[10px]'>{t("products.facialsensevisitormanagement.askedquestions.canides3")}</li>
            <li className='mb-[10px]'>{t("products.facialsensevisitormanagement.askedquestions.canides4")}</li>
          </ul>
        </Typography>
      </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          key={"panel4"}
      sx={{
        boxShadow: "none",
        border: "1px solid #C9DCEC" ,
        borderRadius: "6px",
        padding: "15px 35px",
        marginBottom: "20px",
        backgroundColor: "#EEF3FA",
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary expandIcon={
                <ExpandMoreIcon sx={{ fontSize: "30px" }} />

            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              padding: "0px",
              color: "#1C2045",
              "& .Mui-expanded": {
                color: "#151686",
                margin: "0px",
              },
            }}>
        <Typography
         sx={{
          fontSize: "22px",
          fontWeight: "bold",
        }}
        >{t("products.facialsensevisitormanagement.askedquestions.whatare")}</Typography>
      </AccordionSummary>
      <AccordionDetails
       sx={{
        "&.MuiAccordionDetails-root": {
          paddingLeft: "0px",
          width: "94%",
        },
      }}
      >
        <Typography 
         sx={{
          fontSize: "18px",
          lineHeight: "25px",
          fontWeight: 400,
          color: "#3A505F",
        }}>
          {t("products.facialsensevisitormanagement.askedquestions.whataredes")}
        </Typography>
      </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          key={"panel5"}
      sx={{
        boxShadow: "none",
            border: "1px solid #C9DCEC" ,
        borderRadius: "6px",
        padding: "15px 35px",
        marginBottom: "20px",
        backgroundColor: "#EEF3FA",
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary expandIcon={
                <ExpandMoreIcon sx={{ fontSize: "30px" }} />
            }
            
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              padding: "0px",
              color: "#1C2045",
              "& .Mui-expanded": {
                color: "#151686",
                margin: "0px",
              },
            }}>
        <Typography
         sx={{
          fontSize: "22px",
          fontWeight: "bold",
        }}
        >{t("products.facialsensevisitormanagement.askedquestions.isit")}</Typography>
      </AccordionSummary>
      <AccordionDetails
       sx={{
        "&.MuiAccordionDetails-root": {
          paddingLeft: "0px",
          width: "94%",
        },
      }}
      >
        <Typography 
         sx={{
          fontSize: "18px",
          lineHeight: "25px",
          fontWeight: 400,
          color: "#3A505F",
        }}>
          {t("products.facialsensevisitormanagement.askedquestions.desisit")}
        </Typography>
      </AccordionDetails>
        </Accordion>
    </div>
   
  );
};
AccordionToggle.propTypes = {
  accordionData: PropTypes.array,
  type: PropTypes.string,
  backgroundColor: PropTypes.string,
  boxShadow: PropTypes.string,
  border: PropTypes.string
};

export default AccordionToggle;