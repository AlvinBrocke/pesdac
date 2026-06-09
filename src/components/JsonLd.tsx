const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://pesdacgh.org";

const schema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Prince Emmanuel Seventh-day Adventist Church",
  alternateName: "PESDAC",
  url: SITE_URL,
  image: `${SITE_URL}/church-visit.jpg`,
  description:
    "An English-speaking Seventh-day Adventist congregation in the heart of Ringway Estates, Osu, Accra, Ghana. Worshipping together since 1992.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "23 Osu Avenue, Ringway Estates",
    addressLocality: "Osu, Accra",
    addressRegion: "Greater Accra Region",
    addressCountry: "GH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 5.5557,
    longitude: -0.1769,
  },
  telephone: "+233302223720",
  email: "info@pesdacgh.org",
  foundingDate: "1992",
  sameAs: [
    "https://www.instagram.com/pesdac1/",
    "https://www.youtube.com/channel/UCiY1R5aOKZDTd1Xnwt5eQng",
    "https://www.facebook.com/pesdac1/",
    "https://twitter.com/pesdacgh",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "13:00",
      description: "Calvary Hour 8 AM · Sabbath School 9 AM · Main Service 10 AM",
    },
  ],
  hasMap: "https://www.google.com/maps/search/Prince+Emmanuel+SDA+Church+Osu+Accra",
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
