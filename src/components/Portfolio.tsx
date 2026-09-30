"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { categories, projects } from "@/data/projects";

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-[var(--color-background)]"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Our Work"
          title="Portfolio"
          description="Real couples, real celebrations — captured across the mountains of Himachal and beyond. Open any story to see the full gallery."
        />

        <AnimatedSection className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-xs tracking-widest uppercase transition-all duration-300 border ${
                filter === cat
                  ? "bg-[var(--color-accent)] text-black border-[var(--color-accent)]"
                  : "border-white/20 text-white/50 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden cursor-pointer text-left block ${
                  project.featured
                    ? "col-span-1 md:col-span-2 row-span-2"
                    : "col-span-1"
                }`}
              >
                <Link
                  href={`/portfolio/${project.slug}/`}
                  className="block w-full h-full"
                >
                  <div className="image-hover-zoom w-full h-full min-h-[300px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.cover}
                      alt={project.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                  {project.featured && (
                    <span className="absolute top-4 left-4 bg-[var(--color-accent)] text-black text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
                      Featured
                    </span>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[var(--color-accent)] text-[10px] tracking-[0.3em] uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-white mt-1">
                      {project.name}
                    </h3>
                    <p className="text-white/50 text-sm mt-1">
                      {project.location} · {project.count} photos
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)]">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}