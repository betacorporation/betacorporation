import { createFileRoute, notFound, type ErrorComponentProps } from "@tanstack/react-router";
import { CARD, CardGrid, CheckList, CtaBand, FaqList, IMPORTED_DOCUMENT, PageHero, Section, SitePage, Steps, TEXT_PRIMARY, pageHead } from "@/components/site/PageBlocks";
import { findService } from "@/lib/content/services";
import { whatsappLink } from "@/lib/site-contact";
import { MissingPage, PageError } from "@/components/site/RouteFallbacks";

export const Route = createFileRoute("/services/$category/$service")({
  loader: ({ params }) => {
    if (!findService(params.category, params.service)) throw notFound();
    return { category: params.category, service: params.service };
  },
  head: ({ loaderData }) => {
    const found = loaderData ? findService(loaderData.category, loaderData.service) : undefined;
    return found ? pageHead(`${found.service.title} | Beta Corporation`, found.service.intro) : { meta: [{ title: "Service unavailable | Beta Corporation" }, { name: "robots", content: "noindex" }] };
  },
  staticData: { importedDocument: IMPORTED_DOCUMENT },
  component: ServicePage,
  notFoundComponent: () => <MissingPage title="Service not found" text="We couldn't find that service." backHref="/services" backLabel="See all services" />,
  errorComponent: (props: ErrorComponentProps) => <PageError {...props} />,
});

function ServicePage() {
  const params = Route.useLoaderData();
  const { category, service } = findService(params.category, params.service)!;
  const others = category.services.filter(item => item.slug !== service.slug);
  return (
    <SitePage>
      <PageHero eyebrow={category.title} title={service.title} intro={service.intro} primary={{ label: "Get a Free Quote", href: whatsappLink(`Hello Beta Corporation, I'd like a quote for ${service.title}.`) }} secondary={{ label: `All ${category.shortTitle}`, href: `/services/${category.slug}` }} image={category.image} imageAlt={category.imageAlt} />
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className={`${CARD} p-8`}>
            <h2 className={`mb-6 text-2xl font-bold ${TEXT_PRIMARY}`}>What's included</h2>
            <CheckList items={service.includes} />
          </div>
          <div className={`${CARD} p-8`}>
            <h2 className={`mb-6 text-2xl font-bold ${TEXT_PRIMARY}`}>Ideal for</h2>
            <CheckList items={service.idealFor} />
          </div>
        </div>
      </Section>
      <Section tinted title="Our Process">
        <Steps steps={category.process} />
      </Section>
      <Section title="Frequently Asked Questions">
        <FaqList faqs={category.faqs} />
      </Section>
      <Section tinted title={`More ${category.shortTitle} Services`}>
        <CardGrid columns={4} items={others.map(item => ({ title: item.title, text: item.summary, icon: item.icon, href: `/services/${category.slug}/${item.slug}` }))} />
      </Section>
      <CtaBand title={`Ready to get started with ${service.title}?`} text="Send us a message and we'll reply with a free proposal and timeline." message={`Hello Beta Corporation, I'm interested in ${service.title}.`} />
    </SitePage>
  );
}
