import AnimatedSection from "./AnimatedSection";

interface Props {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ label, title, description }: Props) {
  return (
    <AnimatedSection className="text-center mb-16 md:mb-20">
      <span className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase">
        {label}
      </span>
      <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      )}
      <div className="w-16 h-[1px] bg-[var(--color-accent)] mx-auto mt-8" />
    </AnimatedSection>
  );
}
