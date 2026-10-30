import { Link } from "react-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigationRoutes } from "@/app/router/navigationRoutes/useNavigationRoutes";
import styles from "./styles/aboutStyles.module.scss";
import AboutHero from "../aboutHero/AboutHero";
import ImageCarousel from "@/shared/ui/imageCarousel/ImageCarousel";
import { certificatesList } from "@/app/constData/certificatesList";

function About() {
  const { t } = useTranslation();
  const { contact } = useNavigationRoutes();
  const [isMottoOpen, setIsMottoOpen] = useState(false);
  const [mottoPosition, setMottoPosition] = useState(null);
  const mottoRef = useRef(null);
  const mottoButtonRef = useRef(null);
  const mottoPopoverRef = useRef(null);

  const certifications = t("aboutPage.certifications", { returnObjects: true });
  const certificateSlides = certificatesList.map(({ img, altKey }) => ({
    src: img,
    alt: t(`certificateAlt.${altKey}`),
  }));
  // const regions = t("aboutPage.regions", { returnObjects: true });

  useLayoutEffect(() => {
    if (!isMottoOpen) return undefined;

    const updatePosition = () => {
      const buttonRect = mottoButtonRef.current?.getBoundingClientRect();
      const popover = mottoPopoverRef.current;
      if (!buttonRect || !popover) return;

      const popoverRect = popover.getBoundingClientRect();
      const viewportPadding = 12;
      const gap = 8;
      const left = Math.min(
        Math.max(buttonRect.left + buttonRect.width / 2 - popoverRect.width / 2, viewportPadding),
        window.innerWidth - popoverRect.width - viewportPadding,
      );
      const below = buttonRect.bottom + gap;
      const top =
        below + popoverRect.height <= window.innerHeight - viewportPadding
          ? below
          : Math.max(viewportPadding, buttonRect.top - popoverRect.height - gap);

      setMottoPosition({ top, left });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isMottoOpen]);

  useEffect(() => {
    if (!isMottoOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!mottoRef.current?.contains(event.target)) setIsMottoOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMottoOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMottoOpen]);

  return (
    <>
      <AboutHero />

      <section className={styles.aboutSection}>
        <div className={styles["about-container"]}>
          <div className={styles.mainColumn}>
            <h1 className={styles.sectionTitle}>{t("aboutPage.storyTitle")}</h1>
            <p className={styles.paragraph}>{t("aboutPage.storyParagraph1")}</p>
            <p className={styles.paragraph}>{t("aboutPage.storyParagraph2")}</p>
            {/* <p className={styles.paragraphPlaceholder}>{t("aboutPage.storyParagraph3")}</p> */}
            <div className={styles.mottoContainer} ref={mottoRef}>
              <button
                ref={mottoButtonRef}
                type="button"
                className={styles.mottoButton}
                aria-label={t("aboutPage.mottoLabel")}
                aria-expanded={isMottoOpen}
                aria-controls={isMottoOpen ? "about-motto-translation" : undefined}
                aria-describedby={isMottoOpen ? "about-motto-translation" : undefined}
                onClick={() => setIsMottoOpen((open) => !open)}
              >
                {t("aboutPage.motto")}
                <span className={styles.mottoInfoIcon} aria-hidden="true">
                  i
                </span>
              </button>
              {isMottoOpen && (
                <span
                  ref={mottoPopoverRef}
                  id="about-motto-translation"
                  className={styles.mottoPopover}
                  role="tooltip"
                  style={{
                    top: mottoPosition?.top ?? 0,
                    left: mottoPosition?.left ?? 0,
                    visibility: mottoPosition ? "visible" : "hidden",
                  }}
                >
                  {t("aboutPage.mottoTranslation")}
                </span>
              )}
            </div>

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
            <ImageCarousel
              slides={certificateSlides}
              label={t("aboutPage.certificateCarousel.label")}
              previousLabel={t("aboutPage.certificateCarousel.previous")}
              nextLabel={t("aboutPage.certificateCarousel.next")}
              slideLabel={(current, total) => t("aboutPage.certificateCarousel.slide", { current, total })}
              note={t("aboutPage.certificateCarousel.previewNote")}
            />

            <h2 className={styles.sectionTitle}>{t("aboutPage.regionsTitle")}</h2>
            <p className={styles.regionsList}>{t("aboutPage.regions")}</p>
          </div>

          <aside className={styles.sidebar}>
            {/* <div className={styles.infoCard}>
              <p className={styles.infoCardEyebrow}>{t("aboutPage.infoCard.eyebrow")}</p>
              <ul className={styles.infoCardList}>
                <li>{t("aboutPage.infoCard.founded")}</li>
                <li className={styles.placeholderItem}>{t("aboutPage.infoCard.techniciansPlaceholder")}</li>
                <li className={styles.placeholderItem}>{t("aboutPage.infoCard.countriesPlaceholder")}</li>
                <li className={styles.placeholderItem}>{t("aboutPage.infoCard.projectsPlaceholder")}</li>
              </ul>
            </div> */}

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
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}

export default About;
