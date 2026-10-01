"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface Photo {
  thumb: string;
  full: string;
  w: number;
  h: number;
}

interface ProjectGalleryProps {
  photos: Photo[];
  projectName: string;
}

export default function ProjectGallery({ photos, projectName }: ProjectGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const step = useCallback(
    (dir: number) => {
      if (lightbox === null) return;
      const n = photos.length;
      setLightbox((i) => (i === null ? null : (i + dir + n) % n));
    },
    [lightbox, photos.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, step]);

  return (
    <>
      <div className="max-w-[1500px] mx-auto">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [column-fill:_balance]">
          {photos.map((photo, i) => (
            <button
              key={photo.thumb}
              onClick={() => setLightbox(i)}
              className="mb-3 block w-full overflow-hidden group/th cursor-zoom-in text-left"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.thumb}
                alt={`${projectName} — photo ${i + 1}`}
                loading={i < 4 ? "eager" : "lazy"}
                width={photo.w}
                height={photo.h}
                className="w-full h-auto transition-transform duration-500 group-hover/th:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Full-image lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center select-none"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              aria-label="Close"
              className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center border border-white/20 text-white hover:bg-[var(--color-accent)] hover:text-black transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous"
              className="absolute left-3 md:left-6 w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-[var(--color-accent)] hover:text-black transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={lightbox}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={photos[lightbox].full}
                alt={`${projectName} — photo ${lightbox + 1}`}
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                className="max-h-[88vh] max-w-[90vw] object-contain relative z-0"
              />
            </AnimatePresence>

            <button
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next"
              className="absolute right-3 md:right-6 w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-[var(--color-accent)] hover:text-black transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest z-10">
              {lightbox + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}