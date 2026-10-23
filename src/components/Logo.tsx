// Brand mark: a minimal camera with a heart in the lens.
// The same drawing is used for the favicon in src/app/icon.svg — keep them in sync
// and re-run `node scripts/build-icons.mjs` after changing it.
export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 14h6l3-5h10l3 5h6a5 5 0 0 1 5 5v16a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V19a5 5 0 0 1 5-5Z" />
      <circle cx="24" cy="27" r="8" />
      <path
        d="M24 31s-4.2-2.6-4.2-5.3a2.1 2.1 0 0 1 4.2-.6 2.1 2.1 0 0 1 4.2.6C28.2 28.4 24 31 24 31Z"
        fill="currentColor"
        stroke="none"
      />
      <circle cx="37" cy="19.5" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Logo({
  withText = true,
  className = "",
}: {
  withText?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="w-8 h-8 text-[var(--color-accent)] shrink-0" />
      {withText && (
        <span className="font-[family-name:var(--font-playfair)] text-xl tracking-wide">
          <span className="text-[var(--color-accent)]">Stories</span>
          <span className="text-white/60 mx-2 font-light">by</span>
          <span className="text-white">Abhinav</span>
        </span>
      )}
    </span>
  );
}
