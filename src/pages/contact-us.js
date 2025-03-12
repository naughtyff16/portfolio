import Header from "@/components/header";
import MainHeader from "@/components/main-header";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Contact from "@/components/contact/contact";
import ContactPageBanner from "@/components/contact/contact-page-banner";
import ScrollToTop from "@/components/scroll-to-top/scroll-to-top";
import Location from "@/components/location";
import ReachUs from "@/components/contact/reach-us";

const inter = Inter({ subsets: ["latin"] });

export default function ContactUs() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <MainHeader />
      <ContactPageBanner />
      <ReachUs />
      <Contact />
      <Location />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
