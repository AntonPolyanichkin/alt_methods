import { useTranslation } from "react-i18next";
import styles from "./styles/servicesTitleStyles.module.scss";

function ServiceHero({ service, titleKey }) {
  const { t } = useTranslation();

  return (
    <section className={styles.serviceHero} style={{ backgroundImage: `url(${service.posterImg})` }}>
      <div className={styles["service-hero-container"]}>
        <p className={styles.eyebrow}>{t("menu.title.services")}</p>
        <h1 className={styles.title}>{t(titleKey)}</h1>
      </div>
    </section>
  );
}

export default ServiceHero;
