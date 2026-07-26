"use client";

import {useCallback, useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import {categories, type Project, projects} from "@/data/projects";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
	const [active, setActive] = useState<Project | null>(null);
	const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === "All"
	    ? projects
	    : projects.filter((p) => p.category === filter);

	// lock body scroll while a modal is open
	useEffect(() => {
		const open = active !== null;
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [active]);

	const closeAll = useCallback(() => {
		setLightbox(null);
		setActive(null);
	}, []);

	const step = useCallback(
		(dir: number) => {
			if (active === null || lightbox === null) return;
			const n = active.photos.length;
			setLightbox((i) => (i === null ? null : (i + dir + n) % n));
		},
		[active, lightbox]
	);

	// keyboard navigation
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (active === null) return;
			if (e.key === "Escape") {
				if (lightbox !== null) setLightbox(null);
				else setActive(null);
			} else if (lightbox !== null && e.key === "ArrowRight") step(1);
			else if (lightbox !== null && e.key === "ArrowLeft") step(-1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [active, lightbox, step]);

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-[var(--color-background)]"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeading
          label="Our Work"
          title="Portfolio"
          description="Real couples, real celebrations — captured across the mountains of Himachal and beyond. Open any story to see the full gallery."
        />

        <AnimatedSection className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-xs tracking-widest uppercase transition-all duration-300 border ${
                filter === cat
                  ? "bg-[var(--color-accent)] text-black border-[var(--color-accent)]"
                  : "border-white/20 text-white/50 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
	          {filtered.map((project) => (
		          <motion.button
			          key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
			          onClick={() => setActive(project)}
			          className={`group relative overflow-hidden cursor-pointer text-left ${
				          project.featured
					          ? "col-span-1 md:col-span-2 row-span-2"
					          : "col-span-1"
			          }`}
              >
                <div className="image-hover-zoom w-full h-full min-h-[300px]">
	                {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
	                  src={project.cover}
	                  alt={project.name}
	                  loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>

			          <div
				          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"/>

			          {project.featured && (
				          <span
					          className="absolute top-4 left-4 bg-[var(--color-accent)] text-black text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
                    Featured
                  </span>
			          )}

			          <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[var(--color-accent)] text-[10px] tracking-[0.3em] uppercase">
                    {project.category}
                  </span>
				          <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-white mt-1">
					          {project.name}
                  </h3>
                  <p className="text-white/50 text-sm mt-1">
	                  {project.location} · {project.count} photos
                  </p>
                </div>

			          <div
				          className="absolute top-4 right-4 w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)]">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </div>
		          </motion.button>
	          ))}
          </AnimatePresence>
        </motion.div>
      </div>

	    {/* Project gallery modal */}
	    <AnimatePresence>
		    {active && (
			    <motion.div
				    initial={{opacity: 0}}
				    animate={{opacity: 1}}
				    exit={{opacity: 0}}
				    className="fixed inset-0 z-50 bg-black/95 overflow-y-auto"
			    >
				    <div
					    className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 bg-black/80 backdrop-blur-sm border-b border-white/10">
					    <div>
                <span className="text-[var(--color-accent)] text-[10px] tracking-[0.3em] uppercase">
                  {active.category}
                </span>
						    <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white">
							    {active.name}
						    </h3>
						    <p className="text-white/40 text-xs mt-0.5">
							    {active.location} · {active.count} photos
						    </p>
					    </div>
					    <button
						    onClick={closeAll}
						    aria-label="Close gallery"
						    className="w-11 h-11 flex items-center justify-center border border-white/20 text-white hover:bg-[var(--color-accent)] hover:text-black hover:border-[var(--color-accent)] transition-colors"
					    >
						    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
							          d="M6 18L18 6M6 6l12 12"/>
						    </svg>
					    </button>
				    </div>

				    <div className="max-w-[1500px] mx-auto p-4 md:p-6">
					    <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [column-fill:_balance]">
						    {active.photos.map((photo, i) => (
							    <button
								    key={photo.thumb}
								    onClick={() => setLightbox(i)}
								    className="mb-3 block w-full overflow-hidden group/th"
							    >
								    {/* eslint-disable-next-line @next/next/no-img-element */}
								    <img
									    src={photo.thumb}
									    alt={`${active.name} — photo ${i + 1}`}
									    loading="lazy"
									    width={photo.w}
									    height={photo.h}
									    className="w-full h-auto transition-transform duration-500 group-hover/th:scale-[1.03]"
								    />
							    </button>
						    ))}
					    </div>
				    </div>
			    </motion.div>
		    )}
	    </AnimatePresence>

	    {/* Full-image lightbox */}
	    <AnimatePresence>
		    {active && lightbox !== null && (
			    <motion.div
				    initial={{opacity: 0}}
				    animate={{opacity: 1}}
				    exit={{opacity: 0}}
				    className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center select-none"
				    onClick={() => setLightbox(null)}
			    >
				    <button
					    onClick={(e) => {
						    e.stopPropagation();
						    setLightbox(null);
					    }}
					    aria-label="Close"
					    className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center border border-white/20 text-white hover:bg-[var(--color-accent)] hover:text-black transition-colors z-10"
				    >
					    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
						          d="M6 18L18 6M6 6l12 12"/>
					    </svg>
				    </button>

				    <button
					    onClick={(e) => {
						    e.stopPropagation();
						    step(-1);
					    }}
					    aria-label="Previous"
					    className="absolute left-3 md:left-6 w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-[var(--color-accent)] hover:text-black transition-colors"
				    >
					    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7"/>
					    </svg>
				    </button>

				    <AnimatePresence mode="wait">
					    <motion.img
						    key={lightbox}
						    initial={{opacity: 0}}
						    animate={{opacity: 1}}
						    exit={{opacity: 0}}
						    transition={{duration: 0.2}}
						    src={active.photos[lightbox].full}
						    alt={`${active.name} — photo ${lightbox + 1}`}
						    onClick={(e) => e.stopPropagation()}
						    className="max-h-[88vh] max-w-[90vw] object-contain"
					    />
				    </AnimatePresence>

				    <button
					    onClick={(e) => {
						    e.stopPropagation();
						    step(1);
					    }}
					    aria-label="Next"
					    className="absolute right-3 md:right-6 w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-[var(--color-accent)] hover:text-black transition-colors"
				    >
					    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/>
					    </svg>
				    </button>

				    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest">
					    {lightbox + 1} / {active.photos.length}
				    </div>
			    </motion.div>
		    )}
	    </AnimatePresence>
    </section>
  );
}
