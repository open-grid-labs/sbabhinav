import type { Film } from "@/data/films";

// Privacy-enhanced YouTube embeds; loading="lazy" keeps off-screen players
// from loading until the visitor scrolls to them.
export default function FilmGrid({
  films,
  heading,
}: {
  films: Film[];
  heading: string;
}) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-white mb-10 text-center">
          {heading}
        </h2>
        <div
          className={`grid gap-8 ${films.length > 1 ? "md:grid-cols-2" : "max-w-3xl mx-auto"}`}
        >
          {films.map((film) => (
            <figure key={film.youtubeId}>
              <div className="aspect-video bg-[var(--color-surface)]">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?rel=0`}
                  title={`${film.couple} — ${film.title}${film.location ? `, ${film.location}` : ""}`}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <figcaption className="mt-4">
                <span className="text-[var(--color-accent)] text-[10px] tracking-[0.3em] uppercase">
                  {film.title}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-white mt-1">
                  {film.project ? (
                    <a
                      href={`/portfolio/${film.project}/`}
                      className="hover:text-[var(--color-accent)] transition-colors duration-300"
                    >
                      {film.couple}
                    </a>
                  ) : (
                    film.couple
                  )}
                </h3>
                {film.location && (
                  <p className="text-white/50 text-sm mt-1">{film.location}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
