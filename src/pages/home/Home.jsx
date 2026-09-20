import Hero from "@/widgets/homePageSections/hero/Hero";
import styles from "./styles/homeStyles.module.scss";
import CompanyStats from "@/widgets/homePageSections/companyStats/companyStats";
import CompanyClients from "@/widgets/homePageSections/companyClients/companyClients";
import ServicesHero from "@/widgets/homePageSections/servicesHero/ServicesHero";
function Home() {
  return (
    <>
      <Hero />
      <CompanyStats />
      <CompanyClients />
      <ServicesHero />
    </>
  );
}

export default Home;
