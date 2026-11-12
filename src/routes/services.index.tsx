import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CardGrid, CtaBand, IMPORTED_DOCUMENT, PageHero, Section, SitePage, TEXT_PRIMARY, TEXT_SOFT, BTN_PRIMARY, pageHead } from "@/components/site/PageBlocks";
import { EXTRA_SERVICES, SERVICE_CATEGORIES } from "@/lib/content/services";
import { WHATSAPP_URL } from "@/lib/site-contact";

export const Route = createFileRoute("/services/")({
  head: () => pageHead("Our Services | Beta Corporation", "Web design, eCommerce, digital marketing, branding and printing services from Beta Corporation in Kenya."),
  staticData: { sitemap: true, importedDocument: IMPORTED_DOCUMENT },
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SitePage>
      <PageHero eyebrow="What we do" title="Our Digital Services" intro="Innovative, results-driven digital solutions to build your brand, reach more customers and grow your business." primary={{ label: "Get a Free Quote", href: "/contact" }} secondary={{ label: "Chat on WhatsApp", href: WHATSAPP_URL }} />
      <Section>
        <div className="space-y-20">
          {SERVICE_CATEGORIES.map((category, index) => (
            <div key={category.slug} className="grid items-center gap-10 md:grid-cols-2">
              <div className={index % 2 ? "md:order-2" : ""}>
                <h2 className={`text-3xl font-bold ${TEXT_PRIMARY}`}>{category.title}</h2>
                <p className={`mt-3 mb-6 text-lg ${TEXT_SOFT}`}>{category.intro}</p>
                <a className={BTN_PRIMARY} href={`/services/${category.slug}`}>Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img className="h-auto w-full object-cover" src={category.image} alt={category.imageAlt} loading={index ? "lazy" : undefined} width="1024" height="768" />
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section tinted title="Explore Our Full Range of Services" intro="Every specialised service we offer, in one place.">
        <CardGrid columns={4} items={[
          ...SERVICE_CATEGORIES.flatMap(category => category.services.map(service => ({ title: service.title, text: service.summary, icon: service.icon, href: `/services/${category.slug}/${service.slug}`, linkLabel: "View details", meta: category.shortTitle }))),
          ...EXTRA_SERVICES.map(item => ({ ...item, linkLabel: "View details", meta: "More" })),
        ]} />
      </Section>
      <CtaBand title="Ready to Transform Your Digital Presence?" text="Tell us about your project and we'll recommend the right mix of services for your goals and budget." message="Hello Beta Corporation, I'd like to discuss a project." />
    </SitePage>
  );
}
