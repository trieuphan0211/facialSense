import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "@uidotdev/usehooks";

export const Question = () => {
  // Translations
  const { t } = useTranslation();
  const { width } = useWindowSize();
  return (
    <div className="bg-[#151686]  ">
      <div className="max-w-[1300px] mx-auto px-2   py-10 flex justify-between items-center text-white lg:px-6 md:flex-col">
        <div>
          <h1 className="text-[38px] leading-[56px] font-extrabold mb-6 md:text-center">
            {t("homepage.faq.header")}
          </h1>
          <p className="text-lg sm:text-center">
            {t("homepage.faq.description")}
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
  );
};
