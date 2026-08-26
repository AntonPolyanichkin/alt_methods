import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import et from "./locales/et.json";
import ru from "./locales/ru.json";
import { DEFAULT_LANG, SUPPORTED_LANGS } from "./langs";

const savedLang = localStorage.getItem("i18nextLng") || DEFAULT_LANG;
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      et: { translation: et },
      en: { translation: en },
      ru: { translation: ru },
    },
    lng: savedLang,
    fallbackLng: DEFAULT_LANG,
    supportedLngs: SUPPORTED_LANGS,
    load: "languageOnly",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
