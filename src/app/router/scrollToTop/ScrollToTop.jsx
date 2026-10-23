import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {
  const { pathname } = useLocation();
  const pagePath = pathname.split("/").slice(2).join("/");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pagePath]);

  return null;
}

export default ScrollToTop;
