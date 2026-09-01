import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Real Weddings Shot by Stories by Abhinav",
  description:
    "Browse real weddings, pre-wedding shoots, maternity sessions, and mehendi & haldi celebrations captured across Himachal Pradesh by Stories by Abhinav.",
  alternates: { canonical: "/portfolio/" },
  openGraph: { url: "https://sbabhinav.com/portfolio/" },
};

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <div className="h-24 bg-[var(--color-background)]" />
      <Portfolio />
      <Footer />
    </main>
  );
}
