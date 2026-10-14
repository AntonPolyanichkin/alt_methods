import { useNavigationRoutes } from "@/app/router/navigationRoutes/useNavigationRoutes";
import styles from "./styles/heroStyles.module.scss";
import FeedbackBtn from "@/shared/ui/Feedback/FeedbackBtn";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { contact, portfolio } = useNavigationRoutes();

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
            <FeedbackBtn text={t("getQuoteBtn.btnText")} arrow={true} onClick={() => navigate(contact)} />
            <button className={styles.servicesButton} onClick={() => navigate(portfolio)}>
              {t("hero.servicesBtn")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
