import { useId } from "react";
import styles from "./styles/getQuoteStyles.module.scss";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getQuoteSchema } from "./model/validationShema";

function FieldError({ id, error }) {
  const { t } = useTranslation();
  if (!error) return null;
  return (
    <p id={id} className={styles.error} role="alert">
      {t(`getQuote.errors.${error.message}`)}
    </p>
  );
}

function GetQuote() {
  const nameFormId = useId();
  const emailFormId = useId();
  const companyFormId = useId();
  const phoneFormId = useId();
  const serviceFormId = useId();
  const projectDescriptionFormId = useId();
  const processingData = useId();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(getQuoteSchema) });
  const onValid = (_data, event) => {
    event.target.submit();
  };

  const a11y = (id, error) => ({
    "aria-invalid": error ? "true" : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
  });
  const cls = (base, error) => (error ? `${base} ${styles.inputError}` : base);

  return (
    <section className={styles.getQuoteSection}>
      <div className={styles["getQuote-container"]}>
        <div className={styles.formColumn}>
          <div className={styles.formIntro}>
            <p className={styles.eyebrow}>{t("getQuote.eyebrow")}</p>
            <h2 className={styles.title}>{t("getQuote.title")}</h2>
            <p className={styles.subtitle}>{t("getQuote.subtitle")}</p>
          </div>

          <form
            className={styles.form}
            name="get-quote"
            method="post"
            data-netlify="true"
            noValidate
            onSubmit={handleSubmit(onValid)}
          >
            <input type="hidden" name="get-quote" value="get-quote" />
            <div className={styles.formGrid}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor={nameFormId}>{t("getQuote.form.nameLabel")}</label>
                  <input
                    className={cls(styles.input, errors.name)}
                    name="name"
                    id={nameFormId}
                    type="text"
                    placeholder={t("getQuote.form.namePlaceholder")}
                    {...a11y(nameFormId, errors.name)}
                    {...register("name")}
                  />
                  <FieldError id={`${nameFormId}-error`} error={errors.name} />
                </div>
                <div className={styles.formField}>
                  <label htmlFor={emailFormId}>{t("getQuote.form.emailLabel")}</label>
                  <input
                    className={cls(styles.input, errors.email)}
                    name="email"
                    id={emailFormId}
                    type="email"
                    placeholder={t("getQuote.form.emailPlaceholder")}
                    {...a11y(emailFormId, errors.email)}
                    {...register("email")}
                  />
                  <FieldError id={`${emailFormId}-error`} error={errors.email} />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor={companyFormId}>{t("getQuote.form.companyLabel")}</label>
                  <input
                    className={cls(styles.input, errors.company)}
                    name="company"
                    id={companyFormId}
                    type="text"
                    placeholder={t("getQuote.form.companyPlaceholder")}
                    {...a11y(companyFormId, errors.company)}
                    {...register("company")}
                  />
                  <FieldError id={`${companyFormId}-error`} error={errors.company} />
                </div>
                <div className={styles.formField}>
                  <label htmlFor={phoneFormId}>{t("getQuote.form.phoneLabel")}</label>
                  <input
                    className={cls(styles.input, errors.phone)}
                    name="phone"
                    id={phoneFormId}
                    type="tel"
                    placeholder={t("getQuote.form.phonePlaceholder")}
                    {...a11y(phoneFormId, errors.phone)}
                    {...register("phone")}
                  />
                  <FieldError id={`${phoneFormId}-error`} error={errors.phone} />
                </div>
              </div>

              <div className={styles.formField}>
                <label htmlFor={serviceFormId}>{t("getQuote.form.serviceLabel")}</label>
                <input
                  className={cls(styles.input, errors.service)}
                  name="service"
                  id={serviceFormId}
                  type="text"
                  placeholder={t("getQuote.form.servicePlaceholder")}
                  {...a11y(serviceFormId, errors.service)}
                  {...register("service")}
                />
                <FieldError id={`${serviceFormId}-error`} error={errors.service} />
              </div>

              <div className={styles.formField}>
                <label htmlFor={projectDescriptionFormId}>{t("getQuote.form.descriptionLabel")}</label>
                <textarea
                  className={cls(styles.textarea, errors.projectDescription)}
                  name="project-description"
                  id={projectDescriptionFormId}
                  placeholder={t("getQuote.form.descriptionPlaceholder")}
                  {...a11y(projectDescriptionFormId, errors.projectDescription)}
                  {...register("projectDescription")}
                ></textarea>
                <FieldError id={`${projectDescriptionFormId}-error`} error={errors.projectDescription} />
              </div>

              <div className={styles.formField}>
                <div className={styles.consentRow}>
                  <input
                    className={styles.checkbox}
                    name="processing-data"
                    type="checkbox"
                    id={processingData}
                    {...a11y(processingData, errors.processingData)}
                    {...register("processingData")}
                  />
                  <label htmlFor={processingData} className={styles.consentLabel}>
                    {t("getQuote.form.consentLabel")}{" "}
                  </label>
                </div>
                <FieldError id={`${processingData}-error`} error={errors.processingData} />
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
                <address className={styles.contactValue}>Õismäe tee 99, 13515 Tallinn</address>
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
