import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Search } from "lucide-react";
import { BTN_WHATSAPP, CARD, CheckList, CtaBand, FaqList, IMPORTED_DOCUMENT, PageHero, Section, SitePage, TEXT_MUTED, TEXT_PRIMARY, pageHead } from "@/components/site/PageBlocks";
import { PACKAGE_INCLUDES, WEBSITE_GROUPS, WEBSITE_PACKAGES, formatKes, type WebsiteGroup } from "@/lib/content/websites";
import { whatsappLink } from "@/lib/site-contact";

export const Route = createFileRoute("/websites")({
  head: () => pageHead("Website Design Packages in Kenya | Beta Corporation", "Ready-made website packages for startups, shops, schools, hotels, clinics and more — fast, mobile-friendly and SEO-ready."),
  staticData: { sitemap: true, importedDocument: IMPORTED_DOCUMENT },
  component: WebsitesPage,
});

const TAB = "rounded-full px-4 py-2 text-sm font-medium transition-colors border";

function WebsitesPage() {
  const [group, setGroup] = useState<WebsiteGroup | "All">("All");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => WEBSITE_PACKAGES.filter(pkg => (group === "All" || pkg.group === group) && pkg.name.toLowerCase().includes(query.trim().toLowerCase())), [group, query]);
  return (
    <SitePage>
      <PageHero eyebrow="Website packages" title="Website Design & Development Packages" intro="Professional, fast and SEO-ready websites tailored to your type of business. Pick a package to get started, or ask us for a custom quote." />
      <Section>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Package categories">
            {(["All", ...WEBSITE_GROUPS] as const).map(name => (
              <button key={name} type="button" role="tab" aria-selected={group === name} onClick={() => setGroup(name)}
                className={`${TAB} ${group === name ? "!border-[hsl(var(--primary))] !bg-[hsl(var(--primary))] !text-[hsl(var(--primary-foreground))]" : "border-[hsl(var(--border))] bg-[hsl(var(--background))] hover:bg-[hsl(var(--primary)/0.05)]"}`}>{name}</button>
            ))}
          </div>
          <label className="relative block md:w-72">
            <span className="sr-only">Search packages</span>
            <Search className={`pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${TEXT_MUTED}`} aria-hidden="true" />
            <input className="h-10 w-full rounded-md border border-[hsl(var(--input))] bg-[hsl(var(--background))] pl-10 pr-3 text-sm" placeholder="Search packages…" value={query} onChange={event => setQuery(event.target.value)} />
          </label>
        </div>
        <p className={`mb-6 text-sm ${TEXT_MUTED}`}>{visible.length} package{visible.length === 1 ? "" : "s"}</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map(pkg => (
            <div key={pkg.name} className={`${CARD} flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-lg`}>
              <span className="text-xs font-semibold uppercase tracking-wider !text-[hsl(var(--accent))]">{pkg.group}</span>
              <h3 className="mt-2 text-lg font-semibold">{pkg.name}</h3>
              <p className={`mt-3 text-sm ${TEXT_MUTED}`}>From</p>
              <p className={`text-3xl font-bold ${TEXT_PRIMARY}`}>{formatKes(pkg.price)}</p>
              <CheckList className="mt-5 mb-6 flex-grow text-sm" items={PACKAGE_INCLUDES} />
              <a className={`${BTN_WHATSAPP} w-full`} href={whatsappLink(`Hello Beta Corporation, I'm interested in the "${pkg.name}" package (${formatKes(pkg.price)}).`)} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" aria-hidden="true" />Get this package</a>
            </div>
          ))}
        </div>
        {visible.length === 0 && <p className={`py-12 text-center ${TEXT_MUTED}`}>No packages match your search. Try another word or ask us for a custom quote.</p>}
      </Section>
      <Section tinted title="Package Questions">
        <FaqList faqs={[
          { q: "Are these prices fixed?", a: "They are starting prices. The final quote depends on the number of pages, features and content you need — we confirm everything in writing before work starts." },
          { q: "Is hosting and a domain included?", a: "We can bundle your domain, hosting and business email. Ask us for a package quote that includes them." },
          { q: "How do I pay?", a: "Typically a deposit to start and the balance at launch, via M-Pesa or bank transfer." },
          { q: "Can I update the website myself?", a: "Yes. We can set up an easy editor and show you how to change text, images and products." },
        ]} />
      </Section>
      <CtaBand title="Need Something Custom?" text="Don't see your type of business? We'll design a package around your exact needs." message="Hello Beta Corporation, I'd like a custom website quote." />
    </SitePage>
  );
}
