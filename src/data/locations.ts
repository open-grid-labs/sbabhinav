export type Location = {
  slug: string; // route folder: src/app/<slug>/page.tsx
  group: "region" | "city" | "pre-wedding";
  label: string; // short place name used in cross-links and the footer
  heading: string; // H1 and page title
  // Galleries from src/data/projects.ts whose location contains `location`
  // (and whose category equals `category`, if set).
  projects: { location?: string; category?: string };
  galleryHeading: string; // shown when galleries match the filter above
  metaDescription: string;
  intro: string;
  highlights: { title: string; text: string }[];
  closing: string;
  relatedPosts: string[]; // blog slugs from src/data/blog.ts
};

// Each entry needs a matching route folder (Next can't do a partial dynamic
// segment like /wedding-photographer-[city]/). Sitemap, footer and structured
// data read from here.
export const locations: Location[] = [
  {
    slug: "wedding-photographer-himachal-pradesh",
    group: "region",
    label: "Himachal Pradesh",
    heading: "Wedding Photographer in Himachal Pradesh",
    projects: { location: "Himachal Pradesh" },
    galleryHeading: "Stories From Across Himachal",
    metaDescription:
      "Candid wedding and pre-wedding photographer in Himachal Pradesh, based in Sundernagar. Stories by Abhinav covers weddings in Manali, Shimla, Mandi, Dharamshala and beyond.",
    intro:
      "Stories by Abhinav is a Himachali wedding photography studio based in Sundernagar. From valley-town family weddings to destination celebrations in the hills, we photograph weddings, pre-wedding shoots and every function in between — all across Himachal Pradesh.",
    highlights: [
      {
        title: "Himachali, not just visiting",
        text: "We live and work here, so we know the roads, the seasons, the venues and the local wedding customs.",
      },
      {
        title: "Every function covered",
        text: "Mehendi, haldi, sangeet, baraat and pheras — candid, story-led coverage of the whole celebration.",
      },
      {
        title: "Mountains as the backdrop",
        text: "Pre-wedding and couple portraits planned around the best light, locations and weather windows of the season.",
      },
    ],
    closing:
      "Getting married anywhere in Himachal Pradesh? Tell us your dates and venue and we'll plan the coverage with you.",
    relatedPosts: [
      "wedding-photography-cost-himachal-pradesh-guide",
      "questions-to-ask-before-booking-wedding-photographer-himachal",
    ],
  },
  {
    slug: "wedding-photographer-manali",
    group: "city",
    label: "Manali",
    heading: "Wedding Photographer in Manali",
    projects: { location: "Manali" },
    galleryHeading: "Stories Shot in Manali",
    metaDescription:
      "Stories by Abhinav shoots weddings and pre-wedding sessions in Manali, Himachal Pradesh — real celebrations captured against the Himalayas.",
    intro:
      "Based in Himachal Pradesh, Stories by Abhinav has shot real weddings and celebrations in Manali against the backdrop of the Himalayas — candid coverage of ceremonies, rituals, and the mountain light in between.",
    highlights: [
      {
        title: "Destination weddings",
        text: "Full coverage for couples travelling to Manali to marry in the mountains — from the haldi to the pheras.",
      },
      {
        title: "Pre-wedding shoots",
        text: "Orchards, pine forests, river banks and snowline locations, planned around the best light of the day.",
      },
      {
        title: "Weather-ready planning",
        text: "Mountain weather changes fast. We scout backups and build buffer time into the schedule.",
      },
    ],
    closing:
      "Planning a wedding or pre-wedding shoot in Manali? We travel across Himachal Pradesh and are happy to plan around your dates and venue.",
    relatedPosts: [
      "best-pre-wedding-shoot-locations-manali",
      "manali-vs-shimla-destination-wedding",
    ],
  },
  {
    slug: "wedding-photographer-mandi",
    group: "city",
    label: "Mandi",
    heading: "Wedding Photographer in Mandi",
    projects: { location: "Mandi" },
    galleryHeading: "Stories Shot in Mandi",
    metaDescription:
      "Wedding photographer in Mandi, Himachal Pradesh. Candid wedding and pre-wedding photography by Stories by Abhinav, based nearby in Sundernagar.",
    intro:
      "Stories by Abhinav is based in Sundernagar, just down the road from Mandi. We cover weddings and pre-wedding shoots across Mandi town and the district — from riverside ceremonies along the Beas to celebrations in the hills around Chhoti Kashi.",
    highlights: [
      {
        title: "Close to home",
        text: "Mandi is in our home district, so recce visits and multi-day coverage are simple to arrange.",
      },
      {
        title: "Traditional Himachali weddings",
        text: "Unobtrusive, candid coverage that respects local rituals and gives every family moment its place.",
      },
      {
        title: "Pre-wedding locations",
        text: "Temple towns, the Beas valley and quieter hill lakes in the district make for varied, uncrowded backdrops.",
      },
    ],
    closing:
      "Planning a wedding or pre-wedding shoot in Mandi? Tell us about your dates and venue and we'll plan the rest with you.",
    relatedPosts: [
      "questions-to-ask-before-booking-wedding-photographer-himachal",
      "mountain-pre-wedding-shoot-outfit-guide",
    ],
  },
  {
    slug: "wedding-photographer-shimla",
    group: "city",
    label: "Shimla",
    heading: "Wedding Photographer in Shimla",
    projects: { location: "Shimla" },
    galleryHeading: "Stories Shot in Shimla",
    metaDescription:
      "Wedding and pre-wedding photographer in Shimla, Himachal Pradesh. Candid destination wedding coverage by Stories by Abhinav.",
    intro:
      "Shimla's colonial architecture, deodar forests and hilltop venues make it one of Himachal's favourite wedding destinations. Stories by Abhinav travels to Shimla and its surrounding hills for weddings and pre-wedding shoots.",
    highlights: [
      {
        title: "Destination weddings",
        text: "Multi-day coverage for hotel and resort weddings in and around Shimla, planned with your venue and planner.",
      },
      {
        title: "Pre-wedding shoots",
        text: "Heritage streets, forest trails and valley viewpoints — scheduled early or late to avoid the crowds.",
      },
      {
        title: "Travel handled",
        text: "We're based in Himachal, so getting our team to Shimla is straightforward and costs are clear upfront.",
      },
    ],
    closing:
      "Planning a wedding or pre-wedding shoot in Shimla? We travel across Himachal Pradesh and are happy to plan around your dates and venue.",
    relatedPosts: [
      "manali-vs-shimla-destination-wedding",
      "mountain-pre-wedding-shoot-outfit-guide",
    ],
  },
  {
    slug: "wedding-photographer-dharamshala",
    group: "city",
    label: "Dharamshala",
    heading: "Wedding Photographer in Dharamshala",
    projects: { location: "Dharamshala" },
    galleryHeading: "Stories Shot in Dharamshala",
    metaDescription:
      "Wedding and pre-wedding photographer in Dharamshala and McLeodganj, Himachal Pradesh. Candid destination wedding coverage by Stories by Abhinav.",
    intro:
      "With the Dhauladhar range behind it and the Kangra valley below, Dharamshala is one of Himachal's most striking places to get married. Stories by Abhinav travels to Dharamshala and McLeodganj for weddings and pre-wedding shoots.",
    highlights: [
      {
        title: "Destination weddings",
        text: "Hotel, resort and hillside weddings covered across every function, coordinated with your planner and venue.",
      },
      {
        title: "Mountain portraits",
        text: "Snow-capped Dhauladhar views, tea gardens and pine forests as the backdrop for your couple portraits.",
      },
      {
        title: "Planned around the light",
        text: "We schedule portraits for golden hour and plan backup spots for cloudy or rainy days.",
      },
    ],
    closing:
      "Planning a wedding or pre-wedding shoot in Dharamshala? Tell us your dates and we'll plan around your venue.",
    relatedPosts: [
      "mountain-pre-wedding-shoot-outfit-guide",
      "questions-to-ask-before-booking-wedding-photographer-himachal",
    ],
  },
  {
    slug: "pre-wedding-shoot-shimla",
    group: "pre-wedding",
    label: "Shimla",
    heading: "Pre-Wedding Shoot in Shimla",
    projects: { location: "Shimla", category: "Pre-Wedding" },
    galleryHeading: "Pre-Wedding Shoots in Shimla",
    metaDescription:
      "Plan a pre-wedding shoot in Shimla with Stories by Abhinav — heritage streets, deodar forests and valley views, timed around the light and the crowds.",
    intro:
      "Shimla mixes heritage architecture with forested hillsides, so one shoot can feel both classic and wild. We plan locations and timing so your pre-wedding photos feel unhurried, even in a busy hill town.",
    highlights: [
      {
        title: "Heritage & nature",
        text: "Colonial streets in the morning, forest trails and valley viewpoints for golden hour.",
      },
      {
        title: "Beat the crowds",
        text: "Early starts and quieter spots outside the town centre keep the frame — and the moment — yours.",
      },
      {
        title: "Outfit & season advice",
        text: "Help choosing outfits and colours that suit Shimla's light in each season.",
      },
    ],
    closing:
      "Thinking about a pre-wedding shoot in Shimla? Tell us your dates and the look you're after.",
    relatedPosts: [
      "manali-vs-shimla-destination-wedding",
      "mountain-pre-wedding-shoot-outfit-guide",
    ],
  },
];

export function getLocation(slug: string): Location {
  const location = locations.find((l) => l.slug === slug);
  if (!location) throw new Error(`Unknown location: ${slug}`);
  return location;
}
