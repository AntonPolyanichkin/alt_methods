import { Link } from "react-router";
import styles from "./styles/selectedProjectsStyles.module.scss";
function SelectedProjects() {
  return (
    <section className={styles.selectedProgectsSection}>
      <div className={styles.selectedProgectsContainer}>
        <div className={styles.selectedProgectsText}>
          <div className={styles.selectedProgectsMainText}>
            <p className={styles.selectedProgectsEyebrow}>Portfolio</p>
            <h2 className={styles.selectedProgectsTitle}>Selected Projects</h2>
          </div>
          <div className={styles.selectedProgectsDescriptionContainer}>
            <p className={styles.selectedProgectsDescriptionText}>
              A selection of recent works across Estonia and internationally.
            </p>
            <Link className={styles.selectedProgectsDescriptionLink}>View All Projects </Link>
          </div>
        </div>
        <div className={styles.selectedProgectsCardsContianer}>
          <article className={styles.selectedProgectsCard}>
            <div className={styles.selectedProgectsCardPictureContainer}>
              <img src="" alt="" className={styles.selectedProgectsCardPicture} />
            </div>
            <div className={styles.selectedProgectsCardTag}>
              <p>Facade Repair</p>
            </div>
            <p className={styles.selectedProgectsCardLocation}>Tallinn, Estonia</p>
            <h3 className={styles.selectedProgectsCardTitle}>Ülemiste City Office Tower</h3>
          </article>
        </div>
      </div>
    </section>
  );
}

export default SelectedProjects;
