import { Link } from "react-router";
import styles from "./styles/footerStyles.module.scss";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <h2 className={styles.footerBrandName}>Altmethods</h2>
            <p className={styles.footerTagline}>
              Precision at height.
              <br />
              Engineering on the ground.
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>Services</h3>
            <ul className={styles.footerLinksList}>
              <li>
                {/* TODO: усім Link нижче бракує to — навігація поки нікуди не веде */}
                <Link className={styles.footerLink}>Facade Repair</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>Sealing &amp; Waterproofing</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>Roof Repair</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>Painting</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>Structure Installation</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>Construction Works</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>Building Maintenance</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>Company</h3>
            <ul className={styles.footerLinksList}>
              <li>
                <Link className={styles.footerLink}>About</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>Portfolio</Link>
              </li>
              <li>
                <Link className={styles.footerLink}>Contacts</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>Contact</h3>
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
            <p className={styles.footerLegalItem}>&copy; 2024 Altmethods. All rights reserved</p>
          </div>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
