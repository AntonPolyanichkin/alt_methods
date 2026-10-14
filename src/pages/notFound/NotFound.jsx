import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useNavigationRoutes } from "@/app/router/navigationRoutes/useNavigationRoutes";
import styles from "./styles/notFoundStyles.module.scss";

function NotFound() {
  const { t } = useTranslation();
  const { home } = useNavigationRoutes();

  return (
    <section className={styles.notFound}>
      <h1>{t("notFound.title")}</h1>
      <Link to={home}>{t("notFound.homeLink")}</Link>
    </section>
  );
}

export default NotFound;