import { CardGrid, CheckList, CtaBand, FaqList, PageHero, Section, SitePage, Steps, CARD, TEXT_PRIMARY } from "@/components/site/PageBlocks";
import { PRODUCTS, type Product } from "@/lib/content/products";
import { whatsappLink } from "@/lib/site-contact";

export function ProductPage({ product }: { product: Product }) {
  const others = PRODUCTS.filter(item => item.path !== product.path);
  return (
    <SitePage>
      <PageHero eyebrow={`A product by Beta Corporation`} title={product.title} intro={product.intro} primary={{ label: "Request a demo", href: whatsappLink(product.demoMessage) }} secondary={{ label: "Contact us", href: "/contact" }} />
      <Section title="Everything You Need, In One Place">
        <CardGrid columns={4} items={product.features} />
      </Section>
      <Section tinted title="Up and Running in Three Steps">
        <Steps steps={product.steps} />
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className={`${CARD} p-8`}>
            <h2 className={`mb-6 text-2xl font-bold ${TEXT_PRIMARY}`}>Who it's for</h2>
            <CheckList items={product.audience} />
          </div>
          <div>
            <h2 className={`mb-6 text-2xl font-bold ${TEXT_PRIMARY}`}>Questions</h2>
            <FaqList faqs={product.faqs} />
          </div>
        </div>
      </Section>
      <Section tinted title="More Products">
        <CardGrid items={others.map(item => ({ title: item.name, text: item.tagline, icon: item.icon, href: item.path }))} />
      </Section>
      <CtaBand title={`See ${product.name} in Action`} text="Book a free walkthrough and we'll show you how it fits your organisation." message={product.demoMessage} />
    </SitePage>
  );
}
