import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import translationEN from "./eng";
import translationVI from "./vi";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
};

let language =
  typeof window.localStorage === "object" &&
  typeof window.localStorage?.getItem !== "undefined"
    ? localStorage.getItem("lang")
    : null;
console.log(language);
if (!language) {
  if (
    typeof window.localStorage === "object" &&
    typeof window.localStorage?.getItem !== "undefined"
  )
    localStorage?.setItem("lang", "English");
  language = "English";
}

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: ["en", "vi"],
    lng: language == "Vietnamese" ? "vi" : "en",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
