import { useTranslation } from "react-i18next";
import styles from "./styles/contactsHeroStyles.module.scss";
function ContactsHero() {
  const { t } = useTranslation();
  return (
    <section className={styles.contactsHero}>
      <div className={styles["contacts-hero-container"]}>
        <p className={styles.contactsHeroEyebrow}>{t("getQuote.eyebrow")}</p>
        <h1 className={styles.contactsHeroTitle}>{t("getQuote.title")}</h1>
      </div>
    </section>
  );
}

export default ContactsHero;
