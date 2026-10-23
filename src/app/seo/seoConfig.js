import { servicesList } from "../constData/servicesList.js";
import { DEFAULT_LANG, SUPPORTED_LANGS } from "../i18n/langs.js";

export { DEFAULT_LANG, SUPPORTED_LANGS };

export function getSeoPaths() {
  const pagePaths = ["", "services", "portfolio", "about", "contacts"];
  const servicePaths = servicesList.map((service) => `services/${service.slug}`);
  return [...pagePaths, ...servicePaths];
}

export function getSiteOrigin(value) {
  if (!value) return null;

  try {
    const url = new URL(value);
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      url.pathname !== "/" ||
      url.search ||
      url.hash ||
      url.hostname === "localhost" 
      // url.hostname.endsWith(".netlify.app")
    ) {
      return null;
    }

    return url.origin;
  } catch {
    return null;
  }
}

export function getLocalizedPageMetadata(pathname, t) {
  const segments = pathname.split("/").filter(Boolean);
  const pageSegments = segments.slice(1);

  if (pageSegments.length === 0) {
    return {
      title: `${t("hero.titleLine1")} ${t("hero.titleLine2")} | Altmethods`,
      description: t("hero.description"),
    };
  }

  if (pageSegments.length === 1 && pageSegments[0] === "services") {
    return {
      title: `${t("servicesHero.title")} | Altmethods`,
      description: t("servicesHero.text"),
    };
  }

  if (pageSegments.length === 1 && pageSegments[0] === "portfolio") {
    return {
      title: `${t("portfolioPage.title")} | Altmethods`,
      description: t("portfolioPage.subtitle"),
    };
  }

  if (pageSegments.length === 1 && pageSegments[0] === "about") {
    return {
      title: `${t("aboutPage.title")} | Altmethods`,
      description: t("aboutPage.subtitle"),
    };
  }

  if (pageSegments.length === 1 && pageSegments[0] === "contacts") {
    return {
      title: `${t("menu.title.contact")} | Altmethods`,
      description: t("getQuote.subtitle"),
    };
  }

  if (pageSegments.length === 2 && pageSegments[0] === "services") {
    const service = servicesList.find(({ slug }) => slug === pageSegments[1]);
    if (service) {
      const key = `serviceDetail.${service.slug}`;
      return {
        title: `${t(`${key}.title`)} | Altmethods`,
        description: t(`${key}.description`),
      };
    }
  }

  return {
    title: `${t("notFound.title")} | Altmethods`,
    description: t("notFound.title"),
    noindex: true,
  };
}
