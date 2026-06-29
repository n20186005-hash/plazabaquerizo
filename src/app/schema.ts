export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "plazabaquerizo.com"}`;
  const lang = locale === "en" ? "en-US" : locale === "es" ? "es-EC" : "zh-CN";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "Park"],
        "name": locale === "en" ? "Plaza Rodolfo Baquerizo Moreno" : locale === "es" ? "Plaza Rodolfo Baquerizo Moreno" : "Plaza Rodolfo Baquerizo Moreno（罗多尔福·巴克里索·莫雷诺广场）",
        "description": locale === "en"
          ? "Plaza Rodolfo Baquerizo Moreno is a beautiful urban park in Guayaquil, Ecuador, featuring green spaces, walking paths, and recreational facilities. Open daily from 6:00 to 23:00."
          : locale === "es"
          ? "Plaza Rodolfo Baquerizo Moreno es un hermoso parque urbano en Guayaquil, Ecuador, con espacios verdes, senderos peatonales y instalaciones recreativas. Abierto diariamente de 6:00 a 23:00."
          : "Plaza Rodolfo Baquerizo Moreno 是厄瓜多尔瓜亚基尔的一个美丽城市公园，拥有绿化空间、步行道和娱乐设施。每日开放时间为6:00至23:00。",
        "url": `${baseUrl}/${locale}`,
        "touristType": ["Park", "UrbanGreenSpace", "RecreationalActivities", "Walking"],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -2.1968576,
          "longitude": -79.8956444
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "parkType",
            "value": "Urban park",
            "description": "Public urban park with green spaces and recreational facilities"
          },
          {
            "@type": "PropertyValue",
            "name": "openingHours",
            "value": "06:00-23:00",
            "description": "Open daily from 6:00 AM to 11:00 PM"
          },
          {
            "@type": "PropertyValue",
            "name": "location",
            "value": "Av. 9 de Octubre, Guayaquil",
            "description": "Located on Av. 9 de Octubre in central Guayaquil"
          },
          {
            "@type": "PropertyValue",
            "name": "rating",
            "value": "4.5/5",
            "description": "Rated 4.5 out of 5 with 8,126 Google reviews"
          }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "06:00",
          "closes": "23:00"
        },
        "isAccessibleForFree": true,
        "maximumAttendeeCapacity": 500,
        "publicAccess": true,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. 9 de Octubre",
          "addressLocality": "Guayaquil",
          "addressRegion": "Guayas",
          "addressCountry": "EC",
          "postalCode": "090313",
          "geo": "R473+G7G"
        },
        "telephone": "+59342524530",
        "subjectOf": [
          {
            "@type": "CreativeWork",
            "headline": locale === "en" ? "Plaza Rodolfo Baquerizo Moreno: Guayaquil's Urban Oasis" : locale === "es" ? "Plaza Rodolfo Baquerizo Moreno: Oasis Urbano de Guayaquil" : "Plaza Rodolfo Baquerizo Moreno：瓜亚基尔的城市绿洲",
            "about": "Guide to Plaza Rodolfo Baquerizo Moreno urban park in Guayaquil, featuring green spaces and recreational facilities"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${baseUrl}/${locale}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": locale === "en" ? "Guayaquil Parks" : locale === "es" ? "Parques de Guayaquil" : "瓜亚基尔公园",
            "item": `${baseUrl}/${locale}`
          }
        ]
      }
    ]
  };
}
