import Card from "./card/Card";
import styles from "./styles/servicesHeroStyles.module.scss";
function ServicesHero() {
  return (
    <>
      <section className={styles.services}>
        <div className={styles["services-container"]}>
          <div className={styles.contentContainer}>
            <div className={styles.textContainer}>
              <p className={styles.titleEyebrow}>Services</p>
              <h2 className={styles.title}>What We Do</h2>
              <p className={styles.text}>
                Building maintenance and structural works — carried out with the access method best suited to each
                project.
              </p>
            </div>
            <div className={styles.cardContainer}>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesHero;
