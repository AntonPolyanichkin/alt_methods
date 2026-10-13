import { Link } from "react-router";
import styles from "./styles/selectedProjectsStyles.module.scss";

import { useTranslation } from "react-i18next";
import { useNavigationRoutes } from "@/app/router/navigationRoutes/useNavigationRoutes";
import { servicesList } from "@/app/constData/servicesList";
function SelectedProjects() {
  const { t } = useTranslation();
  const { portfolio } = useNavigationRoutes();
  return (
    <section className={styles.selectedProgectsSection}>
      <div className={styles["selected-progects-container"]}>
        <div className={styles.selectedProgectsText}>
          <div className={styles.selectedProgectsMainText}>
            <p className={styles.selectedProgectsEyebrow}>{t("selectedProjects.eyebrow")}</p>
            <h2 className={styles.selectedProgectsTitle}>{t("selectedProjects.title")}</h2>
          </div>
          <div className={styles.selectedProgectsDescriptionContainer}>
            <p className={styles.selectedProgectsDescriptionText}>{t("selectedProjects.description")}</p>
            <Link className={styles.selectedProgectsDescriptionLink} to={portfolio}>
              {t("selectedProjects.viewAllLink")}
            </Link>
          </div>
        </div>
        <div className={styles.selectedProgectsCardsContianer}>
          {servicesList.map((service, index) => (
            <article className={styles.selectedProgectsCard} key={index}>
              <div className={styles.selectedProgectsCardPictureContainer}>
                <img src={service.heroImage} alt="" className={styles.selectedProgectsCardPicture} />
              </div>
              <div className={styles.selectedProgectsCardTag}>
                <p>{t(`serviceDetail.${service.slug}.title`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedProjects;
