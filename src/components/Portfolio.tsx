"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const categories = [
  "All",
  "Wedding",
  "Pre-Wedding",
  "Adventure",
  "Real Estate",
  "Portrait",
];

const portfolioItems = [
  {
    title: "Royal Rajasthan Wedding",
    category: "Wedding",
    location: "Udaipur, India",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    title: "Santorini Love Story",
    category: "Pre-Wedding",
    location: "Santorini, Greece",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80",
    span: "col-span-1",
  },
  {
    title: "Mountain Peak Proposal",
    category: "Adventure",
    location: "Swiss Alps",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    span: "col-span-1",
  },
  {
    title: "Heritage Villa",
    category: "Real Estate",
    location: "Goa, India",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    span: "col-span-1",
  },
  {
    title: "Tuscan Garden Ceremony",
    category: "Wedding",
    location: "Tuscany, Italy",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    span: "col-span-1",
  },
  {
    title: "Desert Dunes Portrait",
    category: "Portrait",
    location: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=800&q=80",
    span: "col-span-1 md:col-span-2",
  },
  {
    title: "Patagonia Expedition",
    category: "Adventure",
    location: "Patagonia, Chile",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    span: "col-span-1",
  },
  {
    title: "Modern Penthouse",
    category: "Real Estate",
    location: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    span: "col-span-1",
  },
  {
    title: "Cherry Blossom Romance",
    category: "Pre-Wedding",
    location: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=800&q=80",
    span: "col-span-1",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-[var(--color-background)]"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Our Work"
          title="Portfolio"
          description="A curated collection of our finest work across genres and geographies. Every project is a story waiting to be told."
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
            {filtered.map((item) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden cursor-pointer ${item.span}`}
              >
                <div className="image-hover-zoom w-full h-full min-h-[300px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-[var(--color-accent)] text-[10px] tracking-[0.3em] uppercase">
                    {item.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mt-1">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm mt-1">
                    {item.location}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)]">
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
