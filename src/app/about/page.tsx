import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Abhinav | Wedding Photographer in Himachal Pradesh",
  description:
    "Meet Abhinav — a self-taught, WedMeGood award-winning wedding photographer based in Himachal Pradesh, with 6+ years and 500+ stories captured across 20+ cities.",
  alternates: { canonical: "/about/" },
  openGraph: { url: "https://sbabhinav.com/about/" },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="h-24 bg-[var(--color-background)]" />
      <About />
      <Footer />
    </main>
  );
}
