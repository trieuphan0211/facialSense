import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export const AccordionTollge = ({ accordionData, type }) => {
  // Translations
  const { t } = useTranslation();
  // Begin: Accordion
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // End: Accordion

  return (
    <div>
      {accordionData.map((item, index) => (
        <Accordion
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          key={`panel${index + 1}`}
          sx={{
            boxShadow: "0px 4px 12px 0px rgba(12, 68, 204, 0.10)",
            borderRadius: "6px",
            padding: "15px 35px",
            marginBottom: "20px",
            "&:before": {
              display: "none",
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              type == "default" ? (
                <ExpandMoreIcon sx={{ fontSize: "30px" }} />
              ) : (
                <AddIcon sx={{ fontSize: "30px" }} />
              )
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
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              {t(item.header)}
            </Typography>
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
                lineHeight: "27px",
                fontWeight: 400,
                color: "#3A505F",
              }}
            >
              {t(item.body)}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
AccordionTollge.propTypes = {
  accordionData: PropTypes.array,
  type: PropTypes.string,
};
