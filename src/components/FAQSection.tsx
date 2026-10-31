import type { Faq } from "@/data/page-content";

// Visible FAQ plus matching FAQPage structured data — Google requires the
// marked-up questions and answers to appear on the page.
export default function FAQSection({ faqs }: { faqs: Faq[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className="px-6 py-16 md:py-24 bg-[var(--color-surface)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-2xl mx-auto">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-white mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqs.map((f) => (
            <div key={f.question} className="border-t border-white/10 pt-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg text-white mb-3">
                {f.question}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {f.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
