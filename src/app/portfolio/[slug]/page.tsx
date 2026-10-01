import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { getProjectStory } from "@/lib/project-story";

const BASE = "https://sbabhinav.com";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) return {};
  
  return {
    title: `${project.name} — ${project.category} in ${project.location} | Stories by Abhinav`,
    description: `${project.count} photographs from ${project.name}'s ${project.category.toLowerCase()} in ${project.location}, shot by Stories by Abhinav.`,
    alternates: { canonical: `/portfolio/${project.slug}/` },
    openGraph: {
      url: `${BASE}/portfolio/${project.slug}/`,
      images: [project.cover],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) notFound();

  const service = services.find((s) => s.category === project.category);
  const story = getProjectStory(project, projects);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: `${BASE}/portfolio/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `${BASE}/portfolio/${project.slug}/`,
      },
    ],
  };

  const imageGallery = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${project.name} — ${project.category}`,
    about: `${project.category} in ${project.location}`,
    image: project.photos.slice(0, 20).map((p) => `${BASE}${p.full}`),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallery) }}
      />

      <Navbar />

      <section className="pt-40 pb-12 px-6 bg-[var(--color-background)] text-center">
        <span className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase">
          {project.category} · {project.location}
        </span>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
          {project.name}
        </h1>
        <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
          {project.count} photographs from {project.name}&apos;s{" "}
          {project.category.toLowerCase()} in {project.location}, captured by
          Stories by Abhinav.
        </p>
        <nav className="text-white/30 text-xs mt-6" aria-label="Breadcrumb">
          <a href="/" className="hover:text-[var(--color-accent)]">
            Home
          </a>{" "}
          /{" "}
          <a href="/portfolio/" className="hover:text-[var(--color-accent)]">
            Portfolio
          </a>{" "}
          / {project.name}
        </nav>
      </section>

      <section className="px-6 pb-12">
        <div className="max-w-2xl mx-auto space-y-4">
          {story.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-white/50 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-6 pb-16">
        <ProjectGallery photos={project.photos} projectName={project.name} />
      </section>

      {service && (
        <section className="px-6 pb-24 text-center">
          <p className="text-white/50 mb-6">
            Planning your own {service.title.toLowerCase()}?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`/services/${service.slug}/`}
              className="px-8 py-3 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
            >
              Explore {service.title}
            </a>
            <a
              href="/contact/"
              className="px-8 py-3 bg-[var(--color-accent)] text-black text-sm tracking-widest uppercase font-medium hover:bg-[var(--color-accent-light)] transition-all duration-300"
            >
              Enquire Now
            </a>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}