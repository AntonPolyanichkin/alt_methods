import GetQuote from "@/widgets/homePageSections/getQuote/GetQuote";
import ContactsHero from "../contactsHero/ContactsHero";
import styles from "./styles/contactsStyles.module.scss";
function Contacts() {
  return (
    <>
      <ContactsHero />
      <GetQuote />
    </>
  );
}

export default Contacts;
