import Header from "@/components/header";
import MainHeader from "@/components/main-header";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top/scroll-to-top";
import ServiceBanner from "@/components/services/service-page-banner";
import PoweringDigital from "@/components/services/powering-digital";
import ITTechnical from "@/components/services/IT-technical";
import FourCardsSection from "@/components/services/four-cards-section";
import ThreeReason from "@/components/services/three-reason";
import WhyCrm from "@/components/services/why-crm";
import ServiceTwoColumn from "@/components/services/service-two-column";
import ClientFeedback from "@/components/services/client-feedback";
import ContactService from "@/components/services/contact-service";

const inter = Inter({ subsets: ["latin"] });

export default function Services() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <MainHeader />
      <ServiceBanner />
      <PoweringDigital />
      <ThreeReason />
      <ITTechnical />
      <FourCardsSection />
      <WhyCrm />
      <ServiceTwoColumn />
      <ClientFeedback />
      <ContactService />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
