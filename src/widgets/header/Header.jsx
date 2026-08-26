import logo from "./picture/logo.webp";
import { useTranslation } from "react-i18next";
import styles from "./styles/headerStyles.module.scss";
import Menu from "./menu/Menu";
import LanguagesSwitcher from "./languagesSwitcher/LanguagesSwitcher";
import GetQuote from "@/shared/ui/getQuoteBtn/GetQuote";

function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <div className={styles.pictureWrapper}>
            <img src={logo} alt={t("header.pictureAlt")} />
          </div>
          <Menu />
          <div>
            <LanguagesSwitcher />
          </div>
          <div>
            <a href="tel:+372 5562 5510"> +372 5562 5510 </a>
          </div>

          <GetQuote />
        </div>
      </div>
    </header>
  );
}

export default Header;
