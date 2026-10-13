import { useTranslation } from "react-i18next";
import Card from "./card/Card";
import styles from "./styles/servicesHeroStyles.module.scss";
import { servicesList } from "@/app/constData/servicesList";
import { useNavigationRoutes } from "@/app/router/navigationRoutes/useNavigationRoutes";
function ServicesHero() {
  const { t } = useTranslation();
  const { serviceDetail } = useNavigationRoutes();
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
              {servicesList.map((service, index) => (
                <Card
                  picture={service.heroImage}
                  title={t(`serviceDetail.${service.slug}.title`)}
                  description={t(`serviceDetail.${service.slug}.description`)}
                  path={serviceDetail(service.slug)}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesHero;
