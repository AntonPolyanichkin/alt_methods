import { useTranslation } from "react-i18next";
import styles from "./styles/companyClients.module.scss";
function CompanyClients() {
  const { t } = useTranslation();
  return (
    <section>
      <div className={styles["trusted-clients-container"]}>
        <div className={styles.contentContainer}>
          <h2 className={styles.trustedClientsTitle}>{t("companyClients.title")}</h2>
          <ul className={styles.trustedClientsList}>
            <li className={styles.listElement}>KONE</li>
            <li className={styles.listElement}>Technopolis</li>
            <li className={styles.listElement}>YIT</li>
            <li className={styles.listElement}>Merko</li>
            <li className={styles.listElement}>Lemminkainen</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CompanyClients;
