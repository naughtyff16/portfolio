import Header from "@/components/header";
import MainHeader from "@/components/main-header";
import { Inter, Roboto_Serif } from "next/font/google";
import Footer from "@/components/footer";
import AboutusMore from "@/components/about/aboutus-more";
import PioneerDigital from "@/components/about/pioneer-digital";
import ServicesWeOffer from "@/components/about/services-we-offer";
import TwoColumn from "@/components/about/two-column";
import WhyChooseUs from "@/components/about/why-choose-us";
import CredibleSource from "@/components/about/credible-source";
import Faq from "@/components/faq";
import ScrollToTop from "@/components/scroll-to-top/scroll-to-top";
import AboutBanner from "@/components/about/about-page-banner";
import About from "@/components/about";
import FourCardsSection from "@/components/services/four-cards-section";
import WhyCrm from "@/components/services/why-crm";

const inter = Roboto_Serif({ subsets: ["latin"] });
export default function AboutUs({ darkMode, toggleDarkMode }) {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <MainHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {/* <AboutBanner /> */}
      <About />
      <FourCardsSection />
      {/* <AboutusMore /> */}

      <WhyCrm />

      <ServicesWeOffer />
      {/* <TwoColumn /> */}
      <WhyChooseUs />
      <PioneerDigital />
      {/* <CredibleSource /> */}
      {/* <Faq /> */}
      <Footer />
      <ScrollToTop />
    </main>
  );
}
