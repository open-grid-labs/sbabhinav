import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Photography Services | Stories by Abhinav",
  description:
    "Wedding, pre-wedding, maternity, and mehendi & haldi photography services from Stories by Abhinav, based in Himachal Pradesh.",
  alternates: { canonical: "/services/" },
  openGraph: { url: "https://sbabhinav.com/services/" },
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <Services />
      <Footer />
    </main>
  );
}