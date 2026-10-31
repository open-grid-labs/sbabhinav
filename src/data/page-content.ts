// Long-form copy blocks shared by service, location and standalone SEO pages.
// Rendered by src/components/PageSections.tsx and src/components/FAQSection.tsx.
export type PageSection = {
  heading: string; // rendered as h2
  paragraphs?: string[];
  bullets?: string[];
};

export type Faq = { question: string; answer: string };

export type RelatedLink = { label: string; href: string };
