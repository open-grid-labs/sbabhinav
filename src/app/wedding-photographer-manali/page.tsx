import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Picture from "@/components/Picture";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Wedding Photographer in Manali | Stories by Abhinav",
  description:
    "Stories by Abhinav shoots weddings and pre-wedding sessions in Manali, Himachal Pradesh — real celebrations captured against the Himalayas.",
  alternates: { canonical: "/wedding-photographer-manali/" },
  openGraph: { url: "https://sbabhinav.com/wedding-photographer-manali/" },
};

export default function ManaliPage() {
  const manaliProjects = projects.filter((p) =>
    p.location.startsWith("Manali")
  );

  return (
    <main>
      <Navbar />

      <section className="pt-40 pb-16 px-6 bg-[var(--color-background)] text-center">
        <span className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase">
          Himachal Pradesh
        </span>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
          Wedding Photographer in Manali
        </h1>
        <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
          Based in Himachal Pradesh, Stories by Abhinav has shot real weddings
          and celebrations in Manali against the backdrop of the Himalayas —
          candid coverage of ceremonies, rituals, and the mountain light in
          between.
        </p>
      </section>

      {manaliProjects.length > 0 && (
        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-8 text-center">
              Real Weddings Shot in Manali
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {manaliProjects.map((project) => (
                <a
                  key={project.slug}
                  href={`/portfolio/${project.slug}/`}
                  className="group relative overflow-hidden block"
                >
                  <div className="image-hover-zoom aspect-[4/3]">
                    <Picture
                      src={project.cover}
                      alt={project.name}
                      width={project.coverWidth}
                      height={project.coverHeight}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[var(--color-accent)] text-[10px] tracking-[0.3em] uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mt-1">
                      {project.name}
                    </h3>
                    <p className="text-white/50 text-sm mt-1">
                      {project.count} photos
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 pb-24 text-center">
        <p className="text-white/50 max-w-xl mx-auto mb-8">
          Planning a wedding or pre-wedding shoot in Manali? We travel across
          Himachal Pradesh and are happy to plan around your dates and venue.
        </p>
        <a
          href="/contact/"
          className="inline-block px-10 py-4 bg-[var(--color-accent)] text-black text-sm tracking-widest uppercase font-medium hover:bg-[var(--color-accent-light)] transition-all duration-300"
        >
          Enquire Now
        </a>
      </section>

      <Footer />
    </main>
  );
}
