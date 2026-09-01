import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Picture from "@/components/Picture";
import { services } from "@/data/services";

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
      <section className="pt-40 pb-24 md:pb-32 px-6 bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="What We Do"
            title="Our Services"
            description="Every genre demands its own language. We speak them all fluently — from the grandeur of weddings to the tenderness of maternity portraits."
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="group relative overflow-hidden bg-[var(--color-surface)] block"
              >
                <div className="image-hover-zoom aspect-[4/3]">
                  <Picture
                    src={service.heroImage}
                    alt={service.title}
                    width={service.heroImageWidth}
                    height={service.heroImageHeight}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-2">
                    {service.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
