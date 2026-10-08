import { useTranslation } from "react-i18next";
import styles from "./styles/projectCardStyles.module.scss";

function ProjectCard({ project }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  // const location = project.location[lang] ?? project.location.en;

  return (
    <article className={styles.projectCard}>
      <div className={styles.pictureContainer}>
        <img src={project.image} alt="" className={styles.picture} />
        <span className={styles.tag}>{t(`portfolioPage.categories.${project.category}`)}</span>
      </div>
      <p className={styles.location}>
        <span className={styles.locationIcon} aria-hidden="true" />
        {/* {location} */}
      </p>
      {/* title — власна назва проєкту, НЕ через t(), див. коментар у data/projects.js */}
      <h3 className={styles.title}>{project.title}</h3>
    </article>
  );
}

export default ProjectCard;
