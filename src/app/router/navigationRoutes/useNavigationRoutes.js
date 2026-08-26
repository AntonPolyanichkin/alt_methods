import { frontRoutes } from "../frontRoutes/frontRoutes";
import { useTranslation } from "react-i18next";
export function useNavigationRoutes() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return {
    home: `/${lang}`,
    services: `/${lang}/${frontRoutes.services}`,
    serviceDetail: (slug) => `/${lang}/services/${slug}`,
    portfolio: `/${lang}/${frontRoutes.portfolio}`,
    projectDetail: (slug) => `/${lang}/portfolio/${slug}`,
    about: `/${lang}/${frontRoutes.about}`,
    contact: `/${lang}/${frontRoutes.contact}`,
  };
}
