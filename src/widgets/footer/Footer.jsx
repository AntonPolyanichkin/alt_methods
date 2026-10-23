import { Link } from "react-router";
import styles from "./styles/footerStyles.module.scss";
import { useTranslation } from "react-i18next";
import { useNavigationRoutes } from "@/app/router/navigationRoutes/useNavigationRoutes";
import { servicesList } from "@/app/constData/servicesList";
function Footer() {
  const { t } = useTranslation();
  const { serviceDetail, about, portfolio, contact } = useNavigationRoutes();

  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <h2 className={styles.footerBrandName}>Altmethods</h2>
            <p className={styles.footerTagline}>
              {t("footer.tagline.line1")} <br />
              {t("footer.tagline.line2")}
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>{t("footer.columnTitles.services")} </h3>
            <ul className={styles.footerLinksList}>
              {servicesList.map((service) => (
                <li key={service.slug}>
                  <Link to={serviceDetail(service.slug)} className={styles.footerLink}>
                    {t(`serviceDetail.${service.slug}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>{t("footer.columnTitles.company")}</h3>
            <ul className={styles.footerLinksList}>
              <li>
                <Link to={about} className={styles.footerLink}>
                  {t("menu.title.about")}
                </Link>
              </li>
              <li>
                <Link to={portfolio} className={styles.footerLink}>
                  {t("menu.title.portfolio")}
                </Link>
              </li>
              <li>
                <Link to={contact} className={styles.footerLink}>
                  {t("menu.title.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>{t("footer.columnTitles.contact")}</h3>
            <ul className={styles.footerLinksList}>
              <li>
                {/*  тут як варіант додати лінк на гугл мапс */}
                <address className={styles.footerLink}>Õismäe tee 99, 13515 Tallinn</address>
              </li>
              <li>
                <a className={styles.footerLink} href="tel:+37251234567">
                  +372 5123 4567
                </a>
              </li>
              {/* <li>
                <a className={styles.footerLink} href="mailto:info@alpkon.ee">
                  info@alpkon.ee
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerLegal}>
            <p className={styles.footerLegalItem}>OÜ ALTMETHODS | Reg. no. 17005964</p>
            <p className={styles.footerLegalItem}>VAT: EE102747216</p>
            <p className={styles.footerLegalItem}>{t("footer.copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
{
  /* <address>
 м. Київ, <br/>
 Бульвар Лесі Українки, 26
 <a href="mailto:info@example.com">
 info@example.com
 </a>
</address> */
}
