import { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useTranslation } from "react-i18next";
import heroImage from "../../shared/pictures/hero-section-image.webp";
import { DEFAULT_LANG, getLocalizedPageMetadata, getSiteOrigin, SUPPORTED_LANGS } from "./seoConfig";

const OPEN_GRAPH_LOCALES = {
  en: "en_EE",
  et: "et_EE",
  ru: "ru_EE",
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setLink(rel, href, hreflang) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    if (hreflang) element.hreflang = hreflang;
    document.head.appendChild(element);
  }
  element.href = href;
}

function removeSeoLinks() {
  document.head.querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]').forEach((link) => {
    link.remove();
  });
}

function removeMeta(attribute, key) {
  document.head.querySelector(`meta[${attribute}="${key}"]`)?.remove();
}

export default function SeoMetadata() {
  const { lang } = useParams();
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!SUPPORTED_LANGS.includes(lang)) return;

    const translate = i18n.getFixedT(lang);
    const { title, description, noindex } = getLocalizedPageMetadata(pathname, translate);
    const siteOrigin = getSiteOrigin("https://altmethods.netlify.app");
    const localizedPath = `/${lang}${pathname.split("/").slice(2).join("/") ? `/${pathname.split("/").slice(2).join("/")}` : ""}`;
    const canonicalUrl = siteOrigin ? `${siteOrigin}${localizedPath}` : null;
    const imageUrl = siteOrigin ? `${siteOrigin}${heroImage}` : null;

    document.documentElement.lang = lang;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:locale", OPEN_GRAPH_LOCALES[lang]);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    if (imageUrl) {
      setMeta("property", "og:image", imageUrl);
      setMeta("name", "twitter:image", imageUrl);
    }

    if (noindex) {
      setMeta("name", "robots", "noindex,follow");
      removeSeoLinks();
      removeMeta("property", "og:url");
      return;
    }

    const robots = document.head.querySelector('meta[name="robots"]');
    robots?.remove();
    removeSeoLinks();
    removeMeta("property", "og:url");

    if (canonicalUrl) {
      setLink("canonical", canonicalUrl);

      for (const alternateLang of SUPPORTED_LANGS) {
        const alternatePath = `/${alternateLang}${localizedPath.slice(`/${lang}`.length)}`;
        setLink("alternate", `${siteOrigin}${alternatePath}`, alternateLang);
      }

      const defaultPath = `/${DEFAULT_LANG}${localizedPath.slice(`/${lang}`.length)}`;
      setLink("alternate", `${siteOrigin}${defaultPath}`, "x-default");
      setMeta("property", "og:url", canonicalUrl);
    }
  }, [i18n, lang, pathname]);

  return null;
}
