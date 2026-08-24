import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json"
import et from "./locales/et.json"
import ru from "./locales/ru.json"

const savedLang = localStorage.getItem("i18nextLng") || "et";
i18n.use(initReactI18next).init({
  resources: {
    et: {translation: et},
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: savedLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
  },
});

export default i18n