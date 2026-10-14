import { useEffect, useRef, useState } from "react";
import logo from "./pictures/logo.webp";
import smallerLogo from "./pictures/logo-small.webp";
import { useTranslation } from "react-i18next";
import styles from "./styles/headerStyles.module.scss";
import Menu from "./menu/Menu";
import LanguagesSwitcher from "./languagesSwitcher/LanguagesSwitcher";
import FeedbackBtn from "@/shared/ui/Feedback/FeedbackBtn";
import BurgerButton from "./burgerButton/BurgerButton";
import { Link } from "react-router";
import { useNavigationRoutes } from "@/app/router/navigationRoutes/useNavigationRoutes";

const PHONE_NUMBER = "+372 5562 5510";
const PHONE_HREF = "tel:+37255625510";

function Header() {
  const { t } = useTranslation();
  const { home, contact } = useNavigationRoutes();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const burgerRef = useRef(null);
  const navigationRef = useRef(null);

  const closeMenu = (returnFocus = false) => {
    setIsMenuOpen(false);
    if (returnFocus) burgerRef.current?.focus();
  };
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    navigationRef.current?.querySelector("a[href]")?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu(true);
        return;
      }

      if (e.key !== "Tab" || e.target.closest('[role="listbox"]')) return;

      const focusableElements = [
        ...navigationRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [role="combobox"], [tabindex]:not([tabindex="-1"])',
        ),
        burgerRef.current,
      ].filter((element) => element?.getClientRects().length);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles["header-container"]}>
        <div className={styles.headerWrapper}>
          <div className={styles.pictureWrapper}>
            <Link to={home} onClick={closeMenu}>
              <picture>
                <source media="(max-width: 420.98px)" srcSet={smallerLogo} />
                <source media="(max-width: 767.98px)" srcSet={logo} />
                <source media="(max-width: 1081.98px)" srcSet={smallerLogo} />
                <img src={logo} alt={t("header.pictureAlt")} />
              </picture>
            </Link>
          </div>
          <div
            id="navigation"
            ref={navigationRef}
            className={`${styles.navGroup} ${isMenuOpen ? styles.navGroupOpen : ""}`}
            role={isMenuOpen ? "dialog" : undefined}
            aria-modal={isMenuOpen ? "true" : undefined}
            aria-label={isMenuOpen ? t("header.navigationLabel") : undefined}
          >
            <Menu onLinkClick={() => closeMenu(true)} />
            <div className={styles.navGroupActions}>
              <LanguagesSwitcher />
              <a href={PHONE_HREF} className={styles.phone}>
                {PHONE_NUMBER}
              </a>
              <a href={PHONE_HREF} className={styles.phoneIcon} aria-label={PHONE_NUMBER} />
              <FeedbackBtn to={contact} text={t("getQuoteBtn.btnText")} size="sm" onClick={() => closeMenu(true)} />
            </div>
          </div>
          <BurgerButton ref={burgerRef} isOpen={isMenuOpen} onClick={toggleMenu} />
          {isMenuOpen && (
            <button
              type="button"
              className={styles.overlay}
              aria-label={t("header.closeMenu")}
              onClick={() => closeMenu(true)}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
