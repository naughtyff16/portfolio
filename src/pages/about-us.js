import Header from "@/components/header";
import MainHeader from "@/components/main-header";
import { Inter } from "next/font/google";
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

const inter = Inter({ subsets: ["latin"] });

export default function AboutUs() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <MainHeader />
      <AboutBanner />
      <AboutusMore />
      <PioneerDigital />
      <ServicesWeOffer />
      <TwoColumn />
      <WhyChooseUs />
      <CredibleSource />
      <Faq />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
