import styles from "./styles/heroStyles.module.scss";
import FeedBackBtn from "../../../shared/ui/feedback/FeedbackBtn";
import { useTranslation } from "react-i18next";
function Hero() {
  const { t } = useTranslation();
  return (
    <section className={styles.heroSection}>
      <div className={styles["hero-container"]}>
        <div className={styles.contentContainer}>
          <p className={styles.heroEyebrow}>{t("hero.eyebrow")}</p>
          <h1 className={styles.heroTitle}>
            {t("hero.titleLine1")} <br /> {t("hero.titleLine2")}
          </h1>
          <p className={styles.text}>{t("hero.description")}</p>
          <div className={styles.buttonContainer}>
            <FeedBackBtn text={t("getQuoteBtn.btnText")} arrow={true} />
            <button className={styles.servicesButton}>{t("hero.servicesBtn")}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
