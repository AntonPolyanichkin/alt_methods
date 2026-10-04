import { useTranslation } from "react-i18next";
import styles from "./styles/ourExpertiseStyles.module.scss";
function OurExpertise() {
  const { t } = useTranslation();
  return (
    <section className={styles.expertiseSection}>
      <div className={styles["expertise-container"]}>
        <div className={styles.contentContainer}>
          <div className={styles.expertiseContent}>
            <h2 className={styles.expertiseTitle}>
              {t("expertise.titleLine1")} <br /> {t("expertise.titleLine2")}
            </h2>
            <p className={styles.expertiseText}>{t("expertise.text")}</p>
          </div>

          <ul className={styles.credentialsList}>
            <li className={styles.credentialItem}>
              <span>{t("expertise.credentials.irata")}</span>
            </li>
            <li className={styles.credentialItem}>
              <span>{t("expertise.credentials.standards")}</span>
            </li>
            <li className={styles.credentialItem}>
              <span>{t("expertise.credentials.insured")}</span>
            </li>
            <li className={styles.credentialItem}>
              <span>{t("expertise.credentials.countries")}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OurExpertise;
