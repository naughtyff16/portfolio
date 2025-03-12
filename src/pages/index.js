import About from "@/components/about";
import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import MainHeader from "@/components/main-header";
import Product from "@/components/product";
import WhoWeAre from "@/components/who-we-are";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top/scroll-to-top";
import BlogSection from "@/components/blog-section";
import Service from "@/components/service";

const inter = Inter({ subsets: ["latin"] });
//demo

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <MainHeader />
      <HeroBanner />
      <About />
      <WhoWeAre />
      <Product />
      <Service />
      <BlogSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
