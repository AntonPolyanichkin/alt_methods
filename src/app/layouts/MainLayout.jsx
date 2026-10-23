import { useEffect } from "react";
import { Navigate, Outlet, useParams } from "react-router";
import { useTranslation } from "react-i18next";

import Header from "@/widgets/header/Header";
import { DEFAULT_LANG, SUPPORTED_LANGS } from "../i18n/langs";
import Footer from "@/widgets/footer/Footer";
import styles from "../../shared/styles/index.module.scss";
import ScrollToTop from "../router/scrollToTop/ScrollToTop";
import SeoMetadata from "../seo/SeoMetadata";

export default function MainLayout() {
  const { lang } = useParams();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    document.documentElement.lang = lang;
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  if (!SUPPORTED_LANGS.includes(lang)) {
    return <Navigate to={`/${DEFAULT_LANG}`} replace />;
  }

  return (
    <>
      <SeoMetadata />
      <ScrollToTop />
      <div className={styles.wrapper}>
        <a className={styles.skipLink} href="#main-content">
          {t("accessibility.skipToContent")}
        </a>
        <Header />
        <main id="main-content" tabIndex="-1">
          <Outlet context={{ lang }} />
        </main>
        <Footer />
      </div>
    </>
  );
}
