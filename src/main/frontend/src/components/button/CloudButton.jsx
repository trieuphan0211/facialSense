import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { useWindowSize } from "@uidotdev/usehooks";
import { useTranslation } from "react-i18next";
export const CloudButton = ({ title, style }) => {
  const { width } = useWindowSize();
    const { i18n } = useTranslation()
    let padding = "0 50px"
    if (i18n.language  === "en"){
        padding =   "10px 50px"
    }else {
        padding =   "10px 20px"
    }
  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: "30px",
        padding: padding,
        borderColor: "var(--tree-poppy)",
        color: "var(--tree-poppy)",
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "none",
        width: width < 639 ? "100%" : "auto",
        // boxShadow: "0px 12px 30px 0px rgba(24, 92, 255, 0.18)",
        "&:hover": {
          backgroundColor: "var(--tree-poppy)",
          color: "#fff",
          borderColor: "var(--tree-poppy)",
        },
        ...style,
      }}
    >
      {title}
    </Button>
  );
};
CloudButton.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
};
