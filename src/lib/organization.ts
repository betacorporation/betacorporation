// Structured business details for search engines (Google uses these for the
// knowledge panel, AI Overviews and the logo shown next to search results).
import { BRAND, EMAIL, SOCIALS } from "@/lib/site-contact";
import { SITE_ORIGIN } from "@/lib/canonical";

export const TAGLINE = "Building the Future Through Technology";

export const SHORT_DESCRIPTION =
  "Beta Corporation is a Kenyan tech company building websites, custom software, and digital solutions that help individuals and businesses grow. Turning ideas into reality.";

export const FULL_DESCRIPTION =
  "Beta Corporation is a Kenyan technology and digital solutions company that helps individuals and businesses grow through innovation. " +
  "It offers website development (business sites, online shops, portfolios, landing pages, blogs, redesigns and maintenance), " +
  "software engineering (custom business software, management systems, mobile apps, web apps, automation and integrations) " +
  "and digital solutions (online presence setup, business email and domains, social media setup, digital marketing support and tech consulting). " +
  "Its mission is to turn ideas into reality with professional, reliable, user-friendly digital experiences.";

export const LOGO_URL = `${SITE_ORIGIN}/site-assets/beta-corporation-icon.png`;

export function organizationJsonLd() {
  const url = `${SITE_ORIGIN}/`;
  const sameAs = SOCIALS.flatMap(s => (s.href && s.network !== "Facebook" ? [s.href] : []));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}#organization`,
        name: BRAND,
        alternateName: "Beta Corp",
        url,
        logo: { "@type": "ImageObject", url: LOGO_URL, width: 512, height: 512 },
        image: LOGO_URL,
        slogan: TAGLINE,
        description: FULL_DESCRIPTION,
        email: EMAIL,
        telephone: "+254729683696",
        address: { "@type": "PostalAddress", addressCountry: "KE" },
        areaServed: "Kenya",
        knowsAbout: ["Website development", "Software engineering", "Mobile apps", "Web apps", "Business automation", "Digital marketing", "Tech consulting"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+254729683696",
          email: EMAIL,
          contactType: "customer service",
          areaServed: "KE",
          availableLanguage: ["English", "Swahili"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          },
        },
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url,
        name: BRAND,
        description: SHORT_DESCRIPTION,
        publisher: { "@id": `${url}#organization` },
      },
    ],
  };
}
