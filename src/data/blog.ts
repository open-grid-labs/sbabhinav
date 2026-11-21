import type { Faq } from "./page-content";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  updated?: string; // YYYY-MM-DD, set when a post is meaningfully revised
  category: string;
  faqs?: Faq[]; // rendered after the post body with FAQPage structured data
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
    slug: "best-pre-wedding-shoot-locations-shimla",
    title: "Shimla Pre-Wedding Shoot Locations",
    description:
      "The Ridge at sunrise, Jakhoo, Mashobra, Naldehra, Kufri and Chail — where to plan a pre-wedding shoot in Shimla, with light, season and crowd tips.",
    date: "2026-10-30",
    category: "Pre-Wedding",
  },
  {
    slug: "wedding-photography-cost-himachal-pradesh-guide",
    title: "Wedding Photography Cost in Himachal Pradesh: A 2027 Guide",
    description:
      "What actually drives wedding photography pricing in Himachal Pradesh — coverage days, team size, travel, and deliverables — so you know what to ask for.",
    date: "2026-03-09",
    updated: "2026-11-21",
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
  {
    slug: "pre-wedding-shoot-cost-manali",
    title: "Pre-Wedding Shoot Cost in Manali: 2027 Price Guide",
    description:
      "How much a pre-wedding shoot in Manali costs in 2027 — typical price ranges, what's included, and the five things that change the quote most.",
    date: "2026-11-21",
    category: "Pre-Wedding",
    faqs: [
      {
        question: "How much does a pre-wedding shoot in Manali cost?",
        answer:
          "Most pre-wedding shoots in Manali cost between ₹15,000 and ₹1,50,000 in total. A local photo-only half day sits at the lower end; a full day with a reel or teaser film, or a multi-day shoot with a travelling team, sits at the higher end.",
      },
      {
        question: "What is the best month for a pre-wedding shoot in Manali?",
        answer:
          "October is the most reliable month for clear skies and golden light. March to May brings apple blossoms, and December to February is the window for snow at Solang Valley.",
      },
      {
        question: "Are travel and permits included in a Manali pre-wedding package?",
        answer:
          "Often not. Ask whether the quote covers the photographer's travel and stay, local taxi hire between locations, and entry or permit fees at places like Solang or Hadimba Temple.",
      },
    ],
  },
  {
    slug: "destination-wedding-cost-himachal-pradesh",
    title: "Destination Wedding Cost in Himachal Pradesh (2027 Budget Guide)",
    description:
      "A realistic 2027 budget for a destination wedding in Himachal — venue and rooms, catering, decor, photography and guest travel, with sample budgets and ways to save.",
    date: "2026-11-21",
    category: "Wedding",
    faqs: [
      {
        question: "How much does a destination wedding in Himachal cost?",
        answer:
          "A destination wedding in Himachal Pradesh for 100–150 guests typically costs between ₹15 lakh and ₹40 lakh. An intimate wedding for 30–50 guests can be done for under ₹10 lakh, while large luxury weddings can go past ₹50 lakh.",
      },
      {
        question: "What is the biggest cost of a destination wedding in the hills?",
        answer:
          "Venue and rooms, usually 35–50% of the budget, because hill resorts generally require a room block or full buyout for two or three nights.",
      },
      {
        question: "Which is the cheapest time for a wedding in Himachal?",
        answer:
          "Shoulder seasons — March to April and late September to November — offer good weather at lower rates than the summer rush and the Christmas–New Year week. Monsoon is cheapest but risky because of landslides.",
      },
    ],
  },
  {
    slug: "best-time-for-pre-wedding-shoot-himachal",
    title: "Best Time for a Pre-Wedding Shoot in Himachal: Month-by-Month",
    description:
      "When to plan a pre-wedding shoot in Himachal Pradesh — month by month, by look (snow, blossoms, autumn) and by place, from Shimla and Manali to Spiti.",
    date: "2026-11-21",
    category: "Pre-Wedding",
    faqs: [
      {
        question: "What is the best time for a pre-wedding shoot in Himachal?",
        answer:
          "October to mid-November is the best time, with clear skies and golden light. March to May is a close second for blossoms, and late December to February is best for snow.",
      },
      {
        question: "Is monsoon a good time for a pre-wedding shoot in Himachal?",
        answer:
          "July and August are the riskiest months because of heavy rain, landslides and road closures. The mist can look beautiful, but only plan a monsoon shoot with flexible dates.",
      },
      {
        question: "When can you shoot in Spiti or Sissu?",
        answer:
          "June to early October is the reliable window, when roads are open. Sissu can sometimes be reached through the Atal Tunnel in winter for snow shoots, depending on conditions.",
      },
    ],
  },
  {
    slug: "snow-wedding-himachal-pradesh-guide",
    title: "Snow Wedding & Snow Pre-Wedding Shoot in Himachal: Complete Guide",
    description:
      "Where and when to find snow for a wedding or pre-wedding shoot in Himachal — Kufri, Narkanda, Solang, Dalhousie — plus backup plans, outfits and cold-weather tips.",
    date: "2026-11-21",
    category: "Pre-Wedding",
    faqs: [
      {
        question: "When does it snow in Himachal for a wedding shoot?",
        answer:
          "Late December to mid-February is the most reliable window. Snowfall varies year to year, so always keep a flexible backup date.",
      },
      {
        question: "Where is the best place for a snow pre-wedding shoot in Himachal?",
        answer:
          "Kufri and Narkanda near Shimla, Solang Valley near Manali, and Dalhousie and Khajjiar are the most dependable snow locations that are still reachable by road.",
      },
      {
        question: "Can we have a snow wedding in Himachal?",
        answer:
          "Yes, but choose a venue with an indoor or covered option for every function, heating, power backup and snow-cleared access roads. Many couples do a snow pre-wedding shoot instead and keep the wedding at a lower, easier-to-reach venue.",
      },
    ],
  },
  {
    slug: "himachali-wedding-rituals-photography-guide",
    title: "Himachali Wedding Rituals: A Photographer's Guide to Pahari Weddings",
    description:
      "Batna, Nati, the mama's role, the nath, pheras, vidaai and the dham — the key Himachali wedding rituals and how to plan photography around each one.",
    date: "2026-11-21",
    category: "Wedding",
    faqs: [
      {
        question: "What are the main rituals in a Himachali wedding?",
        answer:
          "Common rituals include roka and sagai, batna (haldi), mehendi and sangeet with Nati dancing, the baraat, milni and jaimala, lagan and pheras, kanyadaan, vidaai and the traditional dham feast. Customs vary by district and community.",
      },
      {
        question: "What is a Himachali dham?",
        answer:
          "Dham is the traditional Himachali wedding feast, cooked by botis and served on leaf plates to guests seated in rows. Dishes such as madra, rajmah, kadi, mash dal and meetha bhaat vary by region.",
      },
      {
        question: "Why is the mama important in a Himachali wedding?",
        answer:
          "In many Himachali families the bride's maternal uncle plays a central role, bringing gifts and clothes and often leading the bride during key rituals, which makes it one of the most emotional moments to photograph.",
      },
    ],
  },
  {
    slug: "pre-wedding-shoot-locations-mandi-sundernagar",
    title: "Pre-Wedding Shoot Locations in Mandi & Sundernagar",
    description:
      "Sundernagar Lake, Mandi's temple lanes, Rewalsar, Prashar Lake, Barot and Janjehli — the best pre-wedding shoot locations in Mandi district, from a Sundernagar studio.",
    date: "2026-11-21",
    category: "Pre-Wedding",
    faqs: [
      {
        question: "What are the best pre-wedding shoot locations near Mandi?",
        answer:
          "Rewalsar Lake, Prashar Lake, Mandi's temple lanes and Beas riverfront, Sundernagar Lake, Barot Valley and Janjehli are the most popular, each within a few hours of Mandi town.",
      },
      {
        question: "Is Prashar Lake good for a pre-wedding shoot?",
        answer:
          "Yes. Its meadows, pagoda-style temple and views of the Dhauladhar make it one of the most striking locations in Himachal. Visit between April–June or September–November; in winter it is often snowbound.",
      },
      {
        question: "Why choose Mandi over Manali for a pre-wedding shoot?",
        answer:
          "Mandi district has fewer crowds, lower travel costs for a Sundernagar-based team, and lakes, temples, rivers and meadows in a small area. It is also on the highway to Manali, so both can be combined.",
      },
    ],
  },
  {
    slug: "pre-wedding-shoot-locations-kasauli",
    title: "Best Pre-Wedding Shoot Locations in Kasauli",
    description:
      "Mall Road, Christ Church, Sunset Point, Gilbert Trail and heritage cottages — where to plan a pre-wedding shoot in Kasauli, just 1.5 hours from Chandigarh.",
    date: "2026-11-21",
    category: "Pre-Wedding",
    faqs: [
      {
        question: "Is Kasauli good for a pre-wedding shoot?",
        answer:
          "Yes. Kasauli is about 1.5 hours from Chandigarh and offers pine forests, colonial buildings, churches and valley views, making it ideal for a one-day pre-wedding shoot.",
      },
      {
        question: "Can you shoot at Monkey Point in Kasauli?",
        answer:
          "Monkey Point is inside an Air Force area with ID checks and photography restrictions, so it usually isn't suitable for a shoot. Check the current rules before planning around it.",
      },
      {
        question: "What is the best time for a pre-wedding shoot in Kasauli?",
        answer:
          "September to November gives the clearest skies and views, and March to May is pleasant and green.",
      },
    ],
  },
  {
    slug: "pre-wedding-shoot-locations-dalhousie-khajjiar",
    title: "Pre-Wedding Shoot in Dalhousie, Khajjiar & Chamba: Location Guide",
    description:
      "Khajjiar's meadow, Dalhousie's churches and forest roads, Kalatop and royal Chamba — where and when to plan a pre-wedding shoot in north-west Himachal.",
    date: "2026-11-21",
    category: "Pre-Wedding",
    faqs: [
      {
        question: "Is Khajjiar good for a pre-wedding shoot?",
        answer:
          "Yes. Khajjiar's wide meadow ringed by deodar forest is one of the most photogenic places in Himachal. Shoot at sunrise or the last hour before sunset, before and after the tourist crowds.",
      },
      {
        question: "How many days do you need for a Dalhousie pre-wedding shoot?",
        answer:
          "Two days on location works best: Khajjiar and Dalhousie on day one, and Chamba or Kalatop on day two.",
      },
    ],
  },
  {
    slug: "pre-wedding-shoot-locations-dharamshala-mcleodganj",
    title: "Pre-Wedding Shoot in Dharamshala, McLeodganj, Palampur & Bir",
    description:
      "Naddi, St. John in the Wilderness, monastery lanes, Palampur tea gardens and Bir Billing — the best pre-wedding shoot locations in the Kangra valley.",
    date: "2026-11-21",
    category: "Pre-Wedding",
    faqs: [
      {
        question: "What are the best pre-wedding shoot locations in Dharamshala?",
        answer:
          "Naddi viewpoint, St. John in the Wilderness church, the McLeodganj lanes, Bhagsu, tea gardens around Dharamshala and Palampur, and Bir Billing are the most popular choices.",
      },
      {
        question: "When is the best time for a pre-wedding shoot in Dharamshala?",
        answer:
          "October to mid-November gives the clearest views of the Dhauladhar range. March to May is lovely for fresh tea leaves and rhododendrons. Avoid the heavy monsoon from July to September.",
      },
    ],
  },
  {
    slug: "pre-wedding-shoot-spiti-lahaul-sissu",
    title: "Pre-Wedding Shoot in Spiti, Lahaul & Sissu: Planning Guide",
    description:
      "Sissu, Key Monastery, Chandratal, Langza and Chicham — how to plan a cold-desert pre-wedding shoot in Lahaul and Spiti, with seasons, permits and altitude tips.",
    date: "2026-11-21",
    category: "Pre-Wedding",
    faqs: [
      {
        question: "When can you do a pre-wedding shoot in Spiti?",
        answer:
          "June to early October, when the roads via Kunzum Pass and to Chandratal are usually open. Late September to early October is the best balance of clear skies and fewer travellers.",
      },
      {
        question: "Do Indians need a permit for Spiti or Sissu?",
        answer:
          "Indian citizens generally don't need a permit for Sissu or the usual Spiti circuit; foreign nationals need inner line permits for some border stretches. Rohtang Pass needs a vehicle permit. Rules change, so check before travelling.",
      },
      {
        question: "Can we do a Sissu pre-wedding shoot as a day trip from Manali?",
        answer:
          "Yes. Through the Atal Tunnel, Sissu is an easy day trip from Manali, and it can be combined with a golden hour session in Manali's orchards on the way back.",
      },
    ],
  },
  {
    slug: "pre-wedding-shoot-permits-drone-rules-himachal",
    title: "Pre-Wedding Shoot Permits & Drone Rules in Himachal",
    description:
      "Where you need permission for a pre-wedding shoot in Himachal — orchards, hotels, temples, heritage sites, railways, Rohtang — and how drone rules work for weddings.",
    date: "2026-11-21",
    category: "Planning",
    faqs: [
      {
        question: "Do you need a permit for a pre-wedding shoot in Himachal?",
        answer:
          "Not for a small, casual shoot in most public places. You do need permission for private property, many heritage and government sites, railway premises, protected forests and for flying a drone.",
      },
      {
        question: "Can you fly a drone at a wedding in Himachal?",
        answer:
          "Only if the drone and pilot comply with DGCA's Drone Rules, the location is in a permitted zone on the Digital Sky airspace map, and the venue allows it. Areas near Shimla, Kullu and Kangra airports and other sensitive sites are restricted.",
      },
    ],
  },
  {
    slug: "himachal-pre-wedding-shoot-itinerary-delhi-chandigarh",
    title: "Delhi/Chandigarh se Himachal Pre-Wedding Shoot: 2–4 Din ka Plan",
    description:
      "Kasauli, Shimla, Mandi–Manali aur Dharamshala ke liye 2–4 din ke ready itineraries — distance, timing aur planning tips ke saath.",
    date: "2026-11-21",
    category: "Pre-Wedding",
    faqs: [
      {
        question: "Chandigarh se sabse paas pre-wedding shoot location kaunsi hai?",
        answer:
          "Kasauli, jo Chandigarh se lagbhag 1.5–2 ghante door hai. Chail aur Shimla bhi 3–4 ghante mein pahunch sakte hain.",
      },
      {
        question: "Himachal pre-wedding shoot ke liye kitne din chahiye?",
        answer:
          "Kasauli ya Shimla ke liye 2 din kaafi hain. Mandi aur Manali dono cover karne hain toh 3–4 din plan karein.",
      },
    ],
  },
  {
    slug: "how-to-choose-destination-wedding-venue-himachal",
    title: "How to Choose a Destination Wedding Venue in Himachal: Checklist",
    description:
      "Access roads, weather backups, room blocks, power, noise rules and light — a practical checklist for choosing a wedding venue in Shimla, Manali, Kasauli or Dharamshala.",
    date: "2026-11-21",
    category: "Planning",
    faqs: [
      {
        question: "What should I check before booking a wedding venue in Himachal?",
        answer:
          "Check guest access in all weather, an indoor backup for every outdoor function, room block and minimum guarantees, power backup and heating, music time limits, outside vendor rules and where the sun sets for photos.",
      },
      {
        question: "Which place in Himachal is best for a destination wedding?",
        answer:
          "Shimla or Kasauli suit large guest lists with easy access, Manali suits intimate weddings with dramatic views, and Dharamshala or Palampur suit calm, cultural celebrations with mountain views.",
      },
    ],
  },
  {
    slug: "mehendi-haldi-photography-tips",
    title: "Mehendi & Haldi Photography Tips for Beautiful Photos",
    description:
      "Light, backdrop, timing, outfits and the moments not to miss — practical tips for getting beautiful mehendi and haldi photos at home or at a hill venue.",
    date: "2026-11-21",
    category: "Wedding",
    faqs: [
      {
        question: "What is the best time of day for haldi photos?",
        answer:
          "Mid-morning or late afternoon in open shade, such as a courtyard or veranda. Avoid harsh midday sun and dark indoor rooms.",
      },
      {
        question: "Can mehendi and haldi be on the same day?",
        answer:
          "Yes. Keep at least two hours between them for the bride to wash and change, set them up in different spots, and book your photographer for the full day.",
      },
    ],
  },
  {
    slug: "candid-vs-traditional-wedding-photography",
    title: "Candid vs Traditional Wedding Photography: Kaunsa Chunein?",
    description:
      "Candid, traditional aur cinematic photography mein kya farak hai, kaunsa kab kaam aata hai, aur Himachali wedding ke liye sahi mix kya hai.",
    date: "2026-11-21",
    category: "Wedding",
    faqs: [
      {
        question: "Candid aur traditional wedding photography mein kya farak hai?",
        answer:
          "Traditional photography mein planned, posed family aur stage photos hoti hain. Candid photography mein asli moments ko bina roke, naturally capture kiya jaata hai.",
      },
      {
        question: "Wedding ke liye candid ya traditional, kaunsa better hai?",
        answer:
          "Zyada tar weddings ke liye dono ka mix best hai: rituals aur emotions ke liye candid, aur family group photos ke liye ek fixed time pe traditional.",
      },
    ],
  },
  {
    slug: "when-to-book-wedding-photographer-himachal",
    title: "When to Book a Wedding Photographer in Himachal (Timeline)",
    description:
      "How far in advance to book a wedding photographer in Himachal Pradesh, the peak wedding seasons, and a month-by-month booking timeline.",
    date: "2026-11-21",
    category: "Planning",
    faqs: [
      {
        question: "How far in advance should I book a wedding photographer?",
        answer:
          "Book 6–9 months ahead for a peak-season wedding in Himachal (October–December and February–March) and 3–6 months ahead for off-season dates. Pre-wedding shoots usually need 2–3 months' notice.",
      },
      {
        question: "What is wedding season in Himachal Pradesh?",
        answer:
          "The peak is October to mid-December and late January to March. April to June is popular for destination weddings in higher places like Manali and Shimla.",
      },
    ],
  },
];