import { routes } from "@/app/router/routes";
import styles from "./styles/menuStyles.module.scss";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

function Menu({ onLinkClick }) {
  const { t } = useTranslation();
  const headerMenuRouts = routes[1].children ?? [];
  const normalizeRoutes = headerMenuRouts?.filter((route) => route?.meta?.isInMenu);

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        {normalizeRoutes.map((menuElement, index) => (
          <li key={index} className={styles.navigationListElement}>
            <NavLink
              to={menuElement.path}
              onClick={onLinkClick}
              className={({ isActive }) => (isActive ? styles.activeMenuLink : styles.menuLink)}
            >
              {t(`menu.title.${menuElement.meta.title}`)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;