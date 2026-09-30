import { useId } from "react";
import styles from "./styles/getQuoteStyles.module.scss";

function GetQuote() {
  const nameFormId = useId();
  const emailFormId = useId();
  const companyFormId = useId();
  const phoneFormId = useId();
  const serviceFormId = useId();
  const projectDescriptionFormId = useId();
  const processingData = useId();

  return (
    <section className={styles.getQuoteSection}>
      <div className={styles["getQuote-container"]}>
        <div className={styles.formColumn}>
          <div className={styles.formIntro}>
            <p className={styles.eyebrow}>Contact</p>
            <h2 className={styles.title}>Request a Quote</h2>
            <p className={styles.subtitle}>Describe your project and we will respond within one business day.</p>
          </div>

          <form className={styles.form}>
            <div className={styles.formGrid}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor={nameFormId}>Name *</label>
                  <input className={styles.input} name="name" id={nameFormId} type="text" placeholder="name" required />
                </div>
                <div className={styles.formField}>
                  <label htmlFor={emailFormId}>Email *</label>
                  <input
                    className={styles.input}
                    name="email"
                    id={emailFormId}
                    type="email"
                    placeholder="email"
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor={companyFormId}>Company (optional)</label>
                  <input
                    className={styles.input}
                    name="company"
                    id={companyFormId}
                    type="text"
                    placeholder="company name"
                  />
                </div>
                <div className={styles.formField}>
                  <label htmlFor={phoneFormId}>Phone *</label>
                  <input
                    className={styles.input}
                    name="phone"
                    id={phoneFormId}
                    type="tel"
                    placeholder="phone"
                    required
                  />
                </div>
              </div>

              <div className={styles.formField}>
                <label htmlFor={serviceFormId}>Service Required *</label>
                <input
                  className={styles.input}
                  name="service"
                  id={serviceFormId}
                  type="text"
                  placeholder="service"
                  required
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor={projectDescriptionFormId}>Project Description *</label>
                <textarea
                  className={styles.textarea}
                  name="project-description"
                  id={projectDescriptionFormId}
                  placeholder="Project Description"
                  required
                ></textarea>
              </div>

              <div className={styles.consentRow}>
                <input
                  className={styles.checkbox}
                  name="processing-data"
                  type="checkbox"
                  id={processingData}
                  required
                />
                <label htmlFor={processingData} className={styles.consentLabel}>
                  I consent to the processing of my personal data for the purpose of receiving a quotation.
                </label>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Request
                <span className={styles.submitArrow} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>

        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>Contact Information</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true" />
              <div>
                <h4 className={styles.contactLabel}>Office</h4>
                <p className={styles.contactValue}>Pärnu mnt 18, 10141 Tallinn, Estonia</p>
              </div>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true" />
              <div>
                <h4 className={styles.contactLabel}>Phone</h4>
                <p className={styles.contactValue}>+372 5123 4567</p>
              </div>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true" />
              <div>
                <h4 className={styles.contactLabel}>Email</h4>
                <p className={styles.contactValue}>info@alpkon.ee</p>
              </div>
            </li>
          </ul>

          <div className={styles.responseTime}>
            <h4 className={styles.responseTimeLabel}>Response Time</h4>
            <p className={styles.responseTimeText}>
              We respond to all enquiries within one business day. For urgent works, please call directly.
            </p>
          </div>

          <div className={styles.credentialNote}>
            <p className={styles.credentialText}>
              All our technicians hold current IRATA international rope access certification. Full liability insurance
              on every project.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default GetQuote;
