import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

const BASE = "https://sbabhinav.com";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Stories by Abhinav`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      url: `${BASE}/blog/${post.slug}/`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog/` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${BASE}/blog/${post.slug}/`,
      },
    ],
  };

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${BASE}/blog/${post.slug}/`,
    author: { "@type": "Person", name: "Abhinav" },
    publisher: { "@id": `${BASE}/#business` },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />

      <Navbar />

      <section className="pt-40 pb-12 px-6 bg-[var(--color-background)] text-center">
        <span className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase">
          {post.category}
        </span>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-6 max-w-3xl mx-auto">
          {post.title}
        </h1>
        <time dateTime={post.date} className="block text-white/30 text-xs">
          {new Date(post.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        <nav className="text-white/30 text-xs mt-6" aria-label="Breadcrumb">
          <a href="/" className="hover:text-[var(--color-accent)]">
            Home
          </a>{" "}
          / <a href="/blog/" className="hover:text-[var(--color-accent)]">
            Blog
          </a>
        </nav>
      </section>

      <article className="px-6 pb-16">
        <div className="max-w-2xl mx-auto">
          <Content />
        </div>
      </article>

      <section className="px-6 pb-24 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/portfolio/"
            className="px-8 py-3 border border-white/20 text-white text-sm tracking-widest uppercase hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
          >
            View Portfolio
          </a>
          <a
            href="/contact/"
            className="px-8 py-3 bg-[var(--color-accent)] text-black text-sm tracking-widest uppercase font-medium hover:bg-[var(--color-accent-light)] transition-all duration-300"
          >
            Enquire Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
