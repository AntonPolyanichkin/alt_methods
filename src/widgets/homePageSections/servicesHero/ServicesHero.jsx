import { useTranslation } from "react-i18next";
import Card from "./card/Card";
import styles from "./styles/servicesHeroStyles.module.scss";
function ServicesHero() {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.services}>
        <div className={styles["services-container"]}>
          <div className={styles.contentContainer}>
            <div className={styles.textContainer}>
              <p className={styles.titleEyebrow}>{t("servicesHero.eyebrow")}</p>
              <h2 className={styles.title}>{t("servicesHero.title")}</h2>
              <p className={styles.text}>{t("servicesHero.text")}</p>
            </div>
            <div className={styles.cardContainer}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesHero;
