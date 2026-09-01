import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Wedding Photography Blog — Himachal Pradesh | Stories by Abhinav",
  description:
    "Guides on wedding photography in Himachal Pradesh — locations, planning, pricing, and what to expect, from a studio that shoots here year-round.",
  alternates: { canonical: "/blog/" },
  openGraph: { url: "https://sbabhinav.com/blog/" },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main>
      <Navbar />

      <section className="pt-40 pb-16 px-6 bg-[var(--color-background)] text-center">
        <span className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase">
          Guides & Stories
        </span>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
          The Journal
        </h1>
        <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
          Notes on planning a wedding or pre-wedding shoot in Himachal
          Pradesh — locations, pricing, and practical advice from the studio
          that shoots here.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto space-y-10">
          {sorted.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="block border-b border-white/10 pb-10 group"
            >
              <span className="text-[var(--color-accent)] text-[10px] tracking-[0.3em] uppercase">
                {post.category}
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-white mt-3 mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                {post.title}
              </h2>
              <p className="text-white/50 leading-relaxed">
                {post.description}
              </p>
              <time
                dateTime={post.date}
                className="block text-white/30 text-xs mt-4"
              >
                {new Date(post.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
