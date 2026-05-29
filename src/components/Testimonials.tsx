"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Priya & Arjun",
    event: "Destination Wedding",
    location: "Udaipur, India",
    text: "Abhinav didn't just photograph our wedding — he felt it. Every frame captures an emotion we didn't even know was there. Looking at our album feels like reliving the most magical day of our lives.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Sarah & James",
    event: "Adventure Shoot",
    location: "Swiss Alps",
    text: "We flew Abhinav to Switzerland for our engagement shoot and it was the best decision we ever made. He captured the scale of the mountains and the intimacy of our love in the same frame. Pure magic.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Meera & Rohan",
    event: "Pre-Wedding Film",
    location: "Santorini, Greece",
    text: "The cinematic film Abhinav created for us has been watched over 100,000 times online. Friends, family, even strangers write to us saying it made them cry. That's his gift — making people feel.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "The Oberoi Group",
    event: "Real Estate Portfolio",
    location: "Pan-India",
    text: "Abhinav's architectural photography elevated our entire property portfolio. His understanding of light, space, and luxury is unmatched. We've seen a measurable increase in enquiries since updating our visuals.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 px-6 bg-[var(--color-surface)]"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Client Love"
          title="What They Say"
          description="The greatest compliment is the trust of our clients. Here's what they have to say about their experience."
        />

        <AnimatedSection>
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -top-8 left-0 font-[family-name:var(--font-playfair)] text-[120px] text-[var(--color-accent)]/10 leading-none select-none">
              &ldquo;
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-white/80 leading-relaxed italic mb-10">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[var(--color-accent)]/30"
                  />
                  <div className="text-left">
                    <div className="text-white font-medium">
                      {testimonials[current].name}
                    </div>
                    <div className="text-[var(--color-accent)] text-sm">
                      {testimonials[current].event}
                    </div>
                    <div className="text-white/40 text-xs">
                      {testimonials[current].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prev}
                className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 text-white/50"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-[var(--color-accent)] w-6"
                        : "bg-white/20"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 text-white/50"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
