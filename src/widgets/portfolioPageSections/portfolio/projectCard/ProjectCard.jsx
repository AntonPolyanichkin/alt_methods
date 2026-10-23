import { useTranslation } from "react-i18next";
import styles from "./styles/projectCardStyles.module.scss";
import { Link } from "react-router";
import { useNavigationRoutes } from "@/app/router/navigationRoutes/useNavigationRoutes";

function ProjectCard({ project }) {
  const { t } = useTranslation();
  const title = t(`serviceDetail.${project.slug}.title`);
  const routes = useNavigationRoutes();
  return (
    <article className={styles.projectCard}>
      <Link to={routes.serviceDetail(project.slug)} className={styles.pictureContainer}>
        <img src={project.heroImage} alt={title} className={styles.picture} loading="lazy" />
        <span className={styles.tag}>{t(`portfolioPage.categories.${project.category}`)}</span>
      </Link>
      <h3 className={styles.title}>{title}</h3>
    </article>
  );
}

export default ProjectCard;
