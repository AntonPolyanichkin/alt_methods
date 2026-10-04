import styles from "./styles/advantagesStyles.module.scss";
import icon01 from "./icons/advantages-icon-01.svg";
import icon02 from "./icons/advantages-icon-02.svg";
import icon03 from "./icons/advantages-icon-03.svg";
import icon04 from "./icons/advantages-icon-04.svg";
import { useTranslation } from "react-i18next";
function Advantages() {
  const { t } = useTranslation();
  return (
    <section className={styles.advantagesSection}>
      <div className={styles["advantages-container"]}>
        <div className={styles.advantagesTextContainer}>
          <p className={styles.advantagesEyebrow}>{t("advantages.eyebrow")}</p>
          <h2 className={styles.advantagesTitle}>{t("advantages.title")}</h2>
        </div>
        <div className={styles.advantagesCardsContainer}>
          <article className={styles.advantagesCard}>
            <div className={styles.advantagesCardPictureContainer}>
              <img src={icon01} alt="" className={styles.advantagesCardPicture} />
            </div>
            <h3 className={styles.advantagesCardTitle}>{t("advantages.cards.irata.title")}</h3>
            <p className={styles.advantagesCardText}>{t("advantages.cards.irata.text")}</p>
          </article>
          <article className={styles.advantagesCard}>
            <div className={styles.advantagesCardPictureContainer}>
              <img src={icon02} alt="" className={styles.advantagesCardPicture} />
            </div>
            <h3 className={styles.advantagesCardTitle}>{t("advantages.cards.noScaffolding.title")}</h3>
            <p className={styles.advantagesCardText}>{t("advantages.cards.noScaffolding.text")}</p>
          </article>
          <article className={styles.advantagesCard}>
            <div className={styles.advantagesCardPictureContainer}>
              <img src={icon03} alt="" className={styles.advantagesCardPicture} />
            </div>
            <h3 className={styles.advantagesCardTitle}>{t("advantages.cards.international.title")}</h3>
            <p className={styles.advantagesCardText}>{t("advantages.cards.international.text")}</p>
          </article>
          <article className={styles.advantagesCard}>
            <div className={styles.advantagesCardPictureContainer}>
              <img src={icon04} alt="" className={styles.advantagesCardPicture} />
            </div>
            <h3 className={styles.advantagesCardTitle}>{t("advantages.cards.methodLed.title")}</h3>
            <p className={styles.advantagesCardText}>{t("advantages.cards.methodLed.text")}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
