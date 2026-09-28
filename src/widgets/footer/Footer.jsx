import { Link } from "react-router";
import styles from "./styles/footerStyles.module.scss";
function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div>
            <h2>Altmethods</h2>
            <p>
              Precision at height.
              <br />
              Engineering on the ground.
            </p>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              <li>
                <Link>Facade Repair</Link>
              </li>
              <li>
                <Link>Sealing & Waterproofing</Link>
              </li>
              <li>
                <Link>Roof Repair</Link>
              </li>
              <li>
                <Link>Painting</Link>
              </li>
              <li>
                <Link>Structure Installation</Link>
              </li>
              <li>
                <Link>Construction Works</Link>
              </li>
              <li>
                <Link>Building Maintenance</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Portfolio</Link>
              </li>
              <li>
                <Link>Contacts</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="">Pärnu mnt 18, 10141 Tallinn, Estonia</a>
              </li>
              <li>
                <a href="tel:+37251234567">+372 5123 4567</a>
              </li>
              <li>
                <a href="mailto:info@alpkon.ee">info@alpkon.ee</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <p>Reg. no. !потрібен номер!</p>
            <p>VAT потрібен номер платника податків</p>
            <p>&copy; 2024 Altmethods. All rights reserved</p>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
