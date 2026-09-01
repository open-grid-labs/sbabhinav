"use client";

import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Picture from "./Picture";

const slides = [
  {
	  image: "/projects/hero-1-wedding.jpg",
    title: "Wedding Stories",
	  subtitle: "Where every vow becomes eternal",
	  w: 1920,
	  h: 1280,
  },
  {
	  image: "/projects/hero-2-prewedding.jpg",
    title: "Pre-Wedding",
    subtitle: "The chapter before forever",
	  w: 1920,
	  h: 1280,
  },
  {
	  image: "/projects/hero-3-celebration.jpg",
	  title: "Celebrations",
	  subtitle: "Joy, colour, and mountain air",
	  w: 1920,
	  h: 1280,
  },
	{
		image: "/projects/hero-4-romance.jpg",
		title: "In the Hills",
		subtitle: "Love, framed by the Himalayas",
		w: 1280,
		h: 1600,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Picture
            src={slides[current].image}
            alt={`${slides[current].title} — Stories by Abhinav, wedding photography in Himachal Pradesh`}
            width={slides[current].w}
            height={slides[current].h}
            fetchPriority={current === 0 ? "high" : undefined}
            loading={current === 0 ? "eager" : "lazy"}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-[var(--color-accent)] text-sm tracking-[0.3em] uppercase font-[family-name:var(--font-body)]">
            Premium Photography & Cinematic Films
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white/70 text-sm md:text-base tracking-[0.2em] uppercase font-[family-name:var(--font-body)] mb-3"
        >
          Wedding Photographer in Himachal Pradesh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-4"
        >
          Stories by{" "}
          <span className="text-gradient italic">Abhinav</span>
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.p
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-white/70 italic mt-2 mb-12"
          >
            {slides[current].subtitle}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/portfolio/"
            className="px-10 py-4 bg-[var(--color-accent)] text-black text-sm tracking-widest uppercase font-medium hover:bg-[var(--color-accent-light)] transition-all duration-300"
          >
            View Portfolio
          </a>
          <a
            href="/contact/"
            className="px-10 py-4 border border-white/30 text-white text-sm tracking-widest uppercase hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[2px] transition-all duration-500 ${
                i === current
                  ? "w-12 bg-[var(--color-accent)]"
                  : "w-6 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 right-8 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 rotate-90 origin-center translate-x-4 -translate-y-8">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-accent)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
