import { Link } from "react-router";
import styles from "./styles/selectedProjectsStyles.module.scss";
import picture from "./pictures/Image (Ülemiste City Office Tower).png";
import { useTranslation } from "react-i18next";
function SelectedProjects() {
  const { t } = useTranslation();

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
            <Link className={styles.selectedProgectsDescriptionLink}>{t("selectedProjects.viewAllLink")}</Link>
          </div>
        </div>
        <div className={styles.selectedProgectsCardsContianer}>
          <article className={styles.selectedProgectsCard}>
            <div className={styles.selectedProgectsCardPictureContainer}>
              <img src={picture} alt="" className={styles.selectedProgectsCardPicture} />
            </div>
            <div className={styles.selectedProgectsCardTag}>
              <p>Facade Repair</p>
            </div>
            <p className={styles.selectedProgectsCardLocation}>{t("projectCard.ulemisteTower.location")}</p>
            <h3 className={styles.selectedProgectsCardTitle}>Ülemiste City Office Tower</h3>
          </article>
          <article className={styles.selectedProgectsCard}>
            <div className={styles.selectedProgectsCardPictureContainer}>
              <img src={picture} alt="" className={styles.selectedProgectsCardPicture} />
            </div>
            <div className={styles.selectedProgectsCardTag}>
              <p>Facade Repair</p>
            </div>
            <p className={styles.selectedProgectsCardLocation}>{t("projectCard.ulemisteTower.location")}</p>
            <h3 className={styles.selectedProgectsCardTitle}>Ülemiste City Office Tower</h3>
          </article>
          <article className={styles.selectedProgectsCard}>
            <div className={styles.selectedProgectsCardPictureContainer}>
              <img src={picture} alt="" className={styles.selectedProgectsCardPicture} />
            </div>
            <div className={styles.selectedProgectsCardTag}>
              <p>Facade Repair</p>
            </div>
            <p className={styles.selectedProgectsCardLocation}>{t("projectCard.ulemisteTower.location")}</p>
            <h3 className={styles.selectedProgectsCardTitle}>Ülemiste City Office Tower</h3>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SelectedProjects;
