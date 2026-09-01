import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import Picture from "@/components/Picture";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Himachal Pradesh | Stories by Abhinav`,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      url: `https://sbabhinav.com/services/${service.slug}/`,
      images: [service.heroImage],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = projects
    .filter((p) => p.category === service.category)
    .slice(0, 3);

  return (
    <main>
      <Navbar />
      <section className="relative pt-40 pb-16 px-6 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase">
            Photography Service
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
            {service.title}
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="image-hover-zoom aspect-[16/9] mb-12">
            <Picture
              src={service.heroImage}
              alt={service.title}
              width={service.heroImageWidth}
              height={service.heroImageHeight}
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-6">
            What to Expect
          </h2>
          <ul className="space-y-4 mb-12">
            {service.whatToExpect.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-white/60 leading-relaxed"
              >
                <span className="text-[var(--color-accent)] shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="/contact/"
            className="inline-block px-10 py-4 bg-[var(--color-accent)] text-black text-sm tracking-widest uppercase font-medium hover:bg-[var(--color-accent-light)] transition-all duration-300"
          >
            Enquire About {service.title}
          </a>
        </div>
      </section>

      <ProcessSection />

      {related.length > 0 && (
        <section className="px-6 py-16 md:py-24 bg-[var(--color-surface)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-white mb-10 text-center">
              Recent {service.title} Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((project) => (
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
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg text-white">
                      {project.name}
                    </h3>
                    <p className="text-white/50 text-xs mt-1">
                      {project.location}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
