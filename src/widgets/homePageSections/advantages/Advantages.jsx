import styles from "./styles/advantagesStyles.module.scss";
function Advantages() {
  return (
    <section className={styles.advantagesSection}>
      <div className={styles.advantagesContainer}>
        <div className={styles.advantagesTextContainer}>
          <p className={styles.advantagesEyebrow}>About</p>
          <h2 className={styles.advantagesTitle}>Why Clients Choose Us</h2>
        </div>
        <div className={styles.advantagesCardsContainer}>
          <article className={styles.advantagesCard}>
            <div className={styles.advantagesCardPictureContainer}>
              <img src="./icons/advantages-icon-01.svg" alt="" className={styles.advantagesCardPicture} />
            </div>
            <h3 className={styles.advantagesCardTitle}>IRATA Certified</h3>
            <p className={styles.advantagesCardText}>
              All technicians hold current IRATA international rope access certification — the industry benchmark for
              safety and technical competency at height.
            </p>
          </article>
          <article className={styles.advantagesCard}>
            <div className={styles.advantagesCardPictureContainer}>
              <img src="./icons/advantages-icon-02.svg" alt="" className={styles.advantagesCardPicture} />
            </div>
            <h3 className={styles.advantagesCardTitle}>No Scaffolding Required</h3>
            <p className={styles.advantagesCardText}>
              Faster mobilisation, lower overall cost, and minimal disruption to occupants. Especially effective on
              tall, complex, or occupied buildings.
            </p>
          </article>
          <article className={styles.advantagesCard}>
            <div className={styles.advantagesCardPictureContainer}>
              <img src="./icons/advantages-icon-03.svg" alt="" className={styles.advantagesCardPicture} />
            </div>
            <h3 className={styles.advantagesCardTitle}>International Operations</h3>
            <p className={styles.advantagesCardText}>
              Projects completed across 14 countries. We manage all cross-border logistics, compliance documentation,
              and legal requirements.
            </p>
          </article>
          <article className={styles.advantagesCard}>
            <div className={styles.advantagesCardPictureContainer}>
              <img src="./icons/advantages-icon-04.svg" alt="" className={styles.advantagesCardPicture} />
            </div>
            <h3 className={styles.advantagesCardTitle}>Method-Led Approach</h3>
            <p className={styles.advantagesCardText}>
              Every project begins with a site assessment, written risk assessment, and method statement — before a
              single rope is rigged.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
