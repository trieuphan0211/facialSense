import { useTranslation } from "react-i18next";

export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className=" bg-cover bg-center h-[360px] 4">
      <h1
        className={`inline-block  h-[51px] text-5xl text-white font-extrabold ml-[268px] mt-[100px]`}
      >
        {t("company.header")}
      </h1>
    </div>
  );
};
