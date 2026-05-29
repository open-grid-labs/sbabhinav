import AnimatedSection from "./AnimatedSection";

const footerLinks = [
  {
    title: "Services",
    links: [
      "Wedding Photography",
      "Pre-Wedding Shoots",
      "Adventure Photography",
      "Real Estate",
      "Cinematic Films",
      "Portrait Sessions",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Portfolio", "Testimonials", "Blog", "Careers"],
  },
  {
    title: "Support",
    links: ["Contact Us", "FAQ", "Pricing", "Privacy Policy", "Terms"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <AnimatedSection>
          <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-[family-name:var(--font-playfair)] text-xl">
                <span className="text-[var(--color-accent)]">Stories</span>
                <span className="text-white/60 mx-2 font-light">by</span>
                <span className="text-white">Abhinav</span>
              </span>
              <p className="text-white/40 text-sm leading-relaxed mt-4">
                Crafting visual narratives that transcend time. Premium
                photography and cinematic films for life&apos;s most
                extraordinary moments.
              </p>
            </div>

            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-white text-sm tracking-widest uppercase mb-4">
                  {group.title}
                </h4>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/40 text-sm hover:text-[var(--color-accent)] transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Stories by Abhinav. All rights
            reserved.
          </p>
          <p className="text-white/20 text-xs">
            Capturing stories across India & Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
