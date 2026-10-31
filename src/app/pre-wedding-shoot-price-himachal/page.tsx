import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import PageSections, {
  BookingCTA,
  RelatedLinks,
} from "@/components/PageSections";
import type { Faq, PageSection } from "@/data/page-content";
import { WEDMEGOOD_PROFILE_URL } from "@/constants/links";

const BASE = "https://sbabhinav.com";
const SLUG = "pre-wedding-shoot-price-himachal";
const TITLE = "Pre-Wedding Shoot Price in Himachal | Stories by Abhinav";
const DESCRIPTION =
  "Pre-wedding shoot price in Himachal: half-day, full-day and multi-location packages for Manali, Shimla and Dharamshala, and what changes the cost.";
const CONTACT_HREF = "/contact/?type=Pre-Wedding%20Shoot";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `/${SLUG}/` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${BASE}/${SLUG}/`,
    images: ["/projects/hero-2-prewedding.jpg"],
  },
};

const packages = [
  {
    name: "Half Day",
    items: [
      "A few hours of shooting at one location",
      "Timed for golden hour or a quiet sunrise",
      "A couple of outfit changes",
      "Edited photos in an online gallery",
    ],
  },
  {
    name: "Full Day",
    items: [
      "Sunrise to golden hour, with breaks in between",
      "Two or more nearby locations",
      "More outfit changes and varied looks",
      "Option to add a reel or teaser film",
    ],
  },
  {
    name: "Multi-Location",
    items: [
      "Shoot days across different regions",
      "For example, Manali one day and Shimla or Dharamshala the next",
      "The widest range of looks and scenery",
      "Option to add a teaser film",
    ],
  },
];

const sections: PageSection[] = [
  {
    heading: "What Changes the Price of a Pre-Wedding Shoot",
    paragraphs: [
      `We quote every pre-wedding shoot individually rather than using a fixed rate card, because two couples can choose the same package and end up with very different days. For an idea of our starting packages, see our [WedMeGood profile](${WEDMEGOOD_PROFILE_URL}). These are the factors that make the difference:`,
    ],
    bullets: [
      "**Location** — a shoot close to Sundernagar or Mandi costs less than one at Solang, Sethan or Chail, where the drive and the day are longer.",
      "**Travel and stay** — longer distances can mean an overnight stay for the team, especially for sunrise shoots far from our base.",
      "**Season** — peak months (spring blossoms, October colours and snow season) book up fast, and snow shoots need more planning and buffer time.",
      "**Permits and entry fees** — some heritage sites, protected areas and private properties charge for photography or require permission in advance. We tell you about these before you book.",
      "**Film and reels** — adding a teaser film or a cinematic reel brings a cinematographer onto the shoot.",
    ],
  },
  {
    heading: "Why Our Sundernagar Base Keeps Travel Costs Down",
    paragraphs: [
      "Many pre-wedding photographers who shoot in Himachal travel in from Delhi, Chandigarh or further away, and that travel shows up in the quote. We're based in Sundernagar, right in the middle of the state, so Manali, Shimla and Dharamshala are all a road trip away rather than a flight. Often we can reach your location the same morning, which keeps overnight stays to a minimum.",
      "Being local also means we know the routes and the weather windows, and we already have backup spots planned for when the clouds roll in. That saves time on the day, and time on a shoot is money.",
    ],
  },
  {
    heading: "Pre-Wedding Shoot Price in Manali, Shimla and Dharamshala",
    paragraphs: [
      "Every package above works in any of Himachal's favourite pre-wedding destinations. The main difference in price between them is travel from Sundernagar:",
    ],
    bullets: [
      "**Manali** — orchards, Solang Valley and Old Manali lanes. See our [Manali locations guide](/blog/best-pre-wedding-shoot-locations-manali/).",
      "**Shimla** — the Ridge, Mashobra, Naldehra and Chail. See our [Shimla locations guide](/blog/best-pre-wedding-shoot-locations-shimla/) and [Shimla pre-wedding page](/pre-wedding-shoot-shimla/).",
      "**Dharamshala** — tea gardens and Dhauladhar views. See our [Dharamshala page](/wedding-photographer-dharamshala/).",
      "**Mandi and Sundernagar** — no outstation travel. See our [Mandi wedding page](/wedding-photographer-mandi/).",
    ],
  },
  {
    heading: "What Every Package Includes",
    bullets: [
      "A planning call to agree on locations, timing and the look you're after",
      "Outfit and colour advice suited to mountain light (see our [outfit guide](/blog/mountain-pre-wedding-shoot-outfit-guide/))",
      "Relaxed, direction-led shooting — no experience in front of a camera needed",
      "Professionally edited photos delivered in an online gallery, ready for save-the-dates and invitations",
    ],
    paragraphs: [
      "Over six years and more than 500 stories, we've shot pre-weddings across 20+ cities, and we're proud to be WedMeGood User's Choice Award winners. Want to see what a finished shoot looks like? Browse [Vipasha & Nikhil's Shimla pre-wedding](/portfolio/vipasha-nikhil/) or [Yogesh & Shivani's pre-wedding](/portfolio/yogesh-shivani/).",
    ],
  },
];

const faqs: Faq[] = [
  {
    question: "How much does a pre-wedding shoot cost in Himachal Pradesh?",
    answer:
      "It depends on the package, the locations, travel and whether you add a teaser film. A half-day shoot near Sundernagar costs the least, while full-day and multi-location shoots cost more. Our starting packages are listed on our WedMeGood profile — share your dates and preferred locations and we'll send a personalised quote.",
  },
  {
    question: "Is a pre-wedding shoot in Manali more expensive than in Shimla?",
    answer:
      "The package is the same. Any difference comes from travel and the specific locations you choose, and we show travel separately in your quote so you can compare.",
  },
  {
    question: "Do we need to pay for permits?",
    answer:
      "Most public outdoor spots don't need one, but some heritage sites, protected areas and private properties charge for photography. We check this when planning and include it in your quote.",
  },
  {
    question: "Can we bundle our pre-wedding shoot with wedding coverage?",
    answer:
      "Yes. Couples who book wedding photography with us can add a pre-wedding shoot as part of a combined package. Ask us for a bundled quote.",
  },
  {
    question: "When is the best season for a pre-wedding shoot in Himachal?",
    answer:
      "March to May and September to November give the most reliable light and weather. December to February is great for snow, and the monsoon months are lush green but need a backup plan.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "For peak season weekends, book as early as you can. Weekday shoots and off-season dates are usually easier to arrange at shorter notice.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pre-Wedding Shoot in Himachal Pradesh",
  serviceType: "Pre-Wedding Photography",
  description: DESCRIPTION,
  url: `${BASE}/${SLUG}/`,
  provider: { "@id": `${BASE}/#business` },
  areaServed: [
    { "@type": "State", name: "Himachal Pradesh" },
    { "@type": "City", name: "Manali" },
    { "@type": "City", name: "Shimla" },
    { "@type": "City", name: "Dharamshala" },
  ],
};

