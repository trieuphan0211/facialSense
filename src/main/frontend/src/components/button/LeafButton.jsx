import Button from "@mui/material/Button";
import PropTypes from "prop-types";

export const LeafButton = ({ title, style }) => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "30px",
        padding: "10px 20px",
        backgroundColor: "var(--tree-leaf)",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "capitalize",
        border: "1px solid var(--tree-leaf)",
        boxShadow: "0px 12px 30px 0px rgba(24, 92, 255, 0.18)",

        "&:hover": {
          backgroundColor: "var(--tree-leaf)",
        },
        ...style,
      }}
    >
      {title}
    </Button>
  );
};
LeafButton.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
};
