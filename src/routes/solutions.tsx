import { createFileRoute } from "@tanstack/react-router";
import { CardGrid, CtaBand, IMPORTED_DOCUMENT, PageHero, Section, SitePage, Steps, pageHead } from "@/components/site/PageBlocks";
import { SECTORS } from "@/lib/content/sectors";
import { whatsappLink } from "@/lib/site-contact";

export const Route = createFileRoute("/solutions")({
  head: () => pageHead("Solutions by Business Type | Beta Corporation", "Tailored website, marketing and branding solutions for churches, schools, clinics, hotels, shops and more across Kenya."),
  staticData: { importedDocument: IMPORTED_DOCUMENT },
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <SitePage>
      <PageHero eyebrow="Solutions" title="Solutions by Business Type" intro="Every business is different. Find the digital solution designed for the way your business works and the customers you serve." primary={{ label: "Get a Free Consultation", href: "/contact" }} secondary={{ label: "See Website Packages", href: "/websites" }} />
      <Section title="Find Your Solution">
        <CardGrid items={SECTORS.map(sector => ({ title: sector.name, text: sector.solution, icon: sector.icon, href: whatsappLink(`Hello Beta Corporation, I run a business in ${sector.name} and I'd like to discuss a solution.`), linkLabel: "Discuss my business" }))} />
      </Section>
      <Section tinted title="How We Tailor Your Solution">
        <Steps steps={[
          { title: "Understand your business", text: "We learn how you serve customers and where you're losing time or sales." },
          { title: "Recommend the right mix", text: "Website, marketing, branding or systems — only what will actually help." },
          { title: "Build & launch", text: "We deliver on an agreed timeline and train your team." },
          { title: "Grow together", text: "We track results and keep improving as your business grows." },
        ]} />
      </Section>
      <CtaBand title="Don't See Your Business Type?" text="We work with businesses of every kind. Tell us about yours and we'll design a solution around it." message="Hello Beta Corporation, I'd like a solution for my business." />
    </SitePage>
  );
}
