import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { useNavigationRoutes } from "@/app/router/navigationRoutes/useNavigationRoutes";
import styles from "./styles/aboutStyles.module.scss";
import AboutHero from "../aboutHero/AboutHero";

function About() {
  const { t } = useTranslation();
  const { contact } = useNavigationRoutes();

  const certifications = t("aboutPage.certifications", { returnObjects: true });
  const regions = t("aboutPage.regions", { returnObjects: true });

  return (
    <>
      <AboutHero />

      <section className={styles.aboutSection}>
        <div className={styles["about-container"]}>
          <div className={styles.mainColumn}>
            <h1 className={styles.sectionTitle}>{t("aboutPage.storyTitle")}</h1>
            <p className={styles.paragraph}>{t("aboutPage.storyParagraph1")}</p>
            <p className={styles.paragraph}>{t("aboutPage.storyParagraph2")}</p>
            <p className={styles.paragraphPlaceholder}>{t("aboutPage.storyParagraph3")}</p>

            <h2 className={styles.sectionTitle}>{t("aboutPage.certificationsTitle")}</h2>
            <ul className={styles.certList}>
              {Array.isArray(certifications) &&
                certifications.map((item, index) => (
                  <li key={index} className={styles.certItem}>
                    <span className={styles.shieldIcon} aria-hidden="true" />
                    {item}
                  </li>
                ))}
            </ul>

            <h2 className={styles.sectionTitle}>{t("aboutPage.regionsTitle")}</h2>
            <p className={styles.regionsList}>{Array.isArray(regions) && regions.join(" · ")}</p>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.infoCard}>
              <p className={styles.infoCardEyebrow}>{t("aboutPage.infoCard.eyebrow")}</p>
              <ul className={styles.infoCardList}>
                <li>{t("aboutPage.infoCard.founded")}</li>
                <li className={styles.placeholderItem}>{t("aboutPage.infoCard.techniciansPlaceholder")}</li>
                <li className={styles.placeholderItem}>{t("aboutPage.infoCard.countriesPlaceholder")}</li>
                <li className={styles.placeholderItem}>{t("aboutPage.infoCard.projectsPlaceholder")}</li>
              </ul>
            </div>

            <div className={styles.irataNote}>
              <p className={styles.irataEyebrow}>{t("aboutPage.irataNote.eyebrow")}</p>
              <p className={styles.irataText}>{t("aboutPage.irataNote.text")}</p>
              <p className={styles.irataLink}>
                <a href="https://irata.org" target="_blank" rel="noreferrer">
                  irata.org
                </a>{" "}
                {t("aboutPage.irataNote.linkDescription")}
              </p>
            </div>

            <Link to={contact} className={styles.ctaButton}>
              {t("aboutPage.ctaButton")}
              <span className={styles.ctaArrow} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}

export default About;
