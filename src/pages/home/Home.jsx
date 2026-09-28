import Hero from "@/widgets/homePageSections/hero/Hero";
import CompanyStats from "@/widgets/homePageSections/companyStats/companyStats";
import CompanyClients from "@/widgets/homePageSections/companyClients/companyClients";
import ServicesHero from "@/widgets/homePageSections/servicesHero/ServicesHero";
import SelectedProjects from "@/widgets/homePageSections/selectedProjects/SelectedProjects";
import Advantages from "@/widgets/homePageSections/advantages/Advantages";
import CommonQuestions from "@/widgets/homePageSections/commonQuestions/CommonQuestions";
import OurExpertise from "@/widgets/homePageSections/ourExpertise/OurExpertise";
import Reviews from "@/widgets/homePageSections/reviews/Reviews";
import GetQuote from "@/widgets/homePageSections/getQuote/GetQuote";
function Home() {
  return (
    <>
      <Hero />
      <CompanyStats />
      <CompanyClients />
      <ServicesHero />
      <Advantages />
      <SelectedProjects />
      <OurExpertise />
      <Reviews/>
      <CommonQuestions />
      <GetQuote/>
    </>
  );
}

export default Home;
