import { createFileRoute, notFound, type ErrorComponentProps } from "@tanstack/react-router";
import { CardGrid, CtaBand, FaqList, IMPORTED_DOCUMENT, PageHero, Section, SitePage, SplitFeature, Steps, pageHead } from "@/components/site/PageBlocks";
import { findCategory } from "@/lib/content/services";
import { whatsappLink } from "@/lib/site-contact";
import { MissingPage, PageError } from "@/components/site/RouteFallbacks";

export const Route = createFileRoute("/services/$category/")({
  loader: ({ params }) => {
    const category = findCategory(params.category);
    if (!category) throw notFound();
    return { slug: category.slug };
  },
  head: ({ loaderData }) => {
    const category = loaderData ? findCategory(loaderData.slug) : undefined;
    return category ? pageHead(`${category.title} Services | Beta Corporation`, category.intro) : { meta: [{ title: "Service unavailable | Beta Corporation" }, { name: "robots", content: "noindex" }] };
  },
  staticData: { sitemap: true, importedDocument: IMPORTED_DOCUMENT },
  component: CategoryPage,
  notFoundComponent: () => <MissingPage title="Service not found" text="We couldn't find that service category." backHref="/services" backLabel="See all services" />,
  errorComponent: (props: ErrorComponentProps) => <PageError {...props} />,
});

function CategoryPage() {
  const { slug } = Route.useLoaderData();
  const category = findCategory(slug)!;
  return (
    <SitePage>
      <PageHero eyebrow={category.title} title={category.headline} intro={category.intro} primary={{ label: "Start Your Project", href: whatsappLink(`Hello Beta Corporation, I'm interested in your ${category.title} services.`) }} secondary={{ label: "View Portfolio", href: "/portfolio" }} />
      <Section title={`Our ${category.shortTitle} Expertise`}>
        <CardGrid items={category.services.map(service => ({ title: service.title, text: service.summary, icon: service.icon, href: `/services/${category.slug}/${service.slug}` }))} />
      </Section>
      <Section tinted>
        <SplitFeature title={`Why invest in ${category.shortTitle.toLowerCase()}?`} text="What you can expect when you work with us." points={category.benefits.map(benefit => `${benefit.title} — ${benefit.text}`)} image={category.image} imageAlt={category.imageAlt} />
      </Section>
      <Section title="How We Work" intro="A clear process, so you always know what happens next.">
        <Steps steps={category.process} />
      </Section>
      <Section tinted title="Common Questions">
        <FaqList faqs={category.faqs} />
      </Section>
      <CtaBand title="Let's Build Something Great" text={`Tell us what you need and we'll send a free, no-obligation proposal for your ${category.shortTitle.toLowerCase()} project.`} message={`Hello Beta Corporation, I'd like a proposal for ${category.title}.`} />
    </SitePage>
  );
}
