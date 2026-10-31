import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import PageSections from "@/components/PageSections";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";
import { locations, type Location } from "@/data/locations";

export function locationMetadata(location: Location): Metadata {
  const title = location.metaTitle ?? `${location.heading} | Stories by Abhinav`;
  return {
    title,
    description: location.metaDescription,
    alternates: { canonical: `/${location.slug}/` },
    openGraph: {
      title,
      description: location.metaDescription,
      url: `https://sbabhinav.com/${location.slug}/`,
    },
  };
}

export default function LocationPage({ location }: { location: Location }) {
  const { location: place, category } = location.projects;
  const localProjects = projects.filter(
    (p) =>
      (!place || p.location.includes(place)) &&
      (!category || p.category === category)
  );
  // No galleries tagged with this place yet — show related work instead,
  // without claiming it was shot here.
  const fallbackProjects = category
    ? projects.filter((p) => p.category === category)
    : projects.filter((p) => p.featured);
  const shownProjects = (
    localProjects.length > 0 ? localProjects : fallbackProjects
  ).slice(0, 6);
  const galleryHeading =
    localProjects.length > 0
      ? location.galleryHeading
      : category
        ? `More ${category} Stories`
        : "Recent Work Across Himachal";
  const posts = blogPosts.filter((p) =>
    location.relatedPosts.includes(p.slug)
  );
  const linkGroups = [
    {
      title: "Wedding photography across Himachal",
      links: locations.filter(
        (l) => l.group !== "pre-wedding" && l.slug !== location.slug
      ),
      prefix: "Wedding Photographer in",
    },
    {
      title: "Pre-wedding shoots",
      links: locations.filter(
        (l) => l.group === "pre-wedding" && l.slug !== location.slug
      ),
      prefix: "Pre-Wedding Shoot in",
    },
  ].filter((g) => g.links.length > 0);

  return (
    <main>
      <Navbar />

      <section className="pt-40 pb-16 px-6 bg-[var(--color-background)] text-center">
        <span className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase">
          {location.group === "pre-wedding"
            ? "Pre-Wedding Shoots"
            : location.group === "region"
              ? "Wedding Photography"
              : "Himachal Pradesh"}
        </span>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
          {location.heading}
        </h1>
        <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
          {location.intro}
        </p>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {location.highlights.map((h) => (
            <div key={h.title} className="border-t border-white/10 pt-6">
              <h2 className="font-[family-name:var(--font-playfair)] text-xl text-white mb-3">
                {h.title}
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {location.sections && (
        <section className="px-6 pb-16">
          <PageSections sections={location.sections} />
        </section>
      )}

      {shownProjects.length > 0 && (
        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-8 text-center">
              {galleryHeading}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {shownProjects.map((project) => (
                <a
                  key={project.slug}
                  href={`/portfolio/${project.slug}/`}
                  className="group relative overflow-hidden block"
                >
                  <div className="image-hover-zoom aspect-[4/3]">
                    <img
                      src={project.cover}
                      alt={project.name}
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

      {posts.length > 0 && (
        <section className="px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-8 text-center">
              Planning Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="block border border-white/10 p-6 hover:border-[var(--color-accent)] transition-colors duration-300"
                >
                  <span className="text-[var(--color-accent)] text-[10px] tracking-[0.3em] uppercase">
                    {post.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-white mt-2">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm mt-2 leading-relaxed">
                    {post.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {location.faqs && <FAQSection faqs={location.faqs} />}

      <section
        className={`px-6 pb-24 text-center ${location.faqs ? "pt-24" : ""}`}
      >
        <p className="text-white/50 max-w-xl mx-auto mb-8">
          {location.closing}
        </p>
        <a
          href="/contact/"
          className="inline-block px-10 py-4 bg-[var(--color-accent)] text-black text-sm tracking-widest uppercase font-medium hover:bg-[var(--color-accent-light)] transition-all duration-300"
        >
          Enquire Now
        </a>
        <div className="max-w-3xl mx-auto mt-16 space-y-8">
          {linkGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-white text-sm tracking-widest uppercase mb-4">
                {group.title}
              </h2>
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {group.links.map((l) => (
                  <li key={l.slug}>
                    <a
                      href={`/${l.slug}/`}
                      className="text-white/40 text-sm hover:text-[var(--color-accent)] transition-colors duration-300"
                    >
                      {group.prefix} {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
