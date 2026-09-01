export type Service = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  heroImage: string;
  heroImageWidth: number;
  heroImageHeight: number;
  whatToExpect: string[];
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
];
