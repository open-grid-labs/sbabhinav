"use client";

import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { number: "500+", label: "Stories Captured" },
  { number: "8+", label: "Years Experience" },
  { number: "12", label: "Countries" },
  { number: "100%", label: "Happy Clients" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 bg-[var(--color-background)]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="The Artist Behind the Lens"
          title="Meet Abhinav"
          description="With over eight years of capturing life's most precious moments, I've developed an eye for the extraordinary hidden within the ordinary."
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative max-w-md mx-auto md:max-w-none">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                  alt="Abhinav - Photographer"
                  className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[var(--color-accent)]/30" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-[var(--color-accent)]/20" />
            </div>
          </AnimatedSection>

          <div className="text-center md:text-left">
            <AnimatedSection delay={0.2}>
              <div className="space-y-5 text-white/60 leading-relaxed max-w-xl mx-auto md:mx-0">
                <p>
                  Every frame I compose tells a story — your story. From the
                  sacred rituals of an Indian wedding to the breathtaking peaks
                  of the Himalayas, from intimate pre-wedding shoots in European
                  cities to stunning architectural real estate — my lens has
                  traveled the world, but my passion remains the same: creating
                  timeless visual narratives.
                </p>
                <p>
                  I believe photography is not about capturing what you see, but
                  revealing what you feel. That&apos;s why clients across 12
                  countries trust me to tell their most important stories.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="mt-12">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-[family-name:var(--font-playfair)] text-3xl text-[var(--color-accent)]">
                      {stat.number}
                    </div>
                    <div className="text-white/40 text-xs tracking-widest uppercase mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
