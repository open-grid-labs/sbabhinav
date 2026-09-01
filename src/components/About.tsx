"use client";

import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import Picture from "./Picture";

const stats = [
  { number: "6+", label: "Years of Craft" },
  { number: "500+", label: "Stories Captured" },
  { number: "20+", label: "Cities Covered" },
  { number: "20+", label: "Team Members" },
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
          description="A mechanical engineer by degree, a storyteller by calling — Abhinav turned a college hobby into one of the country's most trusted photography studios."
        />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative max-w-md mx-auto md:max-w-none">
              <div className="relative overflow-hidden">
                <Picture
                  src="/projects/about.jpg"
                  alt="A bridal portrait from a Himachal wedding shot by Abhinav"
                  width={1000}
                  height={1500}
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
                  Photography began as a passion during my engineering days — a
                  camera, a curiosity, and a refusal to stop learning. What
                  started as a one-person hobby in 2020 has, over six years,
                  grown into a fully bootstrapped studio with 20+ in-house
                  creatives and editors working together for a seamless,
                  end-to-end experience.
                </p>
                <p>
                  Entirely self-taught, I&apos;ve photographed over 500 stories
	                across more than 20 cities — weddings, pre-weddings, maternity
	                shoots, and beyond. Every frame is chased with the same obsession
	                for detail that drew me to this craft in the first place.
                </p>
                <p>
                  That dedication has been recognized nationally: featured on
                  leading platforms like WedMeGood, where we were honored with
                  the <span className="text-white/90 font-medium">User&apos;s
                  Choice Award</span> among thousands of creators. But the
                  trust of every couple and client remains the award I value
                  most.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.35} className="mt-8">
              <div className="inline-flex items-center gap-3 border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 px-5 py-3">
                <svg
                  className="w-6 h-6 text-[var(--color-accent)] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-white text-sm font-medium">
                    WedMeGood User&apos;s Choice Award
                  </div>
                  <div className="text-white/40 text-xs">
                    Chosen among 1000+ creators nationwide
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5} className="mt-12">
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
