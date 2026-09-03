const BASE = "https://sbabhinav.com";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE}/#business`,
  name: "Stories by Abhinav",
  image: `${BASE}/og.jpg`,
  url: BASE,
  telephone: "+918261814200",
  email: "abhinavmec47@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sundarnagar",
    addressRegion: "Himachal Pradesh",
    addressCountry: "IN",
  },
  areaServed: [
    { "@type": "State", name: "Himachal Pradesh" },
    { "@type": "City", name: "Manali" },
    { "@type": "City", name: "Sundarnagar" },
  ],
  sameAs: [
    "https://www.instagram.com/s.b.abhinav",
    "https://www.wedmegood.com/profile/the-ruby-studio--25965298",
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
