import { CONTACT_EMAIL } from "@/constants/contact";
import { locations } from "@/data/locations";

const BASE = "https://sbabhinav.com";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE}/#business`,
  name: "Stories by Abhinav",
  image: `${BASE}/og.jpg`,
  url: BASE,
  telephone: "+918261814200",
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sundernagar",
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "State", name: "Himachal Pradesh" },
    { "@type": "City", name: "Sundernagar" }, // home base; no page of its own yet
    ...locations
      .filter((l) => l.group === "city")
      .map((l) => ({ "@type": "City", name: l.label })),
  ],
  sameAs: [
    "https://www.instagram.com/s.b.abhinav",
    "https://www.wedmegood.com/profile/Stories-by-Abhinav-25965298",
  ],
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhinav",
  jobTitle: "Photographer",
  worksFor: { "@id": `${BASE}/#business` },
  award: "WedMeGood User's Choice Award",
  url: BASE,
  sameAs: ["https://www.instagram.com/s.b.abhinav"],
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}