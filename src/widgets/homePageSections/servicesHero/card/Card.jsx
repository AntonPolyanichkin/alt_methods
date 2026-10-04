import { Link } from "react-router";
import styles from "./styles/cardStyles.module.scss";
import picture from "./pictures/picture.webp";
import { useTranslation } from "react-i18next";
function Card() {
  const { t } = useTranslation();

  return (
    <article className={styles.card}>
      <div className={styles.pictureContainer}>
        <img src={picture} alt="Картинка" className={styles.picture} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.cardTitle}>{t("serviceCard.facadeRepair.title")}</h3>
        <p className={styles.cardText}>{t("serviceCard.facadeRepair.text")}</p>
        <Link className={styles.cardLink}> {t("serviceCard.learnMore")} </Link>
      </div>
    </article>
  );
}

export default Card;
