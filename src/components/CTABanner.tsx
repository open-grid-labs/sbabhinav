"use client";

import {motion} from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Picture from "./Picture";

export default function CTABanner() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <Picture
        src="/projects/cta.jpg"
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <AnimatedSection className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase">
          Limited Availability
        </span>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
          Your Story Deserves
          <br />
          <span className="italic text-gradient">to Be Told</span>
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          We take on a limited number of projects each year to ensure every
          client receives our undivided attention and the highest quality work.
          Book early to secure your dates.
        </p>
        <motion.a
          href="/contact/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-12 py-4 bg-[var(--color-accent)] text-black text-sm tracking-widest uppercase font-medium hover:bg-[var(--color-accent-light)] transition-colors duration-300"
        >
          Check Availability
        </motion.a>
      </AnimatedSection>
    </section>
  );
}
