"use client";

import {motion} from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    title: "Wedding Photography",
    description:
      "From sacred ceremonies to joyful celebrations — every emotion, every ritual, beautifully preserved forever.",
	  image: "/projects/service-wedding.jpg",
    tag: "Most Popular",
  },
  {
    title: "Pre-Wedding Shoots",
    description:
	    "Romantic, cinematic sessions set against blossoming orchards and Himalayan light — the excitement before forever.",
	  image: "/projects/service-prewedding.jpg",
    tag: "Trending",
  },
  {
	  title: "Maternity Shoots",
    description:
	    "Tender, intimate portraits that celebrate the anticipation and quiet joy of welcoming new life.",
	  image: "/projects/service-maternity.jpg",
    tag: null,
  },
  {
	  title: "Mehendi & Haldi",
    description:
	    "The colour, music and mischief of the pre-wedding rituals — candidly captured as the celebration unfolds.",
	  image: "/projects/service-mehendi.jpg",
	  tag: "Vibrant",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="What We Do"
          title="Our Craft"
          description="Every genre demands its own language. We speak them all fluently — from the grandeur of weddings to the precision of real estate."
        />

	      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden bg-[var(--color-background)] cursor-pointer h-full"
              >
                <div className="image-hover-zoom aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {service.tag && (
                  <span className="absolute top-4 right-4 bg-[var(--color-accent)] text-black text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
                    {service.tag}
                  </span>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-3 group-hover:text-white/70 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[var(--color-accent)] text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
