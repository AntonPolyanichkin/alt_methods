import styles from "./styles/reviewsStyles.module.scss";
function Reviews() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
        <p className={styles.testimonialsEyebrow}>Trusted by Clients Across Europe</p>
        <h2 className={styles.testimonialsTitle}>What Clients Say</h2>

        <ul className={styles.testimonialsList}>
          <li className={styles.testimonialCard}>
            <div className={styles.rating}>{/* Stars */}</div>
            <blockquote className={styles.testimonialQuote}>
              “Alpkon completed our 18-storey facade repair ahead of schedule with zero disruption to tenants.
              Professional, methodical, and technically excellent.”
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <cite className={styles.authorName}>Marko Leppänen</cite>
              <span className={styles.authorRole}>Facility Manager, Technopolis Group</span>
            </div>
          </li>

          <li className={styles.testimonialCard}>
            <div className={styles.rating}>{/* Stars */}</div>
            <blockquote className={styles.testimonialQuote}>
              “Alpkon completed our 18-storey facade repair ahead of schedule with zero disruption to tenants.
              Professional, methodical, and technically excellent.”
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <cite className={styles.authorName}>Marko Leppänen</cite>
              <span className={styles.authorRole}>Facility Manager, Technopolis Group</span>
            </div>
          </li>

          <li className={styles.testimonialCard}>
            <div className={styles.rating}>{/* Stars */}</div>
            <blockquote className={styles.testimonialQuote}>
              “Alpkon completed our 18-storey facade repair ahead of schedule with zero disruption to tenants.
              Professional, methodical, and technically excellent.”
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <cite className={styles.authorName}>Marko Leppänen</cite>
              <span className={styles.authorRole}>Facility Manager, Technopolis Group</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Reviews;
