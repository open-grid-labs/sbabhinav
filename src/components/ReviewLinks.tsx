import {
  CLIENT_REVIEW_FORM_URL,
  GOOGLE_REVIEW_URL,
  WEDMEGOOD_REVIEW_URL,
} from "@/constants/links";

// Public review platforms first (they help future couples find us), with the
// private Google Form as a quieter fallback for feedback meant only for us.
const platforms = [
  {
    name: "Google",
    label: "Review on Google",
    href: GOOGLE_REVIEW_URL,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.35 11.1H12v2.98h5.35c-.23 1.4-1.64 4.1-5.35 4.1-3.22 0-5.85-2.67-5.85-5.95S8.78 6.28 12 6.28c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.68 3.74 14.56 2.8 12 2.8 6.92 2.8 2.8 6.92 2.8 12s4.12 9.2 9.2 9.2c5.31 0 8.83-3.73 8.83-8.99 0-.6-.07-1.06-.15-1.51z" />
      </svg>
    ),
  },
  {
    name: "WedMeGood",
    label: "Review on WedMeGood",
    href: WEDMEGOOD_REVIEW_URL,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
];

export default function ReviewLinks({
  variant = "section",
}: {
  variant?: "section" | "card";
}) {
  const isCard = variant === "card";

  return (
    <div>
      <div
        className={`flex flex-col gap-3 ${
          isCard ? "" : "sm:flex-row justify-center"
        }`}
      >
        {platforms.map((p, i) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300 ${
              i === 0
                ? "bg-[var(--color-accent)] text-black border border-[var(--color-accent)] hover:bg-transparent hover:text-[var(--color-accent)]"
                : "border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black"
            }`}
          >
            {p.icon}
            {p.label}
          </a>
        ))}
      </div>
      <p
        className={`mt-4 text-white/40 text-xs ${
          isCard ? "text-center md:text-left" : "text-center"
        }`}
      >
        Prefer to share privately?{" "}
        <a
          href={CLIENT_REVIEW_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 underline underline-offset-4 decoration-white/30 hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)] transition-colors"
        >
          Send us feedback directly
        </a>
      </p>
    </div>
  );
}
