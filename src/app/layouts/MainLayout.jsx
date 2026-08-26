import { useEffect } from "react";
import { Navigate, Outlet, useParams } from "react-router";
import { useTranslation } from "react-i18next";


import Header from "@/widgets/header/Header";
import { DEFAULT_LANG, SUPPORTED_LANGS } from "../i18n/langs";
export default function MainLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  if (!SUPPORTED_LANGS.includes(lang)) {
    return <Navigate to={`/${DEFAULT_LANG}`} replace />;
  }

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ lang }} />
      </main>
    </>
  );
}
