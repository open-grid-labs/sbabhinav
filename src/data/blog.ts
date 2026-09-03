export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  category: string;
};

// Content lives in src/content/blog/<slug>.mdx — the slug here must match the
// filename. Sitemap and /blog/ index are both generated from this list.
export const blogPosts: BlogPost[] = [
  {
    slug: "best-pre-wedding-shoot-locations-manali",
    title: "Best Pre-Wedding Shoot Locations in Manali",
    description:
      "From apple orchards to alpine meadows — where to shoot a pre-wedding session in Manali, and when to go for the best light.",
    date: "2026-03-02",
    category: "Pre-Wedding",
  },
  {
    slug: "wedding-photography-cost-himachal-pradesh-guide",
    title: "Wedding Photography Cost in Himachal Pradesh: A 2026 Guide",
    description:
      "What actually drives wedding photography pricing in Himachal Pradesh — coverage days, team size, travel, and deliverables — so you know what to ask for.",
    date: "2026-03-09",
    category: "Wedding",
  },
  {
    slug: "manali-vs-shimla-destination-wedding",
    title: "Manali vs Shimla: Destination Wedding Kahan Plan Karein",
    description:
      "Dono hill stations khoobsurat hain, par alag tarah se. Venues, weather windows, aur accessibility ke hisaab se Manali aur Shimla ka comparison.",
    date: "2026-03-16",
    category: "Wedding",
  },
  {
    slug: "mountain-pre-wedding-shoot-outfit-guide",
    title: "Mountain Pre-Wedding Shoot ke liye Kya Pehnein",
    description:
      "Himachal ki mountain light aur terrain ke hisaab se outfit, fabric aur colour choices — taaki photos bhi achhi aayein aur aap comfortable bhi rahein.",
    date: "2026-03-23",
    category: "Pre-Wedding",
  },
  {
    slug: "questions-to-ask-before-booking-wedding-photographer-himachal",
    title:
      "Himachal mein Wedding Photographer Book Karne se Pehle 10 Sawaal",
    description:
      "Deposit se delivery timeline tak — booking se pehle apne photographer se ye 10 sawaal zaroor poochein, taaki wedding day pe koi surprise na ho.",
    date: "2026-03-30",
    category: "Wedding",
  },
];
