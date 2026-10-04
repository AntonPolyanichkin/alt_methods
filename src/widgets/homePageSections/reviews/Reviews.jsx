import { useTranslation } from "react-i18next";
import styles from "./styles/reviewsStyles.module.scss";
function Reviews() {
  const { t } = useTranslation();
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles["testimonials-container"]}>
        <p className={styles.testimonialsEyebrow}>{t("reviews.eyebrow")}</p>
        <h2 className={styles.testimonialsTitle}>{t("reviews.title")}</h2>

        <ul className={styles.testimonialsList}>
          <li className={styles.testimonialCard}>
            <ul className={styles.ratingElements}>
              <li className={styles.ratingElement}></li>
              <li className={styles.ratingElement}></li>
              <li className={styles.ratingElement}></li>
              <li className={styles.ratingElement}></li>
              <li className={styles.ratingElement}></li>
            </ul>
            <blockquote className={styles.testimonialQuote}>{t("testimonial.sample.quote")}</blockquote>
            <div className={styles.testimonialCardLine}></div>
            <div className={styles.testimonialAuthor}>
              <cite className={styles.authorName}>Marko Leppänen</cite>
              <span className={styles.authorRole}>{t("testimonial.sample.role")}</span>
            </div>
          </li>

          <li className={styles.testimonialCard}>
            <ul className={styles.ratingElements}>
              <li className={styles.ratingElement}></li>
              <li className={styles.ratingElement}></li>
              <li className={styles.ratingElement}></li>
              <li className={styles.ratingElement}></li>
              <li className={styles.ratingElement}></li>
            </ul>
            <blockquote className={styles.testimonialQuote}>
              “Altmethods completed our 18-storey facade repair ahead of schedule with zero disruption to tenants.
              Professional, methodical, and technically excellent.”
            </blockquote>
            <div className={styles.testimonialCardLine}></div>
            <div className={styles.testimonialAuthor}>
              <cite className={styles.authorName}>Marko Leppänen</cite>
              <span className={styles.authorRole}>Facility Manager, Technopolis Group</span>
            </div>
          </li>

          <li className={styles.testimonialCard}>
            <ul className={styles.ratingElements}>
              <li className={styles.ratingElement}></li>
              <li className={styles.ratingElement}></li>
              <li className={styles.ratingElement}></li>
              <li className={styles.ratingElement}></li>
              <li className={styles.ratingElement}></li>
            </ul>
            <blockquote className={styles.testimonialQuote}>
              “Altmethods completed our 18-storey facade repair ahead of schedule with zero disruption to tenants.
              Professional, methodical, and technically excellent.”
            </blockquote>
            <div className={styles.testimonialCardLine}></div>
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
