import AnimatedSection from "./AnimatedSection";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Wedding Photography", href: "/services/wedding-photography/" },
      { name: "Pre-Wedding Shoots", href: "/services/pre-wedding-shoot/" },
      { name: "Maternity Shoots", href: "/services/maternity-photoshoot/" },
      {
        name: "Mehendi & Haldi",
        href: "/services/mehendi-haldi-photography/",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about/" },
      { name: "Portfolio", href: "/portfolio/" },
      { name: "Blog", href: "/blog/" },
      { name: "Testimonials", href: "/#testimonials" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact/" },
      { name: "Wedding Photographer in Manali", href: "/wedding-photographer-manali/" },
    ],
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
              <address className="not-italic text-white/40 text-sm leading-relaxed mt-4 space-y-1">
                <a
                  href="tel:+918261814200"
                  className="block hover:text-[var(--color-accent)] transition-colors duration-300"
                >
                  +91 82618 14200
                </a>
                <a
                  href="mailto:abhinavmec47@gmail.com"
                  className="block hover:text-[var(--color-accent)] transition-colors duration-300"
                >
                  abhinavmec47@gmail.com
                </a>
                <span className="block">
                  Sundarnagar, Himachal Pradesh, India
                </span>
              </address>
            </div>

            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="text-white text-sm tracking-widest uppercase mb-4">
                  {group.title}
                </h4>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/40 text-sm hover:text-[var(--color-accent)] transition-colors duration-300"
                      >
                        {link.name}
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
