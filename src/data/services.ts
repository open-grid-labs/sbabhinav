import type { Faq, PageSection, RelatedLink } from "./page-content";

export type Service = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  heroImage: string;
  heroImageWidth: number;
  heroImageHeight: number;
  whatToExpect: string[];
  // Optional long-form SEO content. Services without it keep the original,
  // shorter layout and the default "<title> in Himachal Pradesh" metadata.
  heading?: string; // H1, defaults to title
  metaTitle?: string; // full <title>, under 60 characters
  metaDescription?: string; // defaults to shortDescription
  intro?: string; // first paragraph under the H1
  heroAlt?: string;
  sections?: PageSection[];
  faqs?: Faq[];
  relatedLinks?: RelatedLink[];
  relatedProjects?: string[]; // project slugs, instead of matching by category
  relatedHeading?: string;
  contactType?: string; // preselects the contact form's shoot type
  closing?: string; // text above the closing "Check Availability" button
  showFilms?: boolean; // embeds every film from src/data/films.ts
};

export const services: Service[] = [
  {
    slug: "wedding-photography",
    title: "Wedding Photography",
    category: "Wedding",
    shortDescription:
      "From sacred ceremonies to joyful celebrations — every emotion, every ritual, beautifully preserved forever.",
    heroImage: "/projects/service-wedding.jpg",
    heroImageWidth: 1100,
    heroImageHeight: 1651,
    whatToExpect: [
      "Full-day coverage of your ceremony and celebrations, shot candidly alongside posed portraits.",
      "A team that has covered weddings across Himachal Pradesh, so mountain light and hill-station venues are second nature.",
      "Every ritual — from the first look to the final farewell — documented without staging or interruption.",
      "Curated, professionally edited galleries delivered after the event.",
    ],
  },
  {
    slug: "pre-wedding-shoot",
    title: "Pre-Wedding Shoot",
    category: "Pre-Wedding",
    shortDescription:
      "Romantic, cinematic sessions set against blossoming orchards and Himalayan light — the excitement before forever.",
    heroImage: "/projects/service-prewedding.jpg",
    heroImageWidth: 1100,
    heroImageHeight: 1650,
    whatToExpect: [
      "Location scouting across Himachal Pradesh — mountains, orchards, and hill roads used as a natural backdrop.",
      "A relaxed, direction-led shoot designed to put couples at ease in front of the camera.",
      "Cinematic framing inspired by the Himalayan landscape the studio shoots in most often.",
      "A gallery built for sharing — save-the-dates, invitations, and social announcements.",
    ],
    relatedLinks: [
      {
        label: "Pre-Wedding Shoot Price in Himachal",
        href: "/pre-wedding-shoot-price-himachal/",
      },
      {
        label: "Pre-Wedding Locations in Shimla",
        href: "/blog/best-pre-wedding-shoot-locations-shimla/",
      },
      {
        label: "Pre-Wedding Locations in Manali",
        href: "/blog/best-pre-wedding-shoot-locations-manali/",
      },
    ],
  },
  {
    slug: "maternity-photoshoot",
    title: "Maternity Photoshoot",
    category: "Maternity",
    shortDescription:
      "Tender, intimate portraits that celebrate the anticipation and quiet joy of welcoming new life.",
    heroImage: "/projects/service-maternity.jpg",
    heroImageWidth: 1100,
    heroImageHeight: 733,
    whatToExpect: [
      "A calm, unhurried session designed around comfort — indoors or on location.",
      "Soft, natural-light portraiture that favours intimacy over spectacle.",
      "Direction that includes partners and family when couples want them in the frame.",
      "A finished gallery ready to keep or print for the family album.",
    ],
    relatedLinks: [
      {
        label: "Newborn Photography in Sundernagar & Mandi",
        href: "/services/newborn-photography/",
      },
      { label: "Neha — Maternity Gallery", href: "/portfolio/neha-maternity/" },
    ],
  },
  {
    slug: "mehendi-haldi-photography",
    title: "Mehendi & Haldi Photography",
    category: "Mehendi & Haldi",
    shortDescription:
      "The colour, music and mischief of the pre-wedding rituals — candidly captured as the celebration unfolds.",
    heroImage: "/projects/service-mehendi.jpg",
    heroImageWidth: 1100,
    heroImageHeight: 733,
    whatToExpect: [
      "Candid coverage of the mehendi and haldi functions — the colour, music, and family moments as they happen.",
      "Close attention to detail shots: mehendi patterns, haldi preparations, decor.",
      "A documentary approach that stays out of the way so the celebration doesn't feel staged.",
      "Photos delivered in a gallery alongside the rest of the wedding coverage, if booked together.",
    ],
  },
  {
    slug: "wedding-films",
    title: "Wedding Films",
    category: "Wedding Films",
    shortDescription:
      "Cinematic wedding films shot alongside our photography — highlight films, teasers and full-length edits of your celebration in the hills.",
    heroImage: "/projects/hero-3-celebration.jpg",
    heroImageWidth: 1920,
    heroImageHeight: 1280,
    heroAlt:
      "Groom and family arriving in a decorated open car at a mountain wedding venue in Himachal Pradesh",
    heading: "Cinematic Wedding Films in Himachal Pradesh",
    metaTitle: "Wedding Films in Himachal Pradesh | Stories by Abhinav",
    metaDescription:
      "Cinematic wedding films in Himachal Pradesh: highlight films, teasers and full-length edits for weddings in Manali, Shimla and Mandi.",
    intro:
      "Stories by Abhinav makes cinematic wedding films in Himachal Pradesh — the vows, the music, the voices and the mountains behind them, edited into a film you'll actually want to rewatch. If you're looking for a wedding videographer in Himachal Pradesh who works hand in hand with the photography team, this is what we do every season.",
    whatToExpect: [
      "A cinematography team that shoots alongside our photographers, so the film and the photos tell one story.",
      "A short highlight film, a social-ready teaser and a full-length film of the ceremonies.",
      "Drone footage where the venue and local rules allow it.",
      "Natural sound — vows, speeches and laughter — woven into the edit, not buried under music.",
    ],
    sections: [
      {
        heading: "What We Deliver",
        paragraphs: [
          "Every wedding is different, so we shape the deliverables around your functions. Most couples choose a combination of the following:",
        ],
        bullets: [
          "**Teaser** — a short, music-led cut built for Instagram and WhatsApp, usually the first thing your family sees after the wedding.",
          "**Highlight film** — a cinematic edit of the whole celebration, cut to music and real audio from the day. This is the film most couples rewatch.",
          "**Full-length film** — a longer, documentary-style record of the ceremonies and rituals, so nothing from the pheras or the speeches is lost.",
          "**Drone coverage** — aerial shots of the venue, the baraat and the valley, wherever the venue and local regulations permit flying.",
        ],
      },
      {
        heading: "How We Film a Wedding",
        paragraphs: [
          "We start with a planning call to understand your functions, your venue and the moments that matter most to your family. From there we build a shot plan and, for destination weddings in Manali, Shimla or Dharamshala, a schedule that works around mountain light and weather.",
          "On the day, our cinematographers work quietly alongside the photographers. We don't stop the ceremony for retakes — we position ourselves early, use natural light where we can, and capture audio so the film carries your real voices. After the wedding, our in-house editors cut the teaser first, followed by the highlight film and the full-length edit.",
          "Over six years and more than 500 stories, we've learned that the best wedding films come from being present rather than directing. That approach has earned us the WedMeGood User's Choice Award, chosen from over 1,000 creators across India. Watch a few of our recent films below — from Sofia & Sameer's destination wedding in Manali to Pratiksha & Sayam's celebration in Shimla.",
        ],
      },
      {
        heading: "How We Quote a Wedding Film",
        paragraphs: [
          "Every quote is built around your wedding rather than a fixed rate card. These are the things that shape it:",
        ],
        bullets: [
          "The number of days and functions you'd like filmed",
          "Which films you want — teaser, highlight film, full-length film or all three",
          "The size of the crew, especially if functions overlap",
          "Travel to your venue, and whether drone coverage is possible there",
          "Whether you're booking photography with us too",
        ],
      },
      {
        heading: "Pairing Films With Photography",
        paragraphs: [
          "Most of our couples book [wedding photography](/services/wedding-photography/) and film together. One team means one planning call, one timeline and no clash between photographers and videographers jostling for the same spot during the pheras. It also means your photos and film share the same look, from the colour grade to the moments we choose to focus on.",
          "Planning a wedding in the mountains? Our pages on [weddings in Manali](/wedding-photographer-manali/) and [weddings in Shimla](/wedding-photographer-shimla/) cover what to expect on location, and our [cost guide](/blog/wedding-photography-cost-himachal-pradesh-guide/) explains what drives the final quote.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a wedding videographer cost in Himachal Pradesh?",
        answer:
          "It depends on the number of days, the functions covered, crew size, travel and drone use. Share your dates, venue and functions and we'll send a detailed quote for your wedding.",
      },
      {
        question: "How long is a highlight film?",
        answer:
          "A highlight film is a few minutes long, cut to music and real audio from the day. The full-length film is longer and follows the ceremonies in order, while the teaser is a short cut made for social media.",
      },
      {
        question: "Can you use a drone at our venue in Manali or Shimla?",
        answer:
          "We fly drones only where the venue allows it and local rules permit it. We check this with your venue before the wedding and plan ground-level alternatives if flying isn't possible.",
      },
      {
        question: "When will we receive our wedding film?",
        answer:
          "The teaser usually comes first, a few weeks after the wedding, followed by the highlight film and the full-length edit. We'll confirm the timeline for your wedding when we send your quote, as it depends on the season and the films you choose.",
      },
      {
        question: "Do you travel outside Himachal Pradesh for weddings?",
        answer:
          "Yes. We're based in Sundernagar but have covered stories in more than 20 cities, and we're available for weddings across India.",
      },
    ],
    relatedLinks: [
      { label: "Wedding Photography", href: "/services/wedding-photography/" },
      { label: "Sofia & Sameer — Manali Wedding", href: "/portfolio/sofia-sameer/" },
      { label: "Wedding Photographer in Manali", href: "/wedding-photographer-manali/" },
    ],
    relatedProjects: ["sofia-sameer", "pratiksha-sayam", "amit-anuj"],
    relatedHeading: "Weddings We've Covered",
    contactType: "Cinematic Film",
    showFilms: true,
    closing:
      "Planning your wedding film? Tell us your dates, venue and functions, and we'll check availability for our photo and film team.",
  },
  {
    slug: "newborn-photography",
    title: "Newborn Photography",
    category: "Newborn",
    shortDescription:
      "Gentle, unhurried newborn sessions in Sundernagar — the natural next chapter after your maternity shoot.",
    heroImage: "/projects/neha-maternity/f/013.jpg",
    heroImageWidth: 1600,
    heroImageHeight: 2400,
    heroAlt:
      "Parents holding a pair of tiny baby shoes during a maternity photoshoot in Shimla, Himachal Pradesh",
    heading: "Newborn Photography in Sundernagar & Mandi",
    metaTitle: "Newborn Photos in Sundernagar & Mandi | Stories by Abhinav",
    metaDescription:
      "Safe, gentle newborn photography in Sundernagar and Mandi. Unhurried studio sessions in the first 5–14 days, plus maternity + newborn bundles.",
    intro:
      "Newborn photography in Sundernagar and Mandi with Stories by Abhinav is calm, slow and built entirely around your baby. Many of the families we photograph during pregnancy come back a few weeks later, and a newborn session is the natural next chapter of that story — the tiny fingers, the sleepy yawns and the first portraits of your new family.",
    whatToExpect: [
      "A warm, quiet studio session that moves at your baby's pace — feeds, cuddles and breaks whenever they're needed.",
      "Simple, natural poses only. Your baby's safety and comfort always come before any photograph.",
      "Family portraits with parents and siblings included in the same session.",
      "A finished gallery of edited portraits, ready to print or share.",
    ],
    sections: [
      {
        heading: "Safety First, Always",
        paragraphs: [
          "Newborns are delicate, and we treat every session that way. We keep the studio warm, wash and sanitise props and wraps between sessions, and keep a parent within arm's reach throughout. We never force a pose. If your baby is unsettled, we pause, feed and settle — however long that takes.",
          "We only use simple, natural positions. Any shot that looks like a baby is being held up or balanced is always supported by a parent's hands and finished in editing, never set up unsafely.",
        ],
      },
      {
        heading: "The Best Time for a Newborn Shoot",
        paragraphs: [
          "The ideal window for newborn photography is the first 5 to 14 days after birth. Babies sleep deeply during this period and curl naturally into the soft, womb-like poses newborn portraits are known for. After about two weeks they become more alert and wakeful, which makes for lovely portraits too, just in a different style.",
          "We recommend booking during your pregnancy with an estimated due date, then confirming the exact day once your baby arrives. Babies rarely keep to schedules, so we keep our calendar flexible for newborn clients.",
        ],
      },
      {
        heading: "What to Bring to Your Newborn Session in Sundernagar",
        bullets: [
          "Enough feeds for a few hours — newborn sessions move at your baby's pace, with plenty of breaks.",
          "Spare nappies, wipes and a change of clothes for baby (and for you, just in case).",
          "Any family heirlooms you'd like included — a blanket, jewellery or a toy from your own childhood.",
          "Simple, solid-coloured outfits for parents if you'd like family portraits.",
        ],
        paragraphs: [
          "We provide wraps, blankets and simple props. Our studio is in Sundernagar, close to Mandi town and the surrounding district — you'll find our contact details on the [contact page](/contact/).",
        ],
      },
      {
        heading: "Maternity + Newborn Bundle",
        paragraphs: [
          "If you're still expecting, our [maternity photoshoot](/services/maternity-photoshoot/) and newborn session can be booked together as a bundle. You'll work with the same photographer for both, so the two galleries feel like one continuous story — from the bump to the baby. Have a look at [Neha's maternity gallery](/portfolio/neha-maternity/) to see how we approach these sessions.",
        ],
      },
      {
        heading: "Why Families Choose Us",
        paragraphs: [
          "We've been photographing families since 2020 and have told more than 500 stories across Himachal Pradesh and beyond. Being based in Sundernagar means local families don't have to travel far with a newborn, and we can work around your baby's routine rather than a tight schedule.",
        ],
      },
    ],
    faqs: [
      {
        question: "When should we book a newborn photoshoot?",
        answer:
          "Ideally during pregnancy. We pencil in your due date and confirm the exact day after your baby is born, aiming for the first 5–14 days.",
      },
      {
        question: "Is newborn photography safe for my baby?",
        answer:
          "Yes. We keep the studio warm, use sanitised wraps, never force a pose and keep a parent close by at all times. If your baby needs a feed or a cuddle, the session simply pauses.",
      },
      {
        question: "Can you photograph our newborn at home in Mandi?",
        answer:
          "Most sessions take place in our Sundernagar studio, where we can control warmth and light. If travelling isn't possible, get in touch and we'll talk through the options.",
      },
      {
        question: "Can siblings and grandparents join the session?",
        answer:
          "Of course. We include family portraits in every newborn session, so bring whoever you'd like in the photos.",
      },
    ],
    relatedLinks: [
      { label: "Maternity Photoshoot", href: "/services/maternity-photoshoot/" },
      { label: "Neha — Maternity Gallery", href: "/portfolio/neha-maternity/" },
      { label: "Wedding Photographer in Sundernagar", href: "/wedding-photographer-sundernagar/" },
    ],
    relatedProjects: ["neha-maternity"],
    relatedHeading: "From Our Maternity Sessions",
    closing:
      "Expecting soon? Share your due date and we'll hold a flexible slot for your newborn session in Sundernagar.",
  },
];