export default function PreWeddingPricePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />

      <section className="pt-40 pb-16 px-6 bg-[var(--color-background)] text-center">
        <span className="text-[var(--color-accent)] text-xs tracking-[0.3em] uppercase">
          Pre-Wedding Packages
        </span>
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6">
          Pre-Wedding Shoot Price in Himachal Pradesh
        </h1>
        <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
          Planning your pre-wedding shoot and wondering about price? Here&apos;s
          what our pre-wedding packages in Himachal Pradesh include, what
          affects the final quote, and why shooting in Manali, Shimla or
          Dharamshala with a Sundernagar-based team keeps costs simpler than
          you might expect.
        </p>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto image-hover-zoom">
          <img
            src="/projects/hero-2-prewedding.jpg"
            alt="Bride-to-be in an orange outfit walking through a wheat field during a pre-wedding shoot in Himachal Pradesh"
            width={1920}
            height={1280}
            loading="eager"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-white mb-10 text-center">
            Pre-Wedding Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((p) => (
              <div key={p.name} className="border-t border-white/10 pt-6">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white mb-4">
                  {p.name}
                </h3>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-white/50 text-sm leading-relaxed"
                    >
                      <span className="text-[var(--color-accent)] shrink-0">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <PageSections sections={sections} />
      </section>

      <FAQSection faqs={faqs} />

      <BookingCTA
        text="Tell us your dates and dream locations, and we'll send a quote for your pre-wedding shoot in Himachal."
        href={CONTACT_HREF}
      />

      <section className="px-6 pb-24">
        <RelatedLinks
          links={[
            { label: "Pre-Wedding Shoot Service", href: "/services/pre-wedding-shoot/" },
            { label: "Pre-Wedding Shoot in Shimla", href: "/pre-wedding-shoot-shimla/" },
            { label: "Wedding Photography Cost Guide", href: "/blog/wedding-photography-cost-himachal-pradesh-guide/" },
          ]}
        />
      </section>

      <Footer />
    </main>
  );
}