import type { PageSection, RelatedLink } from "@/data/page-content";

// Body copy for SEO pages, styled to match blog post content
// (src/mdx-components.tsx). Paragraphs and bullets support simple
// [label](/path/) links and **bold** so copy can live in plain data files.
const INLINE = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

function withLinks(text: string) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(INLINE)) {
    parts.push(text.slice(last, match.index));
    parts.push(
      match[3] ? (
        <strong key={match.index} className="text-white font-medium">
          {match[3]}
        </strong>
      ) : (
        <a
          key={match.index}
          href={match[2]}
          {...(match[2].startsWith("http") && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
          className="text-[var(--color-accent)] underline underline-offset-4 hover:text-[var(--color-accent-light)] transition-colors"
        >
          {match[1]}
        </a>
      )
    );
    last = match.index + match[0].length;
  }
  parts.push(text.slice(last));
  return parts;
}

export default function PageSections({
  sections,
}: {
  sections: PageSection[];
}) {
  return (
    <div className="max-w-2xl mx-auto">
      {sections.map((section) => (
        <div key={section.heading}>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-white mt-12 mb-4">
            {section.heading}
          </h2>
          {section.paragraphs?.map((p) => (
            <p key={p.slice(0, 32)} className="text-white/60 leading-relaxed mb-5">
              {withLinks(p)}
            </p>
          ))}
          {section.bullets && (
            <ul className="space-y-2 mb-6 pl-5 list-disc marker:text-[var(--color-accent)] text-white/60">
              {section.bullets.map((b) => (
                <li key={b.slice(0, 32)} className="leading-relaxed">
                  {withLinks(b)}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export function RelatedLinks({
  links,
  title = "Related Pages",
}: {
  links: RelatedLink[];
  title?: string;
}) {
  return (
    <nav aria-label={title} className="max-w-3xl mx-auto">
      <h2 className="text-white text-sm tracking-widest uppercase mb-4 text-center">
        {title}
      </h2>
      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-white/40 text-sm hover:text-[var(--color-accent)] transition-colors duration-300"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function BookingCTA({
  text,
  href = "/contact/",
}: {
  text: string;
  href?: string;
}) {
  return (
    <section className="px-6 py-16 md:py-24 text-center">
      <p className="text-white/50 max-w-xl mx-auto mb-8">{text}</p>
      <a
        href={href}
        className="inline-block px-10 py-4 bg-[var(--color-accent)] text-black text-sm tracking-widest uppercase font-medium hover:bg-[var(--color-accent-light)] transition-all duration-300"
      >
        Check Availability
      </a>
    </section>
  );
}
