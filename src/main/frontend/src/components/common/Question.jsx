import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
export const Question = () => {
  // Translations
  const { t } = useTranslation();
  return (
    <div className="bg-[#151686] ">
      <div className="max-w-[1100px] mx-auto   py-10 flex justify-between items-center text-white lg:px-6 md:flex-col">
        <div>
          <h1 className="text-[38px] leading-[56px] font-extrabold mb-6 md:text-center">
            {t("homepage.faq.header")}
          </h1>
          <p className="text-lg ">{t("homepage.faq.description")}</p>
        </div>
        <div className="md:mt-5">
          <Button
            variant="contained"
            sx={{
              padding: "10px 20px",
              bgcolor: "#F7941D",
              border: "1px solid #F7941D",
              borderRadius: "30px",
              boxShadow: "0px 12px 30px 0px rgba(24, 92, 255, 0.18)",
              "&:hover": {
                bgcolor: "#F7941D",
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
