"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import ReviewLinks from "./ReviewLinks";

const testimonials = [
  {
    name: "Hitakshi Sharma",
    event: "Wedding Photography",
    rating: 5,
    text: "Our wedding photos turned out stunning. Thank you for capturing our happiest moments thnqq soo much ♥️♥️",
  },
  {
    name: "Vikram Singh",
    event: "Wedding & Drone Photography",
    rating: 5,
    text: "I am beyond happy with how beautifully my entire wedding was captured. The Drone Photography added such a breathtaking and cinematic touch to my special day. Seeing the venue, the decorations, and my bridal entry from those stunning aerial angles truly made me emotional. It felt like watching a scene from a movie grand, magical, and full of life.",
  },
  {
    name: "Sneha Agarwal",
    event: "Wedding Film & Live Streaming",
    rating: 4.5,
    text: "Choosing you for our Wedding Films and live streaming was the best decision we made. You captured every moment with so much elegance and clarity. My family members who couldn’t attend felt like they were right there with us, thanks to the smooth, high–quality live stream.",
  },
  {
    name: "Divya Rao",
    event: "Wedding Film & Live Streaming",
    rating: 5,
    text: "I absolutely loved my Wedding Films, and the live streaming service was exceptional. It felt so effortless and perfectly handled — everyone watching from home kept telling me how beautiful and seamless everything looked.",
  },
  {
    name: "Dr Shagun",
    event: "Wedding Photography & Films",
    rating: 5,
    text: "We had a wonderful experience working with Abhinav and his team. Abhinav is extremely generous and approachable, and his entire team was very cooperative and professional throughout the wedding functions. The quality of the photos and videos is truly outstanding.",
  },
  {
    name: "Adiya Singh",
    event: "Family Birthday Shoot",
    rating: 5,
    text: "Maine recently Ruby Studio se ek photo shoot karwaya tha family ke birthday party occasion pe. Work genuinely expectations se zyada accha tha, but sabse zyada jo cheez pasand aayi wo inka behavior tha clients ke saath. Meri family thodi shy hai camera ke saamne, lekin inka style itna friendly hai ki sabki shyness khatam ho gayi.",
  },
  {
    name: "Neeraj Rana",
    event: "Family Photoshoot",
    rating: 4,
    text: "My family and I recently had the incredible opportunity to get a family photoshoot done at The Ruby Studio in Sundernagar, and the experience was truly exceptional. This wasn't just any regular photoshoot for us; it was a milestone, a way to capture a new chapter in our lives as my father enters his well-deserved retirement.",
  },
  {
    name: "Sheetal",
    event: "Wedding Photography",
    rating: 5,
    text: "It is a huge chaos to choose a good photographer for your perfect day. Then I got through Ruby Studio and it was one of the best decisions. Special mention to Abhinav Dhiman and his team. They worked so hard to get every picture perfect. Entire team was polite, friendly and full of patience and very skillful.",
  },
];

const initials = (name: string) =>
  name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const STAR_PATH =
  "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex justify-center gap-1 mb-6"
      role="img"
      aria-label={`Rated ${rating} out of 5`}
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <span key={i} className="relative w-4 h-4">
            <svg
              className="absolute inset-0 w-4 h-4 text-white/15"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d={STAR_PATH} />
            </svg>
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <svg
                className="w-4 h-4 text-[var(--color-accent)]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d={STAR_PATH} />
              </svg>
            </span>
          </span>
        );
      })}
    </div>
  );
}

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
                <Stars rating={testimonials[current].rating} />
                <p className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-white/80 leading-relaxed italic mb-10">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div
                    aria-hidden="true"
                    className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-[family-name:var(--font-playfair)] text-lg"
                  >
                    {initials(testimonials[current].name)}
                  </div>
                  <div className="text-left">
                    <div className="text-white font-medium">
                      {testimonials[current].name}
                    </div>
                    <div className="text-[var(--color-accent)] text-sm">
                      {testimonials[current].event}
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

            <div className="mt-16 pt-12 border-t border-white/10 text-center">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-2">
                Celebrated with us?
              </h3>
              <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
                A few words from you help future couples choose with
                confidence. It only takes a minute.
              </p>
              <ReviewLinks />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
