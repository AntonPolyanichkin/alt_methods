import { navigationPath } from "@/app/router/navigationRoutes/navigationRoutes";
import { routes } from "@/app/router/routes";
import { NavLink } from "react-router";

function Header() {
  const headerMenuRouts = routes[0].children;
  console.log(headerMenuRouts);

  return (
    <header>
      <ul>
        {headerMenuRouts?.map((menuElement, index) => (
          <li key={index}>
            <NavLink to={menuElement.path}>{menuElement?.meta?.title}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
