import { useId } from "react";
import styles from "./styles/getQuoteStyles.module.scss";
import { useTranslation } from "react-i18next";

function GetQuote() {
  const nameFormId = useId();
  const emailFormId = useId();
  const companyFormId = useId();
  const phoneFormId = useId();
  const serviceFormId = useId();
  const projectDescriptionFormId = useId();
  const processingData = useId();
  const { t } = useTranslation();

  return (
    <section className={styles.getQuoteSection}>
      <div className={styles["getQuote-container"]}>
        <div className={styles.formColumn}>
          <div className={styles.formIntro}>
            <p className={styles.eyebrow}>{t("getQuote.eyebrow")}</p>
            <h2 className={styles.title}>{t("getQuote.title")}</h2>
            <p className={styles.subtitle}>{t("getQuote.subtitle")}</p>
          </div>

          <form className={styles.form}>
            <div className={styles.formGrid}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor={nameFormId}>{t("getQuote.form.nameLabel")}</label>
                  <input
                    className={styles.input}
                    name="name"
                    id={nameFormId}
                    type="text"
                    placeholder={t("getQuote.form.namePlaceholder")}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label htmlFor={emailFormId}>{t("getQuote.form.emailLabel")}</label>
                  <input
                    className={styles.input}
                    name="email"
                    id={emailFormId}
                    type="email"
                    placeholder={t("getQuote.form.emailPlaceholder")}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor={companyFormId}>{t("getQuote.form.companyLabel")}</label>
                  <input
                    className={styles.input}
                    name="company"
                    id={companyFormId}
                    type="text"
                    placeholder={t("getQuote.form.companyPlaceholder")}
                  />
                </div>
                <div className={styles.formField}>
                  <label htmlFor={phoneFormId}>{t("getQuote.form.phoneLabel")}</label>
                  <input
                    className={styles.input}
                    name={t("getQuote.form.phonePlaceholder")}
                    id={phoneFormId}
                    type="tel"
                    placeholder="phone"
                    required
                  />
                </div>
              </div>

              <div className={styles.formField}>
                <label htmlFor={serviceFormId}>{t("getQuote.form.serviceLabel")}</label>
                <input
                  className={styles.input}
                  name="service"
                  id={serviceFormId}
                  type="text"
                  placeholder={t("getQuote.form.servicePlaceholder")}
                  required
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor={projectDescriptionFormId}>{t("getQuote.form.descriptionLabel")}</label>
                <textarea
                  className={styles.textarea}
                  name="project-description"
                  id={projectDescriptionFormId}
                  placeholder={t("getQuote.form.descriptionPlaceholder")}
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
                  {t("getQuote.form.consentLabel")}{" "}
                </label>
              </div>

              <button type="submit" className={styles.submitBtn}>
                {t("getQuote.form.submitBtn")}
                <span className={styles.submitArrow} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>

        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>{t("getQuote.sidebar.title")}</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true" />
              <div>
                <h4 className={styles.contactLabel}>{t("getQuote.sidebar.officeLabel")}</h4>
                {/* <p className={styles.contactValue}>Pärnu mnt 18, 10141 Tallinn, Estonia</p> */}
                <address className={styles.contactValue}>Pärnu mnt 18, 10141 Tallinn, Estonia</address>
              </div>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true" />
              <div>
                <h4 className={styles.contactLabel}>{t("getQuote.sidebar.phoneLabel")}</h4>
                <p className={styles.contactValue}>+372 5123 4567</p>
              </div>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true" />
              <div>
                <h4 className={styles.contactLabel}>{t("getQuote.sidebar.emailLabel")}</h4>
                <p className={styles.contactValue}>info@alpkon.ee (внести справжню пошту)</p>
              </div>
            </li>
          </ul>

          <div className={styles.responseTime}>
            <h4 className={styles.responseTimeLabel}>{t("getQuote.sidebar.responseTimeLabel")}</h4>
            <p className={styles.responseTimeText}>{t("getQuote.sidebar.responseTimeText")}</p>
          </div>

          <div className={styles.credentialNote}>
            <p className={styles.credentialText}>{t("getQuote.sidebar.credentialText")}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default GetQuote;
