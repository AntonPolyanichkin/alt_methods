import { Link } from "react-router";
import styles from "./styles/footerStyles.module.scss";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();

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
              <li>
                {/* TODO: усім Link нижче бракує to — навігація поки нікуди не веде */}
                <Link className={styles.footerLink}>{t("footer.services.facadeRepair")}</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>{t("footer.services.sealingWaterproofing")}</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>{t("footer.services.roofRepair")}</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>{t("footer.services.painting")}</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>{t("footer.services.structureInstallation")}</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>{t("footer.services.constructionWorks")}</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>{t("footer.services.buildingMaintenance")}</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>{t("footer.columnTitles.company")}</h3>
            <ul className={styles.footerLinksList}>
              <li>
                <Link className={styles.footerLink}>{t("menu.title.about")}</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>{t("menu.title.portfolio")}</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>{t("menu.title.contact")}</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>{t("footer.columnTitles.contact")}</h3>
            <ul className={styles.footerLinksList}>
              <li>
                {/*  тут як варіант додати лінк на гугл мапс */}
                <span className={styles.footerLink}>Pärnu mnt 18, 10141 Tallinn, Estonia</span>
              </li>
              <li>
                <a className={styles.footerLink} href="tel:+37251234567">
                  +372 5123 4567
                </a>
              </li>
              <li>
                <a className={styles.footerLink} href="mailto:info@alpkon.ee">
                  info@alpkon.ee
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerLegal}>
            <p className={styles.footerLegalItem}>Reg. no. !потрібен номер!</p>
            <p className={styles.footerLegalItem}>VAT потрібен номер платника податків</p>
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
