import styles from "./styles/ourExpertiseStyles.module.scss";
function OurExpertise() {
  return (
    <section className={styles.expertiseSection}>
      <div className={styles.expertiseContainer}>
        <div className={styles.expertiseContent}>
          <h2 className={styles.expertiseTitle}>
            Built on Expertise. <br /> Trusted Internationally.
          </h2>
          <p className={styles.expertiseText}>
            Founded in Tallinn, Alpkon operates as a serious engineering contractor — not a niche climbing service. We
            hold IRATA rope access certification, comply with EN 365 and ISO 22846 safety standards, and carry full
            professional indemnity insurance. Our crews have completed projects in 14 countries, delivering to the same
            rigorous standard regardless of location.
          </p>
        </div>

        <ul className={styles.credentialsList}>
          <li className={styles.credentialItem}>
            <span>IRATA Certified</span>
          </li>
          <li className={styles.credentialItem}>
            <span>EN 365 / ISO 22846</span>
          </li>
          <li className={styles.credentialItem}>
            <span>Fully Insured</span>
          </li>
          <li className={styles.credentialItem}>
            <span>14 Countries</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default OurExpertise;
