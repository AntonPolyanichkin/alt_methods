import { useTranslation } from "react-i18next";
import styles from "./styles/companyStats.module.scss";
function CompanyStats() {
  const { t } = useTranslation();
  return (
    <section aria-label={t("companyStats.ariaLabel")}>
      <div className={styles["statistics-container"]}>
        <dl className={styles.statisticCardsContainer}>
          <div className={styles.statisticCard}>
            <dt>340+</dt>
            <dd>{t("companyStats.projectsCompleted")}</dd>
          </div>
          <div className={styles.listElementSeparator}></div>
          <div className={styles.statisticCard}>
            <dt>12</dt>
            <dd>{t("companyStats.yearsActive")}</dd>
          </div>
          <div className={styles.listElementSeparator}></div>
          <div className={styles.statisticCard}>
            <dt>28</dt>
            <dd>{t("companyStats.certifiedTechnicians")}</dd>
          </div>
          <div className={styles.listElementSeparator}></div>
          <div className={styles.statisticCard}>
            <dt>14</dt>
            <dd>{t("companyStats.countriesServed")}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default CompanyStats;
