import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import ProcessSection from "@/components/ProcessSection";
import Portfolio from "@/components/Portfolio";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Services />
      <ProcessSection />
      <Portfolio />
      <CTABanner />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
