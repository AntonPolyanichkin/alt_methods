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
        <div>
          <div>
            <p>Contact</p>
            <h2>Request a Quote</h2>
            <p>Describe your project and we will respond within one business day.</p>
          </div>
          <form>
            <div>
              <div>
                <label htmlFor={nameFormId}>Name *</label>
                <input name="name" id={nameFormId} type="text" />
                <label htmlFor={emailFormId}>Email *</label>
                <input name="email" id={emailFormId} type="email" />
              </div>
              <div>
                <label htmlFor={companyFormId}>Company (optional)</label>
                <input name="company" id={companyFormId} type="text" />
                <label htmlFor={phoneFormId}>Phone *</label>
                <input name="phone" id={phoneFormId} type="tel" />
              </div>
              <label htmlFor={serviceFormId}>Service Required *</label>
              <input name="service" id={serviceFormId} type="text" />
              <label htmlFor={projectDescriptionFormId}>Project Description *</label>
              <textarea name="project-description" id={projectDescriptionFormId}></textarea>
              <div>
                <input name="processing-data" type="checkbox" id={processingData} />
                <label htmlFor={processingData}>
                  I consent to the processing of my personal data for the purpose of receiving a quotation.
                </label>
              </div>
              <button>Send Request</button>
            </div>
          </form>
        </div>
        <div>
          <h3>Contact Information</h3>
          <ul>
            <li>
              <h4>Office</h4>
              <p>Pärnu mnt 18, 10141 Tallinn, Estonia</p>
            </li>
            <li>
              <h4>Puhelin</h4>
              <p>+372 5123 4567</p>
            </li>
            <li>
              <h4>Email</h4>
              <p>info@alpkon.ee</p>
            </li>
          </ul>
          <div>
            <h4>Response time</h4>
            <p>We respond to all enquiries within one business day. For urgent works, please call directly.</p>
          </div>
          <div>
            <h4>IRATA Certified</h4>
            <p>
              All our technicians hold current IRATA international rope access certification. Full liability insurance
              on every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetQuote;
