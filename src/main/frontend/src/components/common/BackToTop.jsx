import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
import KeyboardTabRoundedIcon from "@mui/icons-material/KeyboardTabRounded";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "@uidotdev/usehooks";
export const BackToTop = () => {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const backToTopRef = useRef(null);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      if (backToTopRef.current) {
        backToTopRef.current.style.display = "block";
      }
    } else {
      if (backToTopRef.current) {
        backToTopRef.current.style.display = "none";
      }
    }
  });

  return (
    <div
      className="fixed bottom-16 z-10 h-16 hidden"
      ref={backToTopRef}
      style={{
        left: width > 613 ? "calc(100vw - 150px)" : "calc(100vw - 100px)",
      }}
    >
      <Button
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "var( --tree-leaf)",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
          },
          gap: "5px",
          fontSize: "10px",
          textTransform: "uppercase",
          fontWeight: "600",
          lineHeight: "24px",
          padding: 0,
        }}
        disableRipple
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <KeyboardTabRoundedIcon
          sx={{ transform: "rotate(-90deg)", fontSize: "20px" }}
        />
        {t("backtotop")}
      </Button>
    </div>
  );
};
