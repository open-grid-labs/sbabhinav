export type Film = {
  youtubeId: string;
  couple: string;
  title: string;
  location?: string;
  project?: string; // slug in src/data/projects.ts — the film also shows on that gallery
};

// Shown on /services/wedding-films/ and, when `project` is set, on that
// portfolio page. Titles follow the YouTube uploads.
export const films: Film[] = [
  {
    youtubeId: "IUlT7wkh4IY",
    couple: "Sofia & Sameer",
    title: "Himachal Destination Wedding",
    location: "Manali, Himachal Pradesh",
    project: "sofia-sameer",
  },
  {
    youtubeId: "-Jnd1-s2wFE",
    couple: "Pratiksha & Sayam",
    title: "Wedding Highlight 2026",
    location: "Shimla, Himachal Pradesh",
    project: "pratiksha-sayam",
  },
  {
    youtubeId: "i93tgTPmOG0",
    couple: "Pratiksha & Sayam",
    title: "Pre-Wedding Film",
    location: "Shimla, Himachal Pradesh",
    project: "pratiksha-sayam",
  },
  {
    youtubeId: "HozipTFKYRg",
    couple: "Anuj & Amit",
    title: "Destination Cinematic Wedding Film",
    location: "Dharamshala, Himachal Pradesh",
    project: "amit-anuj",
  },
  {
    youtubeId: "Hk9W_XtvfO0",
    couple: "Vipasha & Nikhil",
    title: "Pre-Wedding Film",
    location: "Shimla, Himachal Pradesh",
    project: "vipasha-nikhil",
  },
  {
    youtubeId: "a2TFFYZw_7g",
    couple: "Neha & Aditya",
    title: "Wedding Film 2024",
  },
  {
    youtubeId: "-S1iElk-ApQ",
    couple: "Dr. Priyanka & Dr. Lucky",
    title: "Wedding Film",
  },
];
