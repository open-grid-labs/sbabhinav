import type { MDXComponents } from "mdx/types";

// Global styling for blog post content (src/content/blog/*.mdx). Post pages
// render their own <h1> from post metadata, so MDX bodies should start at h2.
const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-white mt-12 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-white/60 leading-relaxed mb-5">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2 mb-6 pl-5 list-disc marker:text-[var(--color-accent)] text-white/60">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-2 mb-6 pl-5 list-decimal marker:text-[var(--color-accent)] text-white/60">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-[var(--color-accent)] underline underline-offset-4 hover:text-[var(--color-accent-light)] transition-colors"
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="text-white font-medium">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-[var(--color-accent)] pl-6 my-8 text-white/70 italic">
      {children}
    </blockquote>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
