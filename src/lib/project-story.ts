import type { Project } from "@/data/projects";

const CATEGORY_INTRO: Record<string, string[]> = {
  Wedding: [
    "captures a full day of ceremony and celebration, shot as it happened rather than staged for the camera",
    "documents the rituals, the vows, and the quieter moments in between, following the day from start to finish",
    "follows the wedding from the first rituals to the final farewell, without interrupting the ceremony to pose it",
    "is a record of the wedding day itself — the rituals, the reactions, the in-between moments most albums skip",
    "was shot end to end on the wedding day, with the camera following the ceremony rather than directing it",
    "puts the rituals and the reactions around them side by side, rather than favouring one over the other",
  ],
  "Pre-Wedding": [
    "is a pre-wedding session built around the couple rather than a fixed backdrop",
    "captures the excitement before the wedding itself, shot on location rather than in a studio",
    "is a relaxed, direction-led session rather than a rushed one",
    "was shot as an outdoor session, with the couple given room to move rather than hold a pose",
    "is a set built for the couple's own story — save-the-dates, invitations, the anticipation before the wedding",
  ],
  "Mehendi & Haldi": [
    "covers the mehendi and haldi functions as they unfolded, shot documentary-style",
    "is a candid set from the mehendi and haldi celebrations",
    "follows the colour, music and mischief of the pre-wedding rituals as they happened",
    "was shot function-side, close to the mehendi and haldi rituals rather than staged afterward",
    "is a documentary record of the mehendi and haldi celebrations, shot as the family experienced them",
  ],
  Maternity: [
    "is a calm, unhurried maternity session shot at a relaxed pace",
    "is a portrait set built around comfort rather than spectacle",
    "favours quiet, natural moments over a fixed shot list",
    "was shot as an intimate, low-pressure session rather than a formal portrait sitting",
    "is a maternity set built around the parents' comfort first, spectacle second",
  ],
};

const CATEGORY_DETAIL: Record<string, string[]> = {
  Wedding: [
    "For weddings, the studio shoots candidly alongside posed portraits, staying close to the ceremony so the gallery reads as a record of the day rather than a performance for the lens.",
    "The approach for wedding coverage stays out of the way of the rituals — most of the set is candid, with posed portraits kept to the moments that call for them.",
    "Wedding coverage here is built around presence rather than direction: the team shoots the ceremony as it unfolds and adds posed portraits only where the couple wants them.",
    "The brief for wedding coverage is simple: stay close, stay unobtrusive, and let the rituals happen without pausing them for a photo.",
    "Most of a wedding gallery like this one is candid by design — the posed portraits are the exception, not the default, and are kept to a handful of key moments.",
    "The studio treats a wedding day as something to follow, not direct — posed portraits are worked in around the ceremony rather than the other way around.",
  ],
  "Pre-Wedding": [
    "The location was scouted in advance and the couple was given simple, natural direction rather than stiff posing, so the set favours movement and expression over formal composition.",
    "Pre-wedding sessions are shot with minimal direction — the couple is guided into natural movement rather than held in fixed poses, which is why the set feels unposed.",
    "The session leans on natural light and the couple's own comfort with each other, with direction kept light so the results don't look staged.",
    "For a pre-wedding shoot, the location does most of the work — the couple is placed in it and given movement to react to, rather than a fixed mark to stand on.",
    "Direction on a pre-wedding session stays minimal by design, so the couple's own dynamic comes through instead of a rehearsed pose.",
  ],
  "Mehendi & Haldi": [
    "The coverage leans on candid, close-in shots of mehendi patterns, haldi preparations, and family moments, shot without pausing the function to stage a photo.",
    "For mehendi and haldi functions, the camera stays close to the detail — hands, colour, and the family around the couple — without asking anyone to pose.",
    "This kind of coverage is documentary by design: the studio photographs the function as guests experience it, rather than directing a re-enactment afterward.",
    "Mehendi and haldi sets like this one are built from detail shots and reactions — patterns, colour, hands, and the people around the couple — caught rather than arranged.",
    "The studio's approach to mehendi and haldi coverage is to stay unobtrusive through the function and let the colour and mischief carry the gallery.",
  ],
  Maternity: [
    "The session favoured soft, natural light and simple direction, with partners and family included in the frame where it made sense rather than a rigid shot list.",
    "Maternity sessions here are shot unhurried and mostly indoors, with direction kept minimal so the portraits stay intimate rather than posed.",
    "The focus for a maternity set is comfort first — soft light, a slow pace, and portraits built around the moment rather than a checklist of poses.",
    "For maternity portraits, the studio favours a slower pace and softer light over a long list of set poses, so the session doesn't feel rushed.",
    "Family members are welcomed into a maternity session where couples want them in frame, rather than kept to a strict one-subject shot list.",
  ],
};

const LOCATION_TEXTURE: Record<"manali" | "studio" | "default", string> = {
  manali:
    "Shot in and around Manali, the set uses the mountain light and Himalayan backdrop the studio works with most often.",
  studio:
    "Shot as an indoor studio session rather than on location, the set is built around controlled, soft lighting.",
  default:
    "Shot on location in Himachal Pradesh, the set uses the hill-station light and terrain the studio is based in.",
};

function locationKey(location: string): "manali" | "studio" | "default" {
  const loc = location.toLowerCase();
  if (loc.startsWith("manali")) return "manali";
  if (loc.includes("studio")) return "studio";
  return "default";
}

export function getProjectStory(project: Project, allProjects: Project[]): string[] {
  const intros = CATEGORY_INTRO[project.category] ?? CATEGORY_INTRO.Wedding;
  const details = CATEGORY_DETAIL[project.category] ?? CATEGORY_DETAIL.Wedding;

  // Ordinal position among same-category projects — guarantees every project
  // in a category gets a distinct intro/detail pairing (no two pages read
  // identically), as long as each category's variant list is at least as
  // long as the number of projects in that category.
  const ordinal = allProjects
    .filter((p) => p.category === project.category)
    .findIndex((p) => p.slug === project.slug);

  const intro = intros[ordinal % intros.length];
  const detail = details[(ordinal + 2) % details.length];
  const texture = LOCATION_TEXTURE[locationKey(project.location)];

  return [
    `This gallery of ${project.count} photographs ${intro}. ${texture}`,
    detail,
  ];
}
