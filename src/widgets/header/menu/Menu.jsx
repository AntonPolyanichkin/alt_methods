import { routes } from "@/app/router/routes";
import styles from "./styles/menuStyles.module.scss";
import { NavLink } from "react-router";
function Menu() {
  const headerMenuRouts = routes[1].children;
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        {headerMenuRouts?.map((menuElement, index) => (
          <li key={index} className={styles.navigationListElement}>
            <NavLink to={menuElement.path} className={styles.navigationListLink}>{menuElement?.meta?.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
