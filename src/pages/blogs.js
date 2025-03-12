import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import MainHeader from "@/components/main-header";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top/scroll-to-top";
import BlogSection from "@/components/blog-section";

const inter = Inter({ subsets: ["latin"] });

export default function Blogs() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <MainHeader />
      <HeroBanner />
      <BlogSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
