"use client";

import { motion } from "framer-motion";

const words = [
  "Wedding",
  "Pre-Wedding",
  "Adventure",
  "Real Estate",
  "Cinematic Films",
  "Portrait",
  "Corporate",
  "Fashion",
  "Destination",
  "Maternity",
];

export default function Marquee() {
  return (
    <div className="py-8 bg-[var(--color-accent)] overflow-hidden">
      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...words, ...words, ...words].map((word, i) => (
          <span
            key={i}
            className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-black/80 flex items-center gap-12"
          >
            {word}
            <span className="w-2 h-2 bg-black/30 rotate-45" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
