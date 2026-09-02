import { useTranslation } from "react-i18next";
import styles from "./styles/languagesSwitcher.module.scss";
import { DEFAULT_LANG, SUPPORTED_LANGS } from "@/app/i18n/langs";
import { useLocation, useNavigate } from "react-router";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function LanguagesSwitcher() {
  const { i18n } = useTranslation();
  const lang = i18n.language || DEFAULT_LANG;
  const location = useLocation();
  const navigate = useNavigate();
  const handleChangeLang = (e) => {
    const newLang = e.target.value;
    if (!SUPPORTED_LANGS.includes(newLang) || newLang === lang) return;
    const newPath = location.pathname.replace(`/${lang}`, `/${newLang}`);
    navigate(newPath);
  };
  return (
    <Select value={lang} onChange={handleChangeLang} className={styles.languageSelect}>
      {SUPPORTED_LANGS.map((currentLang) => (
        <MenuItem key={currentLang} value={currentLang} className={styles.languageMenuItem}>
          {currentLang.toUpperCase()}
        </MenuItem>
      ))}
    </Select>
  );
}

export default LanguagesSwitcher;
