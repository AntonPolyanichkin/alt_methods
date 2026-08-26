import { Navigate } from "react-router";
import { useTranslation } from "react-i18next";
 

export default function RootRedirect() {
  const { i18n } = useTranslation();
  return <Navigate to={`/${i18n.language}`} replace />;
}
 