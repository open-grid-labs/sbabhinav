import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import FilmGrid from "@/components/FilmGrid";
import { films } from "@/data/films";
import PageSections, {
  BookingCTA,
  RelatedLinks,
} from "@/components/PageSections";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

const BASE = "https://sbabhinav.com";

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
  const title =
    service.metaTitle ??
    `${service.title} in Himachal Pradesh | Stories by Abhinav`;
  const description = service.metaDescription ?? service.shortDescription;
  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      title,
      description,
      url: `${BASE}/services/${service.slug}/`,
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

  const related = (
    service.relatedProjects
      ? projects.filter((p) => service.relatedProjects!.includes(p.slug))
      : projects.filter((p) => p.category === service.category)
  ).slice(0, 3);
  const contactHref = service.contactType
    ? `/contact/?type=${encodeURIComponent(service.contactType)}`
    : "/contact/";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.heading ?? service.title,
    serviceType: service.title,
    description: service.metaDescription ?? service.shortDescription,
    url: `${BASE}/services/${service.slug}/`,
    provider: { "@id": `${BASE}/#business` },
    areaServed: { "@type": "State", name: "Himachal Pradesh" },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <section className="relative pt-40 pb-16 px-6 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase">
            Photography Service
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
            {service.heading ?? service.title}
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            {service.intro ?? service.shortDescription}
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="image-hover-zoom w-full h-full min-h-[300px] mb-12">
            <img
              src={service.heroImage}
              alt={service.heroAlt ?? service.title}
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
            href={contactHref}
            className="inline-block px-10 py-4 bg-[var(--color-accent)] text-black text-sm tracking-widest uppercase font-medium hover:bg-[var(--color-accent-light)] transition-all duration-300"
          >
            Enquire About {service.title}
          </a>

          {service.sections && <PageSections sections={service.sections} />}
        </div>
      </section>

      {service.showFilms && (
        <FilmGrid films={films} heading="Our Wedding Films" />
      )}

      {service.faqs && <FAQSection faqs={service.faqs} />}

      <ProcessSection />

      {related.length > 0 && (
        <section className="px-6 py-16 md:py-24 bg-[var(--color-surface)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-white mb-10 text-center">
              {service.relatedHeading ?? `Recent ${service.title} Stories`}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((project) => (
                <a
                  key={project.slug}
                  href={`/portfolio/${project.slug}/`}
                  className="group relative overflow-hidden block"
                >
                  <div className="image-hover-zoom h-full w-full min-h-[300px]">
                    <img
                      src={project.cover}
                      alt={project.name}
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

      {service.closing && (
        <BookingCTA text={service.closing} href={contactHref} />
      )}

      {service.relatedLinks && (
        <section className="px-6 pb-24">
          <RelatedLinks links={service.relatedLinks} />
        </section>
      )}

      <Footer />
    </main>
  );
}