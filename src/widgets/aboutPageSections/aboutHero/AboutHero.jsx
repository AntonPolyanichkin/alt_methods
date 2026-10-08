import { useTranslation } from "react-i18next";
import styles from "./styles/aboutHeroStyles.module.scss";

function AboutHero() {
  const { t } = useTranslation();

  return (
    <section className={styles.aboutHero}>
      <div className={styles["about-hero-container"]}>
        <p className={styles.eyebrow}>{t("aboutPage.eyebrow")}</p>
        <h1 className={styles.title}>{t("aboutPage.title")}</h1>
        <p className={styles.subtitle}>{t("aboutPage.subtitle")}</p>
      </div>
    </section>
  );
}

export default AboutHero;
