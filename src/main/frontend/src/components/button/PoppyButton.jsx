import PropTypes from "prop-types";
import Button from "@mui/material/Button";
export const PoppyButton = ({ title, style }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: "30px",
        padding: "10px 20px",
        borderColor: "var(--tree-poppy)",
        color: "var(--tree-poppy)",
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "none",
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
PoppyButton.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
};
