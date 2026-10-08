import { useTranslation } from "react-i18next";
import styles from "./styles/PortfolioHeroStyles.module.scss";

function PortfolioHero() {
  const { t } = useTranslation();

  return (
    <section className={styles.portfolioHero}>
      <div className={styles["portfolio-hero-container"]}>
        <p className={styles.eyebrow}>{t("portfolioPage.eyebrow")}</p>
        <h1 className={styles.title}>{t("portfolioPage.title")}</h1>
        <p className={styles.subtitle}>{t("portfolioPage.subtitle")}</p>
      </div>
    </section>
  );
}

export default PortfolioHero;
