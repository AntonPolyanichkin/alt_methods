import { frontRoutes } from "../frontRoutes/frontRoutes";

export function navigationPath(lang) {
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
