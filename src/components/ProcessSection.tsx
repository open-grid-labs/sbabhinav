"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Share your vision, dates, and dreams. We'll have a detailed consultation to understand exactly what you're looking for.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    ),
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We'll craft a custom plan — locations, timeline, mood boards, and creative direction tailored to your unique story.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    ),
  },
  {
    number: "03",
    title: "Create",
    description:
      "The magic happens. We capture authentic moments with an artistic eye, ensuring every shot tells a part of your story.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      />
    ),
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Expertly edited, beautifully curated galleries and films delivered in a premium package you'll treasure forever.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
      />
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="How It Works"
          title="Our Process"
          description="From first hello to final delivery — a seamless experience designed around you."
        />

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative group p-8 border border-white/5 hover:border-[var(--color-accent)]/30 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[var(--color-accent)]/0 via-[var(--color-accent)]/50 to-[var(--color-accent)]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <span className="block text-center font-[family-name:var(--font-playfair)] text-5xl text-white/5 group-hover:text-[var(--color-accent)]/10 transition-colors duration-500">
                  {step.number}
                </span>

                <div className="mt-4 mb-4 flex justify-center">
                  <svg
                    className="w-8 h-8 text-[var(--color-accent)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {step.icon}
                  </svg>
                </div>

                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed text-center">
                  {step.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
