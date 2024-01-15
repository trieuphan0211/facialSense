import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { useWindowSize } from "@uidotdev/usehooks";

export const LeafButton = ({ title, style }) => {
  const { width } = useWindowSize();
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "30px",
        padding: "10px 20px",
        backgroundColor: "var(--tree-leaf)",
        color: "#fff",
        width: width < 639 ? "100%" : "auto",
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "none",
        border: "1px solid var(--tree-leaf)",
        // boxShadow: "0px 12px 30px 0px rgba(24, 92, 255, 0.18)",

        "&:hover": {
          backgroundColor: "#4B2BE3",
          border: "1px solid #4B2BE3",
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
