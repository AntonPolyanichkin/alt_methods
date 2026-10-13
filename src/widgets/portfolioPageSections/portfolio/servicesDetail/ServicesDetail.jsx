import { Link, Navigate, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useNavigationRoutes } from "@/app/router/navigationRoutes/useNavigationRoutes";
import styles from "./styles/servicedDetailStyles.module.scss";
import ServicesTitle from "../servicesTitle/ServicesTitle";
import { getServiceBySlug } from "@/app/constData/servicesList";

function ServiceDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const {services, contact } = useNavigationRoutes();

  const service = getServiceBySlug(slug);

  // Невалідний/видалений slug -> на список послуг, а не 404 в нікуди
  if (!service) {
    return <Navigate to={services} replace />;
  }

  const base = `serviceDetail.${slug}`;
  const works = t(`${base}.works`, { returnObjects: true });

  return (
    <>
      <ServicesTitle service={service} titleKey={`${base}.title`} />

      <section className={styles.contentSection}>
        <div className={styles["content-container"]}>
          <div className={styles.mainColumn}>
            <p className={styles.description}>{t(`${base}.description`)}</p>

            <div className={styles.callout}>
              <p className={styles.calloutEyebrow}>{t(`${base}.calloutTitle`)}</p>
              <p className={styles.calloutText}>{t(`${base}.calloutText`)}</p>
            </div>

            <h2 className={styles.worksTitle}>{t(`${base}.worksIncludedTitle`)}</h2>
            <ul className={styles.worksList}>
              {Array.isArray(works) &&
                works.map((work, index) => (
                  <li key={index} className={styles.workItem}>
                    <span className={styles.checkIcon} aria-hidden="true" />
                    {work}
                  </li>
                ))}
            </ul>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.quoteCard}>
              <p className={styles.quoteEyebrow}>{t("getQuote.eyebrow")}</p>
              <h3 className={styles.quoteTitle}>{t("getQuote.title")}</h3>
              <p className={styles.quoteSubtitle}>{t("getQuote.subtitle")}</p>
              <Link to={contact} className={styles.quoteCta}>
                {t("getQuoteBtn.btnText")}
                <span className={styles.quoteCtaArrow} aria-hidden="true" />
              </Link>
              <a className={styles.quotePhone} href="tel:+37251234567">
                <span className={styles.quotePhoneIcon} aria-hidden="true" />
                +372 5123 4567
              </a>
            </div>

            <div className={styles.credentialNote}>
              <p className={styles.credentialEyebrow}>{t("serviceDetail.irataEyebrow")}</p>
              <p className={styles.credentialText}>{t("serviceDetail.irataNote")}</p>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles["gallery-container"]}>
          <h2 className={styles.galleryTitle}>{t("serviceDetail.galleryTitle")}</h2>
          <div className={styles.galleryGrid}>
            {service.gallery.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <img src={image} alt="" className={styles.galleryImage} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetail;
