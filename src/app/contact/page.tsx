import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Stories by Abhinav | Book a Wedding Photographer",
  description:
    "Get in touch with Stories by Abhinav to book wedding, pre-wedding, maternity, or mehendi & haldi photography in Himachal Pradesh and beyond.",
  alternates: { canonical: "/contact/" },
  openGraph: { url: "https://sbabhinav.com/contact/" },
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="h-24 bg-[var(--color-background)]" />
      <Contact />
      <Footer />
    </main>
  );
}
