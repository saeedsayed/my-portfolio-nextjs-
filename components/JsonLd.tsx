export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://eng-saeed.vercel.app/#webpage",
        url: "https://eng-saeed.vercel.app",
        name: "Saeed Sayed | Full Stack & Frontend Developer | مهندس برمجيات",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://eng-saeed.vercel.app/#website",
          url: "https://eng-saeed.vercel.app",
          name: "Saeed Portfolio | بورتفوليو سعيد سيد",
          description:
            "Portfolio of Saeed Sayed, Full Stack & Frontend Developer - بورتفوليو سعيد سيد مهندس برمجيات",
          inLanguage: ["en-US", "ar-EG"],
        },
        mainEntity: {
          "@type": "Person",
          "@id": "https://eng-saeed.vercel.app/#person",
          name: "Saeed Sayed",
          alternateName: ["Eng Saeed", "Saeed", "سعيد سيد", "مهندس سعيد"],
          jobTitle: "Full Stack Developer",
          description:
            "Full Stack & Frontend Developer with 4 years of experience specializing in React, Next.js, TypeScript, Node.js, and modern web architecture. مهندس ومطور برمجيات واجهات أمامية وفول ستاك.",
          url: "https://eng-saeed.vercel.app",
          image: "https://eng-saeed.vercel.app/images/me.png",
          sameAs: [
            "https://github.com/saeedsayed",
            "https://www.linkedin.com/in/saeed-developer/",
            "https://www.facebook.com/SAEIDSAUED",
            "https://www.instagram.com/saeed_sayed1",
          ],
          knowsAbout: [
            "React.js",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "PostgreSQL",
            "Redux",
            "Tailwind CSS",
            "REST APIs",
            "Web Development",
          ],
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              credentialCategory: "degree",
              name: "Management Information Systems (MIS) Degree",
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
