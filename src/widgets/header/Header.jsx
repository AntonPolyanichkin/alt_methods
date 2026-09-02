// import logo from "./picture/logo.webp";
// import smallerLogo from "./picture/logo-small.webp";
// import phoneIcon from "../../shared/pictures/icons/phone-icon.svg";
// import { useTranslation } from "react-i18next";
// import styles from "./styles/headerStyles.module.scss";
// import Menu from "./menu/Menu";
// import LanguagesSwitcher from "./languagesSwitcher/LanguagesSwitcher";
// import FeedbackBtn from "@/shared/ui/Feedback/FeedbackBtn";
// import { Link } from "react-router";
// import { useNavigationRoutes } from "@/app/router/navigationRoutes/useNavigationRoutes";

// function Header() {
//   const { t } = useTranslation();
//   const { home } = useNavigationRoutes();
//   return (
//     <header className={styles.header}>
//       <div className={styles.headerContainer}>
//         <div className={styles.headerWrapper}>
//           <div className={styles.pictureWrapper}>
//             <Link to={home}>
//               <picture>
//                 <source media="(max-width: 1069.98px)" srcSet={smallerLogo} />
//                 <img src={logo} alt={t("header.pictureAlt")} />
//               </picture>
//             </Link>
//           </div>
//           <Menu />
//           <div>
//             <LanguagesSwitcher />
//           </div>
//           <div className={styles.phone}>
//             <a href="tel:+372 5562 5510" className={styles.phoneLink}>
//               {" "}
//               +372 5562 5510{" "}
//             </a>
//             <a href="tel:+372 5562 5510">
//               {" "}
//               <img src={phoneIcon} alt="Зателефонувати" className={styles.phoneLinkIcon} />
//             </a>
//           </div>

//           <FeedbackBtn text={"Get a Quote"} />
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import { useEffect, useRef, useState } from "react";
import logo from "./picture/logo.webp";
import smallerLogo from "./picture/logo-small.webp";
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
  const { home } = useNavigationRoutes();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const burgerRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu();
        burgerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <div className={styles.pictureWrapper}>
            <Link to={home} onClick={closeMenu}>
              <picture>
                <source media="(max-width: 710.98px)" srcSet={logo} />
                <source media="(max-width: 1069.98px)" srcSet={smallerLogo} />
                <img src={logo} alt={t("header.pictureAlt")} />
              </picture>
            </Link>
          </div>

          <BurgerButton ref={burgerRef} isOpen={isMenuOpen} onClick={toggleMenu} />

          <div id="mobile-navigation" className={`${styles.navGroup} ${isMenuOpen ? styles.navGroupOpen : ""}`}>
            <Menu onLinkClick={closeMenu} />

            <div className={styles.navGroupActions}>
              <LanguagesSwitcher />
              <a href={PHONE_HREF} className={styles.phone}>
                {PHONE_NUMBER}
              </a>
              <a href={PHONE_HREF} className={styles.phoneIcon}></a>
              <FeedbackBtn text={t("getQuoteBtn.btnText")} onClick={closeMenu} />
            </div>
          </div>

          {isMenuOpen && (
            <button type="button" className={styles.overlay} aria-label={t("header.closeMenu")} onClick={closeMenu} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
