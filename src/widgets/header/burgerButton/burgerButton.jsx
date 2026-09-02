import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "./styles/burgerButtonStyles.module.scss";

const BurgerButton = forwardRef(function BurgerButton({ isOpen, onClick, ref }) {
  const { t } = useTranslation();

  return (
    <button
      ref={ref}
      type="button"
      className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      aria-label={isOpen ? t("header.closeMenu") : t("header.openMenu")}
    >
      <span className={styles.burgerIcon}>
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </span>
      <span className={styles.burgerLabel}>{isOpen ? t("header.closeMenu") : t("header.openMenu")}</span>
    </button>
  );
});

export default BurgerButton;
