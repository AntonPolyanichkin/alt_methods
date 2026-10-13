import { Link } from "react-router";
import styles from "./styles/cardStyles.module.scss";
import { useTranslation } from "react-i18next";
function Card({ picture, title, description, path }) {
  const { t } = useTranslation();

  return (
    <article className={styles.card}>
      <div className={styles.pictureContainer}>
        <img src={picture} alt="Картинка" className={styles.picture} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.cardTitle}> {title}</h3>
        <p className={styles.cardText}>{description}</p>
        <Link className={styles.cardLink} to={path}>
          {t("serviceCard.learnMore")}
        </Link>
      </div>
    </article>
  );
}

export default Card;
