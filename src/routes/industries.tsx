import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { CARD, CtaBand, IMPORTED_DOCUMENT, PageHero, Section, SitePage, TEXT_PRIMARY, TEXT_SOFT, pageHead } from "@/components/site/PageBlocks";
import { SECTORS } from "@/lib/content/sectors";
import { whatsappLink } from "@/lib/site-contact";

export const Route = createFileRoute("/industries")({
  head: () => pageHead("Industries We Serve | Beta Corporation", "Website design, digital marketing and branding for hotels, real estate, schools, healthcare, retail, NGOs and more in Kenya."),
  staticData: { importedDocument: IMPORTED_DOCUMENT },
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <SitePage>
      <PageHero eyebrow="Industries" title="Industries We Serve" intro="From hotels to hospitals and startups to schools, we build digital solutions that fit how each industry wins customers." primary={{ label: "Get a Free Consultation", href: "/contact" }} />
      <Section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map(sector => {
            const Icon = sector.icon;
            return (
              <div key={sector.name} className={`${CARD} flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lg`}>
                <div className="flex items-center gap-3">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-lg bg-[hsl(var(--primary)/0.1)] ${TEXT_PRIMARY}`}><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <h2 className="text-lg font-semibold">{sector.name}</h2>
                </div>
                <p className={`mt-3 text-sm ${TEXT_SOFT}`}>Website design, digital marketing and branding built for {sector.name.toLowerCase()}.</p>
                <div className="mt-4 mb-5 flex flex-wrap gap-2">
                  {sector.needs.map(need => <span key={need} className={`rounded-full bg-[hsl(var(--primary)/0.08)] px-3 py-1 text-xs font-medium ${TEXT_PRIMARY}`}>{need}</span>)}
                </div>
                <a className={`mt-auto inline-flex items-center gap-1.5 text-sm font-semibold ${TEXT_PRIMARY} hover:underline`} href={whatsappLink(`Hello Beta Corporation, I'd like a digital strategy for my ${sector.name} business.`)} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" aria-hidden="true" />Ask about this industry</a>
              </div>
            );
          })}
        </div>
      </Section>
      <CtaBand title="Don't See Your Industry?" text="We work with businesses in every sector. Contact us and we'll create a strategy tailored to yours." message="Hello Beta Corporation, I'd like a digital strategy for my industry." />
    </SitePage>
  );
}
