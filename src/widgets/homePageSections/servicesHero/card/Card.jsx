import { Link } from "react-router";
import styles from "./styles/cardStyles.module.scss";
import picture from "./pictures/picture.webp";
function Card() {
  return (
    <article className={styles.card}>
      <div className={styles.pictureContainer}>
        <img src={picture} alt="Картинка" className={styles.picture} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.cardTitle}>Facade Repair</h3>
        <p className={styles.cardText}>
          Crack injection, surface restoration, and panel replacement on any building type or height.
        </p>
        <Link className={styles.cardLink}> Learn more </Link>
      </div>
    </article>
  );
}

export default Card;
