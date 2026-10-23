import Hero from "../../widgets/homePageSections/Hero/Hero";
import ServicesHero from "@/widgets/homePageSections/servicesHero/ServicesHero";
import SelectedProjects from "@/widgets/homePageSections/selectedProjects/SelectedProjects";
import Advantages from "@/widgets/homePageSections/advantages/Advantages";
import CommonQuestions from "@/widgets/homePageSections/commonQuestions/CommonQuestions";
import OurExpertise from "@/widgets/homePageSections/ourExpertise/OurExpertise";
import GetQuote from "@/widgets/homePageSections/getQuote/GetQuote";
// import CompanyStats from "@/widgets/homePageSections/companyStats/CompanyStats";
// import CompanyClients from "@/widgets/homePageSections/companyClients/CompanyClients";

function Home() {
  return (
    <>
      <Hero />
      {/* <CompanyStats />
      <CompanyClients /> */}
      <ServicesHero />
      <Advantages />
      <SelectedProjects />
      <OurExpertise />
      {/* <Reviews /> */}
      <CommonQuestions />
      <GetQuote />
    </>
  );
}

export default Home;
