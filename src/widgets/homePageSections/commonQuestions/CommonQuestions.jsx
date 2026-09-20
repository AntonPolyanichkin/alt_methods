import styles from "./styles/commonQuestionsStyles.module.scss";
function CommonQuestions() {
  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        <p className={styles.faqEyebrow}>FAQ</p>
        <h2 className={styles.faqTitle}>Common Questions</h2>

        <div className={styles.faqList}>
          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>What is rope access, and when is it used?</summary>
            <p className={styles.faqAnswer}>{/* текст відповіді */}</p>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>Is rope access safe?</summary>
            <p className={styles.faqAnswer}>{/* текст відповіді */}</p>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>Do you work outside Estonia?</summary>
            <p className={styles.faqAnswer}>{/* текст відповіді */}</p>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>How quickly can you mobilise?</summary>
            <p className={styles.faqAnswer}>{/* текст відповіді */}</p>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>What does the quotation include?</summary>
            <p className={styles.faqAnswer}>{/* текст відповіді */}</p>
          </details>

          <details className={styles.faqItem}>
            <summary className={styles.faqQuestion}>What size projects do you take on?</summary>
            <p className={styles.faqAnswer}>{/* текст відповіді */}</p>
          </details>
        </div>
      </div>
    </section>
  );
}

export default CommonQuestions;
